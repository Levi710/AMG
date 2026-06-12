"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, PhoneCall, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventType: "",
    date: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const { t } = useLanguage();
  const tc = t.contact;
  const tf = tc.form;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.message.trim().length < 50) {
      setError(tf.minWordsError);
      return;
    }
    setError("");

    setIsSubmitting(true);
    
    // Construct email subject and body
    const subject = encodeURIComponent(`New Enquiry from ${formData.name}`);
    let bodyText = `Name: ${formData.name}\n`;
    bodyText += `Phone: ${formData.phone}\n`;
    bodyText += `Event Type: ${formData.eventType || 'Not specified'}\n`;
    bodyText += `Date: ${formData.date || 'Not specified'}\n`;
    bodyText += `Email: ${formData.email || 'Not provided'}\n\n`;
    bodyText += `Message:\n${formData.message}\n`;
    
    const body = encodeURIComponent(bodyText);
    
    // Open mailto link to the user's gmail
    window.location.href = `mailto:amgjanipur@gmail.com?subject=${subject}&body=${body}`;
    
    // Show success state
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          phone: "",
          eventType: "",
          date: "",
          email: "",
          message: "",
        });
      }, 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-white relative">
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[2px] w-8 bg-gold-400"></div>
            <span className="text-gold-600 font-sans uppercase tracking-widest text-sm font-semibold">{tc.badge}</span>
            <div className="h-[2px] w-8 bg-gold-400"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-maroon-800 font-bold mb-6">
            {tc.title}
          </h2>
          <p className="text-gray-600 text-lg">
            {tc.subtitle}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          
          {/* Quick Contact Options */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/3 flex flex-col gap-6"
          >
            <a href="tel:+919835071837" className="bg-cream p-8 rounded-3xl border border-gold-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center group">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-maroon-600 mb-4 group-hover:bg-maroon-600 group-hover:text-white transition-colors duration-300">
                <PhoneCall className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">{tc.callUs}</h3>
              <p className="text-gray-500 font-sans">+91 98350 71837</p>
            </a>

            <a href="https://wa.me/919835071837" target="_blank" rel="noopener noreferrer" className="bg-maroon-50 p-8 rounded-3xl border border-maroon-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center group">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#25D366] mb-4 group-hover:bg-[#25D366] group-hover:text-white transition-colors duration-300">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">{tc.whatsapp}</h3>
              <p className="text-gray-500 font-sans">{tc.chatWithUs}</p>
            </a>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/3 bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gold-100"
          >
            {isSubmitted ? (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
                  <Send className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-3xl text-maroon-800 font-bold mb-4">{tc.successTitle}</h3>
                <p className="text-gray-600 text-lg max-w-md mx-auto">{tc.successSubtitle}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-gray-700">{tf.fullName}</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none transition-all bg-gray-50 focus:bg-white"
                      placeholder={tf.placeholderName}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-semibold text-gray-700">{tf.phone}</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none transition-all bg-gray-50 focus:bg-white"
                      placeholder="+91 "
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="eventType" className="text-sm font-semibold text-gray-700">{tf.eventType}</label>
                    <select 
                      id="eventType" 
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none transition-all bg-gray-50 focus:bg-white text-gray-700 appearance-none"
                    >
                      <option value="">Select Event Type</option>
                      <option value="wedding">{tf.eventTypes.wedding}</option>
                      <option value="pre-wedding">{tf.eventTypes.preWedding}</option>
                      <option value="reception">{tf.eventTypes.reception}</option>
                      <option value="engagement">{tf.eventTypes.engagement}</option>
                      <option value="corporate">{tf.eventTypes.corporate}</option>
                      <option value="other">{tf.eventTypes.other}</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="date" className="text-sm font-semibold text-gray-700">{tf.date}</label>
                    <input 
                      type="date" 
                      id="date" 
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none transition-all bg-gray-50 focus:bg-white text-gray-700"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-gray-700">{tf.email}</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none transition-all bg-gray-50 focus:bg-white"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-gray-700">{tf.message}</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none transition-all bg-gray-50 focus:bg-white resize-none"
                    placeholder={tf.placeholderMessage}
                  ></textarea>
                  {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-maroon-700 hover:bg-maroon-600 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">{tf.sending}</span>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      {tf.sendBtn}
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
