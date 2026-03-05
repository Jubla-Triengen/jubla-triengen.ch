interface SectionTitleProps {
  children: string;
  className?: string;
}

export default function SectionTitle({
  children,
  className = "",
}: SectionTitleProps) {
  return (
    <h2
      className={`font-amatic text-6xl sm:text-7xl font-bold text-center text-black mb-1 ${className}`}
    >
      {children}
    </h2>
  );
}
