import { useParams, Link } from "react-router-dom";
import { leaders } from "../data/leaders";
import DetailPageLayout from "../components/ui/DetailPageLayout";
import {
  Mail,
  Phone,
  User,
  Cake,
  Briefcase,
  GraduationCap,
  Award,
  Heart,
  Star,
} from "lucide-react";
import { leaderDetailContent } from "../data/leaderDetail";
import { getPageConfig } from "../data/pages";

export default function LeaderDetail() {
  const { id } = useParams<{ id: string }>();
  const leader = leaders.find((l) => l.id === id);
  const page = getPageConfig("leaderDetail");

  if (!leader) {
    return (
      <div className="min-h-screen pt-32 pb-16 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">
          {leaderDetailContent.notFoundTitle}
        </h2>
        <Link to="/leiter" className="text-blue-600 hover:underline">
          {leaderDetailContent.backLabel}
        </Link>
      </div>
    );
  }

  return (
    <DetailPageLayout
      hero={{
        image: leader.image || page.hero?.image || "",
        title: leader.name,
        subtitle: leader.role || page.hero?.subtitle,
      }}
      backLink={{
        to: "/leiter",
        label: leaderDetailContent.backLabel,
      }}
      contentMaxWidthClassName="max-w-5xl"
    >
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="w-full md:w-1/3 flex flex-col items-center text-center md:items-start md:text-left">
          <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 rounded-2xl overflow-hidden shadow-lg mb-6">
            <img
              src={leader.image}
              alt={leader.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full bg-blue-50 p-6 rounded-xl border border-blue-100">
            <h3 className="font-bold text-gray-800 mb-4 text-lg">
              {leaderDetailContent.contactTitle}
            </h3>
            <div className="flex flex-col gap-3 text-gray-600">
              {leader.email && (
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <a
                    href={`mailto:${leader.email}`}
                    className="hover:text-blue-600 break-all text-sm"
                  >
                    {leader.email}
                  </a>
                </div>
              )}
              {leader.phone && (
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <a
                    href={`tel:${leader.phone}`}
                    className="hover:text-blue-600 text-sm"
                  >
                    {leader.phone}
                  </a>
                </div>
              )}
              {!leader.email && !leader.phone && (
                <div className="flex items-center gap-3 italic text-gray-400">
                  <User className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">
                    {leaderDetailContent.noContactText}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex-1 w-full">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              {leader.name}
            </h1>
            <div className="flex flex-wrap gap-x-4 gap-y-2 items-baseline">
              <span className="text-blue-600 font-bold text-xl">
                {leader.role}
              </span>
              {leader.nickname && (
                <span className="text-gray-500 text-lg">
                  aka "{leader.nickname}"
                </span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {leader.birthday && (
              <div className="flex items-start gap-3">
                <Cake className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">
                    {leaderDetailContent.birthdayLabel}
                  </p>
                  <p className="text-gray-800">{leader.birthday}</p>
                </div>
              </div>
            )}

            {leader.profession && (
              <div className="flex items-start gap-3">
                <Briefcase className="w-6 h-6 text-slate-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">
                    {leaderDetailContent.professionLabel}
                  </p>
                  <p className="text-gray-800">{leader.profession}</p>
                </div>
              </div>
            )}

            {leader.courses && (
              <div className="flex items-start gap-3">
                <GraduationCap className="w-6 h-6 text-indigo-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">
                    {leaderDetailContent.coursesLabel}
                  </p>
                  <p className="text-gray-800">{leader.courses}</p>
                </div>
              </div>
            )}

            {leader.jublaRoles && (
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">
                    {leaderDetailContent.rolesLabel}
                  </p>
                  <p className="text-gray-800">{leader.jublaRoles}</p>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-8">
            <div className="prose prose-lg max-w-none text-gray-600 whitespace-pre-line">
              <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                <User className="w-5 h-5 text-blue-600" />
                {leaderDetailContent.aboutLabel}
              </h3>
              <p>{leader.longDescription || leader.description}</p>
            </div>

            {leader.hobbies && (
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-red-500" />
                  {leaderDetailContent.hobbiesLabel}
                </h3>
                <p className="text-gray-700">{leader.hobbies}</p>
              </div>
            )}

            {leader.jublaHighlight && (
              <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100">
                <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  {leaderDetailContent.highlightLabel}
                </h3>
                <p className="text-gray-700 italic">
                  "{leader.jublaHighlight}"
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </DetailPageLayout>
  );
}
