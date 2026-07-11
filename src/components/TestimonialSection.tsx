import { motion } from 'motion/react';
import { Quote, Star, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data';
import { TESTIMONIALS_EN } from '../data_en';
import { useLanguage } from '../LanguageContext';

export default function TestimonialSection() {
  const { language, t } = useLanguage();
  const list = language === 'id' ? TESTIMONIALS : TESTIMONIALS_EN;

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      {/* Background radial blobs */}
      <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-brand-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-brand-accent/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with vertical blue bar */}
        <div className="mb-16 text-left">
          <div className="flex items-start gap-4">
            <div className="w-1.5 h-10 bg-brand-primary rounded-full mt-1.5" />
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-serif text-slate-900 leading-none">
                {t('testimonials.title')}
              </h2>
              <span className="block text-xs font-mono tracking-[0.2em] text-slate-500 uppercase mt-2">
                {t('testimonials.subtitle')}
              </span>
            </div>
          </div>
        </div>

        {/* Testimonials Bento/Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {list.map((test) => (
            <div
              key={test.id}
              className="bg-slate-50 border border-slate-100 p-6 sm:p-8 rounded-lg flex flex-col justify-between hover:shadow-lg transition-all duration-300 relative group"
            >
              {/* Highlight Metric Overlay Card */}
              <div className="absolute -top-3 right-6 bg-brand-primary text-white text-[10px] font-mono font-bold px-3 py-1 rounded shadow-md group-hover:bg-brand-secondary transition-colors">
                {test.metrics}
              </div>

              <div>
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-slate-200 mb-6" />

                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-brand-secondary fill-brand-secondary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed italic mb-8">
                  &ldquo;{test.content}&rdquo;
                </p>
              </div>

              {/* Author Row */}
              <div className="flex items-center gap-4 border-t border-slate-200/60 pt-5 mt-auto">
                <img
                  src={test.avatar}
                  alt={test.name}
                  className="w-11 h-11 rounded-full object-cover border border-slate-200"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="text-left">
                  <h4 className="font-bold text-sm text-slate-900 leading-tight">{test.name}</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 font-medium">
                    {test.role}, <span className="text-brand-secondary">{test.company}</span>
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Real bottom Trust Indicator */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 py-6 border-t border-b border-slate-100 bg-slate-50/50 rounded-lg">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-5 h-5 text-brand-secondary" />
            <span className="text-xs font-mono tracking-wider uppercase text-slate-600 font-bold">
              {language === 'id' ? '100+ Travel Agen Terdaftar' : '100+ Registered Travel Agencies'}
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="text-amber-500 font-bold text-lg font-mono">★★★★★</span>
            <span className="text-xs font-mono tracking-wider uppercase text-slate-600 font-bold">
              {language === 'id' ? 'Rating Layanan 4.9/5.0' : 'Service Rating 4.9/5.0'}
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="text-emerald-500 font-bold text-lg font-mono">100%</span>
            <span className="text-xs font-mono tracking-wider uppercase text-slate-600 font-bold">
              {language === 'id' ? 'Garansi Uang Kembali 7 Hari' : '7-Day Money Back Guarantee'}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
