import { PhoneCall, Mail, MapPin } from "lucide-react";
import type { Metadata } from "next";
import { contactInfo } from "@/constants/index";

export const metadata: Metadata = {
  title: "Kontakt - Ostrog Clean | Pozovite 062 147 4347",
  description:
    "Kontaktirajte Ostrog Clean za profesionalne usluge čišćenja. Telefon: 062 147 4347, Email: svovpmkoostrog@gmail.com. Dostupni Pon-Sub 07:00-20:00",
  keywords: ["kontakt", "ostrog clean kontakt", "čišćenje kontakt"],
};

export default function KontaktPage() {
  return (
    <main className="min-h-screen pb-16 ">
      <div className="w-full bg-primary h-20"></div>
      <div className="container mx-auto max-w-6xl px-4 pt-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Kontaktirajte nas
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Spremni smo da odgovorimo na sva vaša pitanja i pružimo vam
            besplatnu procenu za vaš objekat
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Kontakt informacije */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-foreground">
              Kontakt informacije
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                <PhoneCall className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Telefon</h3>
                  <a
                    href={contactInfo.phoneLink}
                    className="text-muted-foreground hover:text-primary transition-colors text-lg"
                  >
                    {contactInfo.phone}
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    Pozovite nas za brzu procenu
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    {contactInfo.email}
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    Pošaljite nam upit putem email-a
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Lokacija</h3>
                  <p className="text-muted-foreground">{contactInfo.address}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Pružamo usluge na celoj teritoriji grada Beograda
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Brzi kontakt */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-foreground">
              Pošaljite upit
            </h2>
            <div className="bg-gradient-to-br from-blue-600 to-blue-900 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Zatražite besplatnu procenu
              </h3>
              <p className="mb-6 text-blue-100">
                Pozovite nas direktno za brzu procenu ili nam pošaljite email sa
                detaljima vašeg projekta. Odgovaramo u najkraćem mogućem roku!
              </p>

              <div className="space-y-4">
                <a
                  href={contactInfo.phoneLink}
                  className="bg-white text-blue-700 px-6 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors inline-flex items-center justify-center gap-3 w-full text-lg"
                >
                  <PhoneCall className="w-6 h-6" />
                  <span>Pozovite odmah: {contactInfo.phone}</span>
                </a>

                <a
                  href={`mailto:${contactInfo.email}`}
                  className="border-2 border-white text-white px-6 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-3 w-full text-lg"
                >
                  <Mail className="w-6 h-6" />
                  <span>Pošaljite email</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ sekcija */}
        <div className="bg-muted/50 p-8 md:p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
            Često postavljana pitanja
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                q: "Koliko košta vaša usluga?",
                a: "Cena zavisi od vrste usluge, veličine objekta i specifičnih zahteva. Pružamo besplatnu procenu - kontaktirajte nas za tačnu ponudu.",
              },
              {
                q: "Da li donosite svoju opremu?",
                a: "Da, donosimo svu potrebnu profesionalnu opremu i sredstva za čišćenje.",
              },
              {
                q: "Da li nudite redovno održavanje?",
                a: "Da, nudimo ugovore o redovnom održavanju sa povoljnijim cenama za dugoročnu saradnju.",
              },
              {
                q: "Da li ste osigurani?",
                a: "Da, imamo potpunu osiguranu odgovornost za sve naše usluge.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg border border-border"
              >
                <h3 className="font-bold text-lg mb-2 text-foreground">
                  {faq.q}
                </h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA sekcija */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d181139.14818166208!2d20.25766258794624!3d44.815469102981076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aa3d7b53fbd%3A0x1db8645cf2177ee4!2z0JHQtdC-0LPRgNCw0LQ!5e0!3m2!1ssr!2srs!4v1765156203966!5m2!1ssr!2srs"
          width="600"
          height="450"
          style={{ border: "0" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        ></iframe>
      </div>
    </main>
  );
}
