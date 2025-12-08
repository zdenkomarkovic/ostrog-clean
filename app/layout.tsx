import ButtonToTop from "@/components/ButtonToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ostrog Clean - Profesionalno Čišćenje i Održavanje Objekata",
  description: "Profesionalne usluge čišćenja poslovnih prostora, stanova, restorana i kafića. Redovno čišćenje, pranje stakala, dubinsko čišćenje nameštaja. Pozovite 062 147 4347",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  keywords: [
    "čišćenje",
    "održavanje objekata",
    "profesionalno čišćenje",
    "čišćenje poslovnih prostora",
    "čišćenje restorana",
    "čišćenje kafića",
    "pranje stakala",
    "dubinsko čišćenje",
    "generalno čišćenje",
    "redovno održavanje",
    "čišćenje nakon renoviranja",
    "alpinističko pranje stakala",
    "Ostrog Clean"
  ],
  alternates: {
    canonical: "https://www.ostrogclean.rs/",
  },
  openGraph: {
    title: "Ostrog Clean - Profesionalno Čišćenje",
    description: "Profesionalne usluge čišćenja i održavanja objekata. Specijalizovani za poslovne prostore, restorane i kafići.",
    type: "website",
    locale: "sr_RS",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-muted-foreground bg-muted  text-base md:text-xl`}
      >
        <Header />
        {children}
        <ButtonToTop />
        <Footer />
      </body>
    </html>
  );
}
