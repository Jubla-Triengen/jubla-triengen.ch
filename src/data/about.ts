export interface AboutSection {
  id: string;
  title: string;
  paragraphs: string[];
  image: {
    src: string;
    alt: string;
  };
  button?: {
    text: string;
    link: string;
  };
  imagePosition?: "left" | "right";
  backgroundColor?: string;
}

export const aboutPageData = {
  hero: {
    image:
      "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    title: "Über die Jubla",
    subtitle: "Gemeinschaft, Abenteuer und unvergessliche Momente",
  },
  sections: [
    {
      id: "what-is-jubla",
      title: "Was ist Jubla?",
      paragraphs: [
        "Jungwacht Blauring (kurz Jubla) ist der grösste katholische Kinder- und Jugendverband der Schweiz. Ein Verband mit über 30’000 Mitgliedern, der für Offenheit, Freiraum und Gemeinschaft steht.",
        "In der Jubla verbringen Kinder und Jugendliche vielfältige und altersgerechte Freizeit – unabhängig von Kirchenzugehörigkeit, Herkunft oder politischer Gesinnung.",
        "Das Angebot in den lokalen Scharen (Ortsgruppen) reicht von regelmässigen Gruppenstunden über Scharanlässe bis hin zu Zelt- und Hauslagern.",
      ],
      image: {
        src: "https://images.unsplash.com/photo-1526976668912-1a811878dd37?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        alt: "Jubla Gruppe beim Spielen",
      },
      button: {
        text: "Lerne unser Leitungsteam kennen",
        link: "/leaders",
      },
      imagePosition: "right",
    },
    {
      id: "values",
      title: "Unsere Grundsätze",
      paragraphs: [
        "Die Jubla basiert auf fünf Grundsätzen: Zusammen sein, Mitbestimmen, Glauben leben, Kreativ sein und Natur erleben.",
        "Diese Werte prägen unser Zusammenleben und unsere Aktivitäten. Wir bieten einen Freiraum, in dem sich Kinder und Jugendliche entfalten und ihre eigenen Fähigkeiten entdecken können.",
        "Dabei steht das gemeinsame Erleben im Vordergrund. Wir pflegen einen respektvollen Umgang miteinander und übernehmen Verantwortung für uns und andere.",
      ],
      image: {
        src: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        alt: "Lagerfeuer Stimmung",
      },
      imagePosition: "left",
      backgroundColor: "bg-orange-50",
    },
    {
      id: "history",
      title: "Jubla Triengen",
      paragraphs: [
        "Die Jubla Triengen ist seit vielen Jahren ein fester Bestandteil des Dorflebens. Mit unseren engagierten Leiterinnen und Leitern bieten wir den Kindern und Jugendlichen aus Triengen und Umgebung ein abwechslungsreiches Freizeitprogramm.",
        "Unser Highlight ist das jährliche Sommerlager, in dem wir zwei Wochen lang gemeinsam Abenteuer erleben, am Lagerfeuer singen und in Zelten übernachten.",
        "Komm vorbei und schnuppere Jubla-Luft! Wir freuen uns auf dich.",
      ],
      image: {
        src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        alt: "Gruppenfoto Jubla Triengen",
      },
      imagePosition: "right",
    },
  ] as AboutSection[],
};
