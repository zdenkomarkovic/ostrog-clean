import Link from "next/link";
import Image from "next/image";
import { services } from "@/constants/index";
import { ArrowRight, CheckCircle, PhoneCall, Mail } from "lucide-react";
import Statistics from "@/components/Statistics";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="">
      {/* Hero sekcija */}
      <section className="relative min-h-screen text-white pt-32  px-4 flex items-center">
        <Image
          src="/hero.jpg"
          alt="Profesionalno čišćenje"
          fill
          className="object-cover "
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto max-w-6xl relative ">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Profesionalno čišćenje i održavanje objekata
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
              Vaš pouzdani partner za čišćenje poslovnih prostora, stanova,
              restorana i kafića
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link
                href="/kontakt"
                className=" text-white border-2  border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors inline-flex items-center justify-center gap-2"
              >
                Kontaktirajte nas <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+381621474347"
                className=" text-blue-700 bg-white  px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-5 h-5" /> 062 147 4347
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* O nama sekcija */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Zašto odabrati Ostrog Clean?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Sa višegodišnjim iskustvom i profesionalnim timom, pružamo usluge
              najvišeg kvaliteta
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "⭐",
                title: "Profesionalnost",
                description:
                  "Obučen i iskusan tim stručnjaka sa modernom opremom",
              },
              {
                icon: "🕒",
                title: "Fleksibilnost",
                description:
                  "Prilagođavamo se vašem rasporedu i specifičnim potrebama",
              },
              {
                icon: "✅",
                title: "Kvalitet",
                description: "Garantujemo vrhunski kvalitet svih naših usluga",
              },
              {
                icon: "💰",
                title: "Povoljne cene",
                description: "Konkurentne cene uz maksimalan kvalitet usluge",
              },
              {
                icon: "🏢",
                title: "Iskustvo",
                description:
                  "Specijalizovani za poslovne prostore, restorane i kafići",
              },
              {
                icon: "🔒",
                title: "Pouzdanost",
                description:
                  "Diskrecija i sigurnost vašeg prostora su naš prioritet",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-border"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Usluge sekcija */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Naše usluge</h2>
            <p className="text-xl text-muted-foreground">
              Kompletan spektar profesionalnih usluga čišćenja
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                href={`/usluge/${service.slug}`}
                className="bg-card rounded-lg shadow-md hover:shadow-xl transition-all border border-border hover:border-primary group overflow-hidden"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.shortDescription}
                  </p>
                  <div className="flex items-center text-primary font-semibold">
                    Saznajte više{" "}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Statistika */}
      <Statistics />

      {/* Testimonials */}
      <Testimonials />

      {/* Poseban fokus na poslovne prostore */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-700 to-blue-900">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Specijalizovani za poslovne prostore
              </h2>
              <p className="text-lg text-white mb-6">
                Razumemo specifične potrebe različitih vrsta objekata i pružamo
                prilagođena rešenja za:
              </p>
              <ul className="space-y-3 text-lg">
                {[
                  "Poslovne zgrade i kancelarije",
                  "Restorane i kafići",
                  "Prodavnice i trgovinske centre",
                  "Medicinske ordinacije",
                  "Stanove i stambene zgrade",
                  "Objekte nakon renoviranja",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                    <span className="text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-muted border border-border p-8 rounded-lg">
              <h3 className="text-2xl font-bold  mb-6">Kontaktirajte nas</h3>
              <div className="space-y-4">
                <a
                  href="tel:+381621474347"
                  className="flex items-center gap-3 text-lg hover:text-primary transition-colors text-foreground"
                >
                  <PhoneCall className="w-6 h-6" />
                  <span>062 147 4347</span>
                </a>
                <a
                  href="mailto:svovpmkoostrog@gmail.com"
                  className="flex items-center gap-3 text-lg hover:text-primary transition-colors text-foreground"
                >
                  <Mail className="w-6 h-6" />
                  <span>svovpmkoostrog@gmail.com</span>
                </a>
              </div>
              <Link
                href="/kontakt"
                className="mt-6 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors inline-flex items-center gap-2 w-full justify-center"
              >
                Pošaljite upit <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA sekcija */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Spremni za profesionalno čišćenje?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Kontaktirajte nas danas i dobijte besplatnu procenu za vaš objekat
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2"
            >
              Zatražite ponudu <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+381621474347"
              className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/10 transition-colors inline-flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-5 h-5" /> Pozovite nas
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
