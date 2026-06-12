"use client";

import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const tf = t.footer;
  const th = t.header; // Reusing header links for Quick Links

  return (
    <footer className="bg-maroon-950 text-maroon-50 pt-20 pb-10 border-t-8 border-gold-500">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block font-serif text-3xl font-bold text-gold-400 mb-6">
              Aadarsh
              <span className="block text-sm font-sans font-normal text-cream uppercase tracking-widest mt-1">
                Marriage Garden
              </span>
            </Link>
            <p className="text-maroon-200 text-sm leading-relaxed max-w-md mb-8">
              {tf.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl font-bold text-gold-400 mb-6">{tf.quickLinks}</h4>
            <ul className="space-y-4">
              <li><Link href="#about" className="text-maroon-200 hover:text-gold-300 transition-colors text-sm">{th.about}</Link></li>
              <li><Link href="#facilities" className="text-maroon-200 hover:text-gold-300 transition-colors text-sm">{th.facilities}</Link></li>
              <li><Link href="#gallery" className="text-maroon-200 hover:text-gold-300 transition-colors text-sm">{th.gallery}</Link></li>
              <li><Link href="#pricing" className="text-maroon-200 hover:text-gold-300 transition-colors text-sm">{th.pricing}</Link></li>
              <li><Link href="#contact" className="text-maroon-200 hover:text-gold-300 transition-colors text-sm">{th.enquireNow}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-xl font-bold text-gold-400 mb-6">{tf.contactUs}</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <span className="text-maroon-200 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: tf.address }}></span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold-400 shrink-0" />
                <a href="tel:+919835071837" className="text-maroon-200 hover:text-gold-300 transition-colors text-sm">+91 98350 71837</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold-400 shrink-0" />
                <a href="mailto:amgjanipur@gmail.com" className="text-maroon-200 hover:text-gold-300 transition-colors text-sm break-all">amgjanipur@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-maroon-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-maroon-300 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} {tf.rights}
          </p>
          <div className="flex items-center gap-1">
            <span className="text-maroon-400 text-sm">Designed with</span>
            <span className="text-gold-500">♥</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
