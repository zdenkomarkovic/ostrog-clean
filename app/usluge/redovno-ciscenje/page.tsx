import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  CheckCircle,
  PhoneCall,
  Mail,
  Building2,
  UtensilsCrossed,
  Home,
  SprayCanIcon,
  Users,
  ClipboardCheck,
  Leaf,
  Calendar,
} from "lucide-react";
import type { Metadata } from "next";
import Gallery from "@/components/Gallery";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Redovno Čišćenje i Održavanje Objekata | Ostrog Clean",
  description:
    "Profesionalno redovno čišćenje poslovnih prostora, stanova, restorana i kafića. Mopovanje, usisavanje, brisanje prašine, čišćenje toaleta. Pozovite 062 147 4347",
  keywords: [
    "redovno čišćenje",
    "održavanje objekata",
    "čišćenje kancelarija",
    "čišćenje restorana",
    "čišćenje kafića",
    "čišćenje stanova",
    "dnevno čišćenje",
    "održavanje čistoće",
  ],
  openGraph: {
    title: "Redovno Čišćenje i Održavanje Objekata | Ostrog Clean",
    description:
      "Profesionalno redovno čišćenje i održavanje. Mopovanje, usisavanje, brisanje prašine, čišćenje sanitarija.",
  },
};

export default function RedovnoCiscenje() {
  return (
    <main className="min-h-screen">
      {/* Hero sekcija sa slikom */}
      <section className="relative  text-white pt-32 pb-20 px-4 min-h-[60dvh] flex items-center">
        <Image
          src="/lokal (3).jpg"
          alt="Redovno čišćenje"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto max-w-6xl relative">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white hover:text-blue-200 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Nazad na početnu
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Redovno čišćenje i održavanje objekata
          </h1>
          <p className="text-xl text-white leading-relaxed max-w-3xl">
            Profesionalno redovno održavanje poslovnih prostora, stanova,
            restorana i kafića sa fokusom na detalje i higijenu
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-4 py-16">
        <article>
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">
              Šta obuhvata naša usluga redovnog čišćenja?
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Redovno čišćenje i održavanje objekata je osnova očuvanja
              higijene, estetskog izgleda i funkcionalnosti svakog prostora. U
              Ostrog Clean razumemo da čist radni prostor doprinosi
              produktivnosti zaposlenih, dok uredan stan ili restoran stvara
              prijatan ambijent za boravak. Naša usluga redovnog čišćenja
              posebno je prilagođena potrebama poslovnih prostora, gde
              kontinuitet i pouzdanost igraju ključnu ulogu.
            </p>

            <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gradient-to-r from-blue-700 to-blue-900 text-white p-8 mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white text-center">
                Kontaktirajte nas za besplatnu procenu
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+381621474347"
                  className="bg-white text-blue-700 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors inline-flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-5 h-5" /> 062 147 4347
                </a>
                <a
                  href="mailto:svovpmkoostrog@gmail.com"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" /> Pošaljite email
                </a>
              </div>
            </div>

            <div className="bg-muted p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">
                Naše usluge obuhvataju:
              </h3>
              <ul className="space-y-3">
                {[
                  "Mopovanje tvrdih podova profesionalnim sredstvima",
                  "Usisavanje etisona, staza i tepiha sa HEPA filterima",
                  "Brisanje prašine sa svih dostupnih površina",
                  "Čišćenje i dezinfekcija radnih stolova",
                  "Detaljno čišćenje i sanitizacija toaleta",
                  "Pražnjenje korpi za otpatke i zamena kesa",
                  "Čišćenje ogledala i staklenih površina",
                  "Održavanje čistoće u zajedničkim prostorijama",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-6 text-center">
              Specijalizacija za različite vrste objekata
            </h3>

            <div className="grid md:grid-cols-2 gap-6 my-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Building2 className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">
                      Čišćenje poslovnih prostora i kancelarija
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Pružamo fleksibilne termine čišćenja pre ili nakon radnog
                    vremena. Naš tim radi diskretno i efikasno, čuvajući
                    poverljivost dokumenata. Posebnu pažnju posvećujemo
                    konferencijskim salama, zajedničkim kuhinjama i sanitarnim
                    čvorovima.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <UtensilsCrossed className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">
                      Čišćenje restorana i kafića
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Posebno obučeni za ugostiteljske objekte sa naglaskom na
                    dezinfekciju stolova, stolica i radnih površina. Koristimo
                    sertifikovana sredstva bezbedna za kontakt sa hranom koja
                    efikasno uklanjaju bakterije i viruse.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Home className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">
                      Održavanje stanova i stambenih prostora
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Personalizovan pristup prilagođen rasporedu stanara.
                    Nedeljno ili mesečno održavanje vašeg doma uz poštovanje
                    privatnosti i pažljivo rukovanje ličnim predmetima. Vaš dom
                    će uvek izgledati besprekorno.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <SprayCanIcon className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">
                      Čišćenje sanitarnih prostorija
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Temeljno čišćenje i sanitizacija WC šolja, umivaonika,
                    slavina, pločica i podova. Redovno dopunjavanje higijenskog
                    papira, tečnog sapuna i drugog potrošnog materijala za uvek
                    upotrebne sanitarije.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">
                      Fleksibilni planovi i rasporedi
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Potpuna fleksibilnost u planiranju - dnevno, nedeljno ili
                    mesečno održavanje. Čišćenje u jutarnjim satima, tokom dana
                    ili uveče. Prilagođavamo se vašim potrebama i rasporedu.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <ClipboardCheck className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">
                      Kontrola kvaliteta i garancija
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Supervizor redovno vrši kontrolu kvaliteta i prati sve
                    detalje čišćenja. Transparentna komunikacija, redovno
                    izveštavanje o obavljenom poslu. Brzo reagovanje na sve
                    primedbe i sugestije.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            <div className="my-12">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Galerija naših radova
              </h3>
              <Gallery
                images={[
                  "/lokal.jpg",
                  "/lokal (2).jpg",
                  "/lokal (3).jpg",
                  "/lokal (4).jpg",
                  "/lokal (5).jpg",
                  "/lokal (6).jpg",
                  "/lokal (7).jpg",
                  "/lokal (8).jpg",
                  "/lokal (9).jpg",
                  "/lokal (10).jpg",
                ]}
                alt="Redovno čišćenje"
              />
            </div>

            <div className="bg-muted p-6 rounded-lg my-8">
              <div className="flex items-center gap-3 mb-4">
                <Leaf className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold">
                  Ekološki prihvatljiva sredstva
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Koristimo ekološki prihvatljiva sredstva za čišćenje koja su
                efikasna protiv nečistoće, a istovremeno sigurna za ljude,
                životinje i životnu sredinu. Naša sredstva ne sadrže agresivne
                hemikalije koje bi mogle izazvati alergijske reakcije. Za
                klijente sa posebnim zahtevima, nudimo potpuno prirodna i
                hipoalergenska čistila.
              </p>
            </div>
            <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-12 p-8 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
              <h3 className="text-2xl font-bold mb-4 text-white text-center">
                Zatražite besplatnu procenu
              </h3>
              <p className="mb-6 text-center max-w-3xl mx-auto">
                Kontaktirajte nas danas i saznajte kako možemo prilagoditi našu
                uslugu redovnog čišćenja specifičnim potrebama vašeg objekta.
                Pružamo besplatnu procenu i konsultacije bez obaveze.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+381621474347"
                  className="bg-white text-blue-700 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors inline-flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-5 h-5" /> Pozovite: 062 147 4347
                </a>
                <Link
                  href="/kontakt"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"
                >
                  Pošaljite upit
                </Link>
              </div>
            </div>
            <div className="bg-blue-50 dark:bg-blue-950 p-8 rounded-lg mt-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Zašto odabrati Ostrog Clean?
              </h3>
              <ul className="space-y-3">
                {[
                  "Višegodišnje iskustvo u čišćenju različitih vrsta objekata",
                  "Profesionalna oprema i sertifikovana sredstva za čišćenje",
                  "Fleksibilni rasporedi prilagođeni vašim potrebama",
                  "Obučen tim sa pažnjom na detalje",
                  "Konkurentne cene uz vrhunski kvalitet",
                  "Dostupni 6 dana u nedelji",
                  "Brzo reagovanje na dodatne zahteve",
                  "Garancija zadovoljstva",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
