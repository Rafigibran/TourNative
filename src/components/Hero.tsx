import { motion } from 'motion/react';
import { ArrowUpRight, ShieldCheck, Sparkles, Smartphone, Layers } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface HeroProps {
  onCtaClick: (sectionId: string) => void;
}

export default function Hero({ onCtaClick }: HeroProps) {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark pt-20">
      
      {/* Absolute Background Image with Dark Linear Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80"
          alt="Tropical Beach Luxury Background"
          className="w-full h-full object-cover object-center scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Multilayer Gradients for Ultimate Contrast and Cinematic Feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/95 via-brand-dark/80 to-brand-dark/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/50 via-transparent to-brand-dark/50" />
      </div>

      {/* Decorative Radial glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-secondary/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-brand-accent/15 blur-[120px] pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-left">
        <div className="max-w-4xl">
          
          {/* Top Promo Tag matching exact image style */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 border border-brand-accent/40 bg-brand-accent/10 rounded-xs mb-8 shadow-inner"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-accent animate-pulse" />
            <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.25em] text-sky-400 uppercase">
              {t('hero.promo')}
            </span>
          </motion.div>

          {/* Elegant Display Serif Headline matching exact image design */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-sans mb-6 text-white leading-[1.1]"
          >
            DIGITIZE YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-blue-400 to-indigo-300 animate-pulse-slow">
              TRAVEL BUSINESS.
            </span>
          </motion.h1>

          {/* Subtitle in Indonesian */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg md:text-xl max-w-2xl font-light mb-10 leading-relaxed"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* Key Feature Badge Pills matching image style */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex flex-wrap gap-3 mb-12"
          >
            <div className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 backdrop-blur-sm rounded-sm">
              <span className="font-mono text-brand-accent text-sm font-semibold">{t('hero.badge.1.val')}</span>
              <span className="text-xs text-slate-300">{t('hero.badge.1.lbl')}</span>
            </div>
            
            <div className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 backdrop-blur-sm rounded-sm">
              <span className="font-mono text-brand-accent text-sm font-semibold">{t('hero.badge.2.val')}</span>
              <span className="text-xs text-slate-300">{t('hero.badge.2.lbl')}</span>
            </div>

            <div className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 backdrop-blur-sm rounded-sm">
              <span className="font-mono text-brand-accent text-sm font-semibold">24/7</span>
              <span className="text-xs text-slate-300">{t('hero.badge.3.lbl')}</span>
            </div>
          </motion.div>

          {/* Call To Actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => onCtaClick('pricing')}
              className="px-8 py-4 bg-brand-secondary hover:bg-brand-secondary/90 text-white font-semibold text-sm rounded-xs tracking-wider uppercase transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 shadow-lg shadow-brand-secondary/20 cursor-pointer group"
            >
              <span>{t('hero.cta.view')}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
            
            <button
              onClick={() => onCtaClick('features')}
              className="px-8 py-4 bg-transparent hover:bg-white/5 text-white border border-white/30 hover:border-white font-semibold text-sm rounded-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{t('hero.cta.learn')}</span>
            </button>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
