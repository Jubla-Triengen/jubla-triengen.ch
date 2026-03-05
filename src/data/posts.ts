export interface Attachment {
  name: string;
  url: string;
}

export interface Post {
  id: string;
  title: string;
  date: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  attachments: Attachment[];
}

export const posts: Post[] = [
  {
    id: "jubla-tag-2024",
    title: "Rückblick Jubla Tag 2024",
    date: "10.09.2024",
    shortDescription:
      "Ein toller Tag voller Spiel und Spass liegt hinter uns. Hier ist der Bericht.",
    longDescription: `
      Am vergangenen Samstag fand der nationale Jubla-Tag statt. Auch wir von der Jubla Triengen waren natürlich mit dabei!
      Unter dem Motto "Lebensfreude" haben wir einen abwechslungsreichen Nachmittag für alle Kinder und Jugendlichen aus der Region organisiert.

      Wir starteten mit einem grossen Geländespiel im Wald, bei dem Geschicklichkeit und Teamgeist gefragt waren.
      Anschliessend gab es ein feines Zvieri und Zeit zum gemütlichen Beisammensein.

      Wir danken allen, die dabei waren und freuen uns schon auf das nächste Jahr!
    `,
    image:
      "https://images.unsplash.com/photo-1526662092594-e98c1e35652b?auto=format&fit=crop&q=80",
    attachments: [
      { name: "Flyer", url: "#" },
      { name: "Fotos", url: "#" },
    ],
  },
  // Add more sample posts if needed
];
