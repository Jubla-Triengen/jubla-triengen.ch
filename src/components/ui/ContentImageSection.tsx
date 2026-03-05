import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";
import Button from "./Button";

interface ContentImageSectionProps {
  id?: string;
  title: string;
  paragraphs: string[];
  image: {
    src: string;
    alt: string;
  };
  button?: {
    text: string;
    icon?: LucideIcon;
    action: () => void;
  };
  imagePosition?: "left" | "right";
  backgroundColor?: string;
  decorativeCircle?: boolean;
  children?: ReactNode;
}

export default function ContentImageSection({
  id,
  title,
  paragraphs,
  image,
  button,
  imagePosition = "right",
  backgroundColor = "bg-gradient-to-b from-gray-50 to-white",
  decorativeCircle = true,
  children,
}: ContentImageSectionProps) {
  const contentOrder = imagePosition === "left" ? "lg:order-2" : "";
  const imageOrder = imagePosition === "left" ? "lg:order-1" : "";

  return (
    <section id={id} className={`py-24 ${backgroundColor}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <div className={contentOrder + " h-full"}>
            <h2 className="font-amatic text-6xl sm:text-7xl font-bold text-black mb-6">
              {title}
            </h2>
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`font-mundial font-light text-lg text-gray-700 leading-relaxed ${
                  index === paragraphs.length - 1
                    ? button
                      ? "mb-8"
                      : ""
                    : "mb-6"
                }`}
              >
                {paragraph}
              </p>
            ))}
            {children}
            {button && (
              <Button onClick={button.action} icon={button.icon}>
                {button.text}
              </Button>
            )}
          </div>

          <div className={`relative h-full ${imageOrder}`}>
            <div className="rounded-3xl overflow-hidden shadow-2xl h-full">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover overflow-hidden"
              />
            </div>
            {decorativeCircle && (
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-jubla-yellow rounded-full opacity-20 blur-3xl"></div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
