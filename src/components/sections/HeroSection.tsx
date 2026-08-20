import { Fragment } from "react";
import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";

interface HeroSectionProps {
  backgroundImage?: string;
  lines?: string[];
  subtitle?: string;
  button?: {
    text: string;
    scrollTo?: string;
  };
}

export default function HeroSection({
  backgroundImage,
  lines = [],
  subtitle,
  button,
}: HeroSectionProps) {
  const scrollToSection = (id?: string) => {
    if (!id) return;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="font-amatic text-7xl sm:text-8xl lg:text-9xl font-bold text-white leading-tight mb-6">
            {lines.map((line, index) => (
              <Fragment key={index}>
                {line}
                {index < lines.length - 1 && <br />}
              </Fragment>
            ))}
          </h1>
          {subtitle && (
            <p className="font-mundial font-light text-xl sm:text-2xl text-gray-200 mb-8 max-w-2xl">
              {subtitle}
            </p>
          )}
          {button && (
            <Button
              onClick={() => scrollToSection(button.scrollTo)}
              icon={ArrowRight}
            >
              {button.text}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
