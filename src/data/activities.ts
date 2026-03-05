export interface Attachment {
  name: string;
  url: string;
}

export interface Activity {
  id: string;
  title: string;
  date: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  attachments: Attachment[];
}

export const activities: Activity[] = [
  {
    id: "sommerlager-2024",
    title: "Sommerlager 2024",
    date: "08.07.2024 - 20.07.2024",
    shortDescription:
      "Unser jährliches Highlight: Das Sommerlager! Zwei Wochen voller Abenteuer, Spass und Gemeinschaft.",
    longDescription: `
      Das Sommerlager ist das absolute Highlight in unserem Jubla-Jahr. Wir verbringen zwei Wochen gemeinsam in einem Lagerhaus oder im Zelt. 
      Jeden Tag erleben wir spannende Abenteuer, spielen Geländespiele, singen am Lagerfeuer und geniessen die Zeit zusammen.
      
      Dieses Jahr geht es ins wunderschöne Graubünden. Das Leitungsteam hat ein abwechslungsreiches Programm zusammengestellt, das keine Wünsche offen lässt.
      Egal ob Gross oder Klein, im Sommerlager ist für jeden etwas dabei.
      
      Packt eure Rucksäcke und kommt mit uns auf eine unvergessliche Reise!
    `,
    image:
      "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&q=80",
    attachments: [
      { name: "Infoheft Sommerlager", url: "#" },
      { name: "Packliste", url: "#" },
      { name: "Anmeldeformular", url: "#" },
    ],
  },
  {
    id: "papiersammlung-fruehling",
    title: "Papiersammlung Frühling",
    date: "16.03.2024",
    shortDescription:
      "Gemeinsam sammeln wir Altpapier in Triengen und bessern unsere Lagerkasse auf.",
    longDescription: `
      Es ist wieder soweit: Die Papiersammlung steht an! Wir treffen uns am Samstagmorgen, um gemeinsam das Altpapier in der Gemeinde einzusammeln.
      Dies ist eine wichtige Einnahmequelle für unsere Schar und hilft uns, die Lagerbeiträge tief zu halten.
      
      Wir sind auf die Hilfe aller Kinder und Leiter angewiesen. Für Verpflegung ist natürlich gesorgt.
      Nach getaner Arbeit gibt es ein feines Zmittag für alle Helferinnen und Helfer.
    `,
    image:
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80",
    attachments: [{ name: "Einsatzplan", url: "#" }],
  },
  {
    id: "gruppenstunde-alle",
    title: "Scharanlass: Schnitzeljagd",
    date: "04.05.2024",
    shortDescription:
      "Ein spannender Nachmittag für die ganze Schar mit einer grossen Schnitzeljagd durch den Wald.",
    longDescription: `
      Wir laden alle Kinder und Jugendlichen zu einem grossen Scharanlass ein. Wir werden gemeinsam eine riesige Schnitzeljagd veranstalten.
      Wer kann die Hinweise am schnellsten entschlüsseln und den Schatz finden?
      
      Zieht euch wettergerecht an und nehmt gute Laune mit. Wir freuen uns auf euch!
    `,
    image:
      "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&q=80",
    attachments: [],
  },
];
