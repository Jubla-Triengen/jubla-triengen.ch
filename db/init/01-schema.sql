-- ============================================================================
-- Jubla Triengen CMS - database schema
-- ----------------------------------------------------------------------------
-- Replaces the former static content modules in src/data/*.
--   src/data/pages.ts          -> tables: pages, sections
--   src/data/home.ts           -> tables: sections (components: hero,
--                                          feature_grid, content_image_section,
--                                          card_section)
--   src/data/about.ts          -> table:  sections
--   src/data/contact.ts        -> table:  sections
--   src/data/activities.ts     -> tables: activities, attachments
--   src/data/posts.ts          -> tables: posts, attachments
--   src/data/offerings.ts      -> table:  offerings
--   src/data/leaders.ts        -> table:  leaders
--   src/data/gallery.ts        -> table:  albums
--   src/data/albumDetail.ts    -> table:  photos
--   src/data/impressum.ts      -> table:  legal_sections
--   src/data/dataProtection.ts -> tables: legal_sections, pages.meta
--   src/data/notFound.ts       -> tables: pages.meta (template 'not_found')
--   Header/Footer hardcoded    -> tables: navigation_items, site_settings
--
-- Images are stored as URL strings only; no binary data is kept in the DB.
-- ============================================================================

DROP TABLE IF EXISTS photos CASCADE;
DROP TABLE IF EXISTS albums CASCADE;
DROP TABLE IF EXISTS attachments CASCADE;
DROP TABLE IF EXISTS posts CASCADE;
DROP TABLE IF EXISTS activities CASCADE;
DROP TABLE IF EXISTS offerings CASCADE;
DROP TABLE IF EXISTS leaders CASCADE;
DROP TABLE IF EXISTS legal_sections CASCADE;
DROP TABLE IF EXISTS navigation_items CASCADE;
DROP TABLE IF EXISTS sections CASCADE;
DROP TABLE IF EXISTS pages CASCADE;
DROP TABLE IF EXISTS site_settings CASCADE;

-- ----------------------------------------------------------------------------
-- Global, site-wide settings (brand, header CTA, ...). Key/value JSON.
-- ----------------------------------------------------------------------------
CREATE TABLE site_settings (
  key        TEXT PRIMARY KEY,
  value      JSONB NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ----------------------------------------------------------------------------
-- Pages. A page owns a route and selects a rendering template. Content blocks
-- live in `sections`; entity collections (activities, posts, ...) are stored in
-- their dedicated tables below.
-- ----------------------------------------------------------------------------
CREATE TABLE pages (
  id          SERIAL PRIMARY KEY,
  key         TEXT NOT NULL UNIQUE,             -- stable identifier, e.g. 'home'
  route       TEXT NOT NULL UNIQUE,             -- '/', '/leiter/:id', '*'
  template    TEXT NOT NULL,                    -- 'home' | 'about' | 'activities' | ...
  hero        JSONB,                            -- { image, title?, subtitle? }
  description JSONB,                            -- { title, description }
  meta        JSONB NOT NULL DEFAULT '{}'::jsonb, -- template specific data (labels, 404 copy, ...)
  sort_order  INTEGER NOT NULL DEFAULT 0,
  published   BOOLEAN NOT NULL DEFAULT TRUE,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ----------------------------------------------------------------------------
-- Ordered content blocks of a page. `component` is the block type rendered by
-- the section renderer; `props` holds its component properties as JSON.
-- ----------------------------------------------------------------------------
CREATE TABLE sections (
  id         SERIAL PRIMARY KEY,
  page_key   TEXT NOT NULL REFERENCES pages (key) ON DELETE CASCADE,
  component  TEXT NOT NULL,                     -- 'hero' | 'feature_grid' |
                                                -- 'content_image_section' | 'card_section'
  props      JSONB NOT NULL DEFAULT '{}'::jsonb,
  sort_order INTEGER NOT NULL DEFAULT 0,
  UNIQUE (page_key, sort_order)
);

-- ----------------------------------------------------------------------------
-- Activities ("Anlässe").
-- ----------------------------------------------------------------------------
CREATE TABLE activities (
  id                TEXT PRIMARY KEY,           -- slug, e.g. 'sommerlager-2024'
  title             TEXT NOT NULL,
  event_date        TEXT NOT NULL DEFAULT '',
  short_description TEXT NOT NULL DEFAULT '',
  long_description  TEXT NOT NULL DEFAULT '',
  image             TEXT NOT NULL DEFAULT '',   -- image URL
  sort_order        INTEGER NOT NULL DEFAULT 0,
  published         BOOLEAN NOT NULL DEFAULT TRUE
);

-- ----------------------------------------------------------------------------
-- Posts ("Neuigkeiten").
-- ----------------------------------------------------------------------------
CREATE TABLE posts (
  id                TEXT PRIMARY KEY,
  title             TEXT NOT NULL,
  post_date         TEXT NOT NULL DEFAULT '',
  short_description TEXT NOT NULL DEFAULT '',
  long_description  TEXT NOT NULL DEFAULT '',
  image             TEXT NOT NULL DEFAULT '',
  sort_order        INTEGER NOT NULL DEFAULT 0,
  published         BOOLEAN NOT NULL DEFAULT TRUE
);

-- ----------------------------------------------------------------------------
-- Downloadable attachments shared by activities and posts.
-- ----------------------------------------------------------------------------
CREATE TABLE attachments (
  id         SERIAL PRIMARY KEY,
  collection TEXT NOT NULL,                     -- 'activities' | 'posts'
  entity_id  TEXT NOT NULL,
  name       TEXT NOT NULL,
  url        TEXT NOT NULL,
  sort_order INTEGER NOT NULL DEFAULT 0
);

CREATE INDEX idx_attachments_entity ON attachments (collection, entity_id);

-- ----------------------------------------------------------------------------
-- Offerings ("Angebote").
-- ----------------------------------------------------------------------------
CREATE TABLE offerings (
  id                TEXT PRIMARY KEY,
  title             TEXT NOT NULL,
  short_description TEXT NOT NULL DEFAULT '',
  long_description  TEXT NOT NULL DEFAULT '',
  image             TEXT NOT NULL DEFAULT '',
  sort_order        INTEGER NOT NULL DEFAULT 0,
  published         BOOLEAN NOT NULL DEFAULT TRUE
);

-- ----------------------------------------------------------------------------
-- Leaders ("Leiterinnen und Leiter").
-- ----------------------------------------------------------------------------
CREATE TABLE leaders (
  id               TEXT PRIMARY KEY,
  name             TEXT NOT NULL,
  nickname         TEXT,
  role             TEXT NOT NULL DEFAULT '',
  image            TEXT NOT NULL DEFAULT '',
  background_image TEXT,
  description      TEXT NOT NULL DEFAULT '',
  long_description TEXT,
  email            TEXT,
  phone            TEXT,
  birthday         TEXT,
  courses          TEXT,
  jubla_roles      TEXT,
  profession       TEXT,
  hobbies          TEXT,
  jubla_highlight  TEXT,
  sort_order       INTEGER NOT NULL DEFAULT 0,
  published        BOOLEAN NOT NULL DEFAULT TRUE
);

-- ----------------------------------------------------------------------------
-- Photo gallery: albums and their photos.
-- ----------------------------------------------------------------------------
CREATE TABLE albums (
  id         TEXT PRIMARY KEY,
  title      TEXT NOT NULL,
  image      TEXT NOT NULL DEFAULT '',
  sort_order INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE photos (
  id         TEXT PRIMARY KEY,
  album_id   TEXT NOT NULL REFERENCES albums (id) ON DELETE CASCADE,
  img        TEXT NOT NULL,                     -- masonry thumbnail URL
  url        TEXT NOT NULL DEFAULT '',          -- full size URL
  height     INTEGER NOT NULL DEFAULT 300,
  sort_order INTEGER NOT NULL DEFAULT 0
);

CREATE INDEX idx_photos_album ON photos (album_id);

-- ----------------------------------------------------------------------------
-- Legal pages (Impressum, Datenschutzerklärung).
-- ----------------------------------------------------------------------------
CREATE TABLE legal_sections (
  id         SERIAL PRIMARY KEY,
  page_key   TEXT NOT NULL REFERENCES pages (key) ON DELETE CASCADE,
  title      TEXT,                              -- optional section title
  content    JSONB NOT NULL DEFAULT '[]'::jsonb, -- array of paragraphs
  sort_order INTEGER NOT NULL DEFAULT 0
);

CREATE INDEX idx_legal_sections_page ON legal_sections (page_key);

-- ----------------------------------------------------------------------------
-- Navigation: header links, footer columns and social icons.
-- ----------------------------------------------------------------------------
CREATE TABLE navigation_items (
  id         SERIAL PRIMARY KEY,
  location   TEXT NOT NULL,                     -- 'header' | 'footer_contact' |
                                                -- 'footer_links' | 'footer_social' |
                                                -- 'footer_legal'
  label      TEXT NOT NULL,
  href       TEXT,
  icon       TEXT,                              -- icon name resolved on the client
  sort_order INTEGER NOT NULL DEFAULT 0
);

CREATE INDEX idx_navigation_location ON navigation_items (location);
