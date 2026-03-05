import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
  LucideIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";

interface ContactItem {
  icon: LucideIcon;
  text: string;
  href?: string;
}

interface LinkItem {
  label: string;
  href: string;
}

interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

const brandConfig = {
  name: "Jubla Triengen",
  description:
    "Abenteuer, Freundschaft und unvergessliche Erlebnisse für Kinder und Jugendliche.",
};

const contactInfo: ContactItem[] = [
  {
    icon: Mail,
    text: "info@jubla-triengen.ch",
    href: "mailto:info@jubla-triengen.ch",
  },
  {
    icon: Phone,
    text: "+41 41 123 45 67",
    href: "tel:+41411234567",
  },
  {
    icon: MapPin,
    text: "Triengen, Luzern",
  },
];

const infoLinks: LinkItem[] = [
  { label: "Angebote", href: "/angebote" },
  { label: "Anlässe", href: "/anlässe" },
  { label: "News", href: "/posts" },
  { label: "Über uns", href: "/über-uns" },
];

const socialLinks: SocialLink[] = [
  { icon: Facebook, href: "https://www.facebook.com/jublatriengen", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/jublatriengen/", label: "Instagram" },
];

const footerLinks: LinkItem[] = [
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "Impressum", href: "/impressum" },
];

export default function Footer() {
  return (
    <footer className="bg-jubla-gray text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Logo className="w-14 h-14 text-jubla-yellow" />
              <h4 className="font-amatic text-4xl font-bold">
                {brandConfig.name}
              </h4>
            </div>
            <p className="font-mundial font-light text-gray-300 leading-relaxed">
              {brandConfig.description}
            </p>
          </div>

          <div>
            <h5 className="font-mundial font-semibold text-lg mb-4">Kontakt</h5>
            <ul className="space-y-3">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <li key={index} className="flex items-start gap-3">
                    <Icon className="w-5 h-5 text-jubla-yellow mt-0.5 flex-shrink-0" />
                    {contact.href ? (
                      <a
                        href={contact.href}
                        className="font-mundial font-light text-gray-300 hover:text-jubla-yellow transition-colors"
                      >
                        {contact.text}
                      </a>
                    ) : (
                      <span className="font-mundial font-light text-gray-300">
                        {contact.text}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h5 className="font-mundial font-semibold text-lg mb-4">
              Lager & Infos
            </h5>
            <ul className="space-y-3">
              {infoLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="font-mundial font-light text-gray-300 hover:text-jubla-yellow transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-mundial font-semibold text-lg mb-4">
              Folge uns
            </h5>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-12 h-12 bg-jubla-yellow hover:bg-jubla-yellow-dark rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  >
                    <Icon className="w-6 h-6 text-black" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-mundial font-light text-gray-400 text-sm">
              © {new Date().getFullYear()} {brandConfig.name}. Alle Rechte
              vorbehalten.
            </p>
            <div className="flex gap-6">
              {footerLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="font-mundial font-light text-gray-400 hover:text-jubla-yellow text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
