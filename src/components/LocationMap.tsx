"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function LocationMap() {
  const { t } = useLanguage();
  const tl = t.location;

  return (
    <section className="py-20 bg-cream relative">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[2px] w-8 bg-gold-400"></div>
            <span className="text-gold-600 font-sans uppercase tracking-widest text-sm font-semibold">{tl.badge}</span>
            <div className="h-[2px] w-8 bg-gold-400"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-maroon-800 font-bold mb-6">
            {tl.title}
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center max-w-6xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/3 bg-white p-8 rounded-3xl shadow-xl border border-gold-100"
          >
            <div className="w-16 h-16 bg-maroon-50 text-maroon-700 rounded-full flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">{tl.venueName}</h3>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              {tl.address}
            </p>
            <a 
              href="https://maps.google.com/?q=25.5195,85.02575" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-maroon-700 hover:bg-maroon-600 text-white py-4 rounded-xl font-bold transition-colors"
            >
              <Navigation className="w-5 h-5" />
              {tl.getDirections}
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/3 h-[400px] bg-gray-200 rounded-3xl overflow-hidden shadow-xl"
          >
            {/* Embedded Google Map */}
            <iframe 
              src="https://maps.google.com/maps?q=25.5195,85.02575&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
