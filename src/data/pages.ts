export type PageId =
  | "home"
  | "about"
  | "leaders"
  | "leaderDetail"
  | "activities"
  | "activityDetail"
  | "offerings"
  | "offeringDetail"
  | "posts"
  | "postDetail"
  | "gallery"
  | "albumDetail"
  | "contact"
  | "impressum"
  | "dataProtection"
  | "notFound";

export interface PageHeroData {
  image: string;
  title?: string;
  subtitle?: string;
}

export interface PageDescriptionData {
  title: string;
  description: string;
}

export interface PageConfig {
  id: PageId;
  hero?: PageHeroData;
  description?: PageDescriptionData;
}

export const pages: Record<PageId, PageConfig> = {
  home: {
    id: "home",
  },
  about: {
    id: "about",
    hero: {
      image:
        "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      title: "Über die Jubla",
      subtitle: "Gemeinschaft, Abenteuer und unvergessliche Momente",
    },
  },
  leaders: {
    id: "leaders",
    hero: {
      image:
        "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      title: "Unser Leitungsteam",
      subtitle: "Gemeinsam für unvergessliche Erlebnisse",
    },
    description: {
      title: "Wer wir sind",
      description:
        "Das Herzstück der Jubla Triengen sind unsere freiwilligen Leiterinnen und Leiter. Sie planen und führen Gruppenstunden, Scharanlässe und Lager durch - mit viel Herzblut und ehrenamtlichem Engagement.",
    },
  },
  leaderDetail: {
    id: "leaderDetail",
  },
  activities: {
    id: "activities",
    hero: {
      image:
        "https://images.unsplash.com/photo-1502086223501-681a6a508d52?auto=format&fit=crop&q=80",
      title: "Jahres Programm",
    },
    description: {
      title: "Unsere Aktivitäten",
      description:
        "Entdecke unser vielfältiges Jahresprogramm voller spannender Aktivitäten, die für jedes Alter und Interesse etwas bieten. Von actionreichen Outdoor-Abenteuern über kreative Workshops bis hin zu gemütlichen Lagerfeuerabenden - bei uns ist immer etwas los!",
    },
  },
  activityDetail: {
    id: "activityDetail",
  },
  offerings: {
    id: "offerings",
    hero: {
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80",
      title: "Unsere Angebote",
      subtitle: "Entdecke die Vielfalt der Jubla Triengen",
    },
    description: {
      title: "Was wir bieten",
      description:
        "Die Jubla Triengen bietet ein vielfältiges Programm für Kinder und Jugendliche. Von wöchentlichen Gruppenstunden bis zu unvergesslichen Lagern ist für jeden etwas dabei. Tauche ein in unsere Welt und entdecke, was die Jubla so einzigartig macht.",
    },
  },
  offeringDetail: {
    id: "offeringDetail",
  },
  posts: {
    id: "posts",
    hero: {
      image:
        "https://images.unsplash.com/photo-1502086223501-681a6a508d52?auto=format&fit=crop&q=80",
      title: "Aktuelles",
    },
    description: {
      title: "Neuigkeiten aus der Schar",
      description:
        "Hier findest du Berichte über vergangene Anlässe, wichtige Informationen und Neuigkeiten.",
    },
  },
  postDetail: {
    id: "postDetail",
  },
  gallery: {
    id: "gallery",
    hero: {
      title: "Foto Gallerie",
      subtitle:
        "Erleben Sie die Abenteuer unserer Jugendgruppe durch unsere Fotogalerie",
      image: "https://picsum.photos/seed/hero/1200/400?grayscale",
    },
  },
  albumDetail: {
    id: "albumDetail",
    hero: {
      title: "Album",
      subtitle: "Explore our photo album",
      image: "https://picsum.photos/seed/hero/1200/400?grayscale",
    },
  },
  contact: {
    id: "contact",
    hero: {
      title: "Kontakt & Mitmachen",
      subtitle: "Wir freuen uns von dir zu hören!",
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    },
  },
  impressum: {
    id: "impressum",
    hero: {
      title: "Impressum",
      subtitle: "Rechtliche Informationen",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    },
  },
  dataProtection: {
    id: "dataProtection",
    hero: {
      title: "Datenschutzerklärung",
      subtitle: "Wir respektieren deine Privatsphäre",
      image:
        "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    },
  },
  notFound: {
    id: "notFound",
  },
};

export function getPageConfig(pageId: PageId): PageConfig {
  return pages[pageId];
}