interface SectionTextProps {
  children: string;
  className?: string;
}

export default function SectionText({
  children,
  className = "",
}: SectionTextProps) {
  return (
    <p
      className={`font-mundial font-light text-xl text-center text-gray-600 max-w-3xl mx-auto ${className}`}
    >
      {children}
    </p>
  );
}
