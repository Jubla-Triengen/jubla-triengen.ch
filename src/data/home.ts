import { Mountain, Tent, TreePine } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface HomeFeature {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
}

export interface HomeWelcomeContent {
  id: string;
  title: string;
  paragraphs: string[];
  image: {
    src: string;
    alt: string;
  };
  button: {
    text: string;
    link: string;
  };
}

export const homeFeatures: HomeFeature[] = [
  {
    icon: Tent,
    title: "Gruppenstunden",
    subtitle: "Spiel & Spass",
    description:
      "Regelmässige Treffen voller Spiele, Kreativität und Gemeinschaft.",
  },
  {
    icon: Mountain,
    title: "Ferienlager",
    subtitle: "Lagerabenteuer",
    description:
      "Unvergessliche Wochen in der Natur mit Lagerfeuer und Abenteuer.",
  },
  {
    icon: TreePine,
    title: "Events & Anlässe",
    subtitle: "Gemeinsam erleben",
    description: "Besondere Aktivitäten und Feste durchs ganze Jahr.",
  },
];

export const homeWelcomeContent: HomeWelcomeContent = {
  id: "about",
  title: "Willkommen bei der Jubla Triengen",
  paragraphs: [
    "Die Jubla Triengen ist mehr als nur eine Jugendorganisation. Wir sind eine Gemeinschaft von Abenteurern, die gemeinsam die Natur entdecken, Freundschaften fürs Leben schliessen und unvergessliche Erinnerungen schaffen.",
    "Bei uns stehen Spass, Kreativität und das gemeinsame Erleben im Mittelpunkt. Ob bei wöchentlichen Gruppenstunden, aufregenden Ferienlagern oder besonderen Events - bei der Jubla ist für jedes Kind etwas dabei.",
  ],
  image: {
    src: "https://image.jimcdn.com/app/cms/image/transf/none/path/sb21156d07b64a771/image/iaadd36084aabac03/version/1741809698/image.jpg",
    alt: "Kinder beim Wandern",
  },
  button: {
    text: "Unsere Angebote",
    link: "/angebote",
  },
};
