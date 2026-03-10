
// helper: ujednolicone pobieranie URL obrazka produktu
function productImageSrc(p){
  if(!p) return '';
  return p.image || p.mainImage || p.gridImage || (p.images && p.images[0]) || '';
}


(async function(){
  async function tryFetch(path){
    try {
      const r = await fetch(path, {cache: "no-store"});
      if(!r.ok) throw new Error('not ok ' + r.status);
      const data = await r.json();
      return data;
    } catch(e){
      return null;
    }
  }

  let products = await tryFetch('./products.json');
  if(!products) {
    
    try {
      const pathParts = window.location.pathname.split('/').filter(Boolean);
      if(pathParts.length > 0) {
        const repo = pathParts[0];
        products = await tryFetch(`/${repo}/products.json`);
      }
    } catch(e){}
  }

  if(products) {
    window.PRODUCTS = products;
    console.log('Products loaded from products.json, count=', products.length);
  } else {
    if(!window.PRODUCTS) window.PRODUCTS = [];
    console.log('No products.json found — using built-in window.PRODUCTS (fallback).');
  }

  
  if(typeof window.renderProducts === 'function') {
    try { window.renderProducts(window.PRODUCTS); } catch(e){ console.error(e); }
  }
})();


// product-page-sizes.js  — wklej do pliku który już renderuje produkt
document.addEventListener('DOMContentLoaded', () => {
  // zakładam, że masz funkcję getProductFromQuery() lub podobną
  const product = window.CURRENT_PRODUCT || getProductFromQuery(); // dostosuj do Twojego kodu
  if(!product) return;

  const variantsWrap = document.getElementById('product-variants');
  const addBtn = document.getElementById('addToCartBtn');
  const msg = document.getElementById('product-msg');

  function createSizeSelect(sizes){
    const label = document.createElement('label');
    label.textContent = 'Wybierz rozmiar';
    label.setAttribute('for','product-size');
    const select = document.createElement('select');
    select.id = 'product-size';
    select.name = 'size';
    select.innerHTML = '<option value="">-- Wybierz --</option>';
    sizes.forEach(s=>{
      const opt = document.createElement('option');
      opt.value = s;
      opt.textContent = s;
      select.appendChild(opt);
    });
    const container = document.createElement('div');
    container.appendChild(label);
    container.appendChild(select);
    return container;
  }

  function createSizeButtons(sizes){
    const wrapper = document.createElement('div');
    wrapper.className = 'size-buttons';
    sizes.forEach(s=>{
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'size-btn';
      btn.dataset.size = s;
      btn.textContent = s;
      btn.addEventListener('click', ()=> {
        // mark active
        wrapper.querySelectorAll('.size-btn').forEach(b=>b.classList.remove('active'));
        btn.classList.add('active');
        msg.textContent = '';
      });
      wrapper.appendChild(btn);
    });
    return wrapper;
  }

  // RENDER: jeśli product.sizes istnieje i jest tablicą
  if(Array.isArray(product.sizes) && product.sizes.length){
    // wybierz formę: select lub buttons — tu używam select dla prostoty
    const sizeEl = createSizeSelect(product.sizes);
    // ewentualnie: const sizeEl = createSizeButtons(product.sizes);
    variantsWrap.innerHTML = '';
    variantsWrap.appendChild(sizeEl);

    // wymuszenie wyboru (walidacja przy dodawaniu)
    addBtn.addEventListener('click', (e)=>{
      e.preventDefault();
      const select = document.getElementById('product-size');
      let chosen = null;
      if(select) chosen = select.value;
      // jeśli używasz przycisków:
      if(!chosen){
        const active = variantsWrap.querySelector('.size-btn.active');
        if(active) chosen = active.dataset.size;
      }

      if(!chosen){
        msg.textContent = 'Wybierz rozmiar przed dodaniem do koszyka.';
        return;
      }
      // wszystko ok — dodaj do koszyka z rozmiarem
      addToCart(product, chosen);
    });

  } else {
    // brak rozmiarów — po prostu dodawaj do koszyka bez wyboru
    variantsWrap.innerHTML = '<small>Produkt w jednym rozmiarze</small>';
    addBtn.addEventListener('click',(e)=>{
      e.preventDefault();
      addToCart(product, null);
    });
  }

  // helper: wspólna funkcja do dodawania do koszyka (dostosuj do Twojego cart.js)
  function addToCart(product, size){
    // przykładowy obiekt dodawany do koszyka — dostosuj klucze do twojego systemu
    const item = {
      id: product.id,
      name: product.name,
      price: product.price,
      size: size,                // <--- nowo dodane pole
      qty: 1,
      image: (product.images && product.images[0]) || ''
    };

    // jeśli masz funkcję window.addToCart lub cart.add
    if(typeof window.addToCart === 'function'){
      window.addToCart(item);
    } else if (typeof window.cartAdd === 'function') {
      window.cartAdd(item);
    } else {
      // prosty fallback: zapisz w localStorage
      const cart = JSON.parse(localStorage.getItem('CART') || '[]');
      cart.push(item);
      localStorage.setItem('CART', JSON.stringify(cart));
      // i wyświetl komunikat
      msg.style.color = 'green';
      msg.textContent = 'Dodano do koszyka';
      setTimeout(()=> msg.textContent = '', 2000);
    }
  }

});

