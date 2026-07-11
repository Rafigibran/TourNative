import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, X, ArrowRight, Star, HelpCircle, ShieldAlert } from 'lucide-react';
import { PRICING_PLANS } from '../data';
import { PRICING_PLANS_EN } from '../data_en';
import { useLanguage } from '../LanguageContext';

interface PricingProps {
  onSelectPlan: (planId: 'basic' | 'pro' | 'enterprise', isYearly: boolean) => void;
}

export default function PricingSection({ onSelectPlan }: PricingProps) {
  const [isYearly, setIsYearly] = useState(true);
  const { language, t } = useLanguage();
  const plans = language === 'id' ? PRICING_PLANS : PRICING_PLANS_EN;

  const handlePlanSelect = (id: 'basic' | 'pro' | 'enterprise') => {
    onSelectPlan(id, isYearly);
  };

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat(language === 'id' ? 'id-ID' : 'en-US', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section id="pricing" className="py-24 bg-brand-dark relative overflow-hidden">
      
      {/* Absolute Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-brand-secondary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-brand-accent/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-4 text-[10px] font-mono tracking-widest text-slate-300 uppercase"
          >
            <Star className="w-3 h-3 text-brand-accent fill-brand-accent" />
            <span>{language === 'id' ? 'Pilihan Paket & Investasi Bisnis' : 'Pricing Plans & Business Investment'}</span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-5xl font-bold font-serif text-white mb-4">
            {t('pricing.title')}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {t('pricing.subtitle')}
          </p>

          {/* Interactive Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <span className={`text-xs font-semibold uppercase tracking-wider transition-colors ${!isYearly ? 'text-white' : 'text-slate-500'}`}>
              {t('pricing.toggle.monthly')}
            </span>
            
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-14 h-8 bg-slate-800 rounded-full p-1 transition-colors focus:outline-none cursor-pointer border border-white/15"
            >
              <div
                className={`w-6 h-6 bg-brand-accent rounded-full transition-transform shadow-md ${
                  isYearly ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>

            <span className={`text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-1.5 ${isYearly ? 'text-white' : 'text-slate-500'}`}>
              {t('pricing.toggle.yearly')}
              <span className="bg-emerald-500/20 text-emerald-400 text-[9px] font-mono font-extrabold px-2 py-0.5 rounded-full border border-emerald-500/20 uppercase tracking-normal">
                {t('pricing.toggle.save')}
              </span>
            </span>
          </div>

        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const isPro = plan.id === 'pro';
            const rate = isYearly ? plan.priceYearly : plan.price;
            
            return (
              <div
                key={plan.id}
                className={`rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 text-left relative ${
                  isPro
                    ? 'bg-gradient-to-b from-[#14234c] to-brand-dark border-2 border-brand-secondary shadow-xl shadow-brand-secondary/10 scale-[1.03] z-10'
                    : 'bg-slate-900/60 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Popularity Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-secondary text-white text-[10px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-md">
                    {plan.badge}
                  </div>
                )}

                <div>
                  {/* Plan Name & Desc */}
                  <div className="border-b border-slate-800/80 pb-6 mb-6">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                      {plan.id} plan
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-serif text-white mt-1">
                      {plan.name}
                    </h3>
                    
                    {/* Real Pricing Rate display */}
                    <div className="flex items-baseline gap-1.5 mt-4">
                      <span className="text-3xl sm:text-4xl font-extrabold font-mono text-white tracking-tight">
                        {formatPrice(rate)}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">/ {language === 'id' ? 'bulan' : 'month'}</span>
                    </div>

                    <p className="text-xs text-slate-500 mt-2 italic">
                      {isYearly 
                        ? (language === 'id' ? `Ditagih tahunan: ${formatPrice(rate * 12)} / tahun` : `Billed annually: ${formatPrice(rate * 12)} / year`)
                        : (language === 'id' ? 'Sistem tagihan bulanan fleksibel' : 'Flexible monthly billing system')}
                    </p>

                    <p className="text-slate-400 text-xs mt-4 leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  {/* Included features checklist */}
                  <div className="space-y-4 mb-6">
                    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">{t('pricing.included')}</p>
                    <ul className="space-y-3">
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-tight">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Not included items (Architectural Honesty) */}
                  {plan.notIncluded && plan.notIncluded.length > 0 && (
                    <div className="space-y-3 pt-4 border-t border-slate-800/60 mb-8">
                      <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider flex items-center gap-1">
                        <ShieldAlert className="w-3.5 h-3.5" />
                        {t('pricing.notIncluded')}
                      </p>
                      <ul className="space-y-2.5">
                        {plan.notIncluded.map((notFeat, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-500 leading-tight">
                            <X className="w-3.5 h-3.5 text-rose-500/60 shrink-0 mt-0.5" />
                            <span>{notFeat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Selection Action CTA */}
                <div className="pt-4 border-t border-slate-800/80 mt-auto">
                  <button
                    onClick={() => handlePlanSelect(plan.id)}
                    className={`w-full py-3.5 rounded-xs font-bold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center justify-center gap-1.5 ${
                      isPro
                        ? 'bg-brand-secondary text-white hover:bg-brand-secondary/95 shadow-md shadow-brand-secondary/15'
                        : 'bg-slate-800 text-slate-200 hover:bg-slate-700'
                    }`}
                  >
                    <span>{t('pricing.cta.rent').toUpperCase()} {plan.name.toUpperCase()}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  
                  <p className="text-[10px] text-slate-500 text-center mt-3 font-mono">
                    {t('pricing.recommended')} {plan.recommendedFor}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Dynamic bottom informational table link / server specs highlight */}
        <div className="mt-16 bg-slate-900/40 border border-slate-800 rounded-lg p-5 text-left text-xs max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <div className="space-y-1">
              <span className="block text-[9px] font-mono text-slate-500 uppercase tracking-widest">{t('pricing.specs.hosting')}</span>
              <p className="text-slate-300 font-semibold">{language === 'id' ? 'High-Performance SSD Cloud' : 'High-Performance SSD Cloud'}</p>
              <p className="text-slate-500 text-[10px]">
                {language === 'id' 
                  ? 'Akses website ultra cepat dengan server berbasis NVMe yang dioptimasi khusus untuk platform booking travel.' 
                  : 'Ultra-fast website access with NVMe-based servers optimized specifically for travel booking platforms.'}
              </p>
            </div>
            
            <div className="space-y-1 md:pl-6">
              <span className="block text-[9px] font-mono text-slate-500 uppercase tracking-widest">{t('pricing.specs.ssl')}</span>
              <p className="text-slate-300 font-semibold">{language === 'id' ? 'SSL Enkripsi & Backups' : 'SSL Encryption & Backups'}</p>
              <p className="text-slate-500 text-[10px]">
                {language === 'id' 
                  ? 'Setiap transaksi pemesanan dan database dilindungi oleh SSL Certificate 256-bit serta backups harian otomatis.' 
                  : 'Every booking transaction and database is protected by a 256-bit SSL Certificate and automatic daily backups.'}
              </p>
            </div>

            <div className="space-y-1 md:pl-6">
              <span className="block text-[9px] font-mono text-slate-500 uppercase tracking-widest">{language === 'id' ? 'Sistem Kepemilikan' : 'Ownership System'}</span>
              <p className="text-slate-300 font-semibold">{language === 'id' ? 'Sewa Siap Pakai / No Setup Fee' : 'Ready-to-Use Rental / No Setup Fee'}</p>
              <p className="text-slate-500 text-[10px]">
                {language === 'id' 
                  ? 'Cukup bayar sewa bulanan flat, tim kami yang mengurus setup server, perpanjangan domain, hosting, dan pemeliharaan bug.' 
                  : 'Simply pay a flat monthly rent; our team handles server setup, domain renewal, hosting, and bug maintenance.'}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
