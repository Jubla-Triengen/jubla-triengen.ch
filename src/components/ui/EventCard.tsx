import { Calendar } from "lucide-react";
import Card from "./Card";

interface EventCardProps {
  image: string;
  title: string;
  date: string;
  description: string;
  onClick?: () => void;
}

export default function EventCard({
  image,
  title,
  date,
  description,
  onClick,
}: EventCardProps) {
  return (
    <Card
      image={image}
      title={title}
      onClick={onClick}
      subtitle={
        <div className="flex items-center gap-2 text-jubla-yellow">
          <Calendar className="w-4 h-4" />
          <span className="font-mundial font-light text-sm">{date}</span>
        </div>
      }
    >
      {description}
    </Card>
  );
}
