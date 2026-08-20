export interface PageHeroData {
  image: string;
  title?: string;
  subtitle?: string;
}

export interface PageDescriptionData {
  title: string;
  description: string;
}

export interface CmsPage {
  key: string;
  route: string;
  template: string;
  hero?: PageHeroData;
  description?: PageDescriptionData;
  meta: Record<string, unknown>;
  sortOrder: number;
  published: boolean;
}

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

export interface Post {
  id: string;
  title: string;
  date: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  attachments: Attachment[];
}

export interface Offering {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  image: string;
}

export interface Leader {
  id: string;
  name: string;
  nickname?: string;
  role: string;
  image: string;
  backgroundImage?: string;
  description: string;
  longDescription?: string;
  email?: string;
  phone?: string;
  birthday?: string;
  courses?: string;
  jublaRoles?: string;
  profession?: string;
  hobbies?: string;
  jublaHighlight?: string;
}

export interface Album {
  id: string;
  title: string;
  image: string;
}

export interface Photo {
  id: string;
  albumId: string;
  img: string;
  url: string;
  height: number;
}

export interface LegalSection {
  pageKey: string;
  title?: string;
  content: string[];
}

export interface NavigationItem {
  location: string;
  label: string;
  href?: string;
  icon?: string;
}

export interface CmsSection {
  pageKey: string;
  component: string;
  props: Record<string, unknown>;
  sortOrder: number;
}

export interface BrandSettings {
  name: string;
  description: string;
}

export interface CtaSettings {
  label: string;
  href: string;
}

export interface CmsSettings {
  brand?: BrandSettings;
  header_cta?: CtaSettings;
}

export interface CmsData {
  pages: CmsPage[];
  sections: CmsSection[];
  activities: Activity[];
  posts: Post[];
  offerings: Offering[];
  leaders: Leader[];
  albums: Album[];
  photos: Photo[];
  legalSections: LegalSection[];
  navigation: NavigationItem[];
  settings: CmsSettings;
}
