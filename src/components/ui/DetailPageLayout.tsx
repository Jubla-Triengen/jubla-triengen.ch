import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import PageHero from "./PageHero";

interface DetailPageLayoutProps {
  hero: {
    image: string;
    title: string;
    subtitle?: string;
  };
  backLink: {
    to: string;
    label: string;
  };
  children: ReactNode;
  contentMaxWidthClassName?: string;
}

export default function DetailPageLayout({
  hero,
  backLink,
  children,
  contentMaxWidthClassName = "max-w-4xl",
}: DetailPageLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <PageHero
        image={hero.image}
        title={hero.title}
        subtitle={hero.subtitle}
      />

      <div className="container mx-auto px-4 md:px-8 -mt-20 relative z-10">
        <div
          className={`bg-white rounded-3xl shadow-xl p-8 md:p-12 mx-auto ${contentMaxWidthClassName}`}
        >
          <Link
            to={backLink.to}
            className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {backLink.label}
          </Link>

          {children}
        </div>
      </div>
    </div>
  );
}
