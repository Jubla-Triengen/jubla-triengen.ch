export interface LegalSection {
  title?: string;
  content: string[]; // Array of strings for paragraphs
}

export interface LegalPageData {
  hero: {
    title: string;
    subtitle?: string;
    image: string;
  };
  lastUpdated?: string;
  sections: LegalSection[];
}

export const impressumData: LegalPageData = {
  hero: {
    title: "Impressum",
    subtitle: "Rechtliche Informationen",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  },
  sections: [
    {
      title: "Kontaktadresse",
      content: [
        "Jungwacht Blauring Triengen",
        "Musterstrasse 1",
        "6234 Triengen",
        "Schweiz",
        "E-Mail: info@jubla-triengen.ch",
      ],
    },
    {
      title: "Vertretungsberechtigte Personen",
      content: [
        "Vorname Nachname, Scharleitung",
        "Vorname Nachname, Scharleitung",
      ],
    },
    {
      title: "Haftungsausschluss",
      content: [
        "Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen. Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen.",
        "Alle Angebote sind unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.",
      ],
    },
    {
      title: "Haftung für Links",
      content: [
        "Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs. Es wird jegliche Verantwortung für solche Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene Gefahr des Nutzers oder der Nutzerin.",
      ],
    },
    {
      title: "Urheberrechte",
      content: [
        "Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf der Website gehören ausschliesslich der Jungwacht Blauring Triengen oder den speziell genannten Rechtsinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.",
      ],
    },
  ],
};

export const privacyData: LegalPageData = {
  hero: {
    title: "Datenschutzerklärung",
    subtitle: "Wir respektieren deine Privatsphäre",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  },
  lastUpdated: "26. Februar 2024",
  sections: [
    {
      content: [
        "Verantwortliche Stelle im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist:",
        "Jungwacht Blauring Triengen",
        "Musterstrasse 1",
        "6234 Triengen",
        "E-Mail: info@jubla-triengen.ch",
        "Webseite: https://www.jubla-triengen.ch/",
      ],
    },
    {
      title: "Allgemeiner Hinweis",
      content: [
        "Gestützt auf Artikel 13 der schweizerischen Bundesverfassung und die datenschutzrechtlichen Bestimmungen des Bundes (Datenschutzgesetz, DSG) hat jede Person Anspruch auf Schutz ihrer Privatsphäre sowie auf Schutz vor Missbrauch ihrer persönlichen Daten. Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.",
      ],
    },
    {
      title: "Datenerfassung auf unserer Website",
      content: [
        "Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.",
        "Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.",
      ],
    },
    {
      title: "Cookies",
      content: [
        "Diese Website verwendet Cookies. Cookies sind kleine Textdateien, die beim Besuch dieser Website in Ihrem Computer dauerhaft oder temporär gespeichert werden. Zweck der Cookies ist insbesondere die Analyse der Nutzung dieser Website zur statistischen Auswertung sowie für kontinuierliche Verbesserungen. In Ihrem Browser können Sie Cookies in den Einstellungen jederzeit ganz oder teilweise deaktivieren. Bei deaktivierten Cookies stehen Ihnen allenfalls nicht mehr alle Funktionen dieser Website zur Verfügung.",
      ],
    },
    {
      title: "Kontaktformular",
      content: [
        "Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.",
      ],
    },
  ],
};
