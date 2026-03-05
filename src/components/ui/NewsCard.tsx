import { ArrowRight, Calendar, Key } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface NewsCardProps {
  id: string;
  image: string;
  title: string;
  date: string;
  excerpt: string;
}

export default function NewsCard({
  image,
  title,
  date,
  excerpt,
  id
}: NewsCardProps) {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/posts/${id}`); 
  };

  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col sm:flex-row">
      <div className="sm:w-1/3 h-48 sm:h-auto overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="sm:w-2/3 p-6">
        <div className="flex items-center gap-2 text-gray-500 mb-3">
          <Calendar className="w-4 h-4" />
          <span className="font-mundial font-light text-sm">{date}</span>
        </div>
        <h3 className="font-mundial font-semibold text-2xl text-black mb-3">
          {title}
        </h3>
        <p className="font-mundial font-light text-gray-600 mb-4">{excerpt}</p>
        <button className="text-jubla-yellow hover:text-jubla-yellow-dark font-mundial font-medium flex items-center gap-2 group" onClick={onClick}>
          Weiterlesen
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
