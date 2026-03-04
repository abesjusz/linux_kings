// Dane wydarzeń: każdemu wpisowi podaj datę i opis
const TEAM_EVENTS = [
  { date: '2020-10-01', title: 'Założenie drużyny', description: 'Początki zespołu – pierwsze treningi i rekrutacja.' },
  { date: '2020-10-29', title: 'Symboliczne powstanie logo', description: 'Wtedy to fioletowo-niebieski ludzik pojawił się pierwszy raz.' },
  { date: '2020-11-30', title: 'Rejestracja drużyny w ligach amatorskich', description: 'Drużyna Linux_kings oficjalnie zapisana do lokalnych lig amatorskich.' },
  { date: '2021-01-15', title: 'Debiut w pierwszym turnieju online', description: 'Pierwszy turniej w sieci – nauka zasad rywalizacji i pierwszy stres przed kamerami.' },
  { date: '2021-03-01', title: 'Pierwsza wygrana w Turnieju Amatorów', description: 'Zespół odnosi pierwsze zwycięstwo – finałowy mecz zakończony 2:1.' },
  { date: '2021-04-15', title: 'Pierwsza zmiana składu', description: 'Do drużyny dołącza nowy rifler, który wniósł więcej stabilności do rotacji.' },
  { date: '2021-06-01', title: 'Awans do ligi półprofesjonalnej', description: 'Linux_kings przechodzi kwalifikacje i trafi do wyższej dywizji.' },
  { date: '2021-07-20', title: 'Debiut w turnieju LAN (Top8)', description: 'Pierwszy występ w lokalnym LAN-ie – top8 z ponad 32 drużynami.' },
  { date: '2021-09-01', title: 'Podpisanie pierwszego sponsora', description: 'Umowa z firmą sprzętową pozwala na lepsze zaplecze techniczne.' },
  { date: '2021-10-15', title: 'Zwycięstwo w regionalnym 4Teams Cup', description: 'Turniej czterech drużyn – Linux_kings wygrywa 3:0 w finale.' },
  { date: '2021-12-01', title: 'Dołączenie drugiego taktyka', description: 'Wzmocnienie sztabu trenerskiego – nowy analityk taktyczny.' },
  { date: '2022-01-20', title: 'Spadek z ligi półprofesjonalnej', description: 'Trudny sezon kończy się degradacją – czas na przebudowę.' },
  { date: '2022-03-05', title: 'Reorganizacja zespołu', description: 'Nowe kontrakty dla rezerwowych i przebudowa rosteru.' },
  { date: '2022-04-20', title: 'Powrót do ligi półprofesjonalnej', description: 'Zespół błyskawicznie odbudowuje formę i awansuje z powrotem.' },
  { date: '2022-06-10', title: 'Rebranding wizualny', description: 'Premiera nowego logo i kolorystyki – świeższy wizerunek.' },
  { date: '2022-07-25', title: 'Udział w europejskich eliminacjach', description: 'Linux_kings walczy w otwartych kwalifikacjach ESL.' },
  { date: '2022-09-10', title: 'Pierwsza międzynarodowa wygrana', description: 'Zwycięstwo w 3rd Party Invitational – prestiżowy turniej online.' },
  { date: '2022-11-01', title: 'Zmiana kapitana drużyny', description: 'Dotychczasowy IGL przekazuje pałeczkę nowemu liderowi.' },
  { date: '2023-01-20', title: 'Historyczny finał ligi', description: 'Linux_kings dociera do finału – zajmuje 2. miejsce w lidze.' },
  { date: '2023-03-10', title: 'MVP Spring Showcase', description: 'Nasz snajper zdobywa tytuł MVP podczas wiosennego turnieju.' },
  { date: '2023-05-01', title: 'Kontrakty dla kluczowych graczy', description: 'Przedłużenie umów z trzonem składu na kolejny sezon.' },
  { date: '2023-07-10', title: 'Awans do ligi głównej', description: 'Debiut w elitarnej dywizji – marzenie spełnione!' },
  { date: '2023-09-05', title: 'Debiutancki sezon w lidze głównej', description: 'Zespół kończy sezon na 5. miejscu – świetny start.' },
  { date: '2023-11-01', title: 'Wygrana w Goodwill Cup', description: 'Charytatywny turniej – Linux_kings przekazuje nagrody na cele społeczne.' },
  { date: '2024-01-10', title: 'Dołączenie head-coacha', description: 'Nowy trener główny przejmuje przygotowania taktyczne.' },
  { date: '2024-03-05', title: 'Półfinały Ligi Mistrzów', description: 'Linux_kings dociera do semifi­naliów prestiżowej Międzynarodowej Ligi.' },
  { date: '2024-05-01', title: 'Otwarcie Linux_kings Academy', description: 'Start programu szkoleniowego dla młodych talentów.' },
  { date: '2024-07-10', title: 'Zwycięstwo w Summer Showdown', description: 'Letni turniej – triumf 3:2 w wielkim finale.' },
  { date: '2024-09-05', title: 'Spadek z ligi głównej', description: 'Trudny sezon skutkuje degradacją – czas na odbudowę.' },
  { date: '2024-11-01', title: 'Drugi rebranding', description: 'Nowa strona www i odświeżone logo na sezon 2025.' },
  { date: '2025-01-10', title: 'Powrót do ligi głównej', description: 'Linux_kings ponownie w elicie – pasjonujący comeback.' },
  { date: '2025-03-01', title: 'Obrona tytułu Blizzard Cup', description: 'Zwycięstwo w zimowym turnieju Blizzard Cup.' },
  { date: '2025-04-15', title: 'Ogłoszenie składu na sezon 2025/2026', description: 'Prezentacja pełnego rosteru i planów na nadchodzący sezon.' }
  // dodawaj kolejne obiekty: { date: 'YYYY-MM-DD', title: '...', description: '...' }
];

document.addEventListener('DOMContentLoaded', () => {
  const bar = document.getElementById('timelineBar');
  const tooltip = document.getElementById('timelineTooltip');

  // Ustal daty skrajne
  //const startDate = new Date(TEAM_EVENTS[0].date);
  const startDate = new Date('2020-09-01');
  const endDate = new Date(); // dzisiejsza data

  // Tworzymy punkty wydarzeń
  TEAM_EVENTS.forEach((ev, idx) => {
    const evDate = new Date(ev.date);
    const ratio = (evDate - startDate) / (endDate - startDate);
    const point = document.createElement('div');
    point.className = 'event-point';
    point.style.left = `${ratio * 100}%`;
    bar.appendChild(point);
    

    // Obsługa hover i click
    point.addEventListener('mouseenter', e => {
      tooltip.innerHTML = `<strong>${ev.title}</strong><br><em>${ev.date}</em><p>${ev.description}</p>`;
      tooltip.style.display = 'block';
      // pozycjonowanie tooltipa
      const rect = e.target.getBoundingClientRect();
      tooltip.style.top = `${rect.top - 10}px`;
      tooltip.style.left = `${rect.left + rect.width/2}px`;
    });
    point.addEventListener('mouseleave', () => {
      tooltip.style.display = 'none';
    });
  });

  // Punkt początkowy i końcowy
  const start = document.createElement('div');
  start.className = 'event-point start-point';
  start.style.left = '0%';
  bar.appendChild(start);

  const end = document.createElement('div');
  end.className = 'event-point end-point';
  end.style.left = '100%';
  bar.appendChild(end);
});
