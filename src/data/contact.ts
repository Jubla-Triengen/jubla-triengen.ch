export interface ContactDetails {
  email?: string;
  address?: string[];
}

export interface ContactSection {
  id: string;
  title: string;
  paragraphs: string[];
  image: {
    src: string;
    alt: string;
  },
  imagePosition?: "left" | "right";
  backgroundColor?: string;
  contactDetails?: ContactDetails;
  button?: {
    text: string;
    link: string;
  };
}

export interface ContactPageData {
  sections: ContactSection[];
}

export const contactPageData: ContactPageData = {
  sections: [
    {
      id: "contact",
      title: "Kontaktiere uns",
      paragraphs: [
        "Hast du Fragen zur Jubla, zu unseren Anlässen oder möchtest du einfach mal reinschnuppern? Zögere nicht, uns zu kontaktieren.",
        "Du erreichst uns am besten per E-Mail oder über unsere Scharleitung.",
      ],
      image: {
        src: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        alt: "Kontakt aufnehmen",
      },
      imagePosition: "right",
      contactDetails: {
        email: "info@jublatriengen.ch",
        address: ["Jubla Triengen", "Kirchgasse 4", "6234 Triengen"],
      },
    },
  ],
};
