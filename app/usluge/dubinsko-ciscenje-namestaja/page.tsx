import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  CheckCircle,
  PhoneCall,
  Mail,
  Droplet,
  Wind,
  Sparkles,
  Shield,
  Heart,
  Armchair,
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
  title: "Dubinsko Čišćenje Nameštaja, Staza i Tepiha | Ostrog Clean",
  description:
    "Profesionalno dubinsko suvo i mokro čišćenje nameštaja, staza i tepiha. Uklanjanje mrlja, alergena i neprijatnih mirisa. Pozovite 062 147 4347",
  keywords: [
    "dubinsko čišćenje nameštaja",
    "pranje tepiha",
    "čišćenje staza",
    "mokro čišćenje nameštaja",
    "suvo čišćenje nameštaja",
    "uklanjanje mrlja",
  ],
};

export default function DubinskoCiscenjeNamestaja() {
  return (
    <main className="min-h-screen">
      {/* Hero sekcija sa slikom */}
      <section className="relative text-white pt-32 pb-20 px-4 min-h-[60dvh] flex items-center">
        <Image
          src="/dubinsko (4).jpg"
          alt="Dubinsko čišćenje nameštaja"
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
            Dubinsko čišćenje nameštaja, staza i tepiha
          </h1>
          <p className="text-xl leading-relaxed max-w-3xl">
            Profesionalno dubinsko suvo i mokro čišćenje svih vrsta nameštaja,
            staza i tepiha sa najsavremenijom opremom
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-4 py-16">
        <article>
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">
              Profesionalno dubinsko čišćenje tapaciranog nameštaja
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Tapaciran nameštaj, tepiси i staze su površine koje svakodnevno
              koristimo, ali ih retko temeljno čistimo. Vremenom, u vlaknima
              tkanine nakupljaju se prašina, alergeni, grinje, bakterije, mrlje
              od hrane ili pića, i upija se neprijatan miris. Redovno usisavanje
              uklanja samo površinsku prljavštinu, dok duboko usađena nečistoća
              ostaje. U Ostrog Clean specijalizovani smo za profesionalno
              dubinsko čišćenje svih vrsta tapaciranog nameštaja i tekstilnih
              podnih obloga, koriste­ći najsavremeniju opremu koja garantuje
              temeljno čišćenje bez oštećenja materijala.
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
                Vrste nameštaja i površina koje čistimo:
              </h3>
              <ul className="space-y-3">
                {[
                  "Tapaciran nameštaj (fotelje, sofe, garniture)",
                  "Kožni i eko-kožni nameštaj",
                  "Sedišta stolica i trpezarijskih garnitura",
                  "Tepihe svih vrsta i veličina",
                  "Staze i prolazne putanje",
                  "Etisone i podne obloge",
                  "Dušeci i madrace",
                  "Automobile sedišta (na zahtev)",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-6 text-center">
              Naše specijalizovane usluge
            </h3>

            <div className="grid md:grid-cols-2 gap-6 my-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Wind className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">
                      Suvo čišćenje nameštaja
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Idealno za delikatne tkanine koje ne podnose vlagu.
                    Specijalni prah-šamponi i tehnike sa minimalnom upotrebom
                    vlage. Efikasno uklanja prljavštinu, osvežava boje i ne
                    ostavlja površine vlažnim. Nameštaj je spreman za upotrebu
                    gotovo odmah.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Droplet className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">
                      Mokro čišćenje - ekstrakcija vrućom vodom
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Steam cleaning za temeljno dubinsko čišćenje. Vrućа voda sa
                    specijalnim čistilom prodire duboko u vlakna, a vakuum
                    izvlači vodu sa nečistoćom. Najеfikasnija metoda za
                    uklanjanje bakterija, alergena i grinja. Spreman za upotrebu
                    nakon 4-6 sati.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Sparkles className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">
                      Uklanjanje mrlja i nečistoća
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Iskustvo u uklanjanju svih vrsta mrlja - kafa, vino, sokovi,
                    masti, ulja, boje, mastila. Pre-tretman specijalnim
                    sredstvima koja ciljano rastvaraju specifične tipove
                    nečistoće. Profesionalne tehnike za stare i tvrdokorne
                    mrlje.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Wind className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">
                      Uklanjanje neprijatnih mirisa
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Fizičko uklanjanje čestica koje izazivaju mirise iz samih
                    vlakana materijala. Enzimski neutralizatori mirisa razlažu
                    molekule odgovorne za duvanski dim, mirise kućnih ljubimaca
                    i hrane. Vaš nameštaj će biti potpuno svež i čist.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Shield className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">
                      Zaštita nakon čišćenja
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Nanošenje zaštitnih premaza koji čine vlakna otpornijom na
                    buduće mrlje i prljavštinu. Nevidljiva barijera koja odbija
                    tečnosti i sprečava prodiranje mrlja u tkaninu. Olakšava
                    buduće održavanje i produžava vek trajanja nameštaja.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Heart className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">
                      Zdravstvene prednosti
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Uklanjanje alergena, grinja, bakterija i virusa koji mogu
                    izazvati alergije, astmu i respiratorne probleme. Posebno
                    važno za porodice sa malom decom, osobe sa alergijama i
                    vlasnike kućnih ljubimaca. Zdraviji životni prostor.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Armchair className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">
                      Čišćenje kožnog nameštaja
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Poseban tretman za zadržavanje mekоće, sjaja i elastičnosti
                    kože. Blago čišćenje sredstvima koja ne isušuju kožu,
                    uklanjanje mrlja bez oštećenja. Završno kondicioniranje
                    vraća prirodnu vlažnost i sjaj. Sprečava pucanje i gubitak
                    boje.
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
                  "/dubinsko.jpg",
                  "/dubinsko (2).jpg",
                  "/dubinsko (3).jpg",
                  "/dubinsko (4).jpg",
                  "/dubinsko (5).jpg",
                  "/dubinsko (6).jpg",
                  "/dubinsko (7).jpg",
                  "/dubinsko (8).jpg",
                  "/dubinsko (9).jpg",
                  "/dubinsko (10).jpg",
                  "/dubinsko (11).jpg",
                  "/dubinsko (12).jpg",
                  "/dubinsko (13).jpg",
                  "/dubinsko (14).jpg",
                  "/dubinsko (15).jpg",
                  "/dubinsko (16).jpg",
                ]}
                alt="Pranje stakala"
              />
            </div>
            <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-12 p-8 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
              <h3 className="text-2xl font-bold mb-4 text-white text-center">
                Zatražite besplatnu procenu
              </h3>
              <p className="mb-6 text-center max-w-3xl mx-auto">
                Kontaktirajte nas za besplatnu procenu dubinskog čišćenja vašeg
                nameštaja, tepiha ili staza. Posećujemo vas, procenjujemo stanje
                i vrstu materijala, i dajemo transparentnu ponudu.
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
              <h3 className="text-2xl font-bold mb-4">
                Prednosti profesionalnog dubinskog čišćenja
              </h3>
              <ul className="space-y-3">
                {[
                  "Temeljno uklanjanje duboko usađene prljavštine",
                  "Eliminacija alergena, bakterija i grinja",
                  "Uklanjanje neprijatnih mirisa",
                  "Obnova boja i teksture tkanina",
                  "Produženje veka trajanja nameštaja",
                  "Profesionalna oprema i sertifikovana sredstva",
                  "Brzo sušenje i minimalno ometanje",
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
