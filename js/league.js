
// league.js
// Ładowany po products.js i events.js

window.LEAGUE = {
  seasons: {
    "2024/2025":{
    teams: [
      { position: 1, name: 'Alpha Warriors',    points: 42, kd: 1.23, winRate: 80, avgDmg: 3500 },
      { position: 2, name: 'Linux_kings',       points: 39, kd: 1.19, winRate: 77, avgDmg: 3300 },
      { position: 3, name: 'Beta Squad',        points: 36, kd: 1.12, winRate: 70, avgDmg: 3000 },
      { position: 4, name: 'Gamma Crew',        points: 34, kd: 1.07, winRate: 65, avgDmg: 3100 },
      { position: 5, name: 'Nuggets',        points: 32, kd: 1.03, winRate: 60, avgDmg: 2600 },
      { position: 6, name: 'Tau Masters',       points:  29, kd: 1.00, winRate: 55, avgDmg: 2850 },
      { position: 7, name: 'Nawi',        points: 28, kd: 0.98, winRate: 55, avgDmg: 2570 },
      { position: 8, name: 'Astrala',        points: 26, kd: 0.98, winRate: 53, avgDmg: 2300 },
      { position: 9, name: 'Nindza',        points: 20, kd: 0.95, winRate: 47, avgDmg: 2150 },
      { position: 10, name: 'Wariaty',        points: 18, kd: 0.92, winRate: 40, avgDmg: 1970 },
      { position: 11, name: 'NIPS',        points: 16, kd: 0.90, winRate: 40, avgDmg: 1800 },
      { position: 12, name: 'Dragons',        points: 13, kd: 0.88, winRate: 40, avgDmg: 1760 },
    ],
    ourMatches: [
      { date: '2025-04-10', opponent: 'Nuggets',   result: '2:1', map: 'Inferno, Nuke, Anubis'},
      { date: '2025-04-05', opponent: 'Gamma Crew',    result: '1:2', map: 'Nuke, Mirage, Dust 2' },
      { date: '2025-04-03', opponent: 'Nawi',    result: '2:0', map: 'Ancient, Nuke' },
      { date: '2025-04-02', opponent: 'Astrala',    result: '2:1', map: 'Anubis, Train, Mirage' },
    ]
  },
  "2023/2024": {
    teams: [
      { position: 1, name: "Linux_kings",    points:  88, kd: 1.28, winRate: 82, avgDmg: 4400 },
      { position: 2, name: "Beta Squad", points:  85, kd: 1.25, winRate: 80, avgDmg: 4300 },
      { position: 3, name: "Gamma Crew",     points:  82, kd: 1.22, winRate: 78, avgDmg: 4200 },
      { position: 4, name: "Alpha Warriors",     points:  80, kd: 1.20, winRate: 75, avgDmg: 4100 },
      { position: 5, name: "Astrala",        points:  77, kd: 1.18, winRate: 73, avgDmg: 4000 },
      { position: 6, name: "NIPS",    points:  72, kd: 1.15, winRate: 70, avgDmg: 3800 },
      { position: 7, name: "Nawi",        points:  68, kd: 1.10, winRate: 68, avgDmg: 3600 },
      { position: 8, name: "Cyber Titans",   points:  65, kd: 1.08, winRate: 65, avgDmg: 3500 },
      { position: 9, name: "Nindza",         points:  60, kd: 1.00, winRate: 60, avgDmg: 3300 },
      { position:10, name: "Dragons",           points:  55, kd: 0.95, winRate: 55, avgDmg: 3100 },
      { position:11, name: "Phantom Riders", points:  50, kd: 0.90, winRate: 50, avgDmg: 2800 },
      { position:12, name: "Omega Force",        points:  45, kd: 0.85, winRate: 45, avgDmg: 2600 }
    ],
    ourMatches: [
      {
        "date": "2023-09-01",
        "opponent": "Beta Squad",
        "result": "0:2",
        "map": "Anubis, Nuke"
      },
      {
        "date": "2023-09-01",
        "opponent": "Beta Squad",
        "result": "1:2",
        "map": "Inferno, Ancient, Vertigo"
      },
      {
        "date": "2023-09-08",
        "opponent": "Beta Squad",
        "result": "1:2",
        "map": "Nuke, Inferno, Anubis"
      },
      {
        "date": "2023-09-08",
        "opponent": "Gamma Crew",
        "result": "2:0",
        "map": "Ancient, Mirage"
      },
      {
        "date": "2023-09-15",
        "opponent": "Gamma Crew",
        "result": "2:1",
        "map": "Dust 2, Inferno, Nuke"
      },
      {
        "date": "2023-09-15",
        "opponent": "Gamma Crew",
        "result": "0:2",
        "map": "Ancient, Vertigo"
      },
      {
        "date": "2023-09-22",
        "opponent": "Alpha Warriors",
        "result": "2:0",
        "map": "Train, Anubis"
      },
      {
        "date": "2023-09-22",
        "opponent": "Alpha Warriors",
        "result": "2:1",
        "map": "Inferno, Mirage, Dust 2"
      },
      {
        "date": "2023-09-29",
        "opponent": "Alpha Warriors",
        "result": "2:1",
        "map": "Train, Ancient, Inferno"
      },
      {
        "date": "2023-09-29",
        "opponent": "Astrala",
        "result": "2:1",
        "map": "Vertigo, Anubis, Nuke"
      },
      {
        "date": "2023-10-06",
        "opponent": "Astrala",
        "result": "1:2",
        "map": "Mirage, Nuke, Anubis"
      },
      {
        "date": "2023-10-06",
        "opponent": "Astrala",
        "result": "0:2",
        "map": "Vertigo, Mirage"
      },
      {
        "date": "2023-10-13",
        "opponent": "NIPS",
        "result": "0:2",
        "map": "Vertigo, Anubis"
      },
      {
        "date": "2023-10-13",
        "opponent": "NIPS",
        "result": "2:1",
        "map": "Train, Mirage, Dust 2"
      },
      {
        "date": "2023-10-20",
        "opponent": "NIPS",
        "result": "1:2",
        "map": "Nuke, Vertigo, Ancient"
      },
      {
        "date": "2023-10-20",
        "opponent": "Nawi",
        "result": "1:2",
        "map": "Mirage, Nuke, Dust 2"
      },
      {
        "date": "2023-10-27",
        "opponent": "Nawi",
        "result": "2:1",
        "map": "Vertigo, Inferno, Anubis"
      },
      {
        "date": "2023-10-27",
        "opponent": "Nawi",
        "result": "2:1",
        "map": "Vertigo, Dust 2, Nuke"
      },
      {
        "date": "2023-11-03",
        "opponent": "Cyber Titans",
        "result": "2:0",
        "map": "Train, Ancient"
      },
      {
        "date": "2023-11-03",
        "opponent": "Cyber Titans",
        "result": "2:0",
        "map": "Ancient, Mirage"
      },
      {
        "date": "2023-11-10",
        "opponent": "Cyber Titans",
        "result": "0:2",
        "map": "Train, Mirage"
      },
      {
        "date": "2023-11-10",
        "opponent": "Nindza",
        "result": "0:2",
        "map": "Mirage, Dust 2"
      },
      {
        "date": "2023-11-17",
        "opponent": "Nindza",
        "result": "2:1",
        "map": "Mirage, Inferno, Train"
      },
      {
        "date": "2023-11-17",
        "opponent": "Nindza",
        "result": "2:0",
        "map": "Nuke, Train"
      },
      {
        "date": "2023-11-24",
        "opponent": "Dragons",
        "result": "2:0",
        "map": "Mirage, Dust 2"
      },
      {
        "date": "2023-11-24",
        "opponent": "Dragons",
        "result": "0:2",
        "map": "Ancient, Train"
      },
      {
        "date": "2023-12-01",
        "opponent": "Dragons",
        "result": "1:2",
        "map": "Ancient, Vertigo, Nuke"
      },
      {
        "date": "2023-12-01",
        "opponent": "Phantom Riders",
        "result": "2:0",
        "map": "Vertigo, Inferno"
      },
      {
        "date": "2023-12-08",
        "opponent": "Phantom Riders",
        "result": "2:1",
        "map": "Vertigo, Inferno, Anubis"
      },
      {
        "date": "2023-12-08",
        "opponent": "Phantom Riders",
        "result": "2:0",
        "map": "Dust 2, Anubis"
      },
      {
        "date": "2023-12-15",
        "opponent": "Omega Force",
        "result": "2:1",
        "map": "Inferno, Vertigo, Mirage"
      },
      {
        "date": "2023-12-15",
        "opponent": "Omega Force",
        "result": "1:2",
        "map": "Mirage, Vertigo, Nuke"
      },
      {
        "date": "2023-12-22",
        "opponent": "Omega Force",
        "result": "2:1",
        "map": "Train, Dust 2, Ancient"
      }
    ]  // tu możesz dodać swoje mecze
  },

  "2022/2023": {
    teams: [
      { position: 1, name: "Astrala", points:  85, kd: 1.25, winRate: 79, avgDmg: 4200 },
      { position: 2, name: "NIPS",     points:  83, kd: 1.22, winRate: 78, avgDmg: 4100 },
      { position: 3, name: "Linux_kings",    points:  80, kd: 1.20, winRate: 75, avgDmg: 4000 },
      { position: 4, name: "Omega Force",    points:  78, kd: 1.18, winRate: 73, avgDmg: 3900 },
      { position: 5, name: "Nuggets",        points:  75, kd: 1.15, winRate: 70, avgDmg: 3800 },
      { position: 6, name: "Dragons",    points:  72, kd: 1.12, winRate: 68, avgDmg: 3600 },
      { position: 7, name: "Wariaty",        points:  70, kd: 1.10, winRate: 66, avgDmg: 3500 },
      { position: 8, name: "Nawi",           points:  65, kd: 1.05, winRate: 62, avgDmg: 3300 },
      { position: 9, name: "Nindza",         points:  60, kd: 1.00, winRate: 58, avgDmg: 3100 },
      { position:10, name: "Cyber Titans",        points:  55, kd: 0.95, winRate: 55, avgDmg: 2900 },
      { position:11, name: "Shadow Clan",    points:  50, kd: 0.90, winRate: 50, avgDmg: 2700 },
      { position:12, name: "Phantom Riders",        points:  45, kd: 0.85, winRate: 40, avgDmg: 2600 }
    ],
    ourMatches: [
      {
        "date": "2022-09-01",
        "opponent": "Astrala",
        "result": "1:2",
        "map": "Vertigo, Train, Mirage"
      },
      {
        "date": "2022-09-01",
        "opponent": "Astrala",
        "result": "0:2",
        "map": "Mirage, Anubis"
      },
      {
        "date": "2022-09-08",
        "opponent": "Astrala",
        "result": "1:2",
        "map": "Mirage, Anubis, Ancient"
      },
      {
        "date": "2022-09-08",
        "opponent": "NIPS",
        "result": "1:2",
        "map": "Ancient, Nuke, Dust 2"
      },
      {
        "date": "2022-09-15",
        "opponent": "NIPS",
        "result": "0:2",
        "map": "Anubis, Nuke"
      },
      {
        "date": "2022-09-15",
        "opponent": "NIPS",
        "result": "0:2",
        "map": "Mirage, Train"
      },
      {
        "date": "2022-09-22",
        "opponent": "Omega Force",
        "result": "2:1",
        "map": "Anubis, Mirage, Ancient"
      },
      {
        "date": "2022-09-22",
        "opponent": "Omega Force",
        "result": "2:0",
        "map": "Anubis, Ancient"
      },
      {
        "date": "2022-09-29",
        "opponent": "Omega Force",
        "result": "0:2",
        "map": "Mirage, Anubis"
      },
      {
        "date": "2022-09-29",
        "opponent": "Nuggets",
        "result": "1:2",
        "map": "Vertigo, Mirage, Dust 2"
      },
      {
        "date": "2022-10-06",
        "opponent": "Nuggets",
        "result": "2:1",
        "map": "Mirage, Dust 2, Nuke"
      },
      {
        "date": "2022-10-06",
        "opponent": "Nuggets",
        "result": "1:2",
        "map": "Vertigo, Mirage, Anubis"
      },
      {
        "date": "2022-10-13",
        "opponent": "Dragons",
        "result": "2:1",
        "map": "Anubis, Dust 2, Ancient"
      },
      {
        "date": "2022-10-13",
        "opponent": "Dragons",
        "result": "0:2",
        "map": "Vertigo, Train"
      },
      {
        "date": "2022-10-20",
        "opponent": "Dragons",
        "result": "0:2",
        "map": "Inferno, Train"
      },
      {
        "date": "2022-10-20",
        "opponent": "Wariaty",
        "result": "2:1",
        "map": "Train, Inferno, Nuke"
      },
      {
        "date": "2022-10-27",
        "opponent": "Wariaty",
        "result": "0:2",
        "map": "Nuke, Vertigo"
      },
      {
        "date": "2022-10-27",
        "opponent": "Wariaty",
        "result": "2:0",
        "map": "Nuke, Anubis"
      },
      {
        "date": "2022-11-03",
        "opponent": "Nawi",
        "result": "1:2",
        "map": "Ancient, Vertigo, Dust 2"
      },
      {
        "date": "2022-11-03",
        "opponent": "Nawi",
        "result": "1:2",
        "map": "Ancient, Train, Vertigo"
      },
      {
        "date": "2022-11-10",
        "opponent": "Nawi",
        "result": "2:0",
        "map": "Train, Ancient"
      },
      {
        "date": "2022-11-10",
        "opponent": "Nindza",
        "result": "0:2",
        "map": "Dust 2, Vertigo"
      },
      {
        "date": "2022-11-17",
        "opponent": "Nindza",
        "result": "0:2",
        "map": "Nuke, Inferno"
      },
      {
        "date": "2022-11-17",
        "opponent": "Nindza",
        "result": "0:2",
        "map": "Vertigo, Mirage"
      },
      {
        "date": "2022-11-24",
        "opponent": "Cyber Titans",
        "result": "1:2",
        "map": "Nuke, Anubis, Train"
      },
      {
        "date": "2022-11-24",
        "opponent": "Cyber Titans",
        "result": "2:0",
        "map": "Nuke, Inferno"
      },
      {
        "date": "2022-12-01",
        "opponent": "Cyber Titans",
        "result": "0:2",
        "map": "Dust 2, Mirage"
      },
      {
        "date": "2022-12-01",
        "opponent": "Shadow Clan",
        "result": "1:2",
        "map": "Vertigo, Dust 2, Train"
      },
      {
        "date": "2022-12-08",
        "opponent": "Shadow Clan",
        "result": "2:0",
        "map": "Mirage, Vertigo"
      },
      {
        "date": "2022-12-08",
        "opponent": "Shadow Clan",
        "result": "0:2",
        "map": "Nuke, Inferno"
      },
      {
        "date": "2022-12-15",
        "opponent": "Phantom Riders",
        "result": "1:2",
        "map": "Train, Anubis, Nuke"
      },
      {
        "date": "2022-12-15",
        "opponent": "Phantom Riders",
        "result": "0:2",
        "map": "Dust 2, Ancient"
      },
      {
        "date": "2022-12-22",
        "opponent": "Phantom Riders",
        "result": "2:1",
        "map": "Ancient, Inferno, Dust 2"
      }
    ]
  },

  "2021/2022": {
    teams: [
      { position: 1, name: "Nawi", points:  82, kd: 1.20, winRate: 75, avgDmg: 4100 },
      { position: 2, name: "Cyber Titans",     points:  80, kd: 1.18, winRate: 74, avgDmg: 4000 },
      { position: 3, name: "Nindza",     points:  78, kd: 1.15, winRate: 72, avgDmg: 3900 },
      { position: 4, name: "Phantom Riders",        points:  75, kd: 1.10, winRate: 70, avgDmg: 3800 },
      { position: 5, name: "Linux_kings",    points:  70, kd: 1.08, winRate: 68, avgDmg: 3700 },
      { position: 6, name: "Beta Squad",   points:  68, kd: 1.05, winRate: 65, avgDmg: 3500 },
      { position: 7, name: "Tau Masters",           points:  65, kd: 1.02, winRate: 63, avgDmg: 3400 },
      { position: 8, name: "Astrala",         points:  60, kd: 1.00, winRate: 60, avgDmg: 3200 },
      { position: 9, name: "Wariaty",        points:  55, kd: 0.95, winRate: 55, avgDmg: 3000 },
      { position:10, name: "NIPS",           points:  50, kd: 0.90, winRate: 50, avgDmg: 2800 },
      { position:11, name: "Nuggets", points:  45, kd: 0.85, winRate: 45, avgDmg: 2600 },
      { position:12, name: "Dragons",        points:  40, kd: 0.80, winRate: 40, avgDmg: 2400 }
    ],
    ourMatches: [
      {
        "date": "2021-09-01",
        "opponent": "Nawi",
        "result": "0:2",
        "map": "Dust 2, Ancient, Mirage"
      },
      {
        "date": "2021-09-01",
        "opponent": "Nawi",
        "result": "0:2",
        "map": "Inferno, Nuke, Anubis"
      },
      {
        "date": "2021-09-08",
        "opponent": "Nawi",
        "result": "1:2",
        "map": "Inferno, Train, Anubis"
      },
      {
        "date": "2021-09-08",
        "opponent": "Cyber Titans",
        "result": "2:0",
        "map": "Vertigo, Mirage"
      },
      {
        "date": "2021-09-15",
        "opponent": "Cyber Titans",
        "result": "0:2",
        "map": "Dust 2, Vertigo"
      },
      {
        "date": "2021-09-15",
        "opponent": "Cyber Titans",
        "result": "0:2",
        "map": "Ancient, Train, Nuke"
      },
      {
        "date": "2021-09-22",
        "opponent": "Nindza",
        "result": "0:2",
        "map": "Dust 2, Inferno"
      },
      {
        "date": "2021-09-22",
        "opponent": "Nindza",
        "result": "0:2",
        "map": "Train, Mirage, Ancient"
      },
      {
        "date": "2021-09-29",
        "opponent": "Nindza",
        "result": "2:1",
        "map": "Train, Nuke, Inferno"
      },
      {
        "date": "2021-09-29",
        "opponent": "Phantom Riders",
        "result": "1:2",
        "map": "Mirage, Vertigo"
      },
      {
        "date": "2021-10-06",
        "opponent": "Phantom Riders",
        "result": "2:1",
        "map": "Nuke, Anubis"
      },
      {
        "date": "2021-10-06",
        "opponent": "Phantom Riders",
        "result": "2:1",
        "map": "Anubis, Vertigo, Ancient"
      },
      {
        "date": "2021-10-13",
        "opponent": "Beta Squad",
        "result": "1:2",
        "map": "Mirage, Nuke, Train"
      },
      {
        "date": "2021-10-13",
        "opponent": "Beta Squad",
        "result": "2:0",
        "map": "Train, Ancient"
      },
      {
        "date": "2021-10-20",
        "opponent": "Beta Squad",
        "result": "2:1",
        "map": "Anubis, Dust 2"
      },
      {
        "date": "2021-10-20",
        "opponent": "Tau Masters",
        "result": "1:2",
        "map": "Nuke, Ancient, Dust 2"
      },
      {
        "date": "2021-10-27",
        "opponent": "Tau Masters",
        "result": "2:1",
        "map": "Vertigo, Mirage, Nuke"
      },
      {
        "date": "2021-10-27",
        "opponent": "Tau Masters",
        "result": "2:0",
        "map": "Vertigo, Nuke, Ancient"
      },
      {
        "date": "2021-11-03",
        "opponent": "Astrala",
        "result": "2:0",
        "map": "Inferno, Dust 2"
      },
      {
        "date": "2021-11-03",
        "opponent": "Astrala",
        "result": "1:2",
        "map": "Inferno, Train"
      },
      {
        "date": "2021-11-10",
        "opponent": "Astrala",
        "result": "0:2",
        "map": "Ancient, Inferno"
      },
      {
        "date": "2021-11-10",
        "opponent": "Wariaty",
        "result": "2:1",
        "map": "Inferno, Mirage"
      },
      {
        "date": "2021-11-17",
        "opponent": "Wariaty",
        "result": "1:2",
        "map": "Mirage, Vertigo, Nuke"
      },
      {
        "date": "2021-11-17",
        "opponent": "Wariaty",
        "result": "2:0",
        "map": "Nuke, Ancient, Mirage"
      },
      {
        "date": "2021-11-24",
        "opponent": "NIPS",
        "result": "2:0",
        "map": "Anubis, Nuke"
      },
      {
        "date": "2021-11-24",
        "opponent": "NIPS",
        "result": "2:0",
        "map": "Train, Nuke, Vertigo"
      },
      {
        "date": "2021-12-01",
        "opponent": "NIPS",
        "result": "2:1",
        "map": "Vertigo, Nuke, Inferno"
      },
      {
        "date": "2021-12-01",
        "opponent": "Nuggets",
        "result": "0:2",
        "map": "Anubis, Inferno, Vertigo"
      },
      {
        "date": "2021-12-08",
        "opponent": "Nuggets",
        "result": "1:2",
        "map": "Nuke, Inferno"
      },
      {
        "date": "2021-12-08",
        "opponent": "Nuggets",
        "result": "2:0",
        "map": "Nuke, Vertigo, Dust 2"
      },
      {
        "date": "2021-12-15",
        "opponent": "Dragons",
        "result": "2:1",
        "map": "Nuke, Mirage, Train"
      },
      {
        "date": "2021-12-15",
        "opponent": "Dragons",
        "result": "2:1",
        "map": "Nuke, Ancient, Train"
      },
      {
        "date": "2021-12-22",
        "opponent": "Dragons",
        "result": "2:1",
        "map": "Ancient, Nuke"
      }
    ]
  },

  "2020/2021": {
    teams: [
      { position: 1, name: "Faza Clan", points:  75, kd: 1.15, winRate: 70, avgDmg: 3800 },
      { position: 2, name: "Omega Force",    points:  73, kd: 1.12, winRate: 68, avgDmg: 3700 },
      { position: 3, name: "Gamma Crew",     points:  70, kd: 1.10, winRate: 65, avgDmg: 3600 },
      { position: 4, name: "Nuggets",        points:  68, kd: 1.08, winRate: 63, avgDmg: 3500 },
      { position: 5, name: "Tau Masters",    points:  65, kd: 1.05, winRate: 60, avgDmg: 3400 },
      { position: 6, name: "Nawi",           points:  60, kd: 1.00, winRate: 55, avgDmg: 3200 },
      { position: 7, name: "NIPS",        points:  55, kd: 0.95, winRate: 50, avgDmg: 3000 },
      { position: 8, name: "Linux_kings",    points:  50, kd: 0.92, winRate: 48, avgDmg: 2900 },
      { position: 9, name: "Nindza",         points:  45, kd: 0.90, winRate: 45, avgDmg: 2700 },
      { position:10, name: "G1",        points:  40, kd: 0.85, winRate: 40, avgDmg: 2500 },
      { position:11, name: "ShadowIGL",           points:  35, kd: 0.80, winRate: 35, avgDmg: 2300 },
      { position:12, name: "Wariaty",    points:  30, kd: 0.75, winRate: 30, avgDmg: 2100 }
    ],
    ourMatches: [
      {
        "date": "2020-09-01",
        "opponent": "Faza Clan",
        "result": "2:1",
        "map": "Train, Dust 2, Nuke"
      },
      {
        "date": "2020-09-01",
        "opponent": "Faza Clan",
        "result": "0:2",
        "map": "Inferno, Dust 2"
      },
      {
        "date": "2020-09-08",
        "opponent": "Faza Clan",
        "result": "2:1",
        "map": "Anubis, Ancient"
      },
      {
        "date": "2020-09-08",
        "opponent": "Omega Force",
        "result": "2:1",
        "map": "Train, Dust 2"
      },
      {
        "date": "2020-09-15",
        "opponent": "Omega Force",
        "result": "2:0",
        "map": "Train, Anubis"
      },
      {
        "date": "2020-09-15",
        "opponent": "Omega Force",
        "result": "0:2",
        "map": "Train, Mirage"
      },
      {
        "date": "2020-09-22",
        "opponent": "Gamma Crew",
        "result": "1:2",
        "map": "Inferno, Anubis"
      },
      {
        "date": "2020-09-22",
        "opponent": "Gamma Crew",
        "result": "2:0",
        "map": "Nuke, Mirage, Ancient"
      },
      {
        "date": "2020-09-29",
        "opponent": "Gamma Crew",
        "result": "1:2",
        "map": "Dust 2, Nuke, Vertigo"
      },
      {
        "date": "2020-09-29",
        "opponent": "Nuggets",
        "result": "0:2",
        "map": "Mirage, Vertigo"
      },
      {
        "date": "2020-10-06",
        "opponent": "Nuggets",
        "result": "2:1",
        "map": "Vertigo, Nuke"
      },
      {
        "date": "2020-10-06",
        "opponent": "Nuggets",
        "result": "2:1",
        "map": "Anubis, Vertigo, Nuke"
      },
      {
        "date": "2020-10-13",
        "opponent": "Tau Masters",
        "result": "2:1",
        "map": "Ancient, Train, Mirage"
      },
      {
        "date": "2020-10-13",
        "opponent": "Tau Masters",
        "result": "2:0",
        "map": "Dust 2, Vertigo"
      },
      {
        "date": "2020-10-20",
        "opponent": "Tau Masters",
        "result": "2:0",
        "map": "Nuke, Mirage"
      },
      {
        "date": "2020-10-20",
        "opponent": "Nawi",
        "result": "1:2",
        "map": "Train, Anubis"
      },
      {
        "date": "2020-10-27",
        "opponent": "Nawi",
        "result": "2:0",
        "map": "Dust 2, Train, Nuke"
      },
      {
        "date": "2020-10-27",
        "opponent": "Nawi",
        "result": "0:2",
        "map": "Dust 2, Nuke"
      },
      {
        "date": "2020-11-03",
        "opponent": "NIPS",
        "result": "1:2",
        "map": "Train, Vertigo"
      },
      {
        "date": "2020-11-03",
        "opponent": "NIPS",
        "result": "0:2",
        "map": "Vertigo, Ancient, Anubis"
      },
      {
        "date": "2020-11-10",
        "opponent": "NIPS",
        "result": "2:0",
        "map": "Inferno, Anubis, Dust 2"
      },
      {
        "date": "2020-11-10",
        "opponent": "Nindza",
        "result": "0:2",
        "map": "Dust 2, Vertigo, Ancient"
      },
      {
        "date": "2020-11-17",
        "opponent": "Nindza",
        "result": "2:0",
        "map": "Inferno, Nuke, Vertigo"
      },
      {
        "date": "2020-11-17",
        "opponent": "Nindza",
        "result": "1:2",
        "map": "Ancient, Mirage, Vertigo"
      },
      {
        "date": "2020-11-24",
        "opponent": "G1",
        "result": "2:1",
        "map": "Mirage, Train, Dust 2"
      },
      {
        "date": "2020-11-24",
        "opponent": "G1",
        "result": "2:1",
        "map": "Mirage, Train, Inferno"
      },
      {
        "date": "2020-12-01",
        "opponent": "G1",
        "result": "2:0",
        "map": "Train, Nuke, Inferno"
      },
      {
        "date": "2020-12-01",
        "opponent": "ShadowIGL",
        "result": "0:2",
        "map": "Mirage, Dust 2"
      },
      {
        "date": "2020-12-08",
        "opponent": "ShadowIGL",
        "result": "1:2",
        "map": "Dust 2, Ancient"
      },
      {
        "date": "2020-12-08",
        "opponent": "ShadowIGL",
        "result": "0:2",
        "map": "Anubis, Inferno, Dust 2"
      },
      {
        "date": "2020-12-15",
        "opponent": "Wariaty",
        "result": "0:2",
        "map": "Dust 2, Ancient, Inferno"
      },
      {
        "date": "2020-12-15",
        "opponent": "Wariaty",
        "result": "1:2",
        "map": "Train, Dust 2"
      },
      {
        "date": "2020-12-22",
        "opponent": "Wariaty",
        "result": "0:2",
        "map": "Vertigo, Ancient, Mirage"
      }
    ]
  }
}
};



  
document.addEventListener('DOMContentLoaded', () => {
  const btns        = document.querySelectorAll('.season-btn');
  const titleEl     = document.getElementById('leagueTitle');
  const leagueBody  = document.querySelector('.league-table tbody');
  const matchesBody = document.querySelector('.matches-table tbody');

  // Funkcja renderująca dane dla zadanego sezonu
  function renderSeason(seasonKey) {
    const data = window.LEAGUE.seasons[seasonKey];
    if (!data) return console.warn(`Brak danych dla sezonu ${seasonKey}`);

    // Nagłówek
    titleEl.textContent = `Liga ${seasonKey}`;

    // Tabela ligi
    leagueBody.innerHTML = '';
    data.teams.forEach(t => {
      const tr = document.createElement('tr');
      if (t.name === 'Linux_kings') tr.classList.add('highlight');
      tr.innerHTML = `
        <td>${t.position}</td>
        <td>${t.name}</td>
        <td>${t.points}</td>
        <td>${t.kd.toFixed(2)}</td>
        <td>${t.winRate}%</td>
        <td>${t.avgDmg}</td>
      `;
      leagueBody.appendChild(tr);
    });

    // Nasze mecze
    matchesBody.innerHTML = '';
    data.ourMatches.forEach(m => {
      const tr = document.createElement('tr');
      const isWin = m.result.startsWith('2');
      tr.innerHTML = `
        <td>${m.date}</td>
        <td>${m.opponent}</td>
        <td class="${isWin ? 'result-win' : 'result-lose'}">${m.result}</td>
        <td>${m.map}</td>
      `;
      matchesBody.appendChild(tr);
    });
  }

  // Ustawienie pierwszego sezonu jako aktywnego
  let activeBtn = document.querySelector('.season-btn');
  if (activeBtn) {
    activeBtn.classList.add('active');
    renderSeason(activeBtn.dataset.season);
  }

  // Obsługa kliknięcia w przycisk sezonu
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn === activeBtn) return;
      // zmień klasę active
      activeBtn.classList.remove('active');
      btn.classList.add('active');
      activeBtn = btn;
      // render nowych danych
      renderSeason(btn.dataset.season);
    });
  });
  // Jeśli nie ma żadnych season-btn, wyrenderuj domyślny sezon:
if (btns.length === 0) {
  // pobierz pierwszy klucz z obiektu sezonów
  const defaultSeason = Object.keys(window.LEAGUE.seasons)[0];
  renderSeason(defaultSeason);
}

});
  
