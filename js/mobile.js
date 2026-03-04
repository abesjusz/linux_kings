document.addEventListener('DOMContentLoaded', () => {
  /* Hamburger-menu */
  const nav = document.querySelector('.mobile-nav');
  if (nav) {
    const btn = nav.querySelector('.hamburger');
    btn.addEventListener('click', () => nav.classList.toggle('is-open'));
  }

  /* Panel filtrów */
  const filterToggle = document.getElementById('filter-toggle');
  const filterPanel = document.getElementById('filter-panel');
  const filterClose = document.getElementById('filter-close');
  if (filterToggle && filterPanel) {
    filterToggle.addEventListener('click', () => filterPanel.classList.add('is-open'));
    filterClose.addEventListener('click', () => filterPanel.classList.remove('is-open'));
  }

  

  const btn = nav && nav.querySelector('.hamburger');
  if ( nav?.classList.contains('is-open') 
       && !nav.contains(e.target) 
       && e.target !== btn ) {
    nav.classList.remove('is-open');
  }
  document.addEventListener('click', e => {
    const nav = document.querySelector('.mobile-nav');
    const btn = nav && nav.querySelector('.hamburger');
    if ( nav?.classList.contains('is-open') 
         && !nav.contains(e.target) 
         && e.target !== btn ) {
      nav.classList.remove('is-open');
    }
  });
  
  // Zamykaj panel filtrów po kliknięciu poza panel i przycisk
  document.addEventListener('click', e => {
    const filterToggle = document.getElementById('filter-toggle');
    const panel = document.getElementById('filter-panel');
    if ( panel?.classList.contains('is-open')
         && !panel.contains(e.target)
         && e.target !== filterToggle ) {
      panel.classList.remove('is-open');
    }
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const events = (window.EVENTS || [])
    .map(ev => ({ ...ev, dateObj: new Date(ev.date) }))
    .sort((a,b) => a.dateObj - b.dateObj);

  if (!events.length) return;

  // Funkcje pomocnicze
  function startOfWeek(d) {
    const day = d.getDay(), diff = (day + 6) % 7; // pon = 1
    const monday = new Date(d);
    monday.setDate(d.getDate() - diff);
    monday.setHours(0,0,0,0);
    return monday;
  }
  function endOfWeek(monday) {
    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);
    sunday.setHours(23,59,59,999);
    return sunday;
  }
  function formatDate(d) {
    return d.toLocaleDateString('pl-PL', { day:'2-digit', month:'2-digit', year:'numeric' });
  }

  // Znajdź pierwszy tydzień z eventem
  let currentMonday = startOfWeek(events[0].dateObj);

  // Elementy DOM
  const weekLabel  = document.getElementById('weekLabel');
  const prevBtn    = document.getElementById('prevWeekBtn');
  const nextBtn    = document.getElementById('nextWeekBtn');
  const listCont   = document.getElementById('mobile-calendar-list');

  function renderWeek(monday) {
    const sunday = endOfWeek(monday);
    weekLabel.textContent = `${formatDate(monday)} – ${formatDate(sunday)}`;
    listCont.innerHTML = '';

    // Wybierz eventy w tym tygodniu
    const weekEvents = events.filter(ev => 
      ev.dateObj >= monday && ev.dateObj <= sunday
    );

    if (!weekEvents.length) {
      listCont.innerHTML = `<p style="text-align:center;color:var(--text-dark);">Brak zaplanowanych meczów w tym tygodniu.</p>`;
      return;
    }

    // Grupuj po dacie
    let lastDate = null;
    weekEvents.forEach(ev => {
      const dStr = ev.dateObj.toLocaleDateString('pl-PL', { weekday:'long', day:'numeric', month:'numeric' });
      if (dStr !== lastDate) {
        lastDate = dStr;
        const dayWrap = document.createElement('div');
        dayWrap.className = 'calendar-day';
        const dateEl = document.createElement('div');
        dateEl.className = 'calendar-day__date';
        dateEl.textContent = dStr;
        dayWrap.appendChild(dateEl);
        listCont.appendChild(dayWrap);
      }
      const evEl = document.createElement('div');
      evEl.className = 'calendar-event';
      evEl.textContent = `${ev.time || ''} – ${ev.name}`;
      evEl.addEventListener('click', () => {
        window.location.href = `event.html?id=${encodeURIComponent(ev.id)}`;
      });
      listCont.lastChild.appendChild(evEl);
    });
  }

  // Obsługa przycisków
  prevBtn.addEventListener('click', () => {
    currentMonday.setDate(currentMonday.getDate() - 7);
    // jeśli w tym tygodniu brak eventów, przesuń dalej aż znajdziesz
    while (!events.some(ev => ev.dateObj >= currentMonday && ev.dateObj <= endOfWeek(currentMonday))) {
      currentMonday.setDate(currentMonday.getDate() - 7);
    }
    renderWeek(currentMonday);
  });
  nextBtn.addEventListener('click', () => {
    currentMonday.setDate(currentMonday.getDate() + 7);
    while (!events.some(ev => ev.dateObj >= currentMonday && ev.dateObj <= endOfWeek(currentMonday))) {
      currentMonday.setDate(currentMonday.getDate() + 7);
    }
    renderWeek(currentMonday);
  });

  // Pierwsze renderowanie
  renderWeek(currentMonday);
});


