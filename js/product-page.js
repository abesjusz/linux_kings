
// helper: ujednolicone pobieranie URL obrazka produktu
function productImageSrc(p){
  if(!p) return '';
  return p.image || p.mainImage || p.gridImage || (p.images && p.images[0]) || '';
}

// js/product-page.js
// Bezpieczny renderer produktu + wybór rozmiaru + addToCart (dopasuj nazwy funkcji addToCart jeśli masz własne)

(function(){
  // helper: wait until window.PRODUCTS is available (timeout 5s)
  function waitForProducts(timeout = 5000){
    return new Promise((resolve, reject) => {
      if(window.PRODUCTS && window.PRODUCTS.length) return resolve(window.PRODUCTS);
      const start = Date.now();
      const t = setInterval(()=>{
        if(window.PRODUCTS && window.PRODUCTS.length){ clearInterval(t); return resolve(window.PRODUCTS); }
        if(Date.now() - start > timeout){ clearInterval(t); return reject(new Error('PRODUCTS not found')); }
      }, 120);
    });
  }

  function getProductFromUrl(){
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id') || params.get('product') || params.get('slug');
    if(!id) return null;
    const prod = (window.PRODUCTS || []).find(p => String(p.id) === String(id) || String(p.slug) === String(id) || slugify(p.name) === slugify(id));
    return prod || null;
  }

  function slugify(s){
    if(!s) return '';
    return String(s).toLowerCase().replace(/\s+/g,'-').replace(/[^a-z0-9\-]/g,'');
  }

  function createSizeSelect(sizes){
    const wrap = document.createElement('div');
    const label = document.createElement('label');
    label.setAttribute('for','product-size');
    label.textContent = 'Wybierz rozmiar';
    label.style.display = 'block';
    label.style.marginBottom = '6px';
    const sel = document.createElement('select');
    sel.id = 'product-size';
    sel.name = 'size';
    sel.style.padding = '8px';
    sel.style.borderRadius = '8px';
    sel.style.border = '1px solid #e6e9ef';
    const empty = document.createElement('option');
    empty.value = '';
    empty.textContent = '---wybierz---';
    sel.appendChild(empty);
    sizes.forEach(sz=>{
      const o = document.createElement('option');
      o.value = sz;
      o.textContent = sz;
      sel.appendChild(o);
    });
    wrap.appendChild(label);
    wrap.appendChild(sel);
    return wrap;
  }

  function createSizeButtons(sizes){
    const wrap = document.createElement('div');
    wrap.className = 'size-buttons';
    sizes.forEach(sz=>{
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'size-btn';
      b.dataset.size = sz;
      b.textContent = sz;
      b.style.marginRight = '8px';
      b.addEventListener('click', ()=> {
        wrap.querySelectorAll('.size-btn').forEach(x=>x.classList.remove('active'));
        b.classList.add('active');
        const msg = document.getElementById('product-msg'); if(msg) msg.textContent = '';
      });
      wrap.appendChild(b);
    });
    return wrap;
  }

  function safeSetText(selector, text){
    const el = document.querySelector(selector);
    if(el) el.textContent = text || '';
  }

  function renderSizeTable(product){
    const tbl = product.sizeTable;
    const hdr = document.getElementById('sizeTableHeader');
    const body = document.getElementById('sizeTableBody');
    const note = document.getElementById('sizeTableNote');
    if(tbl && tbl.columns && tbl.rows){
      if(hdr) hdr.innerHTML = '<tr>' + tbl.columns.map(c=>`<th style="text-align:left;padding:6px;border-bottom:1px solid #eee">${c}</th>`).join('') + '</tr>';
      if(body) body.innerHTML = tbl.rows.map(r => {
        const rowHead = `<tr><td style="padding:6px;border-bottom:1px solid #fafafa">${r.label}</td>`;
        const rowVals = (r.values || []).map(v => `<td style="padding:6px;border-bottom:1px solid #fafafa">${v}</td>`).join('');
        return rowHead + rowVals + `</tr>`;
      }).join('');
      if(note) note.textContent = tbl.note || '';
    } else {
      if(hdr) hdr.innerHTML = '';
      if(body) body.innerHTML = '';
      if(note) note.textContent = '';
    }
  }

  function addToCartInternal(item){
    // Jeśli masz własną globalną funkcję addToCart, użyj jej
    if(typeof window.addToCart === 'function'){
      window.addToCart(item);
      return;
    }
    // Inny możliwy alias
    if(typeof window.cartAdd === 'function'){
      window.cartAdd(item);
      return;
    }
    // Fallback: simple localStorage cart
    try {
      const key = 'LK_CART';
      const cart = JSON.parse(localStorage.getItem(key) || '[]');
      cart.push(item);
      localStorage.setItem(key, JSON.stringify(cart));
      const msg = document.getElementById('product-msg'); if(msg){ msg.style.color = 'green'; msg.textContent = 'Dodano do koszyka'; setTimeout(()=> msg.textContent = '', 2000); }
    } catch(e){
      console.error('addToCart fallback error', e);
    }
  }

  // główna logika
  async function init(){
    try {
      await waitForProducts(4000);
    } catch(e) {
      console.warn('PRODUCTS not loaded in time - product page cannot render sizes.', e);
    }
    const product = getProductFromUrl();
    if(!product){
      console.warn('Product not found by id in URL');
      return;
    }

    // bezpieczne ustawienia tytułu/ceny
    safeSetText('.product-title', product.name || product.title || '');
    safeSetText('.product-price', (product.price !== undefined) ? (product.price + ' PLN') : '');

    // render size table if present
    renderSizeTable(product);

    // render sizes area
    const variantsWrap = document.getElementById('product-variants');
    if(variantsWrap){
      variantsWrap.innerHTML = '';
      if(Array.isArray(product.sizes) && product.sizes.length){
        // wybierz typ widgetu: select (domyślnie)
        const widget = createSizeSelect(product.sizes);
        variantsWrap.appendChild(widget);
        // optionally also buttons: const buttons = createSizeButtons(product.sizes); variantsWrap.appendChild(buttons);
      } else {
        // brak rozmiarow - informacja
        const p = document.createElement('div');
        p.textContent = product.sizes === undefined ? 'Ten produkt nie ma wariantów rozmiarowych.' : 'Brak rozmiarów';
        p.style.color = '#666';
        variantsWrap.appendChild(p);
      }
    }

    // addToCart handler (dodaj rozmiar)
    const addBtn = document.getElementById('addToCartBtn');
    if(addBtn){
      addBtn.addEventListener('click', (ev)=>{
        ev.preventDefault();
        const msgEl = document.getElementById('product-msg');
        // wybierz rozmiar
        let chosen = null;
        const sel = document.getElementById('product-size');
        if(sel) chosen = sel.value || null;
        // check buttons
        if(!chosen){
          const act = document.querySelector('.size-buttons .size-btn.active');
          if(act) chosen = act.dataset.size;
        }

        if(Array.isArray(product.sizes) && product.sizes.length && !chosen){
          if(msgEl){ msgEl.style.color = 'crimson'; msgEl.textContent = 'Wybierz rozmiar przed dodaniem do koszyka.'; }
          return;
        }

        const item = {
          id: product.id,
          name: product.name || product.title,
          price: product.price,
          size: chosen,
          qty: 1,
          image: (product.images && product.images[0]) || ''
        };
        addToCartInternal(item);
      });
    }
  }

  // start
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();