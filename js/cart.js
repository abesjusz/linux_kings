

// helper: ujednolicone pobieranie URL obrazka produktu
function productImageSrc(p){
  if(!p) return '';
  return p.image || p.mainImage || p.gridImage || (p.images && p.images[0]) || '';
}
// js/cart.js
// Uniwersalny, odporny moduł koszyka (localStorage) + popup "Dodano do koszyka"
// Używa localStorage key: 'LK_CART'
// Exports: window.Cart API (add/get/count/clear) i automatycznie aktualizuje badge .cart-count

(function(){
  const STORAGE_KEY = 'LK_CART';

  // --- Storage helpers
  function readCart(){
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    } catch(e) {
      console.warn('cart: read error', e);
      return [];
    }
  }
  function writeCart(cart){
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
      updateCartBadge();
      return true;
    } catch(e){
      console.error('cart: write error', e);
      return false;
    }
  }

  // --- cart API
  const Cart = {
    getAll(){
      return readCart();
    },
    getCount(){
      const c = readCart();
      return c.reduce((s,i)=> s + (Number(i.qty)||0), 0);
    },
    findItem(id, size){
      const c = readCart();
      return c.find(it => String(it.id) === String(id) && String(it.size||'') === String(size||''));
    },
    add(item){
      // item: {id, name, price, size, qty (default 1), image}
      if(!item || !item.id) throw new Error('Cart.add: missing id');
      const cart = readCart();
      const qty = item.qty ? Number(item.qty) : 1;
      // if same id+size exists -> increase qty
      const existing = cart.find(it => String(it.id) === String(item.id) && String(it.size||'') === String(item.size||''));
      if(existing){
        existing.qty = Number(existing.qty || 0) + qty;
      } else {
        cart.push({
          id: String(item.id),
          name: item.name || '',
          price: item.price !== undefined ? Number(item.price) : null,
          size: item.size || null,
          qty: qty,
          image: item.image || ''
        });
      }
      writeCart(cart);
      // show popup
      showAddedPopup(item);
      return true;
    },
    remove(id, size){
      let cart = readCart();
      cart = cart.filter(it => !(String(it.id) === String(id) && String(it.size||'') === String(size||'')));
      writeCart(cart);
    },
    clear(){
      writeCart([]);
    },
    setQty(id, size, qty){
      const cart = readCart();
      const it = cart.find(i => String(i.id) === String(id) && String(i.size||'')===String(size||''));
      if(it){ it.qty = Number(qty); writeCart(cart); }
    }
  };

  // expose globally
  window.Cart = Cart;

  // --- badge update (element .cart-count expected somewhere in header)
  function updateCartBadge(){
    const els = document.querySelectorAll('.cart-count');
    const count = Cart.getCount();
    els.forEach(e => {
      e.textContent = count > 0 ? String(count) : '';
      if(count > 0) e.style.display = ''; else e.style.display = 'none';
    });
  }

  // call once on load
  document.addEventListener('DOMContentLoaded', updateCartBadge);
  // also update on storage events (other tabs)
  window.addEventListener('storage', (ev)=>{
    if(ev.key === STORAGE_KEY) updateCartBadge();
  });




  // ZASTĄP obecną funkcję showAddedPopup tą wersją:
function showAddedPopup(item){
  const modal = document.getElementById('cart-added-modal');
  if(!modal){ console.warn('showAddedPopup: modal not found'); return; }

  // bezpieczny SVG placeholder (data URI)
  const PLACEHOLDER_DATAURI = 'data:image/svg+xml;utf8,' + encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400">
      <rect width="100%" height="100%" fill="#f3f6fb"/>
      <g fill="#cbd6e6" font-family="Arial, Helvetica, sans-serif" font-size="20">
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">Brak obrazu</text>
      </g>
    </svg>`
  );

  // preferujemy gridImage, potem image/images[0], potem placeholder
  function productImageSrc(p){
    if(!p) return PLACEHOLDER_DATAURI;
    const src = (p.gridImage && String(p.gridImage).trim()) ? p.gridImage :
                (p.image && String(p.image).trim()) ? p.image :
                (Array.isArray(p.images) && p.images[0] && String(p.images[0]).trim()) ? p.images[0] : '';
    return src ? src : PLACEHOLDER_DATAURI;
  }

  // ensure modal appended to body (avoid nesting issues)
  if(modal.parentElement !== document.body) document.body.appendChild(modal);

  // fill added item info (name, size, qty)
  const nameEl = modal.querySelector('.added-name');
  const qtyEl  = modal.querySelector('.added-qty');
  const sizeEl = modal.querySelector('.added-size');
  const imgEl  = modal.querySelector('.added-img');

  if(nameEl) nameEl.textContent = item && (item.name || item.type) ? (item.name || item.type) : '';
  if(qtyEl)  qtyEl.textContent  = item && item.qty ? ('Ilość: ' + item.qty) : '';
  if(sizeEl) sizeEl.textContent = item && item.size ? ('Rozmiar: ' + item.size) : '';

  if(imgEl){
    imgEl.style.opacity = '0';
    imgEl.onerror = null; imgEl.onload = null;
    const src = productImageSrc(item);
    imgEl.onload = function onLoad(){ imgEl.removeEventListener('load', onLoad); imgEl.setAttribute('data-loaded','1'); imgEl.style.opacity='1'; imgEl.onerror = null; };
    imgEl.onerror = function onErr(){ imgEl.onerror = null; if(String(imgEl.src).indexOf('data:image') === -1) imgEl.src = PLACEHOLDER_DATAURI; else { imgEl.setAttribute('data-loaded','1'); imgEl.style.opacity='1'; } };
    imgEl.src = src;
    imgEl.alt = (item && (item.name || item.type)) ? (item.name || item.type) : 'Produkt';
    if(imgEl.complete && imgEl.naturalWidth !== 0){ imgEl.setAttribute('data-loaded','1'); imgEl.style.opacity='1'; imgEl.onerror = null; imgEl.onload = null; }
  }

  // prepare rec-track
  const recTrack = modal.querySelector('.rec-track');
  if(!recTrack){ console.warn('rec-track not found'); return; }
  recTrack.innerHTML = ''; recTrack.scrollLeft = 0;

  // build picks
  let picks = [];
  if(Array.isArray(window.PRODUCTS)){
    const all = window.PRODUCTS.filter(p => String(p.id) !== String(item ? item.id : ''));
    let base = item ? window.PRODUCTS.find(x => String(x.id) === String(item.id)) : null;
    if(base && base.category) picks = all.filter(x => x.category === base.category);
    if(!picks || picks.length === 0){
      picks = all.slice();
      for(let i = picks.length - 1; i > 0; i--){ const j = Math.floor(Math.random()*(i+1)); [picks[i], picks[j]] = [picks[j], picks[i]]; }
    }
  }

  const MAX_RECS = 12;
  picks.slice(0, MAX_RECS).forEach(p => {
    const a = document.createElement('a');
    a.className = 'rec-item';
    a.href = 'product.html?id=' + encodeURIComponent(p.id);
    a.setAttribute('role','listitem');

    const src = productImageSrc(p);
    // show p.type as title (fallback to p.name)
    const title = p.type || p.name || '';
    const priceText = p.price ? (p.price + ' PLN') : '';

    a.innerHTML = `
      <img src="${src}" alt="${title}" loading="lazy">
      <div style="text-align:center">
        <div style="font-weight:600;font-size:0.95rem">${title}</div>
        <div style="color:#666;font-size:0.95rem">${priceText}</div>
      </div>
    `;

    const iEl = a.querySelector('img');
    if(iEl){
      iEl.style.opacity = '0';
      iEl.onerror = null; iEl.onload = null;
      iEl.addEventListener('load', function onL(){ iEl.setAttribute('data-loaded','1'); iEl.style.opacity='1'; iEl.removeEventListener('load', onL); });
      iEl.addEventListener('error', function onE(){ iEl.removeEventListener('error', onE); if(String(iEl.src).indexOf('data:image') === -1) iEl.src = PLACEHOLDER_DATAURI; else { iEl.setAttribute('data-loaded','1'); iEl.style.opacity='1'; } });
      if(iEl.complete && iEl.naturalWidth !== 0){ iEl.setAttribute('data-loaded','1'); iEl.style.opacity='1'; }
    }

    recTrack.appendChild(a);
  });

  // show modal, block scroll
  modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); document.documentElement.classList.add('modal-open');

  // prev/next handlers
  const prevBtn = modal.querySelector('.rec-prev');
  const nextBtn = modal.querySelector('.rec-next');
  function getGap(el){ try{ return parseFloat(getComputedStyle(el).gap) || 12; }catch(e){ return 12; } }
  function scrollByOne(dir){ const card = recTrack.querySelector('.rec-item'); if(!card) return; const gap = getGap(recTrack); const step = card.offsetWidth + gap; recTrack.scrollBy({ left: step * dir, behavior: 'smooth' }); }
  if(prevBtn) prevBtn.onclick = ()=> scrollByOne(-1);
  if(nextBtn) nextBtn.onclick = ()=> scrollByOne(1);

  // closing
  const closeEls = modal.querySelectorAll('[data-modal-close], .modal-close');
  closeEls.forEach(el => el.onclick = (e)=>{ e && e.preventDefault(); modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); document.documentElement.classList.remove('modal-open'); if(autoCloseTimer){ clearTimeout(autoCloseTimer); autoCloseTimer = null;} });

  // auto-close + pause on hover
  let autoCloseTimer = setTimeout(()=>{ if(modal.classList.contains('open')){ modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); document.documentElement.classList.remove('modal-open'); } }, 6500);
  modal.addEventListener('mouseenter', ()=> { if(autoCloseTimer){ clearTimeout(autoCloseTimer); autoCloseTimer = null; } });
  modal.addEventListener('mouseleave', ()=> { if(autoCloseTimer) clearTimeout(autoCloseTimer); autoCloseTimer = setTimeout(()=>{ if(modal.classList.contains('open')){ modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); document.documentElement.classList.remove('modal-open'); } }, 6500); });

  // focus without scroll
  try{ const focusable = modal.querySelector('.modal-close') || modal.querySelector('a,button'); if(focusable && typeof focusable.focus === 'function') focusable.focus({ preventScroll: true }); }catch(e){ try{ (modal.querySelector('.modal-close')||modal.querySelector('a,button')).focus(); }catch(_){} }

  // ensure rec-item clicks navigate and close modal
  recTrack.querySelectorAll('.rec-item').forEach(a => a.addEventListener('click', ()=>{ modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); document.documentElement.classList.remove('modal-open'); }));

  return true;
}





  // auto-close popup after X sec (optional)
  (function autoClose(){
    const modal = document.getElementById('cart-added-modal');
    if(!modal) return;
    modal.addEventListener('click', ()=> {
      // if click outside content, close
      // handled above
    });
    // close after 6s when opened
    const obs = new MutationObserver(muts => {
      muts.forEach(m => {
        if(m.attributeName === 'class'){
          if(modal.classList.contains('open')){
            setTimeout(()=> modal.classList.remove('open'), 6000);
          }
        }
      });
    });
    obs.observe(modal, { attributes: true });
  })();

  // expose small helper to programmatically open popup for testing
  window.CartShowPopupFor = showAddedPopup;

})();