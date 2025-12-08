import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  CheckCircle,
  PhoneCall,
  Mail,
  Wind,
  Flame,
  Droplets,
  Star,
  ClipboardCheck,
  CalendarCheck,
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
  title: "Čišćenje Zamašćenih Prostora - Kuhinje i Restorani | Ostrog Clean",
  description:
    "Specijalizovano dubinsko čišćenje zamašćenih prostora, kuhinja u restoranima i kafićima. Aspiratori, šporet, rerna. Pozovite 062 147 4347",
  keywords: [
    "čišćenje zamašćenih prostora",
    "čišćenje kuhinja",
    "čišćenje restorana",
    "čišćenje aspiratora",
    "dubinsko čišćenje kuhinje",
    "industrijske kuhinje",
  ],
};

export default function CiscenjeZamascenihProstora() {
  return (
    <main className="min-h-screen">
      {/* Hero sekcija sa slikom */}
      <section className="relative text-white pt-32 pb-20 px-4 min-h-[400px] flex items-center">
        <Image
          src="/13112.jpg"
          alt="Čišćenje zamašćenih prostora"
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
            Čišćenje zamašćenih prostora
          </h1>
          <p className="text-xl leading-relaxed max-w-3xl">
            Dubinsko čišćenje zamašćenih prostora, idealno za restorane, kafiće
            i industrijske kuhinje
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-4 py-16">
        <article>
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">
              Profesionalno čišćenje kuhinja i zamašćenih zona
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Kuhinje u restoranima, kafićima i industrijskim objektima izložene
              su ekstremnim uslovima - visoke temperature, para, masnoća i
              intenzivna upotreba stvaraju izazovne uslove za održavanje
              higijene. Zamašćene površine nisu samo estetski problem - one
              predstavljaju zdravstveni rizik, могu biti leglo bakterija i
              značajno povećavaju rizik od požara. U Ostrog Clean
              specijalizovani smo za dubinsko čišćenje zamašćenih prostora,
              koriste­ći profesionalna sredstva i tehnike koje efikasno
              uklanjaju čak i najtvrdokornije naslage masti.
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
                Šta obuhvata čišćenje zamašćenih prostora:
              </h3>
              <ul className="space-y-3">
                {[
                  "Dubinsko čišćenje aspiratora i napa",
                  "Čišćenje šporeta, rerni i grilova",
                  "Pranje pločica i fugni od ulja i masti",
                  "Čišćenje friteза i druge opreme za kuvanje",
                  "Pranje zamašćenih podova i zidova",
                  "Čišćenje radnih površina i nerđajućih čelika",
                  "Dezinfekcija svih površina",
                  "Čišćenje ventilacionih kanala (na zahtev)",
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
                      Dubinsko čišćenje aspiratora i napa
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Aspiratori i nape su najkritičnije tačke u kuhinji.
                    Demontaža filtera, pranje u specijalnim rastvorima, čišćenje
                    unutrašnjosti ventilacionog kanala. Profesionalna sredstva
                    efikasno rastvaraju naslage masti. Vaš aspirator će raditi
                    efikasnije, smanjit će se miris i požarni rizik.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Flame className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">
                      Čišćenje šporeta, rerni i opreme
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Ekstremne temperature "peku" masnoću na površinama.
                    Specijalizovana sredstva prodiru u zagorele naslage i
                    rastvaraju ih bez oštećenja. Za unutrašnjost rerni koristimo
                    parne čistače koji kombinuju visoku temperaturu sa
                    specijalnim rastvorima.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Droplets className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">
                      Pranje pločica, zidova i podova
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Tanki sloj masti privlači prašinu i stvara lepljivu
                    površinu. Dubinsko pranje kombinuje profesionalna
                    razmašćivača sa visokim pritiskom vode i mašinsko četkanje.
                    Nakon čišćenja primenjujemo dezinfekciona sredstva za
                    potpunu higijenu.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Star className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">
                      Čišćenje nerđajućeg čelika
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Nerđajući čelik zahteva posebnu negu za zadržavanje sjaja.
                    Specijalizovana sredstva uklanjaju masnoću, otiske prstiju i
                    mrlje, vraćajući originalan sjaj. Stvaramo zaštitni sloj
                    koji odbija buduću prljavštinu.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <CalendarCheck className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">
                      Redovno održavanje za restorane
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Programi redovnog dubinskog čišćenja - nedeljno, mesečno ili
                    kvartalno. Sprečava akumulaciju masti, produžava vek opreme,
                    održava higijenske standarde. Vaša kuhinja će uvek proći
                    inspekcijske kontrole bez problema.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <ClipboardCheck className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">
                      Usaglašenost sa higijenskim standardima
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Pomoć u ispunjenju zahteva sanitarne inspekcije.
                    Sertifikovana sredstva odobrena za objekte gde se priprema
                    hrana. Detaljnu dokumentaciju o obavljenom čišćenju kao
                    dokaz redovnog održavanja.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
            <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-12 p-8 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
              <h3 className="text-2xl font-bold mb-4 text-white text-center">
                Zatražite besplatnu procenu za vašu kuhinju
              </h3>
              <p className="mb-6 text-center max-w-3xl mx-auto">
                Kontaktirajte nas danas i saznajte kako možemo pomoći da vaša
                kuhinja bude besprekorno čista i bezbedna.
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
                Prednosti profesionalnog čišćenja zamašćenih prostora
              </h3>
              <ul className="space-y-3">
                {[
                  "Efikasno uklanjanje tvrdokornih naslaga masti",
                  "Smanjenje požarnog rizika",
                  "Poboljšana higijena i bezbednost hrane",
                  "Produžen vek trajanja kuhinjske opreme",
                  "Usaglašenost sa sanitarnim standardima",
                  "Profesionalna sredstva i oprema",
                  "Iskusan tim specijalizovan za ugostiteljstvo",
                  "Fleksibilni termini koji ne ometaju vaše poslovanje",
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
