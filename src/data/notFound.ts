export interface NotFoundContent {
  code: string;
  title: string;
  description: string;
  buttonText: string;
  backgroundImage: string;
}

export const notFoundContent: NotFoundContent = {
  code: "404",
  title: "Uups! Diese Seite haben wir wohl im Wald verloren.",
  description:
    "Vielleicht hast du dich verlaufen? Keine Sorge, im Lager finden wir immer einen Weg zurück.",
  buttonText: "Zurück zur Startseite",
  backgroundImage:
    "https://image.jimcdn.com/cdn-cgi/image//app/cms/storage/image/path/sb21156d07b64a771/backgroundarea/ib36b1240ebbc0855/version/1556893189/image.jpg",
};
