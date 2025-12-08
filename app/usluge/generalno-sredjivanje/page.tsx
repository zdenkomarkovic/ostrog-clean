import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  CheckCircle,
  PhoneCall,
  Mail,
  Wind,
  Sparkles,
  Droplets,
  Bath,
  ChefHat,
  Tag,
  Thermometer,
  Users,
  ClipboardCheck,
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
  title: "Generalno Sređivanje Objekata Nakon Renoviranja | Ostrog Clean",
  description:
    "Kompletno generalno čišćenje objekata nakon renoviranja, krečenja i građevinskih radova. Uklanjanje prašine, kreča, gipsa. Pozovite 062 147 4347",
  keywords: [
    "generalno čišćenje",
    "čišćenje nakon renoviranja",
    "čišćenje nakon krečenja",
    "građevinsko čišćenje",
    "post renovacijsko čišćenje",
    "uklanjanje građevinskog šuta",
  ],
};

export default function GeneralnoSredjivanje() {
  return (
    <main className="min-h-screen">
      {/* Hero sekcija sa slikom */}
      <section className="relative text-white pt-32 pb-20 px-4 min-h-[60dvh] flex items-center">
        <Image
          src="/2148133457.jpg"
          alt="Generalno sređivanje"
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
            Generalno sređivanje objekata
          </h1>
          <p className="text-xl leading-relaxed max-w-3xl">
            Temeljno generalno sređivanje objekata nakon renoviranja, krečenja i
            drugih građevinskih radova
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-4 py-16">
        <article>
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Profesionalno čišćenje nakon renoviranja i građevinskih radova
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Renoviranje, krečenje ili bilo kakvi građevinski radovi ostavljaju
              za sobom značajnu količinu prljavštine - građevinski prah svuda po
              prostoru, mrlje od kreča i gipsa, lepljive tragove od zaštitnih
              folija, mrlje od boje, ostaci maltera, i mnogo drugih specifičnih
              nečistoća koje zahtevaju profesionalan pristup. U Ostrog Clean
              specijalizovani smo za generalno sređivanje objekata nakon svih
              vrsta građevinskih intervencija, vraćajući vaš prostor u stanje
              spremno za useljenje ili korišćenje.
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
              <h3 className="text-xl font-bold mb-4 text-foreground">
                Šta obuhvata generalno sređivanje:
              </h3>
              <ul className="space-y-3">
                {[
                  "Uklanjanje građevinskog praha sa svih površina",
                  "Čišćenje prozora i uklanjanje zaštitnih folija",
                  "Pranje podova od kreča, gipsa i boje",
                  "Čišćenje pločica i fugni od ostataka maltera",
                  "Uklanjanje nalepnica i lepljivih tragova",
                  "Pranje radiјatora i grejnih tela",
                  "Čišćenje vrata, pragova i štokovaed",
                  "Dezinfekcija sanitarnih čvorova",
                  "Usisavanje i brisanje svih površina",
                  "Finalno čišćenje i kontrola kvaliteta",
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
                      Uklanjanje građevinskog praha
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Sistematsko čišćenje od gore prema dole - plafoni, zidovi,
                    nameštaj, podovi. Profesionalni HEPA filter usisivači
                    zadržavaju sitne čestice. Vlažne metode brisanja sprečavaju
                    podizanje praha. Temeljno uklanjanje iz svakog kutka.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Sparkles className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">
                      Čišćenje prozora nakon renoviranja
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Uklanjanje prašine, kreča, gipsa i lepljivih tragova od
                    zaštitnih folija. Specijalizovana sredstva za lepak,
                    skrejperi za tvrde naslage bez grebanja. Čišćenje okvira,
                    šipki i svih delova prozorske konstrukcije. Prozori bez
                    tragova.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Droplets className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">
                      Pranje podova od kreča i maltera
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Različiti pristupi za parket, pločice i laminat. Poznajemo
                    karakteristike svih vrsta podova. Za tvrdokorne mrlje od
                    kreča koristimo blage kiseline koje rastvaraju kreč bez
                    oštećenja površine. Bezbedno i efikasno.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Bath className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">
                      Detaljno čišćenje sanitarnih čvorova
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Uklanjanje ostataka silikona, maltera u fugama, kreča na
                    pločicama. Poliranje slavina i metala, uklanjanje kamenca.
                    Finalna dezinfekcija. Posebna pažnja na fugama za savršeno
                    čisto kupatilo.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <ChefHat className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">
                      Čišćenje kuhinja nakon ugradnje
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Detaljno čišćenje unutrašnjosti svih elemenata, uklanjanje
                    nalepnica sa aparata. Čišćenje unutrašnjosti rerne i
                    frižidera. Čišćenje fioka, ormara, uklanjanje zaštitnih
                    folija. Sve spremno za upotrebu.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Tag className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">
                      Uklanjanje zaštitnih traka i nalepnica
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Profesionalna sredstva za uklanjanje lepka koja rastvaraju
                    lepljive ostatke bez oštećenja površina. Posebno važno za
                    staklo, ogledala, nerđajući čelik i lakirana drvena
                    stolarija. Čiste i glatke površine.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Thermometer className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">
                      Čišćenje radijatora i grejnih tela
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Specijalne četke i alati za čišćenje unutrašnjosti rebrastih
                    radijatora. Vakuum usisivači za teško dostupne delove.
                    Sredstva za pranje koja vraćaju radijatorima čist izgled i
                    efikasno funkcionisanje.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">
                      Tim i oprema za velike objekte
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Kapacitet za velike objekte - poslovne zgrade, hotele,
                    trgovinske centre. Veći timovi i završavanje u dogovorenom
                    roku. Sva potrebna profesionalna oprema. Koordinacija sa
                    drugim zanatlијama.
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
                    Detaljna kontrola kvaliteta svakog detalja. Odmah
                    intervenišemo ako nešto nije na nivou standarda. Garancija
                    zadovoljstva - ispravljamo sve primedbe bez dodatnih
                    troškova.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
            <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-12 p-8 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
              <h3 className="text-2xl font-bold mb-4 text-white text-center">
                Zatražite besplatnu procenu za generalno sređivanje
              </h3>
              <p className="mb-6 text-center max-w-3xl mx-auto">
                Kontaktirajte nas odmah nakon završetka renoviranja ili
                građevinskih radova. Posećujemo objekat, procenjujemo obim posla
                i dajemo vam transparentnu ponudu. Za veće projekte nudimo
                atraktivne cene.
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
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Prednosti profesionalnog generalnog sređivanja
              </h3>
              <ul className="space-y-3">
                {[
                  "Kompletan tretman svih površina i detalja",
                  "Uklanjanje svih vrsta građevinskih nečistoća",
                  "Profesionalna oprema i specijalizovana sredstva",
                  "Iskusan tim sa velikim kapacitetom",
                  "Brzo završavanje velikih objekata",
                  "Prostor spreman za useljenje ili otvaranje",
                  "Kontrola kvaliteta i garancija",
                  "Fleksibilni termini prema vašim potrebama",
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
