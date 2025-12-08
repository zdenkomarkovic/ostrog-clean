import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  CheckCircle,
  PhoneCall,
  Mail,
  Shield,
  Sparkles,
  Building2,
  Store,
  Mountain,
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
  title:
    "Pranje Staklenih Površina i Alpinističko Pranje Stakala | Ostrog Clean",
  description:
    "Profesionalno pranje stakala i staklenih površina. Alpinističko pranje stakala na visokim objektima. Beztrag formula za kristalno čiste prozore. Pozovite 062 147 4347",
  keywords: [
    "pranje stakala",
    "alpinističko pranje stakala",
    "čišćenje prozora",
    "pranje staklenih fasada",
    "pranje staklenih površina",
    "visoko pranje stakala",
    "čišćenje izloga",
  ],
  openGraph: {
    title: "Pranje Stakala i Alpinističko Pranje | Ostrog Clean",
    description:
      "Profesionalno pranje svih vrsta staklenih površina, uključujući alpinističke usluge za visoke objekte.",
  },
};

export default function PranjeStakala() {
  return (
    <main className="min-h-screen">
      {/* Hero sekcija sa slikom */}
      <section className="relative text-white pt-32 pb-20 px-4 min-h-[60dvh] flex items-center">
        <Image
          src="/stakla.jpg"
          alt="Pranje stakala"
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
            Pranje staklenih površina i alpinističko pranje stakala
          </h1>
          <p className="text-xl text-white leading-relaxed max-w-3xl">
            Kristalno čista stakla bez tragova - profesionalno pranje svih vrsta
            staklenih površina, uključujući alpinističke usluge za visoke
            objekte
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-4 py-16">
        <article>
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 ">
              Profesionalno pranje stakala do perfekcije
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Čista stakla i prozori nisu samo estetska pitanja - oni utiču na
              količinu prirodne svetlosti koja ulazi u vaš prostor, stvaraju
              pozitivan prvi utisak kod klijenata i posetilaca, te doprinose
              opštem osećaju čistoće i urednosti objekta. U Ostrog Clean
              specijalizovani smo za profesionalno pranje svih vrsta staklenih
              površina, od standardnih prozora do velikih staklenih fasada na
              visokim poslovnim zgradama.
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
              <h3 className="text-xl font-bold mb-4 ">
                Naše usluge pranja stakala obuhvataju:
              </h3>
              <ul className="space-y-3">
                {[
                  "Pranje prozora na poslovnim i stambenim objektima",
                  "Alpinističko pranje staklenih fasada na visokim zgradama",
                  "Čišćenje izloga i ulaznih staklenih vrata",
                  "Pranje zimskih bašti i staklenih nadstrešnica",
                  "Čišćenje krovnih prozora i svetlarnika",
                  "Pranje staklenih pregrada i ofis separatora",
                  "Uklanjanje fleka i tvrdokornih mrlja sa stakla",
                  "Poliranje stakla za maksimalan sjaj",
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
                    <Shield className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">
                      Profesionalna oprema i bezbednost
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Za pranje stakala koristimo najsavremeniju profesionalnu
                    opremu - teleskopske štapove, specijalizovane četke i
                    brisače koji ne ostavljaju tragove. Za alpinističke radove
                    koristimo sertifikovanu opremu sa duplim sigurnosnim
                    sistemom. Svi naši alpinisti su obučeni i sertifikovani za
                    rad na visini.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Sparkles className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">Beztrag formula</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Koristimo posebnu beztrag formulu i tehniku pranja koja
                    garantuje kristalno čista stakla bez ikakvih mrlja, pruga
                    ili tragova. Naša metoda uključuje višefazno pranje - prvo
                    uklanjamo grubu nečistoću, zatim peremo profesionalnim
                    sredstvom, i na kraju koristimo specijalnu tehniku brisanja.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Building2 className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">
                      Pranje prozora na poslovnim objektima
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Čisti prozori na poslovnim objektima direktno utiču na imidž
                    vaše kompanije. Nudimo fleksibilne termine kako ne bismo
                    ometali vaš posao - radimo vikendom, uveče ili rano ujutro.
                    Za kancelarijske zgrade i poslovne komplekse nudimo ugovore
                    o redovnom održavanju sa povoljnim uslovima.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Store className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">
                      Čišćenje izloga i poslovnih ulaza
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Izlog vašeg objekta je vizit-karta vašeg poslovanja. Prljavi
                    ili zamagljeni izlozi odbijaju potencijalne kupce.
                    Osiguravamo da vaše staklene površine budu savršeno čiste i
                    providne, omogućavajući da vaši proizvodi ili usluge dođu do
                    punog izražaja.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Mountain className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">
                      Alpinističko pranje na visini
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Za objekte sa velikim staklenim površinama na višim
                    spratovima, nudimo specijalizovane alpinističke usluge. Tim
                    sertifikovanih alpinista poseduje svu potrebnu opremu i
                    iskustvo za bezbedan rad na visini. Koristimo najsavremenije
                    sigurnosne sisteme koji garantuju bezbednost.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Leaf className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl">
                      Ekološki odgovorno pranje
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Vodimo računa o životnoj sredini. Koristimo ekološki
                    prihvatljiva sredstva koja su efikasna protiv nečistoće, ali
                    ne zagađuju vodu ili tlo. Naša sredstva su biorazgradiva, ne
                    sadrže fosfate ili agresivne hemikalije, i potpuno su
                    bezbedna za ljude, kućne ljubimce i biljke.
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
                  "/stakla.jpg",
                  "/stakla (2).jpg",
                  "/stakla (3).jpg",
                  "/stakla (4).jpg",
                  "/stakla (5).jpg",
                  "/stakla (6).jpg",
                ]}
                alt="Pranje stakala"
              />
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">
              Sezonsko pranje i uklanjanje specifičnih mrlja
            </h3>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Različita godišnja doba donose različite izazove za čistoću
              stakala. Zimi se na prozorima nakupljaju mrlje od kiše i snega,
              proleće donosi polen koji stvara žute naslage, a leto insekte čije
              tragove je teško ukloniti standardnim pranjem. Naš tim ima
              iskustvo i opremu za uklanjanje svih vrsta specifičnih mrlja - od
              voštanih naslaga, preko tvrdokornog kamenca, do ostataka lepljive
              trake ili boje.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">
              Pranje stakala nakon građevinskih radova
            </h3>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Nakon renoviranja, krečenja ili građevinskih radova, stakla često
              budu prekrivena prahom, krečom, gipsom ili zaštitnim folijama koje
              ostavljaju lepljive tragove. Ova vrsta nečistoće zahteva poseban
              tretman i profesionalnu opremu. Naš tim je specijalizovan za
              post-građevinsko čišćenje stakala i zna kako da efikasno ukloni
              čak i najtvrdokornije naslage, vraćajući vašim prozorima
              originalnu providnost.
            </p>
            <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-12 p-8 bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Zatražite besplatnu procenu za pranje stakala
              </h3>
              <p className="mb-6 max-w-6xl mx-auto">
                Kontaktirajte nas danas za besplatnu procenu. Posećujemo vaš
                objekat, procenjujemo obim posla i dajemo vam transparentnu
                ponudu bez skrivenih troškova. Za veće objekte i redovno
                održavanje nudimo atraktivne pakete.
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
                Prednosti profesionalnog pranja stakala
              </h3>
              <ul className="space-y-3">
                {[
                  "Kristalno čista stakla bez tragova i pruga",
                  "Više prirodne svetlosti u prostoru",
                  "Profesionalan izgled objekta",
                  "Bezbedno pranje na bilo kojoj visini",
                  "Sertifikovana oprema i materijali",
                  "Brza i efikasna usluga",
                  "Redovno održavanje po povoljnim cenama",
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
