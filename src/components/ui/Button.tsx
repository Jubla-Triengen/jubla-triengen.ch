import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  className?: string;
}

export default function Button({
  children,
  onClick,
  variant = "primary",
  icon: Icon,
  iconPosition = "right",
  className = "",
}: ButtonProps) {
  const baseStyles =
    "font-mundial font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-2 text-center justify-center";

  const variantStyles = {
    primary: "bg-jubla-yellow hover:bg-jubla-yellow-dark text-black",
    secondary: "bg-black hover:bg-gray-800 text-white",
    ghost: "text-jubla-yellow hover:text-jubla-yellow-dark font-medium",
  };

  return (
    <button
      onClick={onClick}
      className={`group ${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {Icon && iconPosition === "left" && (
        <Icon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      )}
      {children}
      {Icon && iconPosition === "right" && (
        <Icon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      )}
    </button>
  );
}
