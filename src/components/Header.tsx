"use client";

import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const th = t.header;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: th.about, href: "#about" },
    { name: th.facilities, href: "#facilities" },
    { name: th.gallery, href: "#gallery" },
    { name: th.events, href: "#events" },
    { name: th.pricing, href: "#pricing" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-cream/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center shrink-0">
          <div className="relative w-20 h-20 md:w-24 md:h-24 bg-white/80 backdrop-blur-sm rounded-full shadow-sm overflow-hidden p-1">
            <Image 
              src="/logo.jpg" 
              alt="Aadarsh Marriage Garden Logo" 
              fill
              className="object-contain mix-blend-multiply"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <ul className="flex gap-4 lg:gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`text-sm font-medium uppercase tracking-wider transition-colors hover:text-maroon-500 ${
                    isScrolled ? "text-gray-800" : "text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-4 border-l border-gold-300/50 pl-4 lg:pl-6">
            <button
              onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
              className={`flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider transition-colors ${
                isScrolled ? "text-maroon-700 hover:text-maroon-500" : "text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] hover:text-gold-300"
              }`}
              title="Change Language"
            >
              <Globe className="w-4 h-4" />
              {language === 'en' ? 'हिं' : 'EN'}
            </button>

            <Link
              href="#contact"
              className="bg-maroon-700 hover:bg-maroon-600 text-white px-5 lg:px-6 py-2 rounded-full font-medium transition-all shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              {th.enquireNow}
            </Link>
          </div>
        </nav>

        {/* Mobile Toggle & Lang */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
            className={`flex items-center font-bold text-sm ${
              !isScrolled && !mobileMenuOpen ? "text-white drop-shadow-md" : "text-maroon-700"
            }`}
          >
            {language === 'en' ? 'हिं' : 'EN'}
          </button>
          
          <button
            className="p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X size={28} className="text-maroon-700" />
            ) : (
              <Menu size={28} className={!isScrolled ? "text-white drop-shadow-md" : "text-maroon-700"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-cream border-t border-gold-200 shadow-xl py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-800 font-medium py-2 border-b border-gold-100 last:border-0"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="bg-maroon-700 text-white text-center py-3 rounded-md font-medium mt-2"
          >
            {th.enquireNow}
          </Link>
        </div>
      )}
    </header>
  );
}
