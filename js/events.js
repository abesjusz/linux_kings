// js/events.js

window.EVENTS = [
  {
    id: "e1",
    name: "Eliminacje na IEM Katowice",
    date: "2025-05-10",
    description: "Dwudniowy turniej z eliminacjami i fazą grupową.",
    type: "tournament",
    days: [
      {
        day: 1,
        title: "Dzień 1 – Eliminacje",
        groups: [
          {
            id: "A",
            teams: ["Linux_kings","Beta Squad","Gamma Crew","Alpha Warriors"],
            matches: [
              { time:"10:00", teamA:"Linux_kings",   teamB:"Beta Squad"    },
              { time:"11:00", teamA:"Linux_kings",   teamB:"Gamma Crew"    },
              { time:"12:00", teamA:"Linux_kings",   teamB:"Alpha Warriors"},
              { time:"13:00", teamA:"Beta Squad",    teamB:"Gamma Crew"    },
              { time:"14:00", teamA:"Beta Squad",    teamB:"Alpha Warriors"},
              { time:"15:00", teamA:"Gamma Crew",    teamB:"Alpha Warriors"}
            ]
          },
          {
            id: "B",
            teams: ["Astrala","NIPS","Nawi","Cyber Titans"],
            matches: [
              { time:"10:00", teamA:"Astrala",       teamB:"NIPS"         },
              { time:"11:00", teamA:"Astrala",       teamB:"Nawi"         },
              { time:"12:00", teamA:"Astrala",       teamB:"Cyber Titans" },
              { time:"13:00", teamA:"NIPS",          teamB:"Nawi"         },
              { time:"14:00", teamA:"NIPS",          teamB:"Cyber Titans" },
              { time:"15:00", teamA:"Nawi",          teamB:"Cyber Titans" }
            ]
          },
          {
            id: "C",
            teams: ["Nindza","Dragons","Phantom Riders","Omega Force"],
            matches: [
              { time:"10:00", teamA:"Nindza",        teamB:"Dragons"      },
              { time:"11:00", teamA:"Nindza",        teamB:"Phantom Riders"},
              { time:"12:00", teamA:"Nindza",        teamB:"Omega Force"  },
              { time:"13:00", teamA:"Dragons",       teamB:"Phantom Riders"},
              { time:"14:00", teamA:"Dragons",       teamB:"Omega Force"  },
              { time:"15:00", teamA:"Phantom Riders",teamB:"Omega Force"  }
            ]
          },
          {
            id: "D",
            teams: ["Nuggets","G1","Faza Clan","Mous"],
            matches: [
              { time:"10:00", teamA:"Nuggets",       teamB:"G1"           },
              { time:"11:00", teamA:"Nuggets",       teamB:"Faza Clan"    },
              { time:"12:00", teamA:"Nuggets",       teamB:"Mous"         },
              { time:"13:00", teamA:"G1",            teamB:"Faza Clan"    },
              { time:"14:00", teamA:"G1",            teamB:"Mous"         },
              { time:"15:00", teamA:"Faza Clan",     teamB:"Mous"         }
            ]
          },
          {
            id: "E",
            teams: ["ENDZE","Virtuz Proz","Brainrot","Twojstary"],
            matches: [
              { time:"10:00", teamA:"ENDZE",         teamB:"Virtuz Proz"  },
              { time:"11:00", teamA:"ENDZE",         teamB:"Brainrot"     },
              { time:"12:00", teamA:"ENDZE",         teamB:"Twojstary"    },
              { time:"13:00", teamA:"Virtuz Proz",   teamB:"Brainrot"     },
              { time:"14:00", teamA:"Virtuz Proz",   teamB:"Twojstary"    },
              { time:"15:00", teamA:"Brainrot",      teamB:"Twojstary"    }
            ]
          },
          {
            id: "F",
            teams: ["Mongoly","Ultra Ninjas","Silent Specters","Byte Crushers"],
            matches: [
              { time:"10:00", teamA:"Mongoly",       teamB:"Ultra Ninjas"   },
              { time:"11:00", teamA:"Mongoly",       teamB:"Silent Specters"},
              { time:"12:00", teamA:"Mongoly",       teamB:"Byte Crushers"  },
              { time:"13:00", teamA:"Ultra Ninjas",  teamB:"Silent Specters"},
              { time:"14:00", teamA:"Ultra Ninjas",  teamB:"Byte Crushers"  },
              { time:"15:00", teamA:"Silent Specters",teamB:"Byte Crushers" }
            ]
          },
          {
            id: "G",
            teams: ["Quantum Force","Stealth Ops","Pixel Predators","Code Guardians"],
            matches: [
              { time:"10:00", teamA:"Quantum Force", teamB:"Stealth Ops"   },
              { time:"11:00", teamA:"Quantum Force", teamB:"Pixel Predators"},
              { time:"12:00", teamA:"Quantum Force", teamB:"Code Guardians" },
              { time:"13:00", teamA:"Stealth Ops",    teamB:"Pixel Predators"},
              { time:"14:00", teamA:"Stealth Ops",    teamB:"Code Guardians" },
              { time:"15:00", teamA:"Pixel Predators",teamB:"Code Guardians" }
            ]
          },
          {
            id: "H",
            teams: ["Hack Division","Data Knights","Virtual Valkyries","Phantom Phantoms"],
            matches: [
              { time:"10:00", teamA:"Hack Division",    teamB:"Data Knights"      },
              { time:"11:00", teamA:"Hack Division",    teamB:"Virtual Valkyries" },
              { time:"12:00", teamA:"Hack Division",    teamB:"Phantom Phantoms"  },
              { time:"13:00", teamA:"Data Knights",     teamB:"Virtual Valkyries" },
              { time:"14:00", teamA:"Data Knights",     teamB:"Phantom Phantoms"  },
              { time:"15:00", teamA:"Virtual Valkyries",teamB:"Phantom Phantoms"  }
            ]
          }
        ]
      },
      {
        day: 2,
        title: "Dzień 2 – Faza grupowa",
        groups: [
          {
            id: "I",
            teams: ["Linux_kings","Beta Squad","Gamma Crew","Alpha Warriors","Astrala"],
            matches: [
              { time:"09:00", teamA:"Linux_kings",   teamB:"Beta Squad"     },
              { time:"10:00", teamA:"Linux_kings",   teamB:"Gamma Crew"     },
              { time:"11:00", teamA:"Linux_kings",   teamB:"Alpha Warriors" },
              { time:"12:00", teamA:"Linux_kings",   teamB:"Astrala"        },
              { time:"13:00", teamA:"Beta Squad",    teamB:"Gamma Crew"     },
              { time:"14:00", teamA:"Beta Squad",    teamB:"Alpha Warriors" },
              { time:"15:00", teamA:"Beta Squad",    teamB:"Astrala"        },
              { time:"16:00", teamA:"Gamma Crew",    teamB:"Alpha Warriors" },
              { time:"17:00", teamA:"Gamma Crew",    teamB:"Astrala"        },
              { time:"18:00", teamA:"Alpha Warriors",teamB:"Astrala"        }
            ]
          },
          {
            id: "J",
            teams: ["NIPS","Nawi","Cyber Titans","Nindza","Dragons"],
            matches: [
              { time:"09:00", teamA:"NIPS",          teamB:"Nawi"           },
              { time:"10:00", teamA:"NIPS",          teamB:"Cyber Titans"   },
              { time:"11:00", teamA:"NIPS",          teamB:"Nindza"         },
              { time:"12:00", teamA:"NIPS",          teamB:"Dragons"        },
              { time:"13:00", teamA:"Nawi",          teamB:"Cyber Titans"   },
              { time:"14:00", teamA:"Nawi",          teamB:"Nindza"         },
              { time:"15:00", teamA:"Nawi",          teamB:"Dragons"        },
              { time:"16:00", teamA:"Cyber Titans",  teamB:"Nindza"         },
              { time:"17:00", teamA:"Cyber Titans",  teamB:"Dragons"        },
              { time:"18:00", teamA:"Nindza",        teamB:"Dragons"        }
            ]
          },
          {
            id: "K",
            teams: ["Phantom Riders","Omega Force","Nuggets","G1","Faza Clan"],
            matches: [
              { time:"09:00", teamA:"Phantom Riders", teamB:"Omega Force" },
              { time:"10:00", teamA:"Phantom Riders", teamB:"Nuggets"     },
              { time:"11:00", teamA:"Phantom Riders", teamB:"G1"          },
              { time:"12:00", teamA:"Phantom Riders", teamB:"Faza Clan"   },
              { time:"13:00", teamA:"Omega Force",    teamB:"Nuggets"     },
              { time:"14:00", teamA:"Omega Force",    teamB:"G1"          },
              { time:"15:00", teamA:"Omega Force",    teamB:"Faza Clan"   },
              { time:"16:00", teamA:"Nuggets",        teamB:"G1"          },
              { time:"17:00", teamA:"Nuggets",        teamB:"Faza Clan"   },
              { time:"18:00", teamA:"G1",             teamB:"Faza Clan"   }
            ]
          },
          {
            id: "L",
            teams: ["Mous","ENDZE","Virtuz Proz","Brainrot","Twojstary"],
            matches: [
              { time:"09:00", teamA:"Mous",         teamB:"ENDZE"       },
              { time:"10:00", teamA:"Mous",         teamB:"Virtuz Proz" },
              { time:"11:00", teamA:"Mous",         teamB:"Brainrot"    },
              { time:"12:00", teamA:"Mous",         teamB:"Twojstary"   },
              { time:"13:00", teamA:"ENDZE",        teamB:"Virtuz Proz" },
              { time:"14:00", teamA:"ENDZE",        teamB:"Brainrot"    },
              { time:"15:00", teamA:"ENDZE",        teamB:"Twojstary"   },
              { time:"16:00", teamA:"Virtuz Proz",  teamB:"Brainrot"    },
              { time:"17:00", teamA:"Virtuz Proz",  teamB:"Twojstary"   },
              { time:"18:00", teamA:"Brainrot",     teamB:"Twojstary"   }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "e2",
    name: "PGL",
    date: "2025-05-25",
    description: "Eliminacje",
    type: "eliminations",
  },
  {
    id: "e3",
    name: "Liga (Nuggets)",
    date: "2025-05-06",
    description: "Liga",
    type: "league",
  },
  {
    id: "e4",
    name: "Liga (Nawi)",
    date: "2025-05-02",
    description: "Liga",
    type: "league",
  },
    {
      id: "e5",
      name: "Liga (Beta Squad)",
      date: "2025-04-15",
      description: "Spotkanie z Beta Squad zawsze wystawia naszą dyspozycję na próbę – ich elastyczne taktyki potrafią zaskoczyć już w pierwszej rundzie. Po ostatnim starciu mamy nadzieję na rewanż i pokazanie, że nasza rotacja broni potrafi być równie dynamiczna.",
      type: "league",
      headToHead: [
        { date: "2024-11-17", result: "0:2", map: "Ancient, Mirage" },
        { date: "2024-09-15", result: "2:1", map: "Inferno, Dust 2, Train" },
        { date: "2023-03-15", result: "2:0", map: "Nuke, Mirage" }
      ]
    },
    {
      id: "e6",
      name: "Liga (Gamma Crew)",
      date: "2025-04-17",
      description: "Gamma Crew to nasi wieloletni rywale, z którymi mecze dostarczają zawsze wielu zwrotów akcji. Po ostatnim pojedynku 1:2 chcemy pokazać, że wyciągnęliśmy wnioski i wracamy silniejsi niż kiedykolwiek.",
      type: "league",
      headToHead: [
        { date: "2025-04-05", result: "1:2", map: "Nuke, Mirage, Dust 2" },
        { date: "2024-10-27", result: "2:0", map: "Mirage, Train" },
        { date: "2023-03-10", result: "2:1", map: "Train, Dust 2, Inferno" }
      ]
    },
    {
      id: "e7",
      name: "Liga (Alpha Warriors)",
      date: "2025-04-19",
      description: "Alpha Warriors słyną z doskonałego aiming-u i agresywnej gry na krótkich odcinkach mapy. Mimo że ich CT-side bywa zabójcze, jesteśmy gotowi na ich taktyki i przygotowaliśmy kilka zaskoczeń ofensywnych.",
      type: "league",
      headToHead: [
        { date: "2024-09-29", result: "2:1", map: "Dust 2, Train, Mirage" },
        { date: "2024-05-01", result: "2:0", map: "Inferno, Nuke" },
        { date: "2023-07-10", result: "2:0", map: "Mirage, Nuke" }
      ]
    },
    {
      id: "e8",
      name: "Liga (Nuggets)",
      date: "2025-04-22",
      description: "Nuggets to formacja stawiająca na szybkie rundy – ich pacing potrafi wytrącić z rytmu niedoświadczone zespoły. My jednak trenujemy kontrolowane tempo i liczymy, że w tym meczu to my będziemy dyktować warunki.",
      type: "league",
      headToHead: [
        { date: "2025-04-10", result: "2:1", map: "Inferno, Nuke, Anubis" },
        { date: "2024-08-02", result: "1:2", map: "Dust 2, Vertigo, Train" },
        { date: "2023-11-03", result: "2:1", map: "Nuke, Dust 2, Inferno" }
      ]
    },
    {
      id: "e9",
      name: "Liga (Tau Masters)",
      date: "2025-04-24",
      description: "Tau Masters znani są z głębokich setupów defensywnych i solidnej komunikacji na granicy perfekcji. Naszym celem jest przełamanie ich obrony kreatywnymi wejściami, na które ostatnio nie potrafili zareagować.",
      type: "league",
      headToHead: [
        { date: "2024-06-01", result: "2:0", map: "Mirage, Ancient" },
        { date: "2023-05-01", result: "2:1", map: "Inferno, Dust 2, Train" },
        { date: "2022-09-08", result: "0:2", map: "Train, Vertigo" }
      ]
    },
    {
      id: "e10",
      name: "Liga (Nawi)",
      date: "2025-04-27",
      description: "Nawi wraca na naszą ścieżkę po dłuższej przerwie – ich ukraiński styl gry potrafi być nieprzewidywalny. Będzie to prawdziwy teścik dla naszych calli i sprawdzian wytrzymałości psychicznej.",
      type: "league",
      headToHead: [
        { date: "2025-04-03", result: "2:0", map: "Ancient, Nuke" },
        { date: "2024-12-01", result: "0:2", map: "Inferno, Dust 2" },
        { date: "2023-09-01", result: "2:1", map: "Mirage, Dust 2, Train" }
      ]
    },
    {
      id: "e11",
      name: "Liga (Astrala)",
      date: "2025-04-29",
      description: "Astrala zawsze serwuje nam puzzle na Dust 2 i Anubisie, gdzie ich split-push daje dużo problemów. Przygotowaliśmy jednak kilka niespodzianek w rotacji, które mogą im zaburzyć rytm.",
      type: "league",
      headToHead: [
        { date: "2025-04-02", result: "2:1", map: "Anubis, Train, Mirage" },
        { date: "2024-03-10", result: "2:1", map: "Anubis, Mirage, Dust 2" },
        { date: "2023-11-24", result: "2:0", map: "Vertigo, Mirage" }
      ]
    },
    {
      id: "e12",
      name: "Liga (Nindza)",
      date: "2025-05-01",
      description: "Nindza to młody, ale ambitny skład z doskonałym aimem. Mimo młodego wieku dobrze rozumieją meta i będą trudnym przeciwnikiem na Mirage i Vertigo.",
      type: "league",
      headToHead: [
        { date: "2024-10-20", result: "2:0", map: "Mirage, Dust 2" },
        { date: "2023-10-20", result: "2:1", map: "Inferno, Nuke, Anubis" },
        { date: "2022-11-01", result: "1:2", map: "Train, Dust 2, Mirage" }
      ]
    },
    {
      id: "e13",
      name: "Liga (Wariaty)",
      date: "2025-05-03",
      description: "Wariaty grają chaotycznie, ale potrafią zaskoczyć wybuchowymi rundami. My stawiamy na spokój i precyzję – zobaczymy, czy ich agresja wystarczy, by nas zaskoczyć.",
      type: "league",
      headToHead: [
        { date: "2024-05-15", result: "1:2", map: "Inferno, Dust 2, Nuke" },
        { date: "2023-05-01", result: "2:1", map: "Mirage, Train, Dust 2" },
        { date: "2022-11-01", result: "0:2", map: "Dust 2, Anubis" }
      ]
    },
  
    {
      id: "e14",
      name: "Turniej: Summer Showdown",
      date: "2025-05-15",
      description: "Letni turniej międzydzielnicowy zgromadził zespoły z całego regionu w nieformalnej atmosferze. Zamierzamy wykorzystać to wydarzenie, by przetestować nowe strategie przed kolejnymi ligowymi starciami.",
      type: "tournament"
    },
  
    {
      id: "e15",
      name: "Liga (NIPS)",
      date: "2025-05-23",
      description: "NIPS to ekipa o silnym defense’ie, ich retake’i są zazwyczaj wzorowe. Chcemy sprawdzić nasze nowe utility na ich site’ach i złamać ich twardą obronę.",
      type: "league",
      headToHead: [
        { date: "2024-09-29", result: "0:2", map: "Inferno, Vertigo" },
        { date: "2023-09-29", result: "2:1", map: "Mirage, Ancient, Dust 2" },
        { date: "2022-09-08", result: "2:1", map: "Ancient, Mirage, Dust 2" }
      ]
    },
    {
      id: "e16",
      name: "Liga (Dragons)",
      date: "2025-05-25",
      description: "Dragons słyną z agresywnych inicjacji i szybkich pp. Zbadamy ich granatem na B Site, aby wyeliminować ich momentum już w pierwszym secie.",
      type: "league",
      headToHead: [
        // poprawione: dodano trzecią mapę
        { date: "2024-10-27", result: "1:2", map: "Ancient, Anubis, Mirage" },
        // poprawione: dodano trzecią mapę
        { date: "2023-11-03", result: "2:1", map: "Nuke, Dust 2, Inferno" },
        { date: "2022-11-01", result: "0:2", map: "Train, Dust 2" }
      ]
    },
    {
      id: "e17",
      name: "Liga (Beta Squad)",
      date: "2025-05-27",
      description: "Rewanż z Beta Squad zawsze jest smaczny – znają już nasze standardowe wejścia. Tym razem zaskoczymy ich rotacją i przełamiemy w kluczowej rundzie.",
      type: "league",
      headToHead: [
        { date: "2025-04-15", result: "0:2", map: "Ancient, Mirage" },
        { date: "2024-11-17", result: "0:2", map: "Ancient, Mirage" },
        { date: "2024-09-15", result: "2:1", map: "Inferno, Dust 2, Train" }
      ]
    },
    {
      id: "e18",
      name: "Liga (Gamma Crew)",
      date: "2025-05-30",
      description: "Kolejne starcie z Gamma Crew – celujemy w poprawę wyniku z ostatniego meczu. Ich mechanika to poziom najwyższy, ale wierzymy w nasze zgranie i czas reakcji.",
      type: "league",
      headToHead: [
        { date: "2025-04-17", result: "2:1", map: "Mirage, Train, Dust 2" },
        { date: "2024-10-27", result: "2:0", map: "Mirage, Train" },
        { date: "2023-03-10", result: "2:1", map: "Train, Dust 2, Inferno" }
      ]
    },
    {
      id: "e19",
      name: "Liga (Alpha Warriors)",
      date: "2025-06-02",
      description: "Decydujące spotkanie z Alpha Warriors może przesądzić o pozycji w tabeli. Przygotowaliśmy kilka pomysłów taktycznych na ich CT-side, na które ostatnio zaskakująco dobrze reagowaliśmy.",
      type: "league",
      headToHead: [
        { date: "2025-04-19", result: "2:1", map: "Dust 2, Train, Mirage" },
        { date: "2024-09-29", result: "2:1", map: "Dust 2, Train, Mirage" },
        { date: "2024-05-01", result: "2:0", map: "Inferno, Nuke" }
      ]
    },
  
    {
      id: "e20",
      name: "Turniej: Blizzard Cup",
      date: "2025-06-10",
      description: "Zimowa odsłona turnieju Blizzard Cup przynosi intensywne starcia w chłodnej atmosferze online. Będzie to doskonała okazja, by przetestować naszą odporność na presję w serii BO3.",
      type: "tournament"
    },
  
    {
      id: "e21",
      name: "Liga (Tau Masters)",
      date: "2025-06-24",
      description: "Po przerwie wracamy do ligi przeciwko Tau Masters – ich defensywa na Vertigo potrafi zaskoczyć. Zapowiada się test naszego nowego IGL w sytuacjach clutch.",
      type: "league",
      headToHead: [
        { date: "2025-04-24", result: "2:0", map: "Mirage, Ancient" },
        { date: "2024-06-01", result: "2:0", map: "Mirage, Ancient" },
        { date: "2023-05-01", result: "2:1", map: "Inferno, Dust 2, Train" }
      ]
    },
    {
      id: "e22",
      name: "Liga (Nawi)",
      date: "2025-06-26",
      description: "Druga odsłona starcia z Nawi – tym razem liczymy na lepsze wejścia A-site’u. Mamy w zanadrzu kilka nowych smoke’ów, które mogą zaburzyć ich rotację.",
      type: "league",
      headToHead: [
        { date: "2025-04-27", result: "1:2", map: "Anubis, Train, Mirage" },
        { date: "2024-12-01", result: "0:2", map: "Inferno, Dust 2" },
        { date: "2023-09-01", result: "2:1", map: "Mirage, Dust 2, Vertigo" }
      ]
    },
    {
      id: "e23",
      name: "Liga (Astrala)",
      date: "2025-06-28",
      description: "Ponowny test formy z Astrala – tym razem skupiamy się na retake’ach na B Site. Ich split-push może być groźny, ale wierzymy w nasze przygotowanie taktyczne.",
      type: "league",
      headToHead: [
        { date: "2025-04-29", result: "2:1", map: "Anubis, Train, Mirage" },
        { date: "2024-09-22", result: "2:1", map: "Nuke, Ancient, Mirage" },
        { date: "2023-07-25", result: "2:1", map: "Mirage, Ancient, Anubis" }
      ]
    },
    {
      id: "e24",
      name: "Liga (Nindza)",
      date: "2025-06-30",
      description: "Finał sezonu z Nindza – mecz o wszystko i o miejsce w panteonie ligi. Zakończymy sezon wielkim widowiskiem i pokażemy, że jesteśmy gotowi na kolejne wyzwania.",
      type: "league",
      headToHead: [
        { date: "2025-05-01", result: "2:0", map: "Mirage, Dust 2" },
        { date: "2024-10-20", result: "2:0", map: "Mirage, Dust 2" },
        { date: "2023-10-20", result: "2:1", map: "Inferno, Nuke, Anubis" }
      ]
    }
  ];








