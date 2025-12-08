"use client";

import Image from "next/image";
import Logo from "../public/android-chrome-192x192.png";
import Link from "next/link";
import { ChevronDownIcon, MenuIcon, PhoneIcon } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Fragment, useEffect, useState } from "react";
import { navList } from "@/constants/index";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "./ui/hover-card";

const mobTitleStyles = "text-lg py-2";

const MobileMenu = ({ scrolled }: { scrolled: boolean }) => (
  <Sheet>
    <SheetTrigger className="lg:hidden">
      <MenuIcon
        className={`cursor-pointer transition-colors ${
          scrolled ? "text-primary" : "text-white"
        }`}
      />
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle></SheetTitle>
        <SheetContent>
          <ul>
            {navList.map((item, index) => {
              if (item.list)
                return (
                  <Fragment key={index}>
                    <Accordion type="single" collapsible>
                      <AccordionItem className="border-none" value="item-1">
                        <div className="hover:text-primary transition-colors">
                          <AccordionTrigger
                            className={`${mobTitleStyles} hover:no-underline`}
                          >
                            {item.title}
                          </AccordionTrigger>
                        </div>
                        <AccordionContent>
                          {item.list.map((link, index2) => (
                            <Link
                              className="pl-6 block font-light py-2 hover:text-primary transition-colors"
                              key={`${index}.${index2}`}
                              href={link.link}
                            >
                              <SheetTrigger asChild>
                                <li>{link.title}</li>
                              </SheetTrigger>
                            </Link>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </Fragment>
                );
              return (
                <Link key={index} href={item.link}>
                  <li
                    className={`${mobTitleStyles} hover:text-primary transition-colors`}
                  >
                    <SheetTrigger>{item.title}</SheetTrigger>
                  </li>
                </Link>
              );
            })}
          </ul>
        </SheetContent>
      </SheetHeader>
    </SheetContent>
  </Sheet>
);

const DesktopNav = ({ scrolled }: { scrolled: boolean }) => (
  <ul className="hidden gap-8 lg:flex text-xl">
    {navList.map((item, index) => {
      if (item.list)
        return (
          <HoverCard key={index} openDelay={0} closeDelay={50}>
            <HoverCardTrigger>
              <div
                className={`flex gap-1 transition-all hover:scale-110 cursor-pointer ${
                  scrolled
                    ? "text-primary hover:text-primary/80"
                    : "text-white hover:text-white/80"
                }`}
              >
                {item.title}
                <ChevronDownIcon className="w-[18px]" />
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="p-0">
              {item.list.map((link, index2) => (
                <li
                  key={`${index}.${index2}`}
                  className="hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Link className="px-2 py-2 block" href={link.link}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </HoverCardContent>
          </HoverCard>
        );
      return (
        <Link key={index} href={item.link}>
          <li
            className={`transition-all hover:scale-110 ${
              scrolled
                ? "text-primary hover:text-primary/80"
                : "text-white hover:text-white/80"
            }`}
          >
            {item.title}
          </li>
        </Link>
      );
    })}
  </ul>
);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const HandleScroll = () => {
      if (window.scrollY > 0) setScrolled(true);
      else setScrolled(false);
    };

    document.addEventListener("scroll", HandleScroll);

    return () => {
      document.removeEventListener("scroll", HandleScroll);
    };
  }, []);

  return (
    <header
      className={`flex justify-center ${
        scrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md"
          : "bg-transparent"
      } fixed top-0 left-0 right-0 z-[10] transition-colors`}
    >
      <nav className="flex items-center justify-between px-8 py-4 max-w-[80rem] w-full font-bold">
        <Link href="/" className="">
          <Image
            src={Logo}
            alt="dm rustic 24"
            width={50}
            height={50}
            className="rounded-full"
          />
        </Link>
        <DesktopNav scrolled={scrolled} />
        <Link href="tel:+381621474347" className="hidden lg:block">
          <button
            className={`${
              scrolled
                ? "text-primary border-primary hover:bg-primary hover:text-primary-foreground"
                : "text-white border-white hover:bg-white hover:text-primary"
            } items-center justify-center rounded-full border-2 text-sm md:text-lg py-1 px-2 md:py-2 md:px-4 transition-all flex gap-2`}
          >
            <PhoneIcon className="w-5 h-5" />
            <p>062 147 4347</p>
          </button>
        </Link>
        <MobileMenu scrolled={scrolled} />
      </nav>
    </header>
  );
}
