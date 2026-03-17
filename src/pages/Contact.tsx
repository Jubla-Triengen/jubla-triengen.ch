import { useNavigate } from "react-router-dom";
import PageHero from "../components/ui/PageHero";
import ContentImageSection from "../components/ui/ContentImageSection";
import { contactPageData } from "../data/contact";
import { Mail, MapPin } from "lucide-react";
import { getPageConfig } from "../data/pages";
import type { ContactDetails } from "../data/contact";

export default function Contact() {
  const navigate = useNavigate();
  const page = getPageConfig("contact");
  const { sections } = contactPageData;

  const renderContactDetails = (details?: ContactDetails) => {
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
              {details.address.map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {page.hero && <PageHero {...page.hero} />}

      {sections.map((section, index) => (
        <ContentImageSection
          key={section.id}
          id={section.id}
          title={section.title}
          paragraphs={section.paragraphs}
          image={section.image}
          button={
            section.button
              ? {
                  text: section.button.text,
                  action: () => {
                    if (section.button!.link.startsWith("/")) {
                      navigate(section.button!.link);
                    } else {
                      window.location.href = section.button!.link;
                    }
                  },
                }
              : undefined
          }
          imagePosition={section.imagePosition}
          backgroundColor={section.backgroundColor}
          decorativeCircle={index % 2 === 0}
        >
          {renderContactDetails(section.contactDetails)}
        </ContentImageSection>
      ))}
    </div>
  );
}
