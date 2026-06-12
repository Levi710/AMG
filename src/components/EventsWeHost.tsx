"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const eventImages = [
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1530103862676-de8892bf309c?q=80&w=600&auto=format&fit=crop"
];

export default function EventsWeHost() {
  const { t } = useLanguage();
  const te = t.events;

  return (
    <section id="events" className="py-20 md:py-32 bg-white relative">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[2px] w-8 bg-gold-400"></div>
            <span className="text-gold-600 font-sans uppercase tracking-widest text-sm font-semibold">{te.badge}</span>
            <div className="h-[2px] w-8 bg-gold-400"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-maroon-800 font-bold mb-6">
            {te.title}
          </h2>
          <p className="text-gray-600 text-lg">
            {te.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {te.items.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg"
            >
              <div className="relative h-72 w-full">
                <Image
                  src={eventImages[index]}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-950 via-maroon-900/40 to-transparent flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-serif text-2xl text-gold-300 font-bold mb-2">{event.title}</h3>
                <p className="text-cream text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {event.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
