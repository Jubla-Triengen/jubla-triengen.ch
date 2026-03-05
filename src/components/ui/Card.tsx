import { ReactNode } from "react";

interface CardProps {
  image?: string;
  title: string;
  subtitle?: ReactNode;
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Card({
  image,
  title,
  subtitle,
  children,
  className = "",
  onClick,
}: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white ${className}`}
    >
      {image && (
        <div className="relative h-64 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      )}
      <div className="p-6">
        <h3 className="font-mundial font-semibold text-2xl text-black mb-2">
          {title}
        </h3>
        {subtitle && <div className="mb-3">{subtitle}</div>}
        <div className="font-mundial font-light text-gray-600">{children}</div>
      </div>
    </div>
  );
}
