export interface Leader {
  id: string;
  name: string;
  nickname?: string;
  role: string;
  image: string;
  description: string;
  longDescription?: string;
  email?: string;
  phone?: string;
  birthday?: string;
  courses?: string;
  jublaRoles?: string;
  profession?: string;
  hobbies?: string;
  jublaHighlight?: string;
}

export const leaders: Leader[] = [
  {
    id: "sarah-mueller",
    name: "Sarah Müller",
    nickname: "Sari",
    role: "Scharleiterin",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description:
      "Seit 5 Jahren in der Jubla und liebt es, Lagerfeuer zu machen.",
    longDescription:
      "Sarah ist seit ihrer Kindheit in der Jubla und hat alle Stufen durchlaufen. Als Scharleiterin koordiniert sie das Leitungsteam und ist Ansprechperson für Eltern und Interessierte. Ihre Leidenschaft gilt dem Planen von unvergesslichen Lagern und dem gemütlichen Beisammensein am Lagerfeuer.",
    birthday: "12. Mai 2002",
    courses: "GLK, SLK, Coach-Kurs",
    jublaRoles: "Scharleitung, Lagerleitung, J+S Coach",
    profession: "Primarlehrerin",
    hobbies: "Wandern, Lesen, Gitarre spielen und natürlich Jubla!",
    jublaHighlight:
      "Das Kantonale Sommerlager 2018 mit über 500 Kindern war ein absolutes Highlight. Die Stimmung am grossen Lagerfeuer werde ich nie vergessen.",
    email: "sarah.mueller@jublatriengen.ch",
    phone: "079 123 45 67",
  },
  {
    id: "jan-schmid",
    name: "Jan Schmid",
    nickname: "Schmidi",
    role: "Scharleiter",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description:
      "Organisationstalent und zuständig für die besten Geländespiele.",
    longDescription:
      "Jan ist der Stratege im Team. Er liebt es, komplexe Geländespiele zu entwickeln, bei denen Taktik und Geschick gefragt sind. Neben seiner Tätigkeit als Scharleiter kümmert er sich auch um die Finanzen der Schar.",
    birthday: "03. August 2001",
    courses: "GLK, SLK, Sicherheitsmodul Berg",
    jublaRoles: "Scharleitung, Finanzen, Geländespiele",
    profession: "Kaufmann",
    hobbies: "Fussball, Videospiele, Reisen",
    jublaHighlight:
      "Mein erstes Lager als Leiter, als meine Gruppe den Lagersong gedichtet hat.",
    email: "jan.schmid@jublatriengen.ch",
  },
  {
    id: "lena-weber",
    name: "Lena Weber",
    nickname: "Leni",
    role: "Gruppenleiterin",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Leitet die jüngste Gruppe mit viel Geduld und Kreativität.",
    longDescription:
      "Lena hat ein grosses Herz für die Kleinsten. Mit viel Geduld und Kreativität gestaltet sie die Gruppenstunden für die jüngsten Jublaner. Sie bastelt und spielt für ihr Leben gern.",
    birthday: "15. November 2004",
    courses: "GK",
    jublaRoles: 'Gruppenleitung "Die wilden Hühner", Atelier-Chef',
    profession: "Fachfrau Gesundheit in Ausbildung",
    hobbies: "Zeichnen, Schwimmen, Backen",
    jublaHighlight:
      "Das Übernachten im Zelt trotz Gewittersturm – wir haben einfach gesungen bis der Sturm vorbei war.",
    email: "lena.weber@jublatriengen.ch",
    phone: "077 987 65 43",
  },
  {
    id: "nico-keller",
    name: "Nico Keller",
    nickname: "Nic",
    role: "Gruppenleiter",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Der Materialwart, der immer den Überblick behält.",
    longDescription:
      "Ohne Nico würde im Materialraum Chaos herrschen. Er sorgt dafür, dass Zelte, Blachen und Kochutensilien immer einsatzbereit sind. In den Gruppenstunden ist er für jeden Spass zu haben.",
    birthday: "28. Februar 2003",
    courses: "GLK, Pioniertechnik-Modul",
    jublaRoles: 'Gruppenleitung "Die Falken", Materialwart',
    profession: "Zimmermann",
    hobbies: "Biken, Werken, Snowboarden",
    jublaHighlight:
      "Der Bau des 10 Meter hohen Sarani-Turms im letzten Sommerlager.",
    email: "nico.keller@jublatriengen.ch",
  },
  {
    id: "anna-meier",
    name: "Anna Meier",
    nickname: "Anni",
    role: "Gruppenleiterin",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Kocht gerne im Lager und sorgt für gute Stimmung.",
    longDescription:
      "Anna ist nicht nur eine tolle Gruppenleiterin, sondern auch eine begnadete Köchin. Im Lager zaubert sie oft leckere Menüs für die ganze Schar. Ihre fröhliche Art ist ansteckend.",
    birthday: "09. September 2002",
    courses: "GLK, Kochkurs",
    jublaRoles: 'Gruppenleitung "Glühwürmchen", Lagerküche',
    profession: "Studentin Pädagogische Hochschule",
    hobbies: "Kochen, Klavier spielen, Joggen",
    jublaHighlight:
      'Das riesige Geländespiel "Kampf der Titanen" über zwei Tage.',
    email: "anna.meier@jublatriengen.ch",
  },
  {
    id: "david-huber",
    name: "David Huber",
    nickname: "Dave",
    role: "Gruppenleiter",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Sportbegeistert und immer für ein Spiel zu haben.",
    longDescription:
      "David ist unser Sport-Ass. Egal ob Fussball, Völkerball oder Bulldog, er ist immer mit vollem Einsatz dabei. Er motiviert die Kinder zu mehr Bewegung und Fairplay.",
    birthday: "22. Juli 2003",
    courses: "GLK, Sportmodul",
    jublaRoles: 'Gruppenleitung "Die Falken", Sportchef',
    profession: "Polymechaniker",
    hobbies: "Unihockey, Fitness, Kollegen treffen",
    jublaHighlight:
      "Der Sieg beim Fussballturnier gegen die Leiter der Nachbarschar.",
    email: "david.huber@jublatriengen.ch",
  },
];
