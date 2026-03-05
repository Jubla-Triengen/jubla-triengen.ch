import { ReactNode } from "react";
import SectionTitle from "./SectionTitle";
import Button from "./Button";
import { LucideIcon } from "lucide-react";

interface CardSectionProps {
  id?: string;
  title: string;
  children: ReactNode;
  orientation?: "horizontal" | "vertical";
  backgroundColor?: "white" | "gradient";
  button?: {
    text: string;
    icon?: LucideIcon;
    onClick?: () => void;
  };
}

export default function CardSection({
  id,
  title,
  children,
  orientation = "horizontal",
  backgroundColor = "white",
  button,
}: CardSectionProps) {
  const bgClass =
    backgroundColor === "gradient"
      ? "bg-gradient-to-b from-white to-gray-50"
      : "bg-white";

  const gridClass =
    orientation === "horizontal"
      ? "grid grid-cols-1 md:grid-cols-3 gap-8"
      : "grid grid-cols-1 lg:grid-cols-3 gap-8";

  return (
    <section id={id} className={`py-24 ${bgClass}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle className="mb-6">{title}</SectionTitle>

        <div className={`${gridClass} ${button ? "mb-12" : ""}`}>
          {children}
        </div>

        {button && (
          <div className="text-center">
            <Button icon={button.icon} onClick={button.onClick}>
              {button.text}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
