import { Pool } from "pg";
import type {
  Activity,
  Album,
  Attachment,
  CmsData,
  CmsPage,
  CmsSection,
  CmsSettings,
  Leader,
  LegalSection,
  NavigationItem,
  Offering,
  Photo,
  Post,
} from "../src/cms/types";

export const pool = new Pool({
  connectionString:
    process.env.DATABASE_URL ??
    "postgres://cms:cms@localhost:5432/jubla_cms",
  max: 10,
});

interface PageRow {
  key: string;
  route: string;
  template: string;
  hero: CmsPage["hero"];
  description: CmsPage["description"];
  meta: CmsPage["meta"];
  sort_order: number;
  published: boolean;
}

interface SectionRow {
  page_key: string;
  component: string;
  props: CmsSection["props"];
  sort_order: number;
}

interface ActivityRow {
  id: string;
  title: string;
  event_date: string;
  short_description: string;
  long_description: string;
  image: string;
}

interface PostRow {
  id: string;
  title: string;
  post_date: string;
  short_description: string;
  long_description: string;
  image: string;
}

interface OfferingRow {
  id: string;
  title: string;
  short_description: string;
  long_description: string;
  image: string;
}

interface LeaderRow {
  id: string;
  name: string;
  nickname: string | null;
  role: string;
  image: string;
  background_image: string | null;
  description: string;
  long_description: string | null;
  email: string | null;
  phone: string | null;
  birthday: string | null;
  courses: string | null;
  jubla_roles: string | null;
  profession: string | null;
  hobbies: string | null;
  jubla_highlight: string | null;
}

interface AlbumRow {
  id: string;
  title: string;
  image: string;
}

interface PhotoRow {
  id: string;
  album_id: string;
  img: string;
  url: string;
  height: number;
}

interface LegalRow {
  page_key: string;
  title: string | null;
  content: string[];
}

interface NavigationRow {
  location: string;
  label: string;
  href: string | null;
  icon: string | null;
}

interface AttachmentRow {
  collection: string;
  entity_id: string;
  name: string;
  url: string;
}

interface SettingRow {
  key: string;
  value: unknown;
}

function mapAttachments(
  rows: AttachmentRow[],
  collection: string
): Map<string, Attachment[]> {
  const map = new Map<string, Attachment[]>();
  for (const row of rows) {
    if (row.collection !== collection) continue;
    const list = map.get(row.entity_id) ?? [];
    list.push({ name: row.name, url: row.url });
    map.set(row.entity_id, list);
  }
  return map;
}

export async function getSnapshot(): Promise<CmsData> {
  const client = await pool.connect();
  try {
    const [
      pagesResult,
      sectionsResult,
      activitiesResult,
      postsResult,
      offeringsResult,
      leadersResult,
      albumsResult,
      photosResult,
      legalResult,
      navigationResult,
      settingsResult,
      attachmentsResult,
    ] = await Promise.all([
      client.query<PageRow>(
        `SELECT key, route, template, hero, description, meta, sort_order, published
         FROM pages WHERE published = TRUE ORDER BY sort_order, id`
      ),
      client.query<SectionRow>(
        `SELECT page_key, component, props, sort_order
         FROM sections ORDER BY page_key, sort_order`
      ),
      client.query<ActivityRow>(
        `SELECT id, title, event_date, short_description, long_description, image
         FROM activities WHERE published = TRUE ORDER BY sort_order, id`
      ),
      client.query<PostRow>(
        `SELECT id, title, post_date, short_description, long_description, image
         FROM posts WHERE published = TRUE ORDER BY sort_order, id`
      ),
      client.query<OfferingRow>(
        `SELECT id, title, short_description, long_description, image
         FROM offerings WHERE published = TRUE ORDER BY sort_order, id`
      ),
      client.query<LeaderRow>(
        `SELECT id, name, nickname, role, image, background_image, description,
                long_description, email, phone, birthday, courses, jubla_roles,
                profession, hobbies, jubla_highlight
         FROM leaders WHERE published = TRUE ORDER BY sort_order, id`
      ),
      client.query<AlbumRow>(
        `SELECT id, title, image FROM albums ORDER BY sort_order, id`
      ),
      client.query<PhotoRow>(
        `SELECT id, album_id, img, url, height FROM photos ORDER BY album_id, sort_order`
      ),
      client.query<LegalRow>(
        `SELECT page_key, title, content FROM legal_sections ORDER BY page_key, sort_order`
      ),
      client.query<NavigationRow>(
        `SELECT location, label, href, icon FROM navigation_items ORDER BY location, sort_order`
      ),
      client.query<SettingRow>(
        `SELECT key, value FROM site_settings`
      ),
      client.query<AttachmentRow>(
        `SELECT collection, entity_id, name, url
         FROM attachments ORDER BY collection, entity_id, sort_order`
      ),
    ]);

    const activityAttachments = mapAttachments(attachmentsResult.rows, "activities");
    const postAttachments = mapAttachments(attachmentsResult.rows, "posts");

    const pages: CmsPage[] = pagesResult.rows.map((row) => ({
      key: row.key,
      route: row.route,
      template: row.template,
      hero: row.hero ?? undefined,
      description: row.description ?? undefined,
      meta: row.meta ?? {},
      sortOrder: row.sort_order,
      published: row.published,
    }));

    const sections: CmsSection[] = sectionsResult.rows.map((row) => ({
      pageKey: row.page_key,
      component: row.component,
      props: row.props ?? {},
      sortOrder: row.sort_order,
    }));

    const activities: Activity[] = activitiesResult.rows.map((row) => ({
      id: row.id,
      title: row.title,
      date: row.event_date,
      shortDescription: row.short_description,
      longDescription: row.long_description,
      image: row.image,
      attachments: activityAttachments.get(row.id) ?? [],
    }));

    const posts: Post[] = postsResult.rows.map((row) => ({
      id: row.id,
      title: row.title,
      date: row.post_date,
      shortDescription: row.short_description,
      longDescription: row.long_description,
      image: row.image,
      attachments: postAttachments.get(row.id) ?? [],
    }));

    const offerings: Offering[] = offeringsResult.rows.map((row) => ({
      id: row.id,
      title: row.title,
      shortDescription: row.short_description,
      longDescription: row.long_description,
      image: row.image,
    }));

    const leaders: Leader[] = leadersResult.rows.map((row) => ({
      id: row.id,
      name: row.name,
      nickname: row.nickname ?? undefined,
      role: row.role,
      image: row.image,
      backgroundImage: row.background_image ?? undefined,
      description: row.description,
      longDescription: row.long_description ?? undefined,
      email: row.email ?? undefined,
      phone: row.phone ?? undefined,
      birthday: row.birthday ?? undefined,
      courses: row.courses ?? undefined,
      jublaRoles: row.jubla_roles ?? undefined,
      profession: row.profession ?? undefined,
      hobbies: row.hobbies ?? undefined,
      jublaHighlight: row.jubla_highlight ?? undefined,
    }));

    const albums: Album[] = albumsResult.rows.map((row) => ({
      id: row.id,
      title: row.title,
      image: row.image,
    }));

    const photos: Photo[] = photosResult.rows.map((row) => ({
      id: row.id,
      albumId: row.album_id,
      img: row.img,
      url: row.url,
      height: row.height,
    }));

    const legalSections: LegalSection[] = legalResult.rows.map((row) => ({
      pageKey: row.page_key,
      title: row.title ?? undefined,
      content: row.content ?? [],
    }));

    const navigation: NavigationItem[] = navigationResult.rows.map((row) => ({
      location: row.location,
      label: row.label,
      href: row.href ?? undefined,
      icon: row.icon ?? undefined,
    }));

    const settings: CmsSettings = {};
    for (const row of settingsResult.rows) {
      (settings as Record<string, unknown>)[row.key] = row.value;
    }

    return {
      pages,
      sections,
      activities,
      posts,
      offerings,
      leaders,
      albums,
      photos,
      legalSections,
      navigation,
      settings,
    };
  } finally {
    client.release();
  }
}
