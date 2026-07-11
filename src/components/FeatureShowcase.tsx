import React from 'react';
import { 
  MessageSquare, 
  CreditCard, 
  TrendingUp, 
  BarChart3 
} from 'lucide-react';
import { WEB_FEATURES } from '../data';
import { WEB_FEATURES_EN } from '../data_en';
import { useLanguage } from '../LanguageContext';

export default function FeatureShowcase() {
  const { language, t } = useLanguage();
  const features = language === 'id' ? WEB_FEATURES : WEB_FEATURES_EN;

  const renderIcon = (iconName: string) => {
    const props = { className: "w-6 h-6 text-brand-secondary" };
    switch (iconName) {
      case 'MessageSquareShare': return <MessageSquare {...props} />;
      case 'CreditCard': return <CreditCard {...props} />;
      case 'TrendingUp': return <TrendingUp {...props} />;
      case 'BarChart3': return <BarChart3 {...props} />;
      default: return <MessageSquare {...props} />;
    }
  };

  return (
    <section id="features" className="py-24 bg-brand-neutral relative overflow-hidden">
      
      {/* Background aesthetics */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-brand-accent/5 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with vertical blue bar exact style */}
        <div className="mb-16">
          <div className="flex items-start gap-4">
            <div className="w-1.5 h-10 bg-brand-primary rounded-full mt-1.5" />
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-serif text-slate-900 leading-none">
                {t('features.title')}
              </h2>
              <span className="block text-xs font-mono tracking-[0.2em] text-slate-500 uppercase mt-2">
                {t('features.subtitle')}
              </span>
            </div>
          </div>
        </div>

        {/* Features Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="p-3.5 bg-brand-secondary/10 rounded-xl text-brand-secondary group-hover:scale-110 transition-transform duration-300">
                    {renderIcon(feature.iconName)}
                  </div>
                  <span className="bg-brand-accent/10 text-brand-secondary text-[10px] font-mono px-2.5 py-1 rounded font-bold uppercase tracking-wider">
                    {feature.visualMetric}
                  </span>
                </div>
                
                <h3 className="font-serif font-bold text-xl text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  {feature.shortDesc}
                </p>
              </div>
              
              <div className="mt-4 pt-4 border-t border-slate-100/80 text-xs text-slate-600 leading-relaxed">
                {feature.detailedDesc}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
