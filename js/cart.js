// — cart.js —

// 1) Pobierz koszyk, preferując localStorage, a jeśli nie ma – sessionStorage
function getCart() {
  const ls = localStorage.getItem('CART');
  if (ls) {
    try {
      return JSON.parse(ls);
    } catch {
      localStorage.removeItem('CART');
    }
  }
  const ss = sessionStorage.getItem('CART');
  if (ss) {
    try {
      return JSON.parse(ss);
    } catch {
      sessionStorage.removeItem('CART');
    }
  }
  return [];
}

// 2) Zapisz koszyk – spróbuj localStorage, w razie przepełnienia fallback na sessionStorage
function saveCart(cart) {
  const str = JSON.stringify(cart);
  // Najpierw do localStorage
  try {
    localStorage.setItem('CART', str);
    // jeśli się udało, usuń ewentualny fallback
    sessionStorage.removeItem('CART');
  } catch (e) {
    // przepełniony localStorage?
    if (e.name === 'QuotaExceededError' || e.code === 22) {
      console.warn('Brak miejsca w localStorage, zapisuję w sessionStorage zamiast tego.');
      try {
        sessionStorage.setItem('CART', str);
      } catch {
        alert('Nie udało się zapisać koszyka – pamięć przeglądarki pełna.');
      }
    } else {
      throw e;
    }
  }
}

// 3) Dodaj / zwiększ produkt
function addToCart(id) {
  const cart = getCart();
  const item = cart.find(x => x.id === id);
  if (item) {
    item.qty++;
  } else {
    cart.push({ id, qty: 1 });
  }
  saveCart(cart);
}

// 4) Usuń produkt
function removeFromCart(id) {
  let cart = getCart();
  cart = cart.filter(x => x.id !== id);
  saveCart(cart);
}

// 5) Ustaw ilość (qty<=0 → usuń)
function updateQuantity(id, qty) {
  const cart = getCart();
  const item = cart.find(x => x.id === id);
  if (!item) return;
  item.qty = qty;
  if (item.qty <= 0) {
    removeFromCart(id);
  } else {
    saveCart(cart);
  }
}

// (Jeśli potrzebujesz modułów)
// export { getCart, addToCart, removeFromCart, updateQuantity };
