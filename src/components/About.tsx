"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  const ta = t.about;

  return (
    <section id="about" className="py-20 md:py-32 bg-cream relative overflow-hidden">
      {/* Decorative floral pattern background */}
      <div className="absolute inset-0 pattern-floral pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-tl-[100px] rounded-br-[100px] overflow-hidden shadow-2xl border-4 border-gold-200">
              <Image 
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1000&auto=format&fit=crop" 
                alt="Aadarsh Marriage Garden Setup" 
                fill
                className="object-cover"
              />
            </div>
            
            {/* Year Badge */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
              className="absolute -bottom-6 -right-6 md:bottom-10 md:-right-10 bg-maroon-700 text-gold-200 p-6 rounded-full shadow-xl w-32 h-32 flex flex-col items-center justify-center border-4 border-cream"
            >
              <span className="text-sm font-sans uppercase tracking-wider">{ta.est}</span>
              <span className="text-3xl font-serif font-bold">2019</span>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[2px] w-12 bg-gold-400"></div>
              <span className="text-gold-600 font-sans uppercase tracking-widest text-sm font-semibold">{ta.story}</span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-maroon-800 font-bold mb-6">
              {ta.title}
            </h2>
            
            <p className="text-gray-700 text-lg mb-6 leading-relaxed font-sans">
              {ta.p1}
            </p>
            
            <p className="text-gray-700 text-lg mb-8 leading-relaxed font-sans">
              {ta.p2}
            </p>
            
            <div className="grid grid-cols-2 gap-6 border-t border-gold-200 pt-8 mt-8">
              <div>
                <h4 className="font-serif text-3xl text-maroon-600 font-bold mb-2">1000+</h4>
                <p className="text-gray-600 text-sm uppercase tracking-wider font-medium">{ta.capGuest}</p>
              </div>
              <div>
                <h4 className="font-serif text-3xl text-maroon-600 font-bold mb-2">{ta.indoorOutdoor}</h4>
                <p className="text-gray-600 text-sm uppercase tracking-wider font-medium">{ta.versatileSpaces}</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
