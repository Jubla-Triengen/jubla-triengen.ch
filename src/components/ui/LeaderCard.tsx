import { ArrowRight, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface LeaderCardProps {
  id: string;
  image: string;
  name: string;
  role: string;
  description: string;
}

export default function LeaderCard({
  id,
  image,
  name,
  role,
  description,
}: LeaderCardProps) {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/leiter/${id}`);
  };

  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col sm:flex-row">
      <div className="sm:w-1/3 h-48 sm:h-auto overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="sm:w-2/3 p-6">
        <div className="flex items-center gap-2 text-gray-500 mb-3">
          <User className="w-4 h-4" />
          <span className="font-mundial font-light text-sm uppercase tracking-wider text-jubla-blue font-medium">
            {role}
          </span>
        </div>
        <h3 className="font-mundial font-semibold text-2xl text-black mb-3">
          {name}
        </h3>
        <p className="font-mundial font-light text-gray-600 mb-4">
          {description}
        </p>
        <button
          className="text-jubla-yellow hover:text-jubla-yellow-dark font-mundial font-medium flex items-center gap-2 group"
          onClick={onClick}
        >
          Mehr erfahren
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
