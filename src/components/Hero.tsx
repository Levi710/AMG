"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const th = t.hero;

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2000&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/80 via-transparent to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          {/* Decorative element */}
          <div className="mb-6 opacity-90">
            <svg width="120" height="36" viewBox="0 0 120 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M60 0L78 18L60 36L42 18L60 0Z" fill="#D4AF37"/>
              <path d="M24 18L36 24L24 30L12 24L24 18Z" fill="#D4AF37" opacity="0.6"/>
              <path d="M96 18L108 24L96 30L84 24L96 18Z" fill="#D4AF37" opacity="0.6"/>
            </svg>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-4 drop-shadow-lg">
            {th.title}
            <span className="block text-3xl md:text-5xl lg:text-6xl text-gold-300 font-normal mt-2">{th.subtitle}</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-cream mb-10 max-w-2xl mx-auto font-light drop-shadow-md">
            {th.tagline}
          </p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Link
              href="#contact"
              className="inline-block bg-gold-500 hover:bg-gold-400 text-maroon-950 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:-translate-y-1"
            >
              {th.cta}
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-gold-300 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
