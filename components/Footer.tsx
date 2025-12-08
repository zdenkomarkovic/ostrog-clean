import Link from "next/link";
import { PhoneCall, Mail, MapPin } from "lucide-react";
import { contactInfo, navList } from "@/constants/index";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-blue-700 to-blue-900 text-white">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">{contactInfo.company}</h3>
            <p className="text-blue-100 leading-relaxed">
              Profesionalno čišćenje i održavanje objekata sa višegodišnjim
              iskustvom i posvećenošću kvalitetu.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Brzi linkovi</h4>
            <ul className="space-y-2">
              {navList.map((item, index) => {
                if (item.list) {
                  return null; // Skip services dropdown in footer
                }
                return (
                  <li key={index}>
                    <Link
                      href={item.link}
                      className="text-blue-100 hover:text-white transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-4">Usluge</h4>
            <ul className="space-y-2">
              {navList
                .find((item) => item.list)
                ?.list?.slice(0, 5)
                .map((service, index) => (
                  <li key={index}>
                    <Link
                      href={service.link}
                      className="text-blue-100 hover:text-white transition-colors"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={contactInfo.phoneLink}
                  className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors"
                >
                  <PhoneCall className="w-5 h-5 flex-shrink-0" />
                  <span>{contactInfo.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span className="break-all">{contactInfo.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-blue-100">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>{contactInfo.address}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-600 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-100 text-center md:text-left">
              © {currentYear} {contactInfo.company}. Sva prava zadržana.
            </p>
            <div className="flex gap-6 text-blue-100 text-sm">
              <a
                href="https://www.manikamwebsolutions.com/"
                target="_blank"
                className="hover:text-white transition-colors"
                rel="noopener noreferrer"
              >
                Izrada sajta:{" "}
                <span className="font-bold">ManikamWebSolutions</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
