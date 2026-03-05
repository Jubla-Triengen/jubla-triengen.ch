import SectionText from "./SectionText";
import SectionTitle from "./SectionTitle";

interface PageDescriptionProps {
  title: string;
  description: string;
  className?: string;
  textClassName?: string;
}

export default function PageDescription({
  title,
  description,
  className = "",
  textClassName = "mt-4",
}: PageDescriptionProps) {
  return (
    <div className={`text-center mb-16 max-w-2xl mx-auto ${className}`}>
      <SectionTitle>{title}</SectionTitle>
      <SectionText className={textClassName}>{description}</SectionText>
    </div>
  );
}
