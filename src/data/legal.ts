export interface LegalSection {
  title?: string;
  content: string[];
}

export interface LegalContentData {
  lastUpdated?: string;
  sections: LegalSection[];
}
