export interface Offering {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  image: string;
}

export const offerings: Offering[] = [
  {
    id: 'gruppenstunden',
    title: 'Gruppenstunden',
    shortDescription: 'Wöchentliche Treffen in altersspezifischen Gruppen voller Spiel und Spass.',
    longDescription: `
      Die Gruppenstunde ist das Herzstück der Jubla. Kinder und Jugendliche gleichen Alters treffen sich regelmässig, meist einmal pro Woche oder alle zwei Wochen, in ihrer Gruppe.
      
      Die Gruppen werden von einem Leitungsteam betreut, das abwechslungsreiche Programme zusammenstellt. Ob Basteln, Spielen im Wald, Kochen oder gemeinsame Ausflüge – in der Gruppenstunde ist immer etwas los.
      
      Hier entstehen Freundschaften fürs Leben. Man lernt, aufeinander Rücksicht zu nehmen, gemeinsam Ziele zu erreichen und Verantwortung zu übernehmen. Aber vor allem steht der Spass im Vordergrund!
      
      Interessiert an einer Schnuppergruppenstunde? Melde dich bei uns!
    `,
    image: 'https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&q=80'
  },
  {
    id: 'lager',
    title: 'Lager',
    shortDescription: 'Unvergessliche Erlebnisse in unseren Zelt- und Hauslagern.',
    longDescription: `
      Unsere Lager sind die Highlights des Jahres! Wir führen in der Regel ein Sommerlager und oft auch ein Pfingst- oder Winterlager durch.
      
      Im Sommerlager verbringen wir eine bis zwei Wochen gemeinsam, oft im Zelt oder in einem Lagerhaus. Wir tauchen ein in eine andere Welt, passend zu einem Lagermotto.
      
      Das Lagerleben bietet unzählige Möglichkeiten: Geländespiele, Lagerfeuer, Wanderungen, Pioniertechnik, Singen, Basteln und vieles mehr.
      
      Es ist eine Zeit ohne Eltern, in der man selbstständiger wird und die Gemeinschaft intensiv erlebt. Das Lageressen aus der grossen Küche und die Nächte im Schlafsack gehören einfach dazu.
    `,
    image: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&q=80'
  },
  {
    id: 'scharanlaesse',
    title: 'Scharanlässe',
    shortDescription: 'Gemeinsame Aktivitäten mit der ganzen Schar - Gross und Klein zusammen.',
    longDescription: `
      Neben den Gruppenstunden und Lagern gibt es die Scharanlässe. Hier trifft sich die ganze Jubla-Schar, von den jüngsten Wölfen bis zu den ältesten Leitern.
      
      Typische Scharanlässe sind der Scharstart, Weihnachten im Wald, der 1. August-Brunch oder ein gemeinsamer Ausflugstag.
      
      Diese Anlässe stärken das Zusammengehörigkeitsgefühl über die Altersgruppen hinweg. Die Kleinen schauen zu den Grossen auf, und die Grossen übernehmen Verantwortung für die Kleinen.
      
      Es sind oft Anlässe, zu denen auch Eltern und Freunde eingeladen sind, um einen Einblick in unser Jubla-Leben zu bekommen.
    `,
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80'
  },
  {
    id: 'aufnahme',
    title: 'Aufnahme',
    shortDescription: 'Der feierliche Moment, wenn du offiziell Teil unserer Jubla-Familie wirst.',
    longDescription: `
      Die Aufnahme ist ein spezieller Anlass, bei dem neue Mitglieder feierlich in die Schar aufgenommen werden.
      
      Meist findet dies in einem Gottesdienst oder einer speziellen Zeremonie statt. Die Neumitglieder erhalten oft ein Jubla-Hemd oder ein Halstuch als Zeichen ihrer Zugehörigkeit.
      
      Es ist ein stolzer Moment für jedes Kind, wenn es "richtig" dazugehört. Auch für die Eltern ist es ein schöner Anlass, den Start ihres Kindes in der Jubla zu feiern.
      
      Nach der Aufnahme bist du offiziell ein Jublaner oder eine Jublanerin und trägst den "Jubla-Spirit" mit dir!
    `,
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80'
  }
];
