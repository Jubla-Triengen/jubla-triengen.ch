import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  subtitle,
  description,
}: FeatureCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
      <div className="w-16 h-16 bg-jubla-yellow rounded-full flex items-center justify-center mb-6">
        <Icon className="w-8 h-8 text-black" />
      </div>
      <h3 className="font-mundial font-semibold text-2xl text-black mb-2">
        {title}
      </h3>
      <p className="font-mundial font-light text-jubla-yellow mb-3">
        {subtitle}
      </p>
      <p className="font-mundial font-light text-gray-600">{description}</p>
    </div>
  );
}
