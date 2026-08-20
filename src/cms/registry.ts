import type { ComponentType } from "react";
import HomeTemplate from "./templates/Home";
import AboutTemplate from "./templates/About";
import ActivitiesTemplate from "./templates/Activities";
import ActivityDetailTemplate from "./templates/ActivityDetail";
import OfferingsTemplate from "./templates/Offerings";
import OfferingDetailTemplate from "./templates/OfferingDetail";
import PostsTemplate from "./templates/Posts";
import PostDetailTemplate from "./templates/PostDetail";
import LeadersTemplate from "./templates/Leaders";
import LeaderDetailTemplate from "./templates/LeaderDetail";
import GalleryTemplate from "./templates/Gallery";
import AlbumDetailTemplate from "./templates/AlbumDetail";
import ContactTemplate from "./templates/Contact";
import LegalTemplate from "./templates/Legal";
import NotFoundTemplate from "./templates/NotFound";

export type TemplateComponent = ComponentType<{ pageKey: string }>;

export const templateRegistry: Record<string, TemplateComponent> = {
  home: HomeTemplate,
  about: AboutTemplate,
  activities: ActivitiesTemplate,
  activity_detail: ActivityDetailTemplate,
  offerings: OfferingsTemplate,
  offering_detail: OfferingDetailTemplate,
  posts: PostsTemplate,
  post_detail: PostDetailTemplate,
  leaders: LeadersTemplate,
  leader_detail: LeaderDetailTemplate,
  gallery: GalleryTemplate,
  album_detail: AlbumDetailTemplate,
  contact: ContactTemplate,
  legal: LegalTemplate,
  not_found: NotFoundTemplate,
};
