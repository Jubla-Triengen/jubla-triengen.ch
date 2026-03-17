import PageHero from "./PageHero";
import type { LegalContentData } from "../../data/legal";
import type { PageHeroData } from "../../data/pages";

interface LegalPageLayoutProps {
  hero: PageHeroData;
  data: LegalContentData;
}

export default function LegalPageLayout({ hero, data }: LegalPageLayoutProps) {
  const { lastUpdated, sections } = data;

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        title={hero.title}
        subtitle={hero.subtitle}
        image={hero.image}
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-8xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm">
          {lastUpdated && (
            <div className="mb-8 text-sm text-gray-500 font-mundial">
              Zuletzt aktualisiert: {lastUpdated}
            </div>
          )}

          <div className="space-y-12">
            {sections.map((section, index) => (
              <section key={index} className="space-y-4">
                {section.title && (
                  <h2 className="text-2xl font-recoleta text-gray-900 mb-4">
                    {section.title}
                  </h2>
                )}
                <div className="space-y-4 text-gray-600 font-mundial font-light leading-relaxed">
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
