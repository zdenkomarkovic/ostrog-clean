import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  CheckCircle,
  PhoneCall,
  Mail,
  Wrench,
  Lightbulb,
  Wind,
  Shield,
} from "lucide-react";
import type { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Čišćenje Nepristupačnih Površina | Ostrog Clean",
  description:
    "Profesionalno čišćenje teško dostupnih mesta sa specijalnom opremom. Visoki plafoni, lusteri, ventilacija. Pozovite 062 147 4347",
  keywords: [
    "čišćenje nepristupačnih površina",
    "čišćenje visokih plafona",
    "čišćenje lustera",
    "čišćenje ventilacije",
    "čišćenje teško dostupnih mesta",
  ],
};

export default function CiscenjeNepristupacnihPovrsina() {
  return (
    <main className="min-h-screen">
      {/* Hero sekcija sa slikom */}
      <section className="relative text-white pt-32 pb-20 px-4 min-h-[60dvh] flex items-center">
        <Image
          src="/2149374474.jpg"
          alt="Čišćenje nepristupačnih površina"
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
            Čišćenje nepristupačnih površina
          </h1>
          <p className="text-xl leading-relaxed max-w-3xl">
            Stručno čišćenje teško dostupnih mesta uz korišćenje specijalizovane
            opreme i tehnike
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-4 py-16">
        <article>
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">
              Profesionalno čišćenje teško dostupnih mesta
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Mnogi prostori imaju površine koje su van domašaja standardnog
              čišćenja - visoki plafoni, lusteri, ventilacioni otvori, gornje
              delovi vitruna i ormara, fasadni delovi zgrada. Ove površine
              vremenom akumuliraju prašinu, paučinu i nečistoću koja utiče na
              estetski izgled prostora i kvalitet vazduha. U Ostrog Clean
              specijalizovani smo za čišćenje svih vrsta nepristupačnih
              površina, koristeći profesionalnu opremu i tehnike koje garantuju
              bezbednost i efikasnost.
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
                Nepristupačne površine koje čistimo:
              </h3>
              <ul className="space-y-3">
                {[
                  "Visoki plafoni i gipsane dekoracije",
                  "Lusteri i visoka svetiljka tela",
                  "Ventilacioni otvori i rešetke",
                  "Gornji delovi vitruna i ormara",
                  "Fasadni elementi i nadstrešnice",
                  "Unutrašnjost svetlarnika i krovnih prozora",
                  "Police i police na velikim visinama",
                  "Dekorativni elementi i skulpture na visini",
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
                    <Wrench className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">
                      Specijalizovana oprema za rad na visini
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Koristimo sertifikovanu profesionalnu opremu - teleskopske
                    motke sa okretnim glavama, stabilne platforme i merdevine za
                    siguran pristup, kao i profesionalne vacuum uređaje sa
                    ekstenzijama za uklanjanje prašine sa teško dostupnih mesta.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Lightbulb className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">
                      Čišćenje lustera i svetiljki
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Iskustvo u čišćenju svih vrsta lustera - kristalnih,
                    staklenih i modernih dizajnerskih komada. Koristimo
                    specijalna sredstva koja ne ostavljaju tragove i metode koje
                    ne oštećuju delikatne delove. Sigurne platforme i
                    teleskopski sistemi omogućavaju detaljno čišćenje.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Wind className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">
                      Čišćenje ventilacionih sistema
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Ventilacioni otvori i rešetke akumuliraju prašinu i mast.
                    Naša usluga uključuje demontažu rešetki, temeljno pranje,
                    dezinfekciju i ponovno postavljanje. Specijalizovano
                    čišćenje ventilacionih kanala poboljšava protok vazduha i
                    smanjuje rizik od alergija.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Shield className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">
                      Bezbednost kao prioritet
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Bezbednost radnika i vašeg prostora je na prvom mestu. Svi
                    timovi su obučeni za rad na visini, koristimo sertifikovanu
                    opremu i pridržavamo se svih bezbednosnih protokola. Pre
                    svakog posla procenjujemo rizike i prilagođavamo metod rada.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
            <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-12 p-8 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
              <h3 className="text-2xl font-bold mb-4 text-white text-center">
                Zatražite besplatnu procenu
              </h3>
              <p className="mb-6 text-center max-w-3xl mx-auto">
                Kontaktirajte nas za besplatnu procenu čišćenja nepristupačnih
                površina u vašem objektu.
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
                Prednosti profesionalnog čišćenja nepristupačnih površina
              </h3>
              <ul className="space-y-3">
                {[
                  "Bezbedan pristup svim teško dostupnim mestima",
                  "Profesionalna oprema i sertifikovani radnici",
                  "Temeljno uklanjanje prašine i nečistoće",
                  "Poboljšan kvalitet vazduha u prostoru",
                  "Estetski uredan izgled celog objekta",
                  "Bez potrebe za ličnim angažmanom ili rizikom",
                  "Brza i efikasna usluga",
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
