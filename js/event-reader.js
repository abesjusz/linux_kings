// event-render.js
document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(location.search);
  const id     = params.get('id');
  const ev     = window.EVENTS.find(e => e.id === id);
  if (!ev) return;

  // Nagłówki eventu
  document.getElementById('eventName').textContent = ev.name;
  document.getElementById('eventDate').textContent = `Data rozpoczęcia: ${ev.days[0].date || ''}`;
  document.getElementById('eventDesc').textContent = ev.description || '';

  const daysContainer = document.getElementById('daysContainer');
  daysContainer.innerHTML = '';

  ev.days.forEach(day => {
    // Sekcja dnia
    const daySection = document.createElement('section');
    daySection.className = 'event-day';
    daySection.innerHTML = `<h2>${day.title}</h2>`;
    
    day.groups.forEach(group => {
      // Nagłówek grupy
      const grpDiv = document.createElement('div');
      grpDiv.className = 'event-group';
      grpDiv.innerHTML = `<h3>Grupa ${group.id}</h3>
  <p><strong>Drużyny:</strong>
    ${group.teams.map(t =>
      `<span class="${t==='Linux_kings'?'highlight-team':''}">${t}</span>`
    ).join(', ')}
  </p>`;


        
      
      // Tabela meczów
      const tbl = document.createElement('table');
      tbl.className = 'matches-table';
      tbl.innerHTML = `
  <thead>
    <tr><th>Godzina</th><th>Zespół A</th><th>vs</th><th>Zespół B</th></tr>
  </thead>
  <tbody>
    ${group.matches.map(m =>
      `<tr>
         <td>${m.time}</td>
         <td class="${m.teamA === 'Linux_kings' ? 'highlight-team' : ''}">${m.teamA}</td>
         <td>vs</td>
         <td class="${m.teamB === 'Linux_kings' ? 'highlight-team' : ''}">${m.teamB}</td>
       </tr>`).join('')}
  </tbody>`;


      grpDiv.appendChild(tbl);
      daySection.appendChild(grpDiv);
    });

    daysContainer.appendChild(daySection);
  });
});


function loadEventDetail() {
  const params = new URLSearchParams(location.search);
  const id     = params.get('id');
  const ev     = window.EVENTS.find(e => e.id === id);
  if (!ev) return;

  // 1) Nagłówek i opis
  document.getElementById('eventName').textContent = ev.name;
  document.getElementById('eventDate').textContent = ev.date;
  document.getElementById('eventDesc').textContent = ev.description;

  // 2) Head-to-Head
  const headC = document.getElementById('headToHeadContainer');
  headC.innerHTML = '';
  if (Array.isArray(ev.headToHead) && ev.headToHead.length) {
    const tbl = document.createElement('table');
    tbl.id        = 'headToHeadTable';
    tbl.className = 'matches-table';
    tbl.innerHTML = `
  <caption>Ostatnie 3 starcia z ${ev.name.match(/\((.*)\)/)?.[1] || ''}</caption>
  <thead>
    <tr><th>Data</th><th>Wynik</th><th>Mapy</th></tr>
  </thead>
  <tbody>
    ${ev.headToHead.map(h => {
      const win = h.result.trim().startsWith('2');
      return `
        <tr>
          <td>${h.date}</td>
          <td class="${win ? 'result-win' : 'result-lose'}">${h.result}</td>
          <td>${h.map}</td>
        </tr>
      `;
    }).join('')}
  </tbody>
`;

    headC.appendChild(tbl);
  }

  // 3) Harmonogram turnieju
  const tourC = document.getElementById('tournamentContainer');
  tourC.innerHTML = '';

  if (ev.type === 'tournament' && Array.isArray(ev.days)) {
    // Ukrywamy sekcję ligową
    document.querySelector('.our-matches').style.display = 'none';

    ev.days.forEach(dayObj => {
      // Dzień
      const h3 = document.createElement('h3');
      h3.textContent = dayObj.title;
      tourC.appendChild(h3);

      // Grupy
      dayObj.groups.forEach(group => {
        const h4 = document.createElement('h4');
        h4.textContent = `Grupa ${group.id}`;
        tourC.appendChild(h4);

        const tbl = document.createElement('table');
        tbl.className = 'matches-table';
        tbl.innerHTML = `
          <thead>
            <tr>
              <th>Czas</th><th>Team A</th><th></th><th>Team B</th>
            </tr>
          </thead>
          <tbody>
            ${group.matches.map(m => `
              <tr>
                <td>${m.time}</td>
                <td>${m.teamA}</td>
                <td>vs</td>
                <td>${m.teamB}</td>
              </tr>
            `).join('')}
          </tbody>
        `;
        tourC.appendChild(tbl);
      });
    });
  } else {
    // 4) Standardowa liga – pokazujemy sekcję ligową
    document.querySelector('.our-matches').style.display = '';
    const tbody = document.getElementById('matchesTableBody');
    tbody.innerHTML = '';
    if (Array.isArray(ev.matches)) {
      ev.matches.forEach(m => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${m.time || '-'}</td>
          <td>${m.teamA || '-'}</td>
          <td>vs</td>
          <td>${m.map || m.teamB || '-'}</td>
        `;
        tbody.appendChild(tr);
      });
    }
  }
}

// Uruchamiamy po załadowaniu
document.addEventListener('DOMContentLoaded', loadEventDetail);



