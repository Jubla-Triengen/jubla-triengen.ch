import { useParams, Link } from 'react-router-dom';
import { offerings } from '../data/offerings';
import PageHero from '../components/ui/PageHero';
import { ArrowLeft } from 'lucide-react';

export default function OfferingDetail() {
  const { id } = useParams<{ id: string }>();
  const offering = offerings.find(o => o.id === id);

  if (!offering) {
    return (
      <div className="min-h-screen pt-32 pb-16 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Angebot nicht gefunden</h2>
         <Link to="/angebote" className="text-blue-600 hover:underline">Zurück zur Übersicht</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <PageHero 
        image={offering.image}
        title={offering.title}
      />
      
      <div className="container mx-auto px-4 md:px-8 -mt-20 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
          <Link to="/angebote" className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zur Übersicht
          </Link>

          <p className="text-xl md:text-2xl font-medium text-gray-800 mb-8 leading-relaxed">
            {offering.shortDescription}
          </p>

          <div className="prose prose-lg max-w-none text-gray-600 mb-12 whitespace-pre-line">
            {offering.longDescription}
          </div>
        </div>
      </div>
    </div>
  );
}
