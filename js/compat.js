// js/compat.js
// Mały shim/kompatybilność: mapowanie na twoje stare API (getCart, addToCart)
// Wklej ten plik i załaduj PRZED script.js

(function(){
  // jeśli nie masz window.Cart (nasz nowy moduł), zrób prosty fallback
  if(!window.Cart){
    window.Cart = {
      _key: 'LK_CART',
      _read(){ try{ return JSON.parse(localStorage.getItem(this._key)||'[]'); }catch(e){ return []; } },
      _write(arr){ try{ localStorage.setItem(this._key, JSON.stringify(arr)); return true;}catch(e){return false} },
      add(item){
        const cart = this._read();
        const qty = item.qty ? Number(item.qty) : 1;
        const found = cart.find(i => String(i.id) === String(item.id) && String(i.size||'') === String(item.size||''));
        if(found) found.qty = (Number(found.qty)||0) + qty;
        else cart.push({ id:String(item.id), name:item.name||'', price: item.price||null, size:item.size||null, qty: qty, image: item.image||'' });
        this._write(cart);
        // try to update UI badge if present
        document.dispatchEvent(new CustomEvent('cart:updated', { detail: { count: cart.reduce((s,i)=> s + (Number(i.qty)||0), 0) } }));
        return true;
      },
      getAll(){ return this._read(); },
      getCount(){ return this._read().reduce((s,i)=> s + (Number(i.qty)||0), 0); }
    };
  }

  // Provide global helper names older scripts might expect
  if(typeof window.getCart === 'undefined'){
    window.getCart = function(){ return (window.Cart && typeof window.Cart.getAll === 'function') ? window.Cart.getAll() : []; };
  }
  if(typeof window.getCartCount === 'undefined'){
    window.getCartCount = function(){ return (window.Cart && typeof window.Cart.getCount === 'function') ? window.Cart.getCount() : (getCart()||[]).reduce((s,i)=> s + (Number(i.qty)||0),0); };
  }
  if(typeof window.addToCart === 'undefined'){
    window.addToCart = function(item){ if(window.Cart && typeof window.Cart.add === 'function') return window.Cart.add(item); throw new Error('No cart API'); };
  }

  // small helper to avoid "null.querySelector" errors
  window.safeQuery = function(selector, parent){
    try {
      const root = parent || document;
      if(!root) return null;
      if(typeof root.querySelector !== 'function') return null;
      return root.querySelector(selector);
    } catch(e){
      return null;
    }
  };

  // auto update any visible .cart-count elements when storage changes or on load
  function updateBadge(){
    const els = document.querySelectorAll('.cart-count');
    const c = window.getCartCount ? window.getCartCount() : (getCart()||[]).length;
    els.forEach(e=> { e.textContent = c>0 ? String(c) : ''; e.style.display = c>0 ? '' : 'none'; });
  }
  document.addEventListener('DOMContentLoaded', updateBadge);
  window.addEventListener('storage', (ev)=> { if(ev.key === 'LK_CART') updateBadge(); });
  document.addEventListener('cart:updated', updateBadge);
  window.removeFromCart = function(id, size){
    if(window.Cart && typeof window.Cart.remove === 'function'){
      window.Cart.remove(id, size);
    }
  };

})();