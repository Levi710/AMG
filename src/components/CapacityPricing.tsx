"use client";

import { motion } from "framer-motion";
import { Users, Coins, Sparkles, AlertCircle } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function CapacityPricing() {
  const { t } = useLanguage();
  const tp = t.pricing;

  return (
    <section id="pricing" className="py-20 md:py-32 bg-cream relative">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[2px] w-8 bg-gold-400"></div>
            <span className="text-gold-600 font-sans uppercase tracking-widest text-sm font-semibold">{tp.badge}</span>
            <div className="h-[2px] w-8 bg-gold-400"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-maroon-800 font-bold mb-6">
            {tp.title}
          </h2>
          <p className="text-gray-600 text-lg">
            {tp.subtitle}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-5xl mx-auto">
          
          {/* Capacity Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gold-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-maroon-50 rounded-bl-full -z-0 opacity-50"></div>
            <div className="relative z-10">
              <Users className="w-12 h-12 text-maroon-600 mb-6" />
              <h3 className="font-serif text-3xl text-gray-900 font-bold mb-6">{tp.venueCapacity}</h3>
              
              <ul className="space-y-6">
                <li className="flex justify-between items-center border-b border-gray-100 pb-4">
                  <span className="text-gray-600 font-medium">{tp.seatedCapacity}</span>
                  <span className="font-serif text-2xl text-maroon-700 font-bold">800 <span className="text-sm text-gray-500 font-sans font-normal">{tp.pax}</span></span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-100 pb-4">
                  <span className="text-gray-600 font-medium">{tp.floatingCapacity}</span>
                  <span className="font-serif text-2xl text-maroon-700 font-bold">1000+ <span className="text-sm text-gray-500 font-sans font-normal">{tp.pax}</span></span>
                </li>
                <li className="flex justify-between items-center pt-2">
                  <span className="text-gray-600 font-medium flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-gold-500" /> {tp.minBooking}
                  </span>
                  <span className="font-serif text-xl text-gray-800 font-bold">50 <span className="text-sm text-gray-500 font-sans font-normal">{tp.pax}</span></span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Pricing Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex-1 bg-maroon-800 text-white p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 pattern-floral opacity-20 pointer-events-none" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-maroon-700 rounded-bl-full -z-0"></div>
            
            <div className="relative z-10">
              <Sparkles className="w-12 h-12 text-gold-400 mb-6" />
              <h3 className="font-serif text-3xl font-bold mb-2 text-gold-50">{tp.decorPricing}</h3>
              <p className="text-maroon-200 text-sm mb-6 uppercase tracking-wider">{tp.perFunction}</p>
              
              <div className="mb-8">
                <span className="text-4xl md:text-5xl font-serif font-bold text-gold-400">₹1Lakh</span>
                <span className="text-2xl text-gold-300 font-serif mx-2">-</span>
                <span className="text-4xl md:text-5xl font-serif font-bold text-gold-400">₹5Lakh</span>
                <p className="text-sm text-maroon-300 mt-2">{tp.taxesExtra}</p>
              </div>

              <div className="bg-maroon-900/50 rounded-xl p-6 border border-maroon-700">
                <div className="flex items-start gap-3">
                  <Coins className="w-6 h-6 text-gold-400 shrink-0 mt-1" />
                  <p className="text-maroon-50 text-sm leading-relaxed">
                    {tp.contactNote}
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <Link
                  href="#contact"
                  className="block w-full text-center bg-gold-500 hover:bg-gold-400 text-maroon-950 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-xl"
                >
                  {tp.customQuoteCta}
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
