"use client";

import { motion } from "framer-motion";
import { 
  Palette, 
  Utensils, 
  Car, 
  Music, 
  Bed, 
  Home, 
  Ban, 
  Users 
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import React from "react";

const facilityIcons = [
  <Palette key="0" className="w-8 h-8" />,
  <Utensils key="1" className="w-8 h-8" />,
  <Car key="2" className="w-8 h-8" />,
  <Music key="3" className="w-8 h-8" />,
  <Bed key="4" className="w-8 h-8" />,
  <Home key="5" className="w-8 h-8" />,
  <Users key="6" className="w-8 h-8" />,
  <Ban key="7" className="w-8 h-8" />
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Facilities() {
  const { t } = useLanguage();
  const tf = t.facilities;

  return (
    <section id="facilities" className="py-20 md:py-32 bg-white relative">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[2px] w-8 bg-gold-400"></div>
            <span className="text-gold-600 font-sans uppercase tracking-widest text-sm font-semibold">{tf.badge}</span>
            <div className="h-[2px] w-8 bg-gold-400"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-maroon-800 font-bold mb-6">
            {tf.title}
          </h2>
          <p className="text-gray-600 text-lg">
            {tf.subtitle}
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {tf.items.map((facility, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-cream border border-gold-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 rounded-full bg-maroon-50 text-maroon-600 flex items-center justify-center mb-6 group-hover:bg-maroon-600 group-hover:text-white transition-colors duration-300">
                {facilityIcons[index]}
              </div>
              <h3 className="font-serif text-2xl text-gray-900 font-bold mb-3">
                {facility.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {facility.description || facility.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
