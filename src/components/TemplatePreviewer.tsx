import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Monitor, Smartphone, Check, HelpCircle, ArrowRight, Sparkles, Star, ExternalLink, Car, Map } from 'lucide-react';
import { TRAVEL_TEMPLATES } from '../data';
import { TRAVEL_TEMPLATES_EN } from '../data_en';
import { useLanguage } from '../LanguageContext';

export default function TemplatePreviewer() {
  const [selectedTemplateId, setSelectedTemplateId] = useState('adventure');
  const [previewMode, setPreviewMode] = useState<'desktop' | 'mobile'>('desktop');
  const [selectedPaletteId, setSelectedPaletteId] = useState<string | null>(null);
  const { language, t } = useLanguage();

  const COLOR_PALETTES = [
    {
      id: 'forest-green',
      name: 'Forest Green (Segara Anak)',
      primary: '#14532d',
      secondary: '#ebdcb9',
    },
    {
      id: 'ocean-turquoise',
      name: 'Ocean Turquoise (Gili Islands)',
      primary: '#0e7490',
      secondary: '#fbbf24',
    },
    {
      id: 'terracotta-volcano',
      name: 'Terracotta Volcano (Rinjani)',
      primary: '#9a3412',
      secondary: '#dfb497',
    },
    {
      id: 'royal-sasak',
      name: 'Royal Sasak Gold (Songket Violet)',
      primary: '#5b21b6',
      secondary: '#fbbf24',
    },
    {
      id: 'pine-emerald',
      name: 'Pine Emerald (Sembalun Forest)',
      primary: '#064e3b',
      secondary: '#6ee7b7',
    },
    {
      id: 'senggigi-sapphire',
      name: 'Senggigi Sapphire Deep Blue',
      primary: '#1e3a8a',
      secondary: '#60a5fa',
    },
    {
      id: 'malimbu-sunset',
      name: 'Malimbu Sunset Magenta/Coral',
      primary: '#9d174d',
      secondary: '#f97316',
    }
  ];

  const templates = language === 'id' ? TRAVEL_TEMPLATES : TRAVEL_TEMPLATES_EN;
  const currentTemplate = templates.find(t => t.id === selectedTemplateId) || templates[0];

  // Map default palettes for each template if no custom selection is made
  const activePalette = selectedPaletteId 
    ? COLOR_PALETTES.find(p => p.id === selectedPaletteId) 
    : COLOR_PALETTES.find(p => {
        if (selectedTemplateId === 'adventure') return p.id === 'senggigi-sapphire';
        if (selectedTemplateId === 'luxury') return p.id === 'royal-sasak';
        if (selectedTemplateId === 'umroh') return p.id === 'forest-green';
        if (selectedTemplateId === 'community') return p.id === 'ocean-turquoise';
        return p.id === 'senggigi-sapphire';
      });

  const primaryColor = activePalette ? activePalette.primary : currentTemplate.primaryColor;
  const accentColor = activePalette ? activePalette.secondary : currentTemplate.accentColor;

  return (
    <section id="templates" className="py-24 bg-white relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with vertical blue bar */}
        <div className="mb-16">
          <div className="flex items-start gap-4">
            <div className="w-1.5 h-10 bg-brand-primary rounded-full mt-1.5" />
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-serif text-slate-900 leading-none">
                {t('templates.title')}
              </h2>
              <span className="block text-xs font-mono tracking-[0.2em] text-slate-500 uppercase mt-2">
                {t('templates.subtitle')}
              </span>
            </div>
          </div>
        </div>

        {/* Dynamic Selector Buttons */}
        <div className="flex flex-wrap gap-3 mb-10 justify-start">
          {templates.map((template) => {
            const isSelected = selectedTemplateId === template.id;
            return (
              <div key={template.id} className="relative flex items-center transition-all hover:scale-[1.02]">
                <button
                  onClick={() => {
                    setSelectedTemplateId(template.id);
                    setSelectedPaletteId(null);
                  }}
                  className={`pl-5 pr-4 py-3 rounded-l-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-brand-primary text-white border-y border-l border-brand-primary shadow-sm'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border-y border-l border-slate-200'
                  }`}
                >
                  {template.name}
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const url = window.location.origin + '?demo=' + template.id;
                    window.open(url, '_blank');
                  }}
                  title={language === 'id' ? `Buka Live Demo ${template.name}` : `Open Live Demo for ${template.name}`}
                  className={`px-3.5 py-3 rounded-r-lg text-xs font-bold border-y border-r transition-all duration-300 cursor-pointer flex items-center justify-center ${
                    isSelected
                      ? 'bg-brand-secondary text-white border-brand-secondary shadow-sm'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-500 border-slate-200'
                  }`}
                >
                  <span className="mr-1 hidden sm:inline text-[9px] tracking-wide uppercase font-black">{language === 'id' ? 'Live' : 'Live'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Layout content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Panel: Specifications & Color Palette */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-800 rounded-sm text-xs font-mono font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-brand-secondary" />
              <span>{currentTemplate.category} Theme</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
              {currentTemplate.name} Layout
            </h3>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {currentTemplate.description}
            </p>

            {/* PALET WARNA TEMA WEBSITE */}
            <div className="border-t border-b border-slate-100 py-5 space-y-3.5">
              <div>
                <h4 className="text-xs font-bold tracking-wider text-slate-800 uppercase">
                  {language === 'id' ? 'PALET WARNA TEMA WEBSITE' : 'WEBSITE THEME COLOR PALETTE'}
                </h4>
                <p className="text-[11px] text-slate-400 mt-0.5 leading-normal">
                  {language === 'id' 
                    ? 'Ubah skema warna utama dan sekunder instan di seluruh bagian website.' 
                    : 'Change the primary and secondary color scheme instantly across the entire website.'}
                </p>
              </div>

              <div className="space-y-2 max-h-[260px] overflow-y-auto pr-1">
                {COLOR_PALETTES.map((palette) => {
                  const isCurrent = activePalette?.id === palette.id;
                  return (
                    <button
                      key={palette.id}
                      onClick={() => setSelectedPaletteId(palette.id)}
                      className={`w-full text-left p-3 rounded-lg border transition-all flex items-center justify-between cursor-pointer ${
                        isCurrent
                          ? 'border-brand-primary bg-indigo-50/25 shadow-xs'
                          : 'border-slate-100 hover:border-slate-200 bg-slate-50/50'
                      }`}
                    >
                      <div className="space-y-1">
                        <span className={`text-[11px] font-bold block ${isCurrent ? 'text-brand-primary' : 'text-slate-700'}`}>
                          {palette.name}
                        </span>
                        <div className="flex items-center gap-3 text-[9px] text-slate-500 font-mono">
                          <div className="flex items-center gap-1">
                            <div className="w-2.5 h-2.5 rounded-full border border-slate-200" style={{ backgroundColor: palette.primary }} />
                            <span>Primary: {palette.primary}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-2.5 h-2.5 rounded-full border border-slate-200" style={{ backgroundColor: palette.secondary }} />
                            <span>Accent: {palette.secondary}</span>
                          </div>
                        </div>
                      </div>

                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                        isCurrent 
                          ? 'bg-brand-primary border-brand-primary text-white' 
                          : 'border-slate-300 bg-white'
                      }`}>
                        {isCurrent && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Core Features Included */}
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">{t('templates.features')}</p>
              <ul className="space-y-2.5">
                {currentTemplate.featuresList.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Demo Pages */}
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">{t('templates.demo')}</p>
              <div className="flex flex-wrap gap-2">
                {currentTemplate.demoPages.map((page, idx) => (
                  <span key={idx} className="bg-slate-50 border border-slate-200 text-slate-600 text-xs px-2.5 py-1 rounded">
                    {page}
                  </span>
                ))}
              </div>
            </div>

            {/* Prominent Live Demo Action Button */}
            <div className="pt-6 border-t border-slate-100">
              <button
                onClick={() => {
                  const url = window.location.origin + '?demo=' + currentTemplate.id;
                  window.open(url, '_blank');
                }}
                className="w-full bg-brand-primary hover:bg-brand-primary/95 text-white font-black text-xs uppercase tracking-wider py-4 rounded-xl flex items-center justify-center gap-2 shadow-md shadow-brand-primary/10 transition-all cursor-pointer hover:scale-[1.01]"
              >
                <ExternalLink className="w-4 h-4 shrink-0" />
                <span>{t('templates.liveDemo')}</span>
                <span className="text-[9px] font-medium opacity-80">({language === 'id' ? 'Halaman Penuh' : 'Full Screen'})</span>
              </button>
              <p className="text-[10px] text-slate-400 text-center mt-2">
                {t('templates.liveDemo.desc')}
              </p>
            </div>
          </div>

          {/* Right Panel: Live Device Shell View */}
          <div className="lg:col-span-7 flex flex-col">
            
            {/* Device Toggle Menu */}
            <div className="flex justify-end gap-2 mb-4">
              <button
                onClick={() => setPreviewMode('desktop')}
                className={`p-2 rounded cursor-pointer transition-colors ${
                  previewMode === 'desktop' ? 'bg-brand-primary text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                }`}
                title="Desktop View"
              >
                <Monitor className="w-4 h-4" />
              </button>
              <button
                onClick={() => setPreviewMode('mobile')}
                className={`p-2 rounded cursor-pointer transition-colors ${
                  previewMode === 'mobile' ? 'bg-brand-primary text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                }`}
                title="Mobile View"
              >
                <Smartphone className="w-4 h-4" />
              </button>
            </div>

            {/* Device Canvas Frame container */}
            <div className="bg-slate-100 rounded-xl p-4 sm:p-6 border border-slate-200 flex items-center justify-center min-h-[460px] relative overflow-hidden transition-all duration-500">
              <AnimatePresence mode="wait">
                {previewMode === 'desktop' ? (
                  /* DESKTOP CONTAINER SHELL */
                  <motion.div
                    key="desktop-shell"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    className="w-full bg-white rounded-lg shadow-xl border border-slate-200 overflow-hidden text-slate-900 text-left"
                  >
                    {/* Browser Nav */}
                    <div className="bg-slate-50 border-b border-slate-100 px-4 py-2 flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400 block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-400 block" />
                      <div className="bg-white border border-slate-100 text-[10px] text-slate-400 px-4 py-0.5 rounded ml-6 w-72 truncate">
                        http://aatransportasi.com
                      </div>
                    </div>

                     {/* Simulated App Page Content */}
                     {selectedTemplateId === 'adventure' ? (
                       <div className="text-slate-100 flex flex-col font-sans" style={{ backgroundColor: primaryColor }}>
                         {/* Header bar */}
                         <div className="px-4 py-3 border-b border-slate-800/80 bg-slate-900/95 backdrop-blur-md flex items-center justify-between">
                           <div className="flex items-center gap-2">
                             <div className="w-6 h-6 rounded-full flex items-center justify-center border" style={{ backgroundColor: `${accentColor}15`, color: accentColor, borderColor: `${accentColor}35` }}>
                               <Car className="w-3.5 h-3.5" />
                             </div>
                             <span className="font-sans font-black text-[11px] tracking-tight text-white uppercase">A&A TRANSPORTASI</span>
                           </div>
                           
                           <div className="flex items-center gap-4 text-[9px] font-bold tracking-wider text-slate-300 uppercase">
                             <span className="border-b-2 pb-0.5 cursor-pointer" style={{ color: accentColor, borderBottomColor: accentColor }}>Beranda</span>
                             <span className="hover:text-white cursor-pointer transition-colors">Paket Tour</span>
                             <span className="hover:text-white cursor-pointer transition-colors">Sewa Mobil</span>
                             <span className="hover:text-white cursor-pointer transition-colors">Testimoni</span>
                             <span className="bg-slate-800 hover:bg-slate-700 text-slate-300 px-1.5 py-0.5 rounded border border-slate-700 cursor-pointer">🌐 ID</span>
                           </div>
                         </div>

                         {/* Hero section */}
                         <div className="relative min-h-[170px] px-5 py-6 flex flex-col justify-center text-left overflow-hidden bg-slate-950">
                           {/* Beautiful sea wave image background */}
                           <img 
                             src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80" 
                             alt="A&A Transportasi Hero" 
                             className="absolute inset-0 w-full h-full object-cover brightness-[0.35]"
                             referrerPolicy="no-referrer"
                             loading="lazy"
                           />
                           <div className="relative z-10 max-w-md space-y-2">
                             <div className="inline-block px-2 py-0.5 border rounded text-[7px] font-mono tracking-widest uppercase font-bold" style={{ borderColor: `${accentColor}40`, backgroundColor: `${accentColor}10`, color: accentColor }}>
                               {language === 'id' ? 'PROMO WISATA LIBURAN 2026' : 'VACATION PROMO 2026'}
                             </div>
                             
                             <h4 className="text-white font-sans font-extrabold text-xl tracking-tight leading-none uppercase">
                               EXPLORE THE <span style={{ color: accentColor }}>ISLAND.</span>
                             </h4>
                             
                             <p className="text-slate-300 text-[8px] leading-relaxed max-w-xs">
                               {language === 'id' 
                                 ? 'Layanan sewa mobil lepas kunci atau dengan supir ramah, serta pilihan paket wisata terlengkap untuk liburan tak terlupakan.'
                                 : 'Self-drive car rental or with a friendly driver, plus the most complete selection of holiday packages.'}
                             </p>

                             {/* Pills */}
                             <div className="flex flex-wrap gap-1 pt-0.5">
                               <span className="bg-slate-900/80 border border-slate-800 text-slate-300 text-[7px] px-1.5 py-0.5 rounded-full font-medium">1 {language === 'id' ? 'Paket Tour' : 'Tour Package'}</span>
                               <span className="bg-slate-900/80 border border-slate-800 text-slate-300 text-[7px] px-1.5 py-0.5 rounded-full font-medium">9 {language === 'id' ? 'Armada Mobil' : 'Vehicles'}</span>
                               <span className="bg-slate-900/80 border border-slate-800 text-slate-300 text-[7px] px-1.5 py-0.5 rounded-full font-medium">24/7 WhatsApp Service</span>
                             </div>

                             {/* CTA Buttons */}
                             <div className="flex gap-2 pt-1">
                               <button className="text-white font-bold text-[8px] uppercase tracking-wider px-3 py-1 rounded transition" style={{ backgroundColor: accentColor }}>
                                 {language === 'id' ? 'Paket Tour ↗' : 'Tour Packages ↗'}
                               </button>
                               <button className="border border-slate-700 bg-transparent text-slate-200 hover:bg-slate-900 font-bold text-[8px] uppercase tracking-wider px-3 py-1 rounded transition">
                                 {language === 'id' ? 'Sewa Mobil' : 'Car Rental'}
                               </button>
                             </div>
                           </div>
                         </div>

                         {/* Inner Tab switching bar */}
                         <div className="p-3 bg-slate-900/80 border-t border-b border-slate-800/80 flex items-center justify-between">
                           <div className="flex gap-1.5">
                             <button className="text-white px-2.5 py-1 rounded text-[7.5px] font-bold uppercase tracking-wider flex items-center gap-1" style={{ backgroundColor: accentColor }}>
                               <Map className="w-3 h-3 text-white/85" />
                               {language === 'id' ? 'PAKET TOUR' : 'TOUR PACKAGES'}
                             </button>
                             <button className="bg-slate-800 border border-slate-700 text-slate-400 px-2.5 py-1 rounded text-[7.5px] font-bold uppercase tracking-wider flex items-center gap-1">
                               <Car className="w-3 h-3" />
                               {language === 'id' ? 'SEWA MOBIL' : 'CAR RENTAL'}
                             </button>
                           </div>
                           <span className="text-[8px] text-slate-500 font-mono">Category Selection</span>
                         </div>

                         {/* Content section */}
                         <div className="p-3 bg-slate-950 grid grid-cols-2 gap-3">
                           <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800 flex flex-col justify-between">
                             <div>
                               <div className="flex gap-1 items-center">
                                 <span className="w-0.5 h-2 rounded-full" style={{ backgroundColor: accentColor }} />
                                 <h5 className="font-bold text-[9px] text-white uppercase tracking-wider">
                                   {language === 'id' ? 'Semua Paket Wisata' : 'All Travel Packages'}
                                 </h5>
                               </div>
                               <p className="text-[6.5px] text-slate-500 font-mono tracking-widest mt-0.5 uppercase">
                                 A&A TRANSPORTASI EXCLUSIVE CURATION
                               </p>
                               <p className="text-[8px] text-slate-400 mt-1.5 leading-relaxed">
                                 {language === 'id' 
                                   ? 'Pilihan paket tur harian Lombok, Gili Trawangan, Pink Beach dengan armada premium dan supir ramah.' 
                                   : 'Daily tour packages to Lombok, Gili Trawangan, Pink Beach with premium vehicles and professional drivers.'}
                               </p>
                             </div>
                             <div className="flex justify-between items-center mt-2.5 pt-1.5 border-t border-slate-800/60">
                               <span className="text-[7.5px] text-slate-500">{language === 'id' ? 'Mulai dari:' : 'Starts at:'}</span>
                               <span className="text-[9px] font-bold font-mono" style={{ color: accentColor }}>Rp 450.000 / {language === 'id' ? 'Hari' : 'Day'}</span>
                             </div>
                           </div>

                           <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800 flex flex-col justify-between">
                             <div>
                               <div className="flex gap-1 items-center">
                                 <span className="w-0.5 h-2 rounded-full" style={{ backgroundColor: accentColor }} />
                                 <h5 className="font-bold text-[9px] text-white uppercase tracking-wider">
                                   {language === 'id' ? 'Armada Terpopuler' : 'Popular Vehicle Fleet'}
                                 </h5>
                               </div>
                               <p className="text-[6.5px] text-slate-500 font-mono tracking-widest mt-0.5 uppercase">
                                 EXCELLENT VEHICLE CONDITION GUARANTEED
                               </p>
                               <div className="grid grid-cols-2 gap-1 mt-1.5">
                                 <span className="bg-slate-950 text-slate-300 text-[7.5px] px-1 py-0.5 rounded text-center">Avanza</span>
                                 <span className="bg-slate-950 text-slate-300 text-[7.5px] px-1 py-0.5 rounded text-center">Innova Reborn</span>
                                 <span className="bg-slate-950 text-slate-300 text-[7.5px] px-1 py-0.5 rounded text-center">Xpander</span>
                                 <span className="bg-slate-950 text-slate-300 text-[7.5px] px-1 py-0.5 rounded text-center">Hiace</span>
                               </div>
                             </div>
                             <button className="w-full text-[8px] text-white py-1 rounded font-extrabold text-center mt-2 tracking-wider uppercase transition-colors" style={{ backgroundColor: accentColor }}>
                               {language === 'id' ? 'Booking Sekarang' : 'Book Now'}
                             </button>
                           </div>
                         </div>
                       </div>
                     ) : (
                       <>
                         {/* Simulated App Page Header */}
                         <div className="p-4 border-b border-slate-50 flex items-center justify-between" style={{ backgroundColor: primaryColor }}>
                           <span className="text-white font-serif font-bold text-xs tracking-wider uppercase">{currentTemplate.name}</span>
                           <div className="flex gap-3 text-[9px] text-slate-300 font-medium">
                             <span>{language === 'id' ? 'Beranda' : 'Home'}</span>
                             <span>{language === 'id' ? 'Destinasi' : 'Destinations'}</span>
                             <span>Booking</span>
                             <span>{language === 'id' ? 'Testimoni' : 'Testimonials'}</span>
                           </div>
                         </div>

                         {/* Hero Layout within browser */}
                         <div className="relative h-48 flex items-center justify-center text-center overflow-hidden">
                           <img 
                             src={currentTemplate.image} 
                             alt={currentTemplate.name} 
                             className="absolute inset-0 w-full h-full object-cover brightness-[0.4]"
                             referrerPolicy="no-referrer"
                             loading="lazy"
                           />
                           <div className="relative z-10 px-4">
                             <span className="text-[8px] font-mono tracking-widest text-white uppercase bg-white/10 px-2 py-0.5 border border-white/20 rounded-full">
                               {currentTemplate.category} Theme
                             </span>
                             <h4 className="text-white font-serif font-bold text-lg mt-2 leading-tight">
                               {language === 'id' ? 'Jelajahi Dunia Bersama Kami' : 'Explore the World with Us'}
                             </h4>
                             <p className="text-slate-300 text-[9px] max-w-sm mx-auto mt-1">
                               {language === 'id' 
                                 ? 'Penyedia paket liburan terbaik, aman, nyaman, dan terpercaya di Indonesia.' 
                                 : 'Provider of the best vacation packages, safe, comfortable, and trusted in Indonesia.'}
                             </p>
                           </div>
                         </div>

                         {/* Content Section within browser */}
                         <div className="p-4 bg-slate-50 grid grid-cols-2 gap-4">
                           <div className="bg-white p-3 rounded shadow-xs border border-slate-100">
                             <div className="w-full h-16 rounded bg-slate-100 mb-2 overflow-hidden">
                               <img src={currentTemplate.image} className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" loading="lazy" />
                             </div>
                             <h5 className="font-bold text-[10px] text-slate-800">{language === 'id' ? 'Paket Populer Unggulan' : 'Featured Popular Package'}</h5>
                             <div className="flex justify-between items-center mt-1">
                               <span className="text-[8px] text-slate-400">{language === 'id' ? 'Durasi: 3D2N' : 'Duration: 3D2N'}</span>
                               <span className="text-[10px] font-bold text-emerald-600 font-mono">{language === 'id' ? 'Mulai Rp 1.5Jt' : 'Starts at Rp 1.5M'}</span>
                             </div>
                           </div>

                           <div className="bg-white p-3 rounded shadow-xs border border-slate-100 flex flex-col justify-between">
                             <div>
                               <h5 className="font-bold text-[10px] text-slate-800">{language === 'id' ? 'Mengapa Pilih Kami?' : 'Why Choose Us?'}</h5>
                               <p className="text-[8px] text-slate-500 mt-1">
                                 {language === 'id' 
                                   ? 'Layanan lengkap akomodasi hotel, supir ramah, sisa seat realtime, dan sistem booking aman.' 
                                   : 'Complete hotel accommodations, friendly drivers, real-time seat availability, and secure bookings.'}
                               </p>
                             </div>
                             <button className="w-full text-[9px] text-white py-1.5 rounded font-bold text-center" style={{ backgroundColor: accentColor }}>
                               {language === 'id' ? 'Booking Sekarang' : 'Book Now'}
                             </button>
                           </div>
                         </div>
                       </>
                     )}
                  </motion.div>
                ) : (
                  /* MOBILE CONTAINER SHELL */
                  <motion.div
                    key="mobile-shell"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="w-[260px] bg-slate-950 rounded-3xl shadow-xl border-4 border-slate-900 overflow-hidden text-slate-100 text-left flex flex-col relative"
                  >
                    {/* Simulated mobile status bar */}
                    <div className="bg-slate-900 px-4 py-1 flex justify-between items-center text-[8px] font-mono text-white/90">
                      <span>14:40</span>
                      <div className="flex gap-1 items-center">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full inline-block animate-pulse" />
                        <span>5G</span>
                      </div>
                    </div>

                    {selectedTemplateId === 'adventure' ? (
                      /* A&A TRANSPORTASI MOBILE PREVIEW */
                      <div className="flex-1 text-slate-100 flex flex-col font-sans max-h-[300px] overflow-y-auto" style={{ backgroundColor: primaryColor }}>
                        {/* Header */}
                        <div className="p-2 border-b border-slate-800/80 bg-slate-900/95 flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <div className="w-5 h-5 rounded-full flex items-center justify-center border" style={{ backgroundColor: `${accentColor}15`, color: accentColor, borderColor: `${accentColor}35` }}>
                              <Car className="w-2.5 h-2.5" />
                            </div>
                            <span className="text-white font-sans font-black text-[8px] tracking-tight uppercase">A&A TRANSPORTASI</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-[7px] bg-slate-800 border border-slate-700 px-1 py-0.5 rounded font-mono text-slate-300">EN</span>
                            <span className="text-white text-[9px] cursor-pointer">☰</span>
                          </div>
                        </div>

                        {/* Mobile Hero */}
                        <div className="relative h-36 flex flex-col justify-center text-left p-3.5 overflow-hidden bg-slate-950">
                          <img 
                            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80" 
                            alt="A&A Transportasi Mobile Hero" 
                            className="absolute inset-0 w-full h-full object-cover brightness-[0.35]"
                            referrerPolicy="no-referrer"
                            loading="lazy"
                          />
                          <div className="relative z-10 space-y-1">
                            <div className="inline-block px-1.5 py-0.5 border rounded text-[6px] font-mono tracking-widest uppercase font-bold" style={{ borderColor: `${accentColor}35`, backgroundColor: `${accentColor}10`, color: accentColor }}>
                              PROMO WISATA 2026
                            </div>
                            <h4 className="text-white font-sans font-extrabold text-[13px] tracking-tight leading-none uppercase">
                              EXPLORE THE <span style={{ color: accentColor }}>ISLAND.</span>
                            </h4>
                            <p className="text-slate-300 text-[7px] leading-relaxed">
                              {language === 'id' 
                                ? 'Sewa mobil lepas kunci / supir ramah & paket wisata Lombok.'
                                : 'Self-drive car rental & Lombok tours.'}
                            </p>
                            <div className="flex gap-1 pt-0.5">
                              <button className="text-white font-bold text-[7px] px-2 py-0.5 rounded" style={{ backgroundColor: accentColor }}>
                                {language === 'id' ? 'Tour ↗' : 'Tours ↗'}
                              </button>
                              <button className="border border-slate-700 text-slate-200 font-bold text-[7px] px-2 py-0.5 rounded">
                                {language === 'id' ? 'Sewa Mobil' : 'Rent Car'}
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Mobile Tabs */}
                        <div className="p-2 bg-slate-900 border-t border-b border-slate-800 flex gap-1">
                          <button className="text-white px-2 py-0.5 rounded text-[7px] font-bold flex items-center gap-0.5" style={{ backgroundColor: accentColor }}>
                            <Map className="w-2 h-2" />
                            <span>TOUR</span>
                          </button>
                          <button className="bg-slate-800 text-slate-400 px-2 py-0.5 rounded text-[7px] font-bold flex items-center gap-0.5">
                            <Car className="w-2 h-2" />
                            <span>SEWA</span>
                          </button>
                        </div>

                        {/* Mobile Content */}
                        <div className="p-2.5 bg-slate-950 space-y-2">
                          <div className="bg-slate-900/80 p-2 rounded border border-slate-800 text-left">
                            <h5 className="font-bold text-[8px] text-white uppercase tracking-wider">{language === 'id' ? 'Sewa Mobil Lombok' : 'Lombok Car Rent'}</h5>
                            <p className="text-[6.5px] text-slate-400 mt-0.5">{language === 'id' ? 'Avanza, Innova Reborn & Hiace Kondisi Prima.' : 'Avanza, Innova Reborn & Hiace.'}</p>
                            <div className="flex justify-between items-center mt-1.5 pt-1.5 border-t border-slate-800/50">
                              <span className="text-[7.5px] font-bold font-mono" style={{ color: accentColor }}>Rp 450.000 / Hari</span>
                              <button className="text-[7px] text-white px-1.5 py-0.5 rounded font-bold" style={{ backgroundColor: accentColor }}>
                                {language === 'id' ? 'Sewa' : 'Rent'}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* STANDARD GENERIC TEMPLATE MOBILE PREVIEW */
                      <div className="flex-1 overflow-y-auto bg-slate-50 max-h-[300px]">
                        {/* Menu Header inside phone */}
                        <div className="p-3 border-b border-slate-100 flex items-center justify-between" style={{ backgroundColor: primaryColor }}>
                          <span className="text-white font-serif font-bold text-[11px] uppercase">{currentTemplate.name}</span>
                          <span className="text-white text-[10px] cursor-pointer">☰</span>
                        </div>

                        <div className="relative h-28 flex items-center justify-center text-center overflow-hidden">
                          <img 
                            src={currentTemplate.image} 
                            alt={currentTemplate.name} 
                            className="absolute inset-0 w-full h-full object-cover brightness-[0.4]"
                            referrerPolicy="no-referrer"
                            loading="lazy"
                          />
                          <div className="relative z-10 px-2">
                            <h4 className="text-white font-serif font-bold text-[13px] leading-tight">
                              Best Holiday Deals
                            </h4>
                            <span className="text-[7px] text-slate-300">Fast Booking via WhatsApp</span>
                          </div>
                        </div>

                        {/* Packages list */}
                        <div className="p-3 space-y-3">
                          <div className="bg-white p-2.5 rounded border border-slate-100 shadow-xs">
                            <h5 className="font-bold text-[10px] text-slate-800">{language === 'id' ? 'Trip Kece Labuan Bajo' : 'Awesome Labuan Bajo Trip'}</h5>
                            <p className="text-[8px] text-slate-400">{language === 'id' ? 'All-In, Makan, Dokumentasi Drone' : 'All-In, Meals, Drone Coverage'}</p>
                            <div className="flex justify-between items-center mt-2 pt-1 border-t border-slate-100">
                              <span className="text-[9px] font-bold text-emerald-600 font-mono">Rp 2.75M</span>
                              <button className="text-[8px] text-white px-2 py-1 rounded font-bold" style={{ backgroundColor: accentColor }}>
                                {language === 'id' ? 'Detail' : 'Details'}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
