import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, ChevronUp, MessageSquare } from 'lucide-react';
import { FAQ_ITEMS } from '../data';
import { FAQ_ITEMS_EN } from '../data_en';
import { useLanguage } from '../LanguageContext';

export default function FaqSection() {
  const { language, t } = useLanguage();
  const faqs = language === 'id' ? FAQ_ITEMS : FAQ_ITEMS_EN;
  
  const [activeCategoryId, setActiveCategoryId] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>('faq-1');

  const categories = [
    { id: 'all', label: language === 'id' ? 'Semua' : 'All' },
    { id: 'tech', label: language === 'id' ? 'Teknis & Harga' : 'Price & Tech' },
    { id: 'payments', label: language === 'id' ? 'Pembayaran' : 'Payments' },
    { id: 'support', label: language === 'id' ? 'Layanan Support' : 'Support Service' },
    { id: 'features', label: language === 'id' ? 'Fitur Website' : 'Features' },
  ];

  const filteredFaqs = activeCategoryId === 'all'
    ? faqs
    : faqs.filter(item => {
        if (activeCategoryId === 'tech') return item.category === (language === 'id' ? 'Teknis & Harga' : 'Price & Tech');
        if (activeCategoryId === 'payments') return item.category === (language === 'id' ? 'Pembayaran' : 'Payments');
        if (activeCategoryId === 'support') return item.category === (language === 'id' ? 'Layanan Support' : 'Support Service');
        if (activeCategoryId === 'features') return item.category === (language === 'id' ? 'Fitur Website' : 'Features');
        return true;
      });

  const handleToggle = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-brand-dark relative overflow-hidden text-white">
      
      {/* Background aesthetics */}
      <div className="absolute top-1/4 right-0 w-84 h-84 bg-brand-secondary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-84 h-84 bg-brand-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-4 text-[10px] font-mono tracking-widest text-slate-300 uppercase">
            <HelpCircle className="w-3 h-3 text-brand-accent" />
            <span>{language === 'id' ? 'Pusat Jawaban & Edukasi' : 'FAQ & Help Center'}</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-bold font-serif text-white mb-4">
            {t('faq.title')}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {t('faq.subtitle')}
          </p>

          {/* Categories Tab selector */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategoryId(cat.id);
                  setExpandedId(null);
                }}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  activeCategoryId === cat.id
                    ? 'bg-brand-secondary text-white shadow'
                    : 'bg-slate-900 border border-slate-850 text-slate-400 hover:text-white hover:bg-slate-850'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>

        {/* FAQ Accordion List Layout */}
        <div className="max-w-3xl mx-auto space-y-4 text-left">
          <AnimatePresence mode="wait">
            {filteredFaqs.map((faq) => {
              const isExpanded = expandedId === faq.id;
              return (
                <motion.div
                  layout
                  key={faq.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="bg-slate-900/60 border border-slate-800 rounded-lg overflow-hidden transition-all duration-300 hover:border-slate-700"
                >
                  {/* Accordion Trigger */}
                  <button
                    onClick={() => handleToggle(faq.id)}
                    className="w-full p-5 sm:p-6 flex items-center justify-between gap-4 text-left focus:outline-none cursor-pointer"
                  >
                    <span className="font-semibold text-sm sm:text-base text-slate-100 pr-4">
                      {faq.question}
                    </span>
                    <span className={`p-1.5 rounded-full bg-slate-800 shrink-0 text-slate-400 transition-transform duration-350 ${isExpanded ? 'rotate-180 text-brand-accent' : ''}`}>
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {/* Accordion Content Panel */}
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-slate-800/60 pt-4 bg-slate-900/40">
                        <p>{faq.answer}</p>
                        
                        <div className="mt-4 pt-4 border-t border-slate-800/40 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                          <span>{language === 'id' ? `Kategori: ${faq.category}` : `Category: ${faq.category}`}</span>
                          <span>{language === 'id' ? 'Mitra Resmi TourNative Tech' : 'Official TourNative Tech Partner'}</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Still have questions promo box */}
          <div className="mt-12 bg-gradient-to-r from-brand-secondary/15 to-indigo-500/5 border border-brand-secondary/30 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <h4 className="font-serif font-bold text-lg text-white">
                {language === 'id' ? 'Masih Memiliki Pertanyaan Lain?' : 'Still Have Other Questions?'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-md">
                {language === 'id' 
                  ? 'Hubungi tim konsultan kami secara langsung melalui WhatsApp untuk konsultasi gratis mengenai desain website dan sistem booking.' 
                  : 'Contact our consulting team directly via WhatsApp for a free consultation regarding website design and booking systems.'}
              </p>
            </div>
            <a
              href="https://wa.me/628123456789?text=Halo%20TourNative%2C%20saya%20tertarik%20bertanya%20mengenai%20layanan%20sewa%20website..."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-brand-secondary hover:bg-brand-secondary/95 text-white text-xs font-bold uppercase tracking-wider rounded-xs flex items-center justify-center gap-2 cursor-pointer transition-all shrink-0 shadow-md shadow-brand-secondary/10"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{language === 'id' ? 'Tanya Admin WA ↗' : 'Ask Admin via WA ↗'}</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
