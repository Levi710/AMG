"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1000&auto=format&fit=crop",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=800&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=800&auto=format&fit=crop",
    className: "md:col-span-1 md:row-span-1",
  },
];

export default function Gallery() {
  const { t } = useLanguage();
  const tg = t.gallery;

  return (
    <section id="gallery" className="py-20 md:py-32 bg-maroon-950 text-white relative">
      <div className="absolute inset-0 pattern-floral opacity-10 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[2px] w-8 bg-gold-400"></div>
            <span className="text-gold-400 font-sans uppercase tracking-widest text-sm font-semibold">{tg.badge}</span>
            <div className="h-[2px] w-8 bg-gold-400"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            {tg.title}
          </h2>
          <p className="text-gray-300 text-lg">
            {tg.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${image.className}`}
            >
              <Image
                src={image.src}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-gold-300 font-sans text-sm uppercase tracking-wider mb-1">{tg.view}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
