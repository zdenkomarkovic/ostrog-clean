"use client";

import { Star, Quote } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

interface Testimonial {
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: "Marko Petrović",
      position: "Vlasnik",
      company: "Restoran Stari Grad",
      content:
        "Ostrog Clean je naš partner za održavanje restorana već dve godine. Profesionalnost, tačnost i pažnja na detalje su na najvišem nivou. Posebno smo zadovoljni dubinskim čišćenjem kuhinje.",
      rating: 5,
    },
    {
      name: "Ana Jovanović",
      position: "Menadžer",
      company: "IT kompanija TechSolutions",
      content:
        "Redovno održavanje naših kancelarija je besprekorno. Tim dolazi nakon radnog vremena i sve završi brzo i efikasno. Zaposleni su veoma zadovoljni čistim radnim okruženjem.",
      rating: 5,
    },
    {
      name: "Nikola Stojanović",
      position: "Vlasnik",
      company: "Caffe Bar Central",
      content:
        "Pranje stakala i održavanje našeg kafića je uvek na vrhunskom nivou. Posebno su nam pomogli nakon renoviranja - lokali je izgledao kao nov. Topla preporuka!",
      rating: 5,
    },
    {
      name: "Jelena Dimitrijević",
      position: "Upravnik zgrade",
      company: "Stambena zajednica Centar",
      content:
        "Koristimo njihove usluge za redovno čišćenje zajedničkih prostorija. Cena je povoljna, a kvalitet odličan. Tim je uvek ljubazan i profesionalan.",
      rating: 5,
    },
    {
      name: "Stefan Nikolić",
      position: "Vlasnik",
      company: "Hotel Park",
      content:
        "Dubinsko čišćenje nameštaja u našem hotelu je bilo izuzetno. Stare fotelje i tepihe su vratili u sjajan izgled. Gosti su primetili razliku!",
      rating: 5,
    },
    {
      name: "Milica Rajković",
      position: "Vlasnica",
      company: "Poslastičarnica Slast",
      content:
        "Čišćenje naše poslastičarnice zahteva posebnu pažnju zbog higijenskih standarda. Ostrog Clean ispunjava sve naše zahteve i uvek prođu inspekcijske kontrole bez problema.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Šta naši klijenti kažu
          </h2>
          <p className="text-xl text-muted-foreground">
            Zadovoljstvo naših klijenata je naša najveća nagrada
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow relative"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Quote className="w-8 h-8 text-primary/20" />
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed text-foreground">
                  "{testimonial.content}"
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border-t pt-4">
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.position}
                  </p>
                  <p className="text-sm text-primary font-semibold">
                    {testimonial.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
