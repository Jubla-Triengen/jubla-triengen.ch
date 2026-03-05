import { Calendar } from "lucide-react";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

interface EventCardProps {
  id: string;
  image: string;
  title: string;
  date: string;
  description: string;
}

export default function EventCard({
  id,
  image,
  title,
  date,
  description,
}: EventCardProps) {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/anlässe/${id}`);
  };


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
