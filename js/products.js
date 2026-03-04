// Tu dodajesz nowe produkty — wystarczy, że opiszesz je w tym jednym miejscu
window.PRODUCTS = [
    {
      id: "1",         
      category: "koszulka", 
      type: "T-shirt Ultra light",
      sizes: ["S","M","L","XL"],
      price: 99,
      mainImage: "produkty/produkt-10.png",
      gridImage: 'produkty/produkt-24.png',
      pattern: " wzór 3",
      gallery: [
        "banery/strona-11.jpg",
        "banery/strona-12.jpg",
        "banery/strona-11.jpg",
        "banery/strona-13.jpg",
        "banery/strona-11.jpg",
        "banery/strona-11.jpg",
        "banery/strona-12.jpg",
        "banery/strona-11.jpg",
        "banery/strona-13.jpg",
        "banery/strona-11.jpg",
        "banery/strona-11.jpg",
        "banery/strona-12.jpg",
        "banery/strona-11.jpg",
        "banery/strona-13.jpg",
        "banery/strona-11.jpg",
        "banery/strona-11.jpg",
        "banery/strona-12.jpg",
        "banery/strona-11.jpg",
        "banery/strona-13.jpg",
        "banery/strona-11.jpg",
      ],
      description: "Biegowy t-shirt ultra lekki w całości wykonany z elastycznej siatki. Koszulka jest przewiewna, lekka oraz doskonale oddychająca. Dzięki dużej ilości elastanu koszulka idealnie dopasowuje się do ciała, nie krępując przy tym ruchów. Zastosowane siatki gwarantuje stałą wentylację i cyrkulację powietrza między skórą a materiałem i schnięciem koszulki jeszcze na ciele.",
      longDescription: "Biegowy t-shirt ultra lekki w całości wykonany z elastycznej siatki. Koszulka jest przewiewna, lekka oraz doskonale oddychająca. Dzięki dużej ilości elastanu koszulka idealnie dopasowuje się do ciała, nie krępując przy tym ruchów. Zastosowane siatki gwarantuje stałą wentylację i cyrkulację powietrza między skórą a materiałem i schnięciem koszulki jeszcze na ciele.",
      dimensions: { "S":[48,68], "M":[51,70], "L":[54,72], "XL":[57,74] },
      material: ["siatka","skład 94% poliester, 6% elastan","gramatura 110 g/m2"],
      sizeTable: {
        title: "Koszulka Interdry Męska",
        columns: ["Rozmiar","S","M","L","XL","XXL","XXXL"],
        rows: [
          {
            label: "Przy obwodzie klatki proponujemy rozmiar",
            values: ["78-84","84-90","90-98","98-106","106-114","114-124"]
          },
          {
            label: "Obwód koszulki w klatce piersiowej",
            values: ["92","98","104","110","116","122"]
          },
          {
            label: "Obwód koszulki w talii",
            values: ["91","97","103","109","115","121"]
          },
          {
            label: "Obwód koszulki na dole",
            values: ["94","100","106","112","118","124"]
          },
          {
            label: "Długość koszulki z tyłu od szyi",
            values: ["62,5","65","667,5","70","72,5","75"]
          }
        ],
        note: "Wymiary podane w tabeli mogą się różnić o +/- 2 cm."
      }
    },
    {
      id: "2",         
      category: "koszulka",
      type: "T-shirt Ultra light",
      sizes: ["M","L","XL"],
      price: 99,
      mainImage: "produkty/produkt-16.png",
      gridImage: 'produkty/produkt-26.png',
      pattern: " wzór 2",
      gallery: [
        "assets/jerseys/jersey2.jpg",
        "assets/jerseys/jersey5.jpg"
      ],
      description: "Biegowy t-shirt ultra lekki w całości wykonany z elastycznej siatki. Koszulka jest przewiewna, lekka oraz doskonale oddychająca. Dzięki dużej ilości elastanu koszulka idealnie dopasowuje się do ciała, nie krępując przy tym ruchów. Zastosowane siatki gwarantuje stałą wentylację i cyrkulację powietrza między skórą a materiałem i schnięciem koszulki jeszcze na ciele.",
      longDescription: "Biegowy t-shirt ultra lekki w całości wykonany z elastycznej siatki. Koszulka jest przewiewna, lekka oraz doskonale oddychająca. Dzięki dużej ilości elastanu koszulka idealnie dopasowuje się do ciała, nie krępując przy tym ruchów. Zastosowane siatki gwarantuje stałą wentylację i cyrkulację powietrza między skórą a materiałem i schnięciem koszulki jeszcze na ciele.",
      dimensions: { "M":[50,65], "L":[53,67], "XL":[56,69] },
      material: ["siatka","skład 94% poliester, 6% elastan","gramatura 110 g/m2"],
      sizeTable: {
        title: "Koszulka Interdry Męska",
        columns: ["Rozmiar","S","M","L","XL","XXL","XXXL"],
        rows: [
          {
            label: "Przy obwodzie klatki proponujemy rozmiar",
            values: ["78-84","84-90","90-98","98-106","106-114","114-124"]
          },
          {
            label: "Obwód koszulki w klatce piersiowej",
            values: ["92","98","104","110","116","122"]
          },
          {
            label: "Obwód koszulki w talii",
            values: ["91","97","103","109","115","121"]
          },
          {
            label: "Obwód koszulki na dole",
            values: ["94","100","106","112","118","124"]
          },
          {
            label: "Długość koszulki z tyłu od szyi",
            values: ["62,5","65","667,5","70","72,5","75"]
          }
        ],
        note: "Wymiary podane w tabeli mogą się różnić o +/- 2 cm."
      }
    },
    {
        id: "3",
        category: "longsleeve",
        type: "Longsleeve uniwersalny",
        sizes: ["M","L","XL"],
        price: 149,
        mainImage: "produkty/produkt-15.png",
        gridImage: 'produkty/produkt-25.png',
        pattern: " wzór 2",
        gallery: [
          "assets/jerseys/jersey2.jpg",
          "assets/jerseys/jersey5.jpg"
        ],
        description: "Uniwersalny Longsleeve wykonany z polietsrowych włókien termoaktywnych, które gwarantują oddychalność i odprowadzanie wilgoci z powierzchni skóry. Struktura materiału w postaci drobnych oczek zapewnia idealną wentylację ciała.",
        dimensions: { "M":[50,65], "L":[53,67], "XL":[56,69] }
      },
      {
        id: "4",         
        category: "bluza",
        type: "Bluza Morpo/Denali",
        sizes: ["M","L","XL"],
        price: 279,
        mainImage: "produkty/produkt-18.png",
        gridImage: 'produkty/produkt-37.png',
        pattern: " wzór 2",
        gallery: [
          "assets/jerseys/jersey2.jpg",
          "assets/jerseys/jersey5.jpg"
        ],
        description: "Biegowy t-shirt ultra lekki w całości wykonany z elastycznej siatki. Koszulka jest przewiewna, lekka oraz doskonale oddychająca. Dzięki dużej ilości elastanu koszulka idealnie dopasowuje się do ciała, nie krępując przy tym ruchów. Zastosowane siatki gwarantuje stałą wentylację i cyrkulację powietrza między skórą a materiałem i schnięciem koszulki jeszcze na ciele.",
        longDescription: "Biegowy t-shirt ultra lekki w całości wykonany z elastycznej siatki. Koszulka jest przewiewna, lekka oraz doskonale oddychająca. Dzięki dużej ilości elastanu koszulka idealnie dopasowuje się do ciała, nie krępując przy tym ruchów. Zastosowane siatki gwarantuje stałą wentylację i cyrkulację powietrza między skórą a materiałem i schnięciem koszulki jeszcze na ciele.",
        dimensions: { "M":[50,65], "L":[53,67], "XL":[56,69] },
        material: ["siatka","skład 94% poliester, 6% elastan","gramatura 110 g/m2"],
        sizeTable: {
          title: "Koszulka Interdry Męska",
          columns: ["Rozmiar","S","M","L","XL","XXL","XXXL"],
          rows: [
            {
              label: "Przy obwodzie klatki proponujemy rozmiar",
              values: ["78-84","84-90","90-98","98-106","106-114","114-124"]
            },
            {
              label: "Obwód koszulki w klatce piersiowej",
              values: ["92","98","104","110","116","122"]
            },
            {
              label: "Obwód koszulki w talii",
              values: ["91","97","103","109","115","121"]
            },
            {
              label: "Obwód koszulki na dole",
              values: ["94","100","106","112","118","124"]
            },
            {
              label: "Długość koszulki z tyłu od szyi",
              values: ["62,5","65","667,5","70","72,5","75"]
            }
          ],
          note: "Wymiary podane w tabeli mogą się różnić o +/- 2 cm."
        }
      },
      
    // ➔ Dodawaj kolejne obiekty tutaj!
  ];
  