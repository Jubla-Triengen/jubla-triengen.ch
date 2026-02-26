import { useNavigate } from 'react-router-dom';
import PageHero from '../components/ui/PageHero';
import ContentImageSection from '../components/ui/ContentImageSection';
import { contactPageData } from '../data/contact';
import { Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const navigate = useNavigate();
  const { hero, sections } = contactPageData;

  // Helper to render contact details if they exist
  const renderContactDetails = (details: any) => {
    if (!details) return null;
    return (
      <div className="mt-8 space-y-4 mb-8">
        {details.email && (
          <div className="flex items-center gap-3">
            <div className="bg-jubla-yellow p-3 rounded-full">
              <Mail className="w-6 h-6 text-black" />
            </div>
            <a href={`mailto:${details.email}`} className="text-xl font-mundial hover:text-jubla-blue transition-colors">
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
              {details.address.map((line: string, i: number) => (
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
       <PageHero 
        title={hero.title} 
        subtitle={hero.subtitle} 
        image={hero.image} 
      />
      
      {sections.map((section, index) => (
         <ContentImageSection
            key={section.id}
            id={section.id}
            title={section.title}
            paragraphs={section.paragraphs}
            image={section.image}
            button={section.button ? {
                text: section.button.text,
                action: () => {
                   if (section.button!.link.startsWith('/')) {
                        navigate(section.button!.link);
                    } else {
                        window.location.href = section.button!.link;
                    }
                }
            } : undefined}
            imagePosition={section.imagePosition as 'left' | 'right'}
            backgroundColor={section.backgroundColor}
            decorativeCircle={index % 2 === 0}
         >
            {(section as any).contactDetails && renderContactDetails((section as any).contactDetails)}
         </ContentImageSection>
      ))}
    </div>
  );
}
