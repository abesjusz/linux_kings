

// Get the button:
let mybutton = document.getElementById("Btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

document.addEventListener('DOMContentLoaded', () => {
  // ===== Toggle mobilnego menu =====
  const navToggle = document.querySelector('.nav-toggle');
  const navList   = document.querySelector('.nav-list');
  navToggle?.addEventListener('click', () => navList.classList.toggle('show'));



  // ===== Previews na stronie głównej =====
  const previewMatches = document.getElementById('matchesPreview');
  if (previewMatches && window.EVENTS) {
    window.EVENTS.slice(0,2).forEach(e => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `<strong>${e.name}</strong><br>${e.date}`;
      previewMatches.appendChild(card);
    });
  }
  const previewShop = document.getElementById('shopPreview');
  if (previewShop && window.PRODUCTS) {
    window.PRODUCTS.slice(0,3).forEach(p => {
      const img = document.createElement('img');
      img.src = p.mainImage;
      img.alt = p.type;
      previewShop.appendChild(img);
    });
  }
  const previewFeatured = document.getElementById('featuredPreview');
  if (previewFeatured && window.PRODUCTS) {
    window.PRODUCTS.slice(0,4).forEach(p => {
      const img = document.createElement('img');
      img.src = p.mainImage;
      img.alt = p.type;
      previewFeatured.appendChild(img);
    });
  }

  // ===== Inicjalizacja listy produktów (jeżeli jesteśmy na jerseys.html) =====
  const ordersContainer = document.getElementById('ordersContainer');
  if (ordersContainer) initFiltersAndList();

  // ===== Ładowanie detalu produktu (jeżeli jesteśmy na product.html) =====
  const productWrapper = document.querySelector('.product-detail-wrapper');
  if (productWrapper) loadProductDetail();





  



 // ===== Responsive carousel replacement =====
(function() {
  const track = document.getElementById('carouselTrack'); // -> dostosuj id jeśli inne
  const rawItems = window.SLIDER_ITEMS || []; // twoja lista produktów dla slidera
  if(!track || !rawItems.length) return;

  // minimalna szerokość pojedynczego kafla (px) — zmień jeśli chcesz mniejsze/kosztowniej
  const minCardPx = 180;

  // przygotuj elementy (funkcja tworząca pojedynczy element)
  function makeCard(item) {
    const a = document.createElement('a');
    a.className = 'card slider-link';
    a.href = `product.html?id=${encodeURIComponent(item.id)}`;
    a.innerHTML = `<img src="${item.image}" alt="${item.title || ''}"><p>${item.title || ''} — ${item.price || ''} PLN</p>`;
    return a;
  }

  // upewnij się, że lista jest wystarczająco długa (by uniknąć pustych miejsc w ciasnych ustawieniach)
  let items = rawItems.slice();
  if(items.length === 0) return;

  // uzupełnij wielokrotności jeśli items < 3 by nie mieć pustych przestrzeni
  while(items.length < 3) items = items.concat(rawItems);

  // wyczyść track i wstaw elementy (z klonami przed/po)
  track.innerHTML = '';
  const originals = items.map(makeCard);
  // funkcja aby wstawić n razy sekwencję oryginałów (gdy potrzeba)
  function appendSequence(parent, seq) { seq.forEach(el => parent.appendChild(el.cloneNode(true))); }

  // dodaj klony przed (by był płynny "infinite")
  appendSequence(track, originals);
  appendSequence(track, originals);
  appendSequence(track, originals);

  const slides = Array.from(track.children);

  // styl track (upewnij się, że track ma display:flex i gap w CSS; JS odczyta gap)
  track.style.display = 'flex';
  track.style.transition = 'transform 0.5s ease';
  track.style.willChange = 'transform';

  // odczytaj gap w px (getComputedStyle zwraca np. '16px')
  function getGapPx() {
    const gapStr = getComputedStyle(track).gap || '0px';
    return parseFloat(gapStr) || 0;
  }

  // oblicz ile widocznych elementów się zmieści, a potem jaki powinna mieć szerokość pojedyncza karta
  let visible = 4;
  let stepPx = 0;
  let slideWidth = 0;
  let idx = originals.length; // startujemy w "środku" sekwencji

  function computeLayout() {
  const gapPx = getGapPx();
  const containerWidth = track.clientWidth;

  // breakpoint-based desired visible:
  let desired;
  if (containerWidth < 480) {           // telefon pionowo
    desired = 1;
  } else if (containerWidth < 900) {    // tablet / mały desktop
    desired = 2;
  } else if (containerWidth < 1300) {   // typowy desktop
    desired = 4;
  } else {                              // szerokie monitory - wypełnij przestrzeń
    // policz ile się zmieści minimalnych kart, lecz ogranicz do max 8
    const maxPossible = Math.max(1, Math.floor((containerWidth + gapPx) / (minCardPx + gapPx)));
    desired = Math.min(8, Math.max(4, maxPossible));
  }

  visible = Math.max(1, Math.min(8, desired));
  // szerokość pojedynczego slajdu: równo dzielimy przestrzeń dostępna minus gapy
  slideWidth = Math.floor((containerWidth - gapPx * (visible - 1)) / visible);
  stepPx = slideWidth + gapPx;

  slides.forEach(s => {
    s.style.width = slideWidth + 'px';
    s.style.flex = '0 0 ' + slideWidth + 'px';
    s.style.boxSizing = 'border-box';
  });

  idx = originals.length + (idx - originals.length) % originals.length;
  track.style.transition = 'none';
  track.style.transform = `translateX(-${idx * stepPx}px)`;
  setTimeout(()=> track.style.transition = 'transform 0.5s ease', 20);
}

  computeLayout();
  window.addEventListener('resize', debounce(()=> {
    computeLayout();
  }, 120));

  // helper debounce
  function debounce(fn, wait){ let t; return (...a)=>{ clearTimeout(t); t=setTimeout(()=>fn(...a), wait); }; }

  // auto slide logic
  let autoplay = true;
  let interval = null;
  function startAuto() { if(interval) clearInterval(interval); interval = setInterval(()=> slide(1), 3000); }
  function stopAuto() { if(interval) clearInterval(interval); interval = null; }

  // slide direction: 1 = forward, -1 = backward
  function slide(dir=1) {
    idx += dir;
    track.style.transition = 'transform 0.45s ease';
    track.style.transform = `translateX(-${idx * stepPx}px)`;
  }

  track.addEventListener('transitionend', () => {
    // jeśli przeskoczyliśmy poza drugi blok oryginałów, wróć bez animacji do środka
    const blockLen = originals.length;
    if (idx >= blockLen * 2) {
      track.style.transition = 'none';
      idx = blockLen;
      track.style.transform = `translateX(-${idx * stepPx}px)`;
    } else if (idx < blockLen) {
      track.style.transition = 'none';
      idx = blockLen + (idx % blockLen);
      track.style.transform = `translateX(-${idx * stepPx}px)`;
    }
  });

  track.addEventListener('mouseenter', stopAuto);
  track.addEventListener('mouseleave', ()=>{ if(autoplay) startAuto(); });

  // start autoplay
  if(autoplay) startAuto();

})();











/*
  // ===== Obsługa przycisku "Kup teraz" =====
  document.querySelectorAll('.btn-buy').forEach(btn =>
    btn.addEventListener('click', () => {
      const pid = new URLSearchParams(location.search).get('id');
      const pr  = window.PRODUCTS.find(z=>z.id===pid);
      if (!pr) return alert(`Produkt niedostępny (id="${pid}")`);
      addToCart({ id:pr.id, name:pr.type, price:pr.price, img:pr.mainImage });
      alert(`Dodano "${pr.type}" do koszyka!`);
    })
  );
  */
});



// ——— Funkcje pomocnicze ———

function initFiltersAndList() {
  const applyBtn        = document.getElementById('applyFilters');
  const clearBtn        = document.getElementById('clear-filters');
  const ordersContainer = document.getElementById('ordersContainer');
  
  // Wstępne wyrenderowanie wszystkich produktów
  generateOrders(PRODUCTS);

  // Obsługa przycisku "Zastosuj filtry"
  applyBtn.addEventListener('click', () => {
    const types = [...document.querySelectorAll('input[name="type"]:checked')].map(i => i.value);
    const sizes = [...document.querySelectorAll('input[name="size"]:checked')].map(i => i.value);

    document.querySelectorAll('.order-item').forEach(item => {
      const itemType  = item.dataset.type;
      const itemSizes = item.dataset.sizes.split(' ');

      const okType = !types.length || types.includes(itemType);
      const okSize = !sizes.length || sizes.some(s => itemSizes.includes(s));

      item.style.display = (okType && okSize) ? 'flex' : 'none';
    });
  });

  // Obsługa przycisku "Wyczyść filtry"
  clearBtn.addEventListener('click', () => {
    // 1) Odhacz wszystkie checkboxy
    document.querySelectorAll('input[name="type"], input[name="size"]')
      .forEach(checkbox => checkbox.checked = false);

    // 2) Przywróć widoczność WSZYSTKICH produktów
    document.querySelectorAll('.order-item')
      .forEach(item => item.style.display = 'flex');

    // (opcjonalnie) możesz od razu ponownie "zastosować" filtry
    // applyBtn.click();
  });

  // Jeśli masz parametr ?type=… w URL, zaznacz go i zastosuj od razu
  const forced = new URLSearchParams(location.search).get('type');
  if (forced) {
    const cb = document.querySelector(`input[name="type"][value="${forced}"]`);
    if (cb) {
      cb.checked = true;
      applyBtn.click();
    }
  }
}





function generateOrders(products) {
  const ordersContainer = document.getElementById('ordersContainer');
  ordersContainer.innerHTML = '';

  products.forEach(p => {
    const link = document.createElement('a');
    link.href        = `product.html?id=${p.id}`;
    link.className   = 'order-item';
    link.dataset.type   = p.category;         // używamy p.category
    link.dataset.sizes  = p.sizes.join(' ');

    link.innerHTML = `
      <img src="${p.gridImage || p.mainImage}" alt="${p.type} #${p.id}" class="tile-img">
      <h2 class="tile-title">${p.type.charAt(0).toUpperCase()+p.type.slice(1)}</h2>
      <p class="tile-pattern">${p.pattern || ''}</p>
      <p class="tile-price"><strong>${p.price} PLN</strong></p>
    `;
    ordersContainer.appendChild(link);
  });
}





 /*

 // przycisk Kup teraz w listingu też dodaje do koszyka
     el.querySelector('.btn-buy').onclick = () => {
       addToCart({
         id:    p.id,
         name:  p.type,
         price: p.price,
         img:   p.mainImage
       });
       alert('Dodano do koszyka!');
     };

 */

 // ——— product.html: wczytanie detali ———
 function loadProductDetail() {
  const params = new URLSearchParams(location.search);
  const id     = params.get('id');
  const p      = PRODUCTS.find(x => x.id === id);
  if (!p) return;

  // — 1) Wypełnij główne info jak dotąd —
  const mainImg = document.querySelector('.main-image img');
  mainImg.src   = p.mainImage;
  mainImg.alt   = p.type;

  document.querySelector('.product-info h1').textContent =
    `${p.type.charAt(0).toUpperCase()+p.type.slice(1)} `;
    document.querySelector('.product-info .pattern').textContent =
    p.pattern;
  document.querySelector('.product-info .price').textContent =
    p.price + ' PLN';
  document.querySelector('.short-desc').textContent = p.description;
  document.querySelector('.long-desc').textContent  = p.longDescription;
  // … i reszta pól (rozmiary, materiały, tabela) …

  // — 2) Zbuduj miniaturki po lewej —
  const thumbs = document.querySelector('.thumbnails');
  thumbs.innerHTML = '';

  // 2.1. Najpierw studio shot
  const liMain = document.createElement('li');
  liMain.innerHTML = `<img src="${p.mainImage}" alt="Studio shot">`;
  liMain.classList.add('studio-thumb');
  thumbs.appendChild(liMain);

  // 2.2. Następnie maks. 3 elementy z p.gallery
  p.gallery.slice(0, 3).forEach(src => {
    const li = document.createElement('li');
    li.innerHTML = `<img src="${src}" alt="Miniatura">`;
    thumbs.appendChild(li);
  });

  // 2.3. “+N” jeśli są zdjęcia ponad 3
  const extra = p.gallery.length - 3;
  if (extra > 0) {
    const more = document.createElement('li');
    more.className = 'thumbnail-more';
    more.textContent = `+${extra}`;
    thumbs.appendChild(more);
    more.addEventListener('click', () => {
      openLightbox([p.mainImage, ...p.gallery], 0);
    });
  }

  // 2.4. Klik w miniaturkę zmienia główny obrazek
  thumbs.addEventListener('click', e => {
    const img = e.target.closest('img');
    if (!img) return;
    mainImg.src = img.src;
  });

  // — 3) Breadcrumb (product.html) —
  const bc = document.querySelector('.breadcrumbs .current');
  if (bc) bc.textContent =
    `${p.type.charAt(0).toUpperCase()+p.type.slice(1)}${p.pattern} `;

    // materiał
  const matList = document.querySelector('.material-list');
  matList.innerHTML = '';
  p.material.forEach(m => {
    const li = document.createElement('li'); li.textContent = m;
    matList.appendChild(li);
  });

  // tabela rozmiarów
  const tbl  = p.sizeTable;
  const hdr  = document.getElementById('sizeTableHeader');
  const tbody= document.getElementById('sizeTableBody');
  const note = document.getElementById('sizeTableNote');
  hdr.innerHTML = tbl.columns.map(c=>`<th>${c}</th>`).join('');
  tbody.innerHTML = tbl.rows.map(r =>
    `<tr><td>${r.label}</td>${r.values.map(v=>`<td>${v}</td>`).join('')}</tr>`
  ).join('');
  note.textContent = tbl.note||'';
}

// ——— Lightbox ———
function openLightbox(images, startIdx = 0) {
  // 1) Overlay
  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';

  // 2) Kontener
  const box = document.createElement('div');
  box.className = 'lightbox-content';

  // 3) Duże zdjęcie
  const imgEl = document.createElement('img');
  imgEl.className = 'lightbox-img';
  imgEl.src = images[startIdx];
  box.appendChild(imgEl);

  // 4) Miniaturki w lightboksie
  const thumbBar = document.createElement('div');
  thumbBar.className = 'lightbox-thumbs';
  images.forEach((src, i) => {
    const t = document.createElement('img');
    t.src = src;
    t.dataset.idx = i;
    if (i === startIdx) t.classList.add('active');
    t.addEventListener('click', () => {
      document.querySelector('.lightbox-thumbs img.active')
              .classList.remove('active');
      t.classList.add('active');
      imgEl.src = src;
    });
    thumbBar.appendChild(t);
  });
  box.appendChild(thumbBar);

  // 5) Close button
  const close = document.createElement('span');
  close.className = 'lightbox-close';
  close.innerHTML = '&times;';
  close.addEventListener('click', () => document.body.removeChild(overlay));
  box.appendChild(close);

  // 6) Klik poza boxem też zamyka
  overlay.addEventListener('click', e => {
    if (e.target === overlay) document.body.removeChild(overlay);
  });

  overlay.appendChild(box);
  document.body.appendChild(overlay);

  // teksty
  document.querySelector('.product-info h1').textContent      =
    `${p.type.charAt(0).toUpperCase()+p.type.slice(1)} #${p.id}`;
  document.querySelector('.product-info .price').textContent = p.price+' PLN';
  document.querySelector('.short-desc').textContent           = p.description;
  document.querySelector('.long-desc').textContent            = p.longDescription;

  // rozmiary
  const szWrap = document.querySelector('.size-options');
  szWrap.innerHTML = '';
  p.sizes.forEach(sz => {
    const lbl = document.createElement('label');
    lbl.innerHTML = `<input type="radio" name="size" value="${sz}"> ${sz}`;
    szWrap.appendChild(lbl);
  });

  // materiał
  const matList = document.querySelector('.material-list');
  matList.innerHTML = '';
  p.material.forEach(m => {
    const li = document.createElement('li'); li.textContent = m;
    matList.appendChild(li);
  });

  // tabela rozmiarów
  const tbl  = p.sizeTable;
  const hdr  = document.getElementById('sizeTableHeader');
  const tbody= document.getElementById('sizeTableBody');
  const note = document.getElementById('sizeTableNote');
  hdr.innerHTML = tbl.columns.map(c=>`<th>${c}</th>`).join('');
  tbody.innerHTML = tbl.rows.map(r =>
    `<tr><td>${r.label}</td>${r.values.map(v=>`<td>${v}</td>`).join('')}</tr>`
  ).join('');
  note.textContent = tbl.note||'';

  // polecane
  const rec = document.querySelector('.recommended-grid');
  if (rec) {
    rec.innerHTML = '';
    PRODUCTS.filter(x=>x.id!==id).slice(0,4).forEach(x=>{
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${x.mainImage}" alt="${x.type}">
        <h3>${x.type}</h3>
        <p>${x.price} PLN</p>
      `;
      rec.appendChild(card);
    });
  }
  // … po wstawieniu tytułu produktu …
  const bcCurr = document.querySelector('.breadcrumbs .current');
  if (bcCurr && p) {
    bcCurr.textContent = `${p.type.charAt(0).toUpperCase() + p.type.slice(1)} #${p.id}`;
  }
  

}
 



document.addEventListener('DOMContentLoaded', () => {
 // ===== Toggle menu =====
 const navToggle = document.querySelector('.nav-toggle');
 const navList   = document.querySelector('.nav-list');
 if (navToggle) navToggle.addEventListener('click', () => navList.classList.toggle('show'));

 const section = document.querySelector('.calendar-section');
 if (section && !section.classList.contains('initialized')) {
   section.classList.add('initialized');
   initCalendar();
 }

 /*
    // ===== Inicjalizacja kalendarza (tylko raz!) =====
    const calendarSection = document.querySelector('.calendar-section');
    if (calendarSection && !calendarSection.classList.contains('initialized')) {
      calendarSection.classList.add('initialized');
  
      // 1) NAV
      const nav = document.createElement('div');
      nav.className = 'calendar-nav';
      nav.innerHTML = `
        <button id="prevMonth">◀ Poprzedni</button>
        <h2 id="currentMonth"></h2>
        <button id="nextMonth">Następny ▶</button>
      `;
      calendarSection.prepend(nav);
  
      // 2) KALENDARZ
      const cal = document.getElementById('calendarList');
      cal.classList.add('calendar');
  
      // 3) RENDER
      let dt = new Date();
      function render() {
        cal.innerHTML = '';
        // … tu wstawiasz tworzenie dni …
      }
      document.getElementById('prevMonth')
              .addEventListener('click', () => { dt.setMonth(dt.getMonth()-1); render(); });
      document.getElementById('nextMonth')
              .addEventListener('click', () => { dt.setMonth(dt.getMonth()+1); render(); });
      render();
      
}
*/
 // ===== Slider =====
 const slider = document.querySelector('.slider');
 if (slider) {
   const slides = slider.querySelector('.slides');
   const total  = slides.children.length;
   let idx = 0;
   const update = () => slides.style.transform = `translateX(-${idx * 100}%)`;
   slider.querySelector('.slider-next').addEventListener('click', () => { idx = (idx+1)%total; update(); });
   slider.querySelector('.slider-prev').addEventListener('click', () => { idx = (idx-1+total)%total; update(); });
 }

 // ===== Shop & Product =====
 // … Twoja istniejąca logika generowania sklepu/product.html …


 

 
// ===== Event detail =====
function loadEventDetail() {
  const params = new URLSearchParams(location.search);
  const id     = params.get('id');
  const ev     = window.EVENTS.find(e => e.id === id);
  if (!ev) return;

  // 1) Wstaw nagłówek i opis
  document.getElementById('eventName').textContent = ev.name;
  document.getElementById('eventDate').textContent = ev.date;
  document.getElementById('eventDesc').textContent = ev.description;

  // 2) Head-to-head
  const oldTable = document.getElementById('headToHeadTable');
  if (oldTable) oldTable.remove();

  if (Array.isArray(ev.headToHead) && ev.headToHead.length) {
    const container = document.getElementById('headToHeadContainer');
    const tbl = document.createElement('table');
    tbl.id = 'headToHeadTable';
    tbl.className = 'matches-table';  // możesz użyć innej klasy
    tbl.innerHTML = `
      <caption>Ostatnie 3 starcia z ${ev.name.match(/\((.*)\)/)[1]}</caption>
      <thead>
        <tr><th>Data</th><th>Wynik</th><th>Mapy</th></tr>
      </thead>
      <tbody>
        ${ev.headToHead.map(h => `
          <tr>
            <td>${h.date}</td>
            <td>${h.result}</td>
            <td>${h.map}</td>
          </tr>
        `).join('')}
      </tbody>
    `;
    container.appendChild(tbl);
  }

  // 3) Szczegóły harmonogramu eventu (ev.matches)
  const tbody = document.getElementById('matchesTableBody');
  tbody.innerHTML = '';   // czyścimy poprzednie wiersze

  if (Array.isArray(ev.matches) && ev.matches.length) {
    ev.matches.forEach(m => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${m.time}</td>
        <td>${m.teamA}</td>
        <td>vs</td>
        <td>${m.map}</td>
      `;
      tbody.appendChild(tr);
    });
  } else {
    // jeśli nie ma matches, pokaż w tabeli komunikat
    const tr = document.createElement('tr');
    tr.innerHTML = `<td colspan="4">Brak szczegółów spotkań dla tego eventu.</td>`;
    tbody.appendChild(tr);
  }
}

// upewnij się, że wywołujesz ją przy starcie
document.addEventListener('DOMContentLoaded', loadEventDetail);

 
 if (document.getElementById('eventWrapper')) {
  loadEventDetail();
 }
});








// — Karuzela slidera z SLIDER_ITEMS (PEŁNE infinite loop) —
document.addEventListener('DOMContentLoaded', () => {
 const track = document.getElementById('carouselTrack');
 const items = window.SLIDER_ITEMS || [];
 if (!track || items.length === 0) return;

 // 1) Wyczyść stary HTML
 track.innerHTML = '';

 // 2) Stwórz oryginalne slajdy
 const originals = items.map(({ id, image, title, price }) => {
   const link = document.createElement('a');
   link.href = `product.html?id=${encodeURIComponent(id)}`;
   link.className = 'card slider-link';       // klasa 'card' + ewentualnie własne
   link.style.textDecoration = 'none';
   link.innerHTML = `
     <img src="${image}" alt="${title}">
     <p>${title} – ${price} PLN</p>
   `;
   return link;
 });

 // 3) Sklonuj ORYGINAŁY na początek i koniec
 const clonesBefore = originals.map(node => node.cloneNode(true));
 const clonesAfter  = originals.map(node => node.cloneNode(true));

 // 4) Doklejamy w kolejności: klony przed, oryginały, klony po
 clonesBefore.forEach(node => track.appendChild(node));
 originals   .forEach(node => track.appendChild(node));
 clonesAfter .forEach(node => track.appendChild(node));

 // 5) Przygotuj zmienne do animacji
 const slides = Array.from(track.children);
 const slideWidth = slides[0].offsetWidth
                    + parseInt(getComputedStyle(slides[0]).marginRight);
 let idx = originals.length;  // startujemy od pierwszego ORYGINAŁU
 track.style.transform = `translateX(-${idx * slideWidth}px)`;

 // 6) Funkcja przesuwająca o 1 slajd
 function slide() {
   idx++;
   track.style.transition = 'transform 0.5s ease';
   track.style.transform  = `translateX(-${idx * slideWidth}px)`;
 }

 // 7) Po zakończeniu animacji – jeśli dotarliśmy do końca “drugiej paczki” ORYGINAŁÓW,
 //    przeskocz (bez animacji) z powrotem do początku ORYGINAŁÓW
 track.addEventListener('transitionend', () => {
   if (idx >= originals.length * 2) {
     track.style.transition = 'none';
     idx = originals.length;
     track.style.transform  = `translateX(-${idx * slideWidth}px)`;
   }
 });

 // 8) Auto-slide co 3s + pauza on hover
 let interval = setInterval(slide, 3000);
 track.addEventListener('mouseover', () => clearInterval(interval));
 track.addEventListener('mouseout',  () => interval = setInterval(slide, 3000));
});










// — Popup + badge logic —

function updateCartCount() {
  const count = getCart().reduce((sum, x) => sum + x.qty, 0);
  const badge = document.getElementById('cartCount');
  if (badge) badge.textContent = count;
}

// Pokaż modal
function showAddModal() {
  const modal = document.getElementById('addCartModal');
  const recWrap = document.getElementById('modalRecommended');
  recWrap.innerHTML = '';

  // slider zamiast grid
  recWrap.className = 'modal-rec-slider';
  const arr = [...window.PRODUCTS].sort(() => Math.random() - .5).slice(0, 6);
  arr.forEach(p => {
    const slide = document.createElement('div');
    slide.className = 'modal-rec-slide card';
    slide.innerHTML = `
      <a href="product.html?id=${p.id}">
        <img src="${p.mainImage}" alt="${p.type}">
        <p class="card-title">${p.type}</p>
        <p class="card-price">${p.price} PLN</p>
      </a>`;
    recWrap.appendChild(slide);
  });

  modal.classList.add('show');
}

document.addEventListener('DOMContentLoaded', () => {
  const modal     = document.getElementById('addCartModal');
  const closeBtn  = modal.querySelector('.modal-close');

  // 1) Zamknij po kliknięciu w "X"
  closeBtn?.addEventListener('click', () => {
    modal.classList.remove('show');
  });

  // 2) Zamknij po kliknięciu w tło (ale nie wewnątrz .modal-content)
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('show');
    }
  });
});



// Wywołaj updateCartCount na starcie
document.addEventListener('DOMContentLoaded', updateCartCount);

// Nadpisz przycisk “Kup teraz” globalnie (jeśli nie ma inline)
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('myBtn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const id = new URLSearchParams(window.location.search).get('id');
    addToCart(id);          // z cart.js
    updateCartCount();      // odśwież badge
    showAddModal();         // pokaż popup
  });
});



// — Popup + badge + recommended + calendar-guard —

document.addEventListener('DOMContentLoaded', () => {
  // 1) Aktualizuj badge
  function updateCartCount() {
    const count = getCart().reduce((sum, x) => sum + x.qty, 0);
    const b = document.getElementById('cartCount');
    if (b) b.textContent = count;
  }
  updateCartCount();



  // 3) Funkcje modalu
  const modal = document.getElementById('addCartModal');
  const close = modal?.querySelector('.modal-close');
  const cont  = document.getElementById('continueBtn');
  const go    = document.getElementById('goCartBtn');

  function showAddModal() {
    const modal = document.getElementById('addCartModal');
    const recWrap = document.getElementById('modalRecommended');
    recWrap.innerHTML = '';
  
    // slider zamiast grid
    recWrap.className = 'modal-rec-slider';
    const arr = [...window.PRODUCTS].sort(() => Math.random() - .5).slice(0, 6);
    arr.forEach(p => {
      const slide = document.createElement('div');
      slide.className = 'modal-rec-slide card';
      slide.innerHTML = `
        <a href="product.html?id=${p.id}">
          <img src="${p.mainImage}" alt="${p.type}">
          <p class="card-title">${p.type}</p>
          <p class="card-price">${p.price} PLN</p>
        </a>`;
      recWrap.appendChild(slide);
    });
  
    modal.classList.add('show');
  }
  

  // close & buttons
  close?.addEventListener('click', () => modal.classList.remove('show'));
  cont?.addEventListener('click', () => modal.classList.remove('show'));
  go?.addEventListener('click', () => location.href = 'koszyk.html');

  
});


function initCalendar() {
  const section = document.querySelector('.calendar-section');
  if (!section) return;

  // 1) Dodaj nawigację
  const nav = document.createElement('div');
  nav.className = 'calendar-nav';
  nav.innerHTML = `
    <button id="prevMonth">◀ Poprzedni</button>
    <h2 id="currentMonth"></h2>
    <button id="nextMonth">Następny ▶</button>
  `;
  section.prepend(nav);

  // 2) Wskaż kontener kalendarza z HTML-a i nadaj mu klasę layoutu
  const cal = document.getElementById('calendarList');
  cal.classList.add('calendar');

  // 3) Funkcja rysująca dni i eventy
  let dt = new Date();

  function render() {
    // 3a) Ustaw tytuł
    const monthNames = ['Styczeń','Luty','Marzec','Kwiecień','Maj','Czerwiec','Lipiec','Sierpień','Wrzesień','Październik','Listopad','Grudzień'];
    document.getElementById('currentMonth').textContent = `${monthNames[dt.getMonth()]} ${dt.getFullYear()}`;

    // 3b) Wyczyść poprzednie komórki
    cal.innerHTML = '';

    // 3c) Puste pola, żeby zacząć od właściwego dnia tygodnia
    const firstDay = new Date(dt.getFullYear(), dt.getMonth(), 1).getDay();
    for (let i = 1; i < firstDay; i++) {
      cal.appendChild(document.createElement('div'));
    }

    // dzisiejsza data do porównania
    const today    = new Date();
    const todayStr = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`;

    // dni miesiąca + eventy + oznaczenie dziś
    const daysInMonth = new Date(dt.getFullYear(), dt.getMonth()+1, 0).getDate();
    for (let d = 1; d <= daysInMonth; d++) {
      const dayCell = document.createElement('div');
      dayCell.className = 'calendar-day';

      const dateStr = `${dt.getFullYear()}-${String(dt.getMonth()+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;

      // oznacz dzisiaj
      if (dateStr === todayStr) {
        dayCell.classList.add('today');
      }

      dayCell.innerHTML = `<div class="date-number">${d}</div>`;

      // eventy
      (window.EVENTS || [])
        .filter(ev => ev.date === dateStr)
        .forEach(ev => {
          const card = document.createElement('div');
          card.className = 'event-card';
          if (ev.type) card.classList.add(`event-${ev.type}`);
          card.textContent = ev.name;
          card.addEventListener('click', () => {
            location.href = `event.html?id=${encodeURIComponent(ev.id)}`;
          });
          dayCell.appendChild(card);
        });

      cal.appendChild(dayCell);
    }
  }

  // 4) Podłącz przyciski zmiany miesiąca
  nav.querySelector('#prevMonth').addEventListener('click', () => {
    dt.setMonth(dt.getMonth() - 1);
    render();
  });
  nav.querySelector('#nextMonth').addEventListener('click', () => {
    dt.setMonth(dt.getMonth() + 1);
    render();
  });

  // 5) Pierwsze wyrenderowanie
  render();
}






