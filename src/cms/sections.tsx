import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Mail, MapPin, Tent } from "lucide-react";
import type { ReactNode } from "react";
import HeroSection from "../components/sections/HeroSection";
import FeatureCard from "../components/ui/FeatureCard";
import ContentImageSection from "../components/ui/ContentImageSection";
import CardSection from "../components/ui/CardSection";
import EventCard from "../components/ui/EventCard";
import NewsCard from "../components/ui/NewsCard";
import LeaderCard from "../components/ui/LeaderCard";
import { useCmsData } from "./context";
import { resolveIcon } from "./icons";
import type { CmsData, CmsSection } from "./types";

interface HeroProps {
  backgroundImage?: string;
  lines?: string[];
  subtitle?: string;
  button?: { text: string; scrollTo?: string };
}

interface FeatureItem {
  icon?: string;
  title: string;
  subtitle: string;
  description: string;
}

interface FeatureGridProps {
  items?: FeatureItem[];
}

interface SectionImage {
  src: string;
  alt: string;
}

interface ContentImageProps {
  id?: string;
  title: string;
  paragraphs?: string[];
  image?: SectionImage;
  button?: { text: string; link?: string; icon?: string };
  imagePosition?: "left" | "right";
  backgroundColor?: string;
  decorativeCircle?: boolean;
  contactDetails?: { email?: string; address?: string[] };
}

interface CardSectionProps {
  id?: string;
  title: string;
  orientation?: "horizontal" | "vertical";
  backgroundColor?: "white" | "gradient";
  button?: { text: string; link?: string };
  cardType?: "event" | "news" | "leader";
  dataSource?: { collection?: string; limit?: number };
  childrenWrapperClassName?: string;
}

function handleLink(navigate: (to: string) => void, link?: string) {
  if (!link) return;
  if (link.startsWith("/")) {
    navigate(link);
  } else {
    window.location.href = link;
  }
}

function renderContactDetails(details?: {
  email?: string;
  address?: string[];
}): ReactNode {
  if (!details) return null;
  return (
    <div className="mt-8 space-y-4 mb-8">
      {details.email && (
        <div className="flex items-center gap-3">
          <div className="bg-jubla-yellow p-3 rounded-full">
            <Mail className="w-6 h-6 text-black" />
          </div>
          <a
            href={`mailto:${details.email}`}
            className="text-xl font-mundial hover:text-jubla-blue transition-colors"
          >
            {details.email}
          </a>
        </div>
      )}
      {details.address && (
        <div className="flex items-start gap-3">
          <div className="bg-jubla-yellow p-3 rounded-full">
            <MapPin className="w-6 h-6 text-black" />
          </div>
          <div className="font-mundial text-lg text-gray-700">
            {details.address.map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function resolveCardItems(props: CardSectionProps, data: CmsData) {
  const collection = props.dataSource?.collection;
  const items =
    collection === "activities"
      ? data.activities
      : collection === "posts"
        ? data.posts
        : collection === "leaders"
          ? data.leaders
          : [];
  const limit = props.dataSource?.limit;
  return limit ? items.slice(0, limit) : items;
}

function renderCardSection(
  props: CardSectionProps,
  data: CmsData,
  navigate: (to: string) => void
): ReactNode {
  const items = resolveCardItems(props, data);

  const cards: ReactNode[] = [];
  for (const item of items) {
    if (props.cardType === "event" && "date" in item) {
      cards.push(
        <EventCard
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          date={item.date}
          description={item.shortDescription}
        />
      );
    } else if (props.cardType === "news" && "date" in item) {
      cards.push(
        <NewsCard
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          date={item.date}
          excerpt={item.shortDescription}
        />
      );
    } else if (props.cardType === "leader" && "role" in item) {
      cards.push(
        <LeaderCard
          key={item.id}
          id={item.id}
          image={item.image}
          name={item.name}
          role={item.role}
          description={item.description}
        />
      );
    }
  }

  return (
    <CardSection
      id={props.id}
      title={props.title}
      orientation={props.orientation}
      backgroundColor={props.backgroundColor}
      button={
        props.button
          ? {
              text: props.button.text,
              icon: ArrowRight,
              onClick: () => handleLink(navigate, props.button?.link),
            }
          : undefined
      }
    >
      {props.childrenWrapperClassName ? (
        <div className={props.childrenWrapperClassName}>{cards}</div>
      ) : (
        cards
      )}
    </CardSection>
  );
}

function renderSection(
  section: CmsSection,
  index: number,
  data: CmsData,
  navigate: (to: string) => void
): ReactNode {
  switch (section.component) {
    case "hero": {
      const props = section.props as HeroProps;
      return (
        <HeroSection
          backgroundImage={props.backgroundImage}
          lines={props.lines}
          subtitle={props.subtitle}
          button={props.button}
        />
      );
    }

    case "feature_grid": {
      const props = section.props as FeatureGridProps;
      return (
        <section className="relative -mt-20 z-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {(props.items ?? []).map((feature, featureIndex) => {
                const Icon = resolveIcon(feature.icon) ?? Tent;
                return (
                  <FeatureCard
                    key={featureIndex}
                    icon={Icon}
                    title={feature.title}
                    subtitle={feature.subtitle}
                    description={feature.description}
                  />
                );
              })}
            </div>
          </div>
        </section>
      );
    }

    case "content_image_section": {
      const props = section.props as unknown as ContentImageProps;
      return (
        <ContentImageSection
          id={props.id}
          title={props.title}
          paragraphs={props.paragraphs ?? []}
          image={
            props.image ?? {
              src: "",
              alt: props.title,
            }
          }
          button={
            props.button
              ? {
                  text: props.button.text,
                  icon: resolveIcon(props.button.icon) ?? ArrowRight,
                  action: () => handleLink(navigate, props.button?.link),
                }
              : undefined
          }
          imagePosition={props.imagePosition}
          backgroundColor={props.backgroundColor}
          decorativeCircle={props.decorativeCircle ?? index % 2 === 0}
        >
          {renderContactDetails(props.contactDetails)}
        </ContentImageSection>
      );
    }

    case "card_section": {
      const props = section.props as unknown as CardSectionProps;
      return renderCardSection(props, data, navigate);
    }

    default:
      return null;
  }
}

interface SectionRendererProps {
  sections: CmsSection[];
}

export default function SectionRenderer({ sections }: SectionRendererProps) {
  const navigate = useNavigate();
  const data = useCmsData();

  return (
    <>
      {sections.map((section, index) => (
        <Fragment key={`${section.pageKey}-${section.sortOrder}`}>
          {renderSection(section, index, data, navigate)}
        </Fragment>
      ))}
    </>
  );
}
