const testdata = [
    {
      title: 'San Francisco 49ers',
      'p-text': 'Die San Francisco 49ers sind ein American-Football-Team aus Santa Clara in der kalifornischen San Francisco Bay Area. Sie wurden 1946 gegründet und waren das erste Franchise Nordkaliforniens. Von 1946 bis 1949 gehörten sie der Liga All-America Football Conference (AAFC) an. Seit der Fusion der AAFC und National Football League (NFL) im Jahr 1950 sind die 49ers Mitglied der NFL und spielen seit 1970 in der Western Division der National Football Conference (NFC).',
      link: 'https://de.wikipedia.org/wiki/San_Francisco_49ers',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Pro_Formation.svg/220px-Pro_Formation.svg.png'
    },
    {
      title: 'American Football',
      'p-text': 'American Football (englisch für „Amerikanischer Fußball“), oder auch kurz Football, ist eine aus den Vereinigten Staaten stammende Ballsportart und die populärste Variante einer Reihe von als Gridiron Football bezeichneten Sportarten.',
      link: 'https://de.wikipedia.org/wiki/American_Football',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Wilson_American_football.jpg/220px-Wilson_American_football.jpg'
    },
    {
      title: 'Englische Sprache',
      'p-text': 'Die englische Sprache (Eigenbezeichnung: English [ˈɪŋɡlɪʃ]; abgekürzt: Engl. zum Teil auch anglofone Sprache) ist eine ursprünglich in England beheimatete germanische Sprache, die zum westgermanischen Zweig gehört. Sie entwickelte sich ab dem frühen Mittelalter durch Einwanderung nordseegermanischer Völker nach Britannien, darunter der Angeln – von denen sich das Wort Englisch herleitet – sowie der Sachsen. Die Frühformen der Sprache werden daher auch manchmal Angelsächsisch genannt.',
      link: 'https://de.wikipedia.org/wiki/Englische_Sprache',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Anglospeak.png/550px-Anglospeak.png'
    },
    {
      title: 'England',
      'p-text': 'England ist der größte und am dichtesten besiedelte Landesteil im Vereinigten Königreich im Nordwesten Europas.',
      link: 'https://de.wikipedia.org/wiki/England',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/England%2C_administrative_divisions_%28admin_counties%29_-_de_-_colored.svg/350px-England%2C_administrative_divisions_%28admin_counties%29_-_de_-_colored.svg.png'
    },
    {
      title: 'Verwaltungsgliederung des Vereinigten Königreichs',
      'p-text': 'Die territoriale Gliederung des Vereinigten Königreichs ist seit dem späten 19. Jahrhundert mehrmals stark verändert worden, was zum Teil zu vollständig neuen Verwaltungsbezirken und später auch wieder zu Auflösungen solcher Bezirke führte. Dennoch werden bis heute zum Teil immer noch die Namen der alten Grafschaften im Alltagsgebrauch verwendet, wenngleich der Ort gar nicht mehr zu dieser Grafschaft gehört. Die folgende Übersicht gibt den Stand von 2013 wieder.',
      link: 'https://de.wikipedia.org/wiki/Verwaltungsgliederung_des_Vereinigten_K%C3%B6nigreichs',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Map_of_the_administrative_geography_of_the_United_Kingdom.png/250px-Map_of_the_administrative_geography_of_the_United_Kingdom.png'
    },
    {
      title: 'Grafschaft (England)',
      'p-text': 'Grafschaften (engl. counties, Singular: county) sind Gebietseinheiten in England, deren Wurzeln bis in das 12. Jahrhundert zurückgehen. Sie sind nicht nur Verwaltungseinheiten, sondern wurden im Laufe der Zeit auch zu geographischen Bezeichnungen.',
      link: 'https://de.wikipedia.org/wiki/Grafschaft_(England)',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/English_counties_1851_%28named%29.svg/250px-English_counties_1851_%28named%29.svg.png'
    },
    {
      title: 'England',
      'p-text': 'England ist der größte und am dichtesten besiedelte Landesteil im Vereinigten Königreich im Nordwesten Europas.',
      link: 'https://de.wikipedia.org/wiki/England',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/England%2C_administrative_divisions_%28admin_counties%29_-_de_-_colored.svg/350px-England%2C_administrative_divisions_%28admin_counties%29_-_de_-_colored.svg.png'
    },
    {
      title: 'Verwaltungsgliederung des Vereinigten Königreichs',
      'p-text': 'Die territoriale Gliederung des Vereinigten Königreichs ist seit dem späten 19. Jahrhundert mehrmals stark verändert worden, was zum Teil zu vollständig neuen Verwaltungsbezirken und später auch wieder zu Auflösungen solcher Bezirke führte. Dennoch werden bis heute zum Teil immer noch die Namen der alten Grafschaften im Alltagsgebrauch verwendet, wenngleich der Ort gar nicht mehr zu dieser Grafschaft gehört. Die folgende Übersicht gibt den Stand von 2013 wieder.',
      link: 'https://de.wikipedia.org/wiki/Verwaltungsgliederung_des_Vereinigten_K%C3%B6nigreichs',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Map_of_the_administrative_geography_of_the_United_Kingdom.png/250px-Map_of_the_administrative_geography_of_the_United_Kingdom.png'
    },
    {
      title: 'Grafschaft (England)',
      'p-text': 'Grafschaften (engl. counties, Singular: county) sind Gebietseinheiten in England, deren Wurzeln bis in das 12. Jahrhundert zurückgehen. Sie sind nicht nur Verwaltungseinheiten, sondern wurden im Laufe der Zeit auch zu geographischen Bezeichnungen.',
      link: 'https://de.wikipedia.org/wiki/Grafschaft_(England)',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/English_counties_1851_%28named%29.svg/250px-English_counties_1851_%28named%29.svg.png'
    },
    {
      title: 'England',
      'p-text': 'England ist der größte und am dichtesten besiedelte Landesteil im Vereinigten Königreich im Nordwesten Europas.',
      link: 'https://de.wikipedia.org/wiki/England',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/England%2C_administrative_divisions_%28admin_counties%29_-_de_-_colored.svg/350px-England%2C_administrative_divisions_%28admin_counties%29_-_de_-_colored.svg.png'
    }
  ]

export default testdata;