import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  CheckCircle,
  PhoneCall,
  Mail,
  Cog,
  Shield,
  Grid3x3,
  TreePine,
  Factory,
  Calendar,
  Leaf,
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
  title: "Pranje Tvrdih Podova - Profesionalno Održavanje | Ostrog Clean",
  description:
    "Profesionalno pranje i tretman tvrdih podova - parketa, pločica, betona, mermera. Mašinsko pranje, poliranje i zaštita podova. Pozovite 062 147 4347",
  keywords: [
    "pranje podova",
    "čišćenje tvrdih podova",
    "mašinsko pranje podova",
    "poliranje podova",
    "pranje parketa",
    "pranje pločica",
    "čišćenje betonskih podova",
    "održavanje podova",
  ],
  openGraph: {
    title: "Pranje Tvrdih Podova | Ostrog Clean",
    description:
      "Profesionalno pranje i tretman svih vrsta tvrdih podova sa specijalnim sredstvima za dugotrajan sjaj.",
  },
};

export default function PranjePodova() {
  return (
    <main className="min-h-screen">
      {/* Hero sekcija sa slikom */}
      <section className="relative text-white pt-32 pb-20 px-4 min-h-[60dvh] flex items-center">
        <Image
          src="/podovi.jpg"
          alt="Pranje podova"
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
            Pranje tvrdih podova
          </h1>
          <p className="text-xl  leading-relaxed max-w-3xl">
            Profesionalno pranje i tretman svih vrsta tvrdih podova sa
            specijalnim sredstvima za dugotrajan sjaj i zaštitu
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-4 py-16">
        <article>
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">
              Stručno pranje i održavanje tvrdih podova
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Čisti i sjajni podovi su osnova svakog urednog prostora. Bez
              obzira da li se radi o poslovnoj zgradi, restoranu, kafi­ću ili
              stambenom objektu, podovi su površine koje su najizloženije
              svakodnevnom habanju, prljanju i ošte­ćenjima. U Ostrog Clean
              specijalizovani smo za profesionalno pranje i tretman svih vrsta
              tvrdih podova, koriste­ći najsavremenije tehnike i opremu koja
              garantuje vrhunske rezultate bez oštećenja površina.
            </p>
            <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gradient-to-r from-blue-700 to-blue-900 text-white p-8 mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white text-center">
                Kontaktirajte nas za besplatnu procenu
              </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
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
            <h3 className="text-2xl font-bold mt-8 mb-4">
              Stručno pranje različitih vrsta tvrdih podova
            </h3>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Svaki tip poda zahteva specifičan pristup, odgovarajuća sredstva i
              tehnike čišćenja. Naš tim je obučen da prepozna vrstu površine i
              primeni optimalan tretman koji će očistiti pod do savršenstva, a
              istovremeno ga zaštititi od oštećenja i produžiti mu vek trajanja.
            </p>

            <div className="bg-muted p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">
                Vrste podova koje peremo i održavamo:
              </h3>
              <ul className="space-y-3">
                {[
                  "Keramičke i porculanske pločice",
                  "Parket i laminat",
                  "Vinil i linoleum",
                  "Mermerni i granitni podovi",
                  "Betonski podovi (industrijski)",
                  "Epoksidne površine",
                  "Kamen i prirodni materijali",
                  "PVC i gumeni podovi",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-6 my-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Cog className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">
                      Mašinsko pranje podova
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Za velike površine koristimo profesionalne mašine koje
                    kombinuju rotacione četke sa visokim pritiskom vode i vakuum
                    ekstrakcijom. Efikasno uklanjamo duboko usađenu prljavštinu,
                    masnoću i bakterije. Znatno efikasnije od ručnog mopovanja,
                    vaši podovi će izgledati kao novi.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Shield className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">
                      Poliranje i zaštita podova
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Nudimo poliranje podova koje vraća originalni sjaj. Za
                    mermer, granit ili laminat koristimo specijalne paste i
                    mašine za visokosjajni finish. Primenjujemo voškove ili
                    sealere koji čine površinu otpornijom na habanje, mrlje i
                    vodu.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Grid3x3 className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">
                      Pranje pločica i fugni
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Dubinsko čišćenje fugni korišćenjem specijalnih četki i
                    sredstava koja prodiru u dubinu, uklanjajući masnoću, plesan
                    i promene boje. Koristimo parne čistače koji dezinfikuju
                    površinu. Nakon čišćenja primenjujemo zaštitni seler za duže
                    održavanje.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <TreePine className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">
                      Održavanje parketa i drvenih podova
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Parket zahteva posebnu pažnju jer je osetljiv na vlagu.
                    Koristimo specijalno formulisana sredstva koja ne oštećuju
                    površinu ili zaštitni sloj laka. Tehnika vlažnog brisanja sa
                    minimalnom količinom vode sprečava bubrenje ili deformaciju
                    drveta.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Factory className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">
                      Čišćenje industrijskih i betonskih podova
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Za industrijske prostore, garaže i proizvodne hale koristimo
                    mašinsku opremu sa visokim pritiskom koja efikasno uklanja
                    ulje, masti i hemikalije. Za objekte sa epoksidnim premazima
                    koristimo blaga sredstva koja čiste bez oštećenja.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">
                      Redovno održavanje podova
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Nudimo programe redovnog održavanja prilagođene vašim
                    potrebama - od dnevnog mopovanja u ugostiteljskim objektima,
                    preko nedeljnog pranja u kancelarijama, do mesečnog
                    mašinskog čišćenja. Redovno održavanje produžava vek
                    trajanja podova.
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
                  "/podovi.jpg",
                  "/podovi (2).jpg",
                  "/podovi (3).jpg",
                  "/podovi (4).jpg",
                ]}
                alt="Pranje podova"
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
                Koristimo profesionalna sredstva za čišćenje koja su efikasna
                protiv prljavštine, a istovremeno bezbedna za ljude, kućne
                ljubimce i životnu sredinu. Naša sredstva ne ostavljaju lepljive
                tragove, ne sadrže toksične isparljive supstance i potpuno su
                biorazgradiva.
              </p>
            </div>
            <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-12 p-8 bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Zatražite besplatnu procenu za pranje podova
              </h3>
              <p className="mb-6 max-w-6xl mx-auto">
                Kontaktirajte nas danas za besplatnu procenu. Procenićemo stanje
                vaših podova i predložiti optimalno rešenje za njihovo čišćenje
                i održavanje.
              </p>
              <div className="flex justify-center flex-col sm:flex-row gap-4">
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
                Prednosti profesionalnog pranja podova
              </h3>
              <ul className="space-y-3">
                {[
                  "Dubinsko čišćenje koje uklanja bakterije i alergene",
                  "Vraćanje originalnog sjaja i boje podova",
                  "Produženje veka trajanja podova",
                  "Profesionalna oprema i specijalizovana sredstva",
                  "Brza i efikasna usluga sa minimalnim prekidima",
                  "Zaštita podova od budućih oštećenja",
                  "Prilagođeni tretmani za svaku vrstu poda",
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
