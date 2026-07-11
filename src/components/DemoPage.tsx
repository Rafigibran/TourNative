import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  ArrowLeft, 
  Sparkles, 
  Check, 
  MapPin, 
  Calendar, 
  Clock, 
  Users, 
  Compass, 
  Star, 
  Menu, 
  X, 
  Phone, 
  ExternalLink,
  Shield,
  Heart,
  Award,
  ChevronDown,
  Info,
  Layers,
  Send,
  Download,
  Share2,
  Car
} from 'lucide-react';

interface DemoPageProps {
  initialId: string;
  onBackToMain: () => void;
  language: 'id' | 'en';
  onLanguageChange: () => void;
}

const COLOR_PALETTES = [
  { id: 'sapphire', name: 'Senggigi Sapphire Deep Blue', primary: '#1e3a8a', accent: '#60a5fa', description: 'Deep Blue & Soft Blue (Sapphire)' },
  { id: 'emerald', name: 'Pine Emerald', primary: '#0f766e', accent: '#2dd4bf', description: 'Emerald Teal & Turquoise' },
  { id: 'forest', name: 'Forest Green (Segara Anak)', primary: '#14532d', accent: '#ebdcb9', description: 'Forest Green & Cream Wood' },
  { id: 'turquoise', name: 'Ocean Turquoise (Gili Islands)', primary: '#0e7490', accent: '#fbbf24', description: 'Ocean Cyan & Sun Gold' },
  { id: 'terracotta', name: 'Terracotta Volcano (Rinjani)', primary: '#7c2d12', accent: '#f97316', description: 'Warm Terracotta & Orange Sunset' },
  { id: 'sasak', name: 'Royal Sasak Gold', primary: '#5b21b6', accent: '#fbbf24', description: 'Sasak Purple & Gold Thread' },
  { id: 'malimbu', name: 'Malimbu Sunset', primary: '#881337', accent: '#f43f5e', description: 'Deep Crimson & Coral Pink' }
];

export default function DemoPage({ initialId, onBackToMain, language, onLanguageChange }: DemoPageProps) {
  const [activeId, setActiveId] = useState(initialId);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [bookingStep, setBookingStep] = useState<'idle' | 'success'>('idle');
  const [selectedPaletteId, setSelectedPaletteId] = useState<string | null>(null);
  
  // States for interactive widgets
  const [selectedStars, setSelectedStars] = useState<3 | 4 | 5>(4);
  const [selectedRoom, setSelectedRoom] = useState<'quad' | 'triple' | 'double'>('triple');
  const [adventureSeats, setAdventureSeats] = useState(4);
  const [isItineraryOpen, setIsItineraryOpen] = useState<number>(0);
  const [checklistItems, setChecklistItems] = useState<Record<string, boolean>>({
    'passport': true,
    'jacket': false,
    'camera': false,
    'cash': true,
    'medicine': false
  });

  // Template Data definitions
  const demoTemplates = [
    {
      id: 'adventure',
      name: 'A&A Transportasi',
      category: 'Sewa Mobil & Tour',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      description: language === 'id' 
        ? 'Template premium bernuansa modern yang dirancang khusus untuk jasa sewa mobil dan paket tour Lombok.' 
        : 'Premium modern template designed specifically for car rental and Lombok tour services.',
      primaryColor: '#1e3a8a', // Senggigi Sapphire Deep Blue Primary
      accentColor: '#60a5fa', // Senggigi Sapphire Deep Blue Secondary/Accent
      heroTitle: language === 'id' ? 'EXPLORE THE ISLAND.' : 'EXPLORE THE ISLAND.',
      heroSub: language === 'id' 
        ? 'Layanan sewa mobil lepas kunci atau dengan supir ramah, serta pilihan paket wisata Lombok terlengkap untuk liburan tak unforgottable.' 
        : 'Self-drive car rental or with a friendly driver, plus the most complete selection of Lombok holiday packages.',
      badgeText: language === 'id' ? '🔥 PROMO WISATA LIBURAN 2026' : '🔥 VACATION PROMO 2026'
    }
  ];

  const [isPaletteOpen, setIsPaletteOpen] = useState(true);
  const currentT = demoTemplates.find(t => t.id === activeId) || demoTemplates[0];

  const activePalette = COLOR_PALETTES.find(p => p.id === selectedPaletteId);
  const primaryColor = activePalette ? activePalette.primary : currentT.primaryColor;
  const accentColor = activePalette ? activePalette.accent : currentT.accentColor;

  const toggleChecklist = (item: string) => {
    setChecklistItems(prev => ({
      ...prev,
      [item]: !prev[item]
    }));
  };

  const handleOrderTemplate = () => {
    const isYearly = true;
    const planName = 'Pro (Sewa Web + Custom)';
    const text = encodeURIComponent(
      language === 'id'
        ? `Halo TourNative, saya sedang melihat Live Demo dari Template: ${currentT.name}. Saya sangat tertarik dan ingin menyewa website travel menggunakan template ini dengan Paket Pro.`
        : `Hello TourNative, I am currently viewing the Live Demo of Template: ${currentT.name}. I am very interested and would like to rent this travel website template on the Pro Plan.`
    );
    window.open(`https://wa.me/628123456789?text=${text}`, '_blank');
  };

  const handleMockBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingStep('success');
  };

  // Interactive Umroh Calculator rates
  const getUmrohPrice = () => {
    let basePrice = 28500000; // IDR base
    if (selectedStars === 5) basePrice += 4500000;
    if (selectedStars === 3) basePrice -= 2500000;
    
    if (selectedRoom === 'double') basePrice += 3000000;
    if (selectedRoom === 'quad') basePrice -= 1500000;

    return language === 'id'
      ? `Rp ${(basePrice / 1000000).toFixed(1)} Juta`
      : `$${((basePrice / 15000) * 1.05).toFixed(0)}`;
  };

  const demoTitle = language === 'id'
    ? `${currentT.name} - Demo Website Wisata Premium (Sewa di TourNative)`
    : `${currentT.name} - Premium Travel Website Demo (Rent on TourNative)`;
  const demoDesc = language === 'id'
    ? `Lihat live demo website ${currentT.name}. Template website travel berkualitas dengan desain ${currentT.category}. Sewa instan di TourNative.`
    : `Explore ${currentT.name} live travel website demo. High-converting template in the ${currentT.category} style. Rent instantly via TourNative.`;
  const demoCanonical = typeof window !== 'undefined'
    ? `${window.location.origin}${window.location.pathname}?demo=${currentT.id}`
    : `https://tournative.com?demo=${currentT.id}`;

  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-slate-100 font-sans antialiased">
      <Helmet>
        <title>{demoTitle}</title>
        <meta name="description" content={demoDesc} />
        <link rel="canonical" href={demoCanonical} />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content={demoTitle} />
        <meta property="og:description" content={demoDesc} />
        <meta property="og:url" content={demoCanonical} />
        <meta property="og:image" content={currentT.image} />

        {/* Twitter */}
        <meta name="twitter:title" content={demoTitle} />
        <meta name="twitter:description" content={demoDesc} />
        <meta name="twitter:url" content={demoCanonical} />
        <meta name="twitter:image" content={currentT.image} />
      </Helmet>
      
      {/* =======================================================
          1. TOURNATIVE PREMIUM DEMO CONTROL BAR
          ======================================================= */}
      <div className="bg-slate-950 border-b border-slate-800 text-xs py-3 px-4 sm:px-6 sticky top-0 z-50 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button 
            onClick={onBackToMain}
            className="flex items-center gap-1 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold py-1.5 px-3 rounded transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{language === 'id' ? 'Kembali' : 'Back'}</span>
          </button>
          
          <div className="h-4 w-[1px] bg-slate-800 hidden sm:block" />

          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 text-slate-400 font-mono text-[10px] uppercase tracking-wider bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
              <Sparkles className="w-3 h-3 text-brand-accent animate-pulse" />
              Demo Mode
            </span>
            <span className="text-white font-bold hidden lg:inline">TourNative</span>
          </div>
        </div>

        {/* Template Quick Switcher */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 rounded px-2.5 py-1">
            <span className="text-slate-400 font-medium">{language === 'id' ? 'Template:' : 'Template:'}</span>
            <select 
              value={activeId}
              onChange={(e) => {
                setActiveId(e.target.value);
                setBookingStep('idle');
                setSelectedPaletteId(null);
              }}
              className="bg-transparent text-white font-bold focus:outline-none cursor-pointer"
            >
              {demoTemplates.map(t => (
                <option key={t.id} value={t.id} className="bg-slate-950 text-white">
                  {t.name} ({t.category})
                </option>
              ))}
            </select>
          </div>

          {/* Quick Language Toggle inside Demo Bar */}
          <button 
            onClick={onLanguageChange}
            className="bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 font-bold px-3 py-1 rounded"
          >
            {language === 'id' ? '🌐 ID' : '🌐 EN'}
          </button>
        </div>

        {/* Order Call-to-Action */}
        <div className="flex items-center gap-2">
          <button 
            onClick={handleOrderTemplate}
            className="w-full md:w-auto bg-brand-primary hover:bg-brand-primary/95 text-white font-black px-4 py-1.5 rounded flex items-center justify-center gap-1.5 shadow-md shadow-brand-primary/20 transition-all cursor-pointer"
          >
            <span>{language === 'id' ? 'Sewa Template Ini' : 'Rent This Template'}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* =======================================================
          2. THE ACTUAL MOCK WEBSITE TEMPLATE PREVIEW
          ======================================================= */}
      <div className="flex-1 flex flex-col bg-white text-slate-900" style={{ fontFamily: activeId === 'luxury' ? 'Playfair Display, Georgia, serif' : 'Inter, sans-serif' }}>
        
        {/* Mock Template Top Notification/Bar */}
        <div 
          className="text-white text-center py-2 px-4 text-xs font-semibold tracking-wider flex items-center justify-center gap-2"
          style={{ backgroundColor: accentColor }}
        >
          <span>{currentT.badgeText}</span>
          <span className="opacity-80">|</span>
          <span className="underline cursor-pointer">{language === 'id' ? 'Penawaran Spesial Liburan Musim Ini!' : 'Special Vacation Deals This Season!'}</span>
        </div>

        {/* Mock Template Navigation Header */}
        <header className="border-b border-slate-100 bg-white sticky top-0 z-40 transition-shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
            {/* Template Brand Name */}
            <div className="flex items-center gap-2">
              <div 
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center text-white"
                style={{ backgroundColor: primaryColor }}
              >
                <Compass className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="text-lg sm:text-2xl font-black tracking-tight" style={{ color: primaryColor }}>
                {currentT.name}
              </span>
            </div>

            {/* Simulated Desktop Nav Link */}
            <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-600">
              <a href="#hero" className="hover:text-slate-900 transition">{language === 'id' ? 'Beranda' : 'Home'}</a>
              <a href="#packages" className="hover:text-slate-900 transition">{language === 'id' ? 'Katalog Wisata' : 'Trip Catalog'}</a>
              <a href="#features" className="hover:text-slate-900 transition">{language === 'id' ? 'Keunggulan' : 'Why Us'}</a>
              <a href="#reviews" className="hover:text-slate-900 transition">{language === 'id' ? 'Testimoni' : 'Reviews'}</a>
            </nav>

            <div className="flex items-center gap-3">
              <a 
                href="#booking-widget"
                className="hidden sm:inline-flex text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-md text-white transition-all shadow-sm"
                style={{ backgroundColor: accentColor }}
              >
                {language === 'id' ? 'Booking Sekarang' : 'Book Now'}
              </a>
              
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-slate-700 md:hidden hover:bg-slate-50 rounded"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile menu panel */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-slate-100 px-4 py-4 space-y-3 bg-white shadow-lg">
              <a href="#hero" onClick={() => setIsMobileMenuOpen(false)} className="block font-semibold text-slate-700 hover:text-slate-900">{language === 'id' ? 'Beranda' : 'Home'}</a>
              <a href="#packages" onClick={() => setIsMobileMenuOpen(false)} className="block font-semibold text-slate-700 hover:text-slate-900">{language === 'id' ? 'Katalog Wisata' : 'Trip Catalog'}</a>
              <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="block font-semibold text-slate-700 hover:text-slate-900">{language === 'id' ? 'Keunggulan' : 'Why Us'}</a>
              <a href="#reviews" onClick={() => setIsMobileMenuOpen(false)} className="block font-semibold text-slate-700 hover:text-slate-900">{language === 'id' ? 'Testimoni' : 'Reviews'}</a>
              <a 
                href="#booking-widget"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-center text-xs font-bold uppercase tracking-wider py-2.5 rounded text-white"
                style={{ backgroundColor: accentColor }}
              >
                {language === 'id' ? 'Booking Sekarang' : 'Book Now'}
              </a>
            </div>
          )}
        </header>

        {/* Mock Template Hero Section */}
        <section id="hero" className="relative bg-slate-950 overflow-hidden py-24 sm:py-32 flex items-center">
          <div className="absolute inset-0">
            <img 
              src={currentT.image} 
              alt={currentT.name} 
              className="w-full h-full object-cover opacity-35 filter brightness-75 scale-105 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-left">
            <div className="max-w-2xl space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-white/90 bg-white/10 border border-white/20 px-3.5 py-1.5 rounded-full inline-block">
                {currentT.category} Layout
              </span>
              <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
                {currentT.heroTitle}
              </h1>
              <p className="text-slate-300 text-sm sm:text-lg leading-relaxed">
                {currentT.heroSub}
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a 
                  href="#packages"
                  className="px-6 py-3 rounded text-xs font-extrabold uppercase tracking-wider text-white flex items-center gap-2 shadow-lg transition-transform hover:scale-[1.02]"
                  style={{ backgroundColor: accentColor }}
                >
                  <span>{language === 'id' ? 'Lihat Pilihan Paket' : 'Browse Packages'}</span>
                </a>
                <a 
                  href="#booking-widget"
                  className="px-6 py-3 rounded text-xs font-extrabold uppercase tracking-wider bg-white/10 text-white hover:bg-white/15 border border-white/20 transition-colors"
                >
                  {language === 'id' ? 'Konsultasi Gratis' : 'Free Consultation'}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================
            3. SPECIFIC CORE INTERACTIVE WIDGET SECTION
            ========================================== */}
        <section id="interactive-feature" className="py-16 bg-slate-50 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block mb-1">
                {language === 'id' ? 'SIMULASI FITUR UTAMA' : 'KEY FEATURE SIMULATION'}
              </span>
              <h2 className="text-2xl font-bold text-slate-800">
                {language === 'id' ? 'Coba Keunikan Template Ini' : 'Test This Layout\'s Unique Feature'}
              </h2>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sm:p-8 max-w-3xl mx-auto">
              
              {/* INTERACTIVE DEMO 1: A&A Transportasi - UNIT TRACKER */}
              {activeId === 'adventure' && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 p-4 rounded-xl" style={{ backgroundColor: `${accentColor}08`, border: `1px solid ${accentColor}20` }}>
                    <div className="p-2 rounded-lg text-white font-black text-xs font-mono" style={{ backgroundColor: accentColor }}>
                      LIVE
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">
                        {language === 'id' ? 'Widget Real-time Sisa Armada (Car Availability Tracker)' : 'Real-time Car Availability Tracker Widget'}
                      </h4>
                      <p className="text-xs text-slate-500">
                        {language === 'id' 
                          ? 'Meningkatkan konversi dengan menampilkan sisa unit mobil yang siap disewa secara langsung.' 
                          : 'Increase conversions by showing the remaining ready-to-rent car units live.'}
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-900 text-white rounded-xl p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                      <Car className="w-24 h-24 text-white" />
                    </div>
                    <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
                      <div className="space-y-1.5 text-left">
                        <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded border" style={{ backgroundColor: `${accentColor}1a`, color: accentColor, borderColor: `${accentColor}30` }}>
                          ARMADA TERPOPULER
                        </span>
                        <h4 className="font-bold text-lg font-serif">Toyota Innova Reborn & Avanza Facelift</h4>
                        <p className="text-xs text-slate-400">Lokasi: Standby Bandara Internasional Lombok (LOP) / Mataram</p>
                      </div>

                      {/* Unit indicator */}
                      <div className="text-center shrink-0">
                        <span className="block text-[10px] text-slate-400 uppercase tracking-wider font-mono">SISA UNIT</span>
                        <span className="text-4xl font-extrabold font-mono animate-pulse" style={{ color: accentColor }}>{adventureSeats}</span>
                        <span className="block text-[9px] text-slate-300 font-bold bg-white/10 px-2 py-0.5 rounded mt-1">CARS LEFT</span>
                      </div>
                    </div>

                    {/* Interactive slider for units */}
                    <div className="mt-6 pt-6 border-t border-slate-800 text-left space-y-2">
                      <label className="text-xs text-slate-400 flex justify-between font-mono">
                        <span>Atur Jumlah Sisa Unit (Simulasi Admin):</span>
                        <span className="font-bold animate-pulse" style={{ color: accentColor }}>{adventureSeats} Unit</span>
                      </label>
                      <input 
                        type="range" 
                        min="0" 
                        max="12" 
                        value={adventureSeats} 
                        onChange={(e) => setAdventureSeats(Number(e.target.value))}
                        className="w-full"
                        style={{ accentColor: accentColor }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* INTERACTIVE DEMO 2: Amani Resort - VVIP ESTIMATOR */}
              {activeId === 'luxury' && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 p-4 rounded-xl" style={{ backgroundColor: `${accentColor}08`, border: `1px solid ${accentColor}20` }}>
                    <div className="p-2 rounded-lg text-white font-black text-xs font-mono" style={{ backgroundColor: accentColor }}>
                      PREMIUM
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">
                        {language === 'id' ? 'Formulir Request Quota Custom Premium' : 'Premium Custom Quotation Estimator'}
                      </h4>
                      <p className="text-xs text-slate-500">
                        {language === 'id' 
                          ? 'Formulir eksklusif untuk pasar VVIP/Korporasi yang menginginkan paket custom bernilai tinggi.' 
                          : 'Exclusive inquiry forms for high-ticket VVIP & Corporate clients.'}
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-900 text-slate-200 rounded-xl p-6 text-left space-y-4">
                    <h4 className="font-serif font-bold text-md text-slate-100 pb-2 border-b border-slate-800">
                      ✨ Amani Luxury Villa Resort Planner
                    </h4>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div>
                        <label className="block text-slate-400 mb-1.5 font-mono">PILIH DESTINASI PRIVAT:</label>
                        <select className="w-full bg-slate-950 border border-slate-800 rounded px-2.5 py-2 text-white focus:outline-none focus:border-indigo-500">
                          <option>Plataran Private Villa, Bali</option>
                          <option>Nihiwatu Resort, Sumba</option>
                          <option>Bawah Private Island, Anambas</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-slate-400 mb-1.5 font-mono">JUMLAH TAMU (VIP GUESTS):</label>
                        <select className="w-full bg-slate-950 border border-slate-800 rounded px-2.5 py-2 text-white focus:outline-none focus:border-indigo-500">
                          <option>1 - 2 Guests (Honeymoon Suite)</option>
                          <option>3 - 6 Guests (Family Villa)</option>
                          <option>10+ Guests (Corporate Retreat)</option>
                        </select>
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-slate-400 mb-1.5 font-mono">LAYANAN EKSTRA MEWAH (VVIP COMPLEMENTARY):</label>
                        <div className="grid grid-cols-2 gap-2">
                          <label className="flex items-center gap-2 bg-slate-950 border border-slate-800 p-2 rounded cursor-pointer transition" style={{ hoverBorderColor: accentColor }}>
                            <input type="checkbox" defaultChecked style={{ accentColor: accentColor }} />
                            <span>Private Helicopter</span>
                          </label>
                          <label className="flex items-center gap-2 bg-slate-950 border border-slate-800 p-2 rounded cursor-pointer transition" style={{ hoverBorderColor: accentColor }}>
                            <input type="checkbox" defaultChecked style={{ accentColor: accentColor }} />
                            <span>Michelin-star Chef</span>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-950 p-4 rounded-lg flex items-center justify-between border border-slate-800 mt-4">
                      <span className="text-xs text-slate-400 font-mono">ESTIMASI TARIF PREMIUM:</span>
                      <span className="text-lg font-serif font-bold animate-pulse" style={{ color: accentColor }}>
                        {language === 'id' ? 'Mulai Rp 12.5 Juta / Malam' : 'From $850 / Night'}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* INTERACTIVE DEMO 3: Al-Haramain - RATE ESTIMATOR */}
              {activeId === 'umroh' && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 p-4 rounded-xl" style={{ backgroundColor: `${accentColor}08`, border: `1px solid ${accentColor}20` }}>
                    <div className="p-2 rounded-lg text-white font-black text-xs font-mono" style={{ backgroundColor: accentColor }}>
                      ISLAMIC
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">
                        {language === 'id' ? 'Kalkulator Simulasi Paket Umroh Dinamis' : 'Dynamic Umrah Package Calculator'}
                      </h4>
                      <p className="text-xs text-slate-500">
                        {language === 'id' 
                          ? 'Memudahkan jamaah memprediksi harga berdasarkan fasilitas bintang hotel dan tipe kamar.' 
                          : 'Helps pilgrims calculate prices based on hotel star rating and room types.'}
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-900 text-white rounded-xl p-6 text-left space-y-5">
                    <h4 className="font-serif font-bold text-md pb-2 border-b border-slate-800" style={{ color: accentColor }}>
                      🕋 Estimasi Biaya Perjalanan Umroh v4.2
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div>
                        <label className="block text-slate-400 mb-1.5 font-mono">KLASIFIKASI HOTEL:</label>
                        <div className="flex gap-2">
                          {[3, 4, 5].map((stars) => (
                            <button
                              key={stars}
                              type="button"
                              onClick={() => setSelectedStars(stars as 3 | 4 | 5)}
                              className="flex-1 py-1.5 px-3 rounded font-bold transition text-white"
                              style={{ backgroundColor: selectedStars === stars ? accentColor : '#1e293b' }}
                            >
                              ★ {stars}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-slate-400 mb-1.5 font-mono">TIPE KAMAR (ROOM CAPACITY):</label>
                        <div className="flex gap-2">
                          {(['quad', 'triple', 'double'] as const).map((room) => (
                            <button
                              key={room}
                              type="button"
                              onClick={() => setSelectedRoom(room)}
                              className="flex-1 py-1.5 px-2 rounded font-bold capitalize transition text-[10px] text-white"
                              style={{ backgroundColor: selectedRoom === room ? accentColor : '#1e293b' }}
                            >
                              {room}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-950 p-4 rounded-lg flex items-center justify-between border border-slate-800 mt-2">
                      <div className="text-xs text-slate-400">
                        <span className="block font-mono">HOTEL MEKKAH / MADINAH:</span>
                        <span className="text-slate-300">
                          {selectedStars === 5 ? 'Sofwah Royal Orchid / Pullman Zamzam' : selectedStars === 4 ? 'Elaf Ajyad / Anjum Hotel' : 'Fajr Badee / Grand Al-Masa'}
                        </span>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="block text-[10px] text-slate-400 font-mono">ESTIMASI BIAYA:</span>
                        <span className="text-xl font-bold font-mono animate-pulse" style={{ color: accentColor }}>{getUmrohPrice()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* INTERACTIVE DEMO 4: Kawan Jalan - LUGGAGE CHECKLIST */}
              {activeId === 'community' && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 bg-teal-50 border border-teal-100 p-4 rounded-xl">
                    <div className="p-2 rounded-lg bg-teal-700 text-white font-black text-xs font-mono">
                      FUN
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">
                        {language === 'id' ? 'Daftar Perlengkapan Interaktif (Packing Checklist)' : 'Interactive Gear Checklist Widget'}
                      </h4>
                      <p className="text-xs text-slate-500">
                        {language === 'id' 
                          ? 'Membantu calon peserta mempersiapkan barang bawaan sebelum open trip dimulai.' 
                          : 'Interactive packing helper that builds high community engagement.'}
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-900 text-white rounded-xl p-6 text-left space-y-4">
                    <div className="flex justify-between items-center pb-2 border-b border-slate-800">
                      <h4 className="font-serif font-bold text-md text-teal-400">
                        🎒 Packing Checklist: Trip Gunung Prau Dieng
                      </h4>
                      <span className="text-[10px] bg-teal-500/10 text-teal-400 px-2 py-0.5 rounded font-mono">
                        {Object.values(checklistItems).filter(Boolean).length} / {Object.keys(checklistItems).length} CHECKED
                      </span>
                    </div>

                    <p className="text-xs text-slate-400">
                      {language === 'id' 
                        ? 'Klik barang di bawah ini untuk menandai perlengkapan yang sudah Anda kemas:' 
                        : 'Click items below to mark your backpack gear checklist:'}
                    </p>

                    <div className="space-y-2">
                      {Object.entries(checklistItems).map(([key, checked]) => {
                        const labelsMap: Record<string, string> = {
                          'passport': language === 'id' ? 'Kartu Identitas / KTP / Passport' : 'ID Card / Passport',
                          'jacket': language === 'id' ? 'Jaket Gunung Tebal (Anti Angin)' : 'Thick Mountain Jacket',
                          'camera': language === 'id' ? 'Kamera Mirrorless / HP + Powerbank' : 'Camera / Phone + Powerbank',
                          'cash': language === 'id' ? 'Uang Tunai Secukupnya (ATM Dieng Terbatas)' : 'Cash (Local ATM is limited)',
                          'medicine': language === 'id' ? 'Obat Pribadi & Minyak Kayu Putih' : 'Personal Medicines'
                        };
                        return (
                          <div 
                            key={key}
                            onClick={() => toggleChecklist(key)}
                            className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition ${
                              checked 
                                ? 'bg-slate-950 border-teal-500/50 text-slate-300' 
                                : 'bg-slate-950/40 border-slate-800 text-slate-500 hover:border-slate-700'
                            }`}
                          >
                            <span className={`text-xs ${checked ? 'line-through opacity-60' : ''}`}>
                              {labelsMap[key]}
                            </span>
                            <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                              checked ? 'bg-teal-500 border-teal-500 text-slate-900' : 'border-slate-700'
                            }`}>
                              {checked && <Check className="w-3 h-3 stroke-[3]" />}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </section>

        {/* ==========================================
            4. CUSTOM CATALOUGE LISTINGS
            ========================================== */}
        <section id="packages" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase block mb-1">
                {language === 'id' ? 'PILIHAN PAKET POPULER' : 'OUR POPULAR PACKAGES'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900">
                {language === 'id' ? 'Paket Wisata Terlaris Kami' : 'Best Selling Tour Packages'}
              </h2>
              <div className="w-12 h-1 bg-brand-primary rounded mx-auto mt-4" style={{ backgroundColor: accentColor }} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {(activeId === 'adventure' ? [
                {
                  duration: '3D2N',
                  img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
                  loc: language === 'id' ? 'Lombok, NTB' : 'Lombok, Indonesia',
                  title: language === 'id' ? 'Paket Wisata Lombok Exotic Premium' : 'Exotic Lombok Premium Tour Package',
                  desc: language === 'id' 
                    ? 'Paket wisata lengkap Gili Trawangan, Pantai Pink, Bukit Merese, kuliner khas Sasak, termasuk supir & drone.' 
                    : 'All-inclusive tour of Gili Trawangan, Pink Beach, Merese Hill, local culinary, including driver & drone.',
                  price: language === 'id' ? 'Rp 1.65 Jt' : '$110'
                },
                {
                  duration: 'Daily',
                  img: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80',
                  loc: language === 'id' ? 'Seluruh Lombok' : 'Lombok Islandwide',
                  title: language === 'id' ? 'Sewa Mobil Toyota Avanza Facelift' : 'Rent Toyota Avanza Facelift',
                  desc: language === 'id' 
                    ? 'Armada terawat, AC dingin, mesin prima. Pilihan sewa lepas kunci maupun lengkap supir ramah asli Lombok.' 
                    : 'Clean unit, cool AC, perfect engine. Rent self-drive or with local professional tour guide driver.',
                  price: language === 'id' ? 'Rp 350k' : '$24'
                },
                {
                  duration: 'Daily',
                  img: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
                  loc: language === 'id' ? 'Seluruh Lombok' : 'Lombok Islandwide',
                  title: language === 'id' ? 'Sewa Mobil Toyota Innova Reborn' : 'Rent Toyota Innova Reborn Luxury',
                  desc: language === 'id' 
                    ? 'Kenyamanan ekstra dengan armada premium keluarga. Unit bersih wangi sangat cocok untuk bisnis / liburan.' 
                    : 'Extra luxury and comfort. Clean & fresh family premium car, perfect for business or luxury holiday.',
                  price: language === 'id' ? 'Rp 750k' : '$50'
                }
              ] : [
                {
                  duration: '3D2N',
                  img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
                  loc: language === 'id' ? 'Bali Barat' : 'West Bali',
                  title: language === 'id' ? 'Eksotisme Nusa Penida & Snorkeling' : 'Exotic Nusa Penida & Snorkeling',
                  desc: language === 'id' 
                    ? 'Jelajahi Kelingking Beach, Broken Beach, snorkeling bersama Manta Ray, dan penginapan nyaman.' 
                    : 'Explore Kelingking Beach, Broken Beach, snorkeling with Manta Rays, and luxury lodging.',
                  price: language === 'id' ? 'Rp 1.85 Jt' : '$125'
                },
                {
                  duration: '4D3N',
                  img: 'https://images.unsplash.com/photo-1604999333679-b86d54738315?auto=format&fit=crop&w=600&q=80',
                  loc: language === 'id' ? 'Raja Ampat' : 'Raja Ampat',
                  title: language === 'id' ? 'Surga Bawah Laut Kepulauan Pianemo' : 'Pianemo Island Underwater Heaven',
                  desc: language === 'id' 
                    ? 'Pengalaman premium menyelami keanekaragaman karang laut Raja Ampat, tracking bukit Pianemo.' 
                    : 'Premium experience diving Raja Ampat marine diversity, hiking Pianemo karst hills.',
                  price: language === 'id' ? 'Rp 4.95 Jt' : '$330'
                },
                {
                  duration: '1 Day',
                  img: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80',
                  loc: language === 'id' ? 'Jawa Timur' : 'East Java',
                  title: language === 'id' ? 'Midnight Golden Sunrise Gunung Bromo' : 'Midnight Golden Sunrise Bromo Tour',
                  desc: language === 'id' 
                    ? 'Sensasi menaiki Hardtop 4x4 menerjang lautan pasir, menatap sunrise terindah di dunia.' 
                    : 'Exhilarating 4x4 Jeep ride through sea of sand, witness the world-famous golden sunrise.',
                  price: language === 'id' ? 'Rp 450k' : '$30'
                }
              ]).map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition">
                  <div>
                    <div className="h-48 overflow-hidden relative">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" loading="lazy" />
                      <span className="absolute top-3 left-3 bg-white/95 text-slate-900 text-[10px] font-bold px-2.5 py-1 rounded shadow-xs uppercase tracking-wide">
                        {item.duration}
                      </span>
                    </div>
                    <div className="p-6 text-left">
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium mb-2">
                        <MapPin className="w-3.5 h-3.5 text-rose-500" />
                        <span>{item.loc}</span>
                      </div>
                      <h3 className="font-serif font-bold text-lg text-slate-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  <div className="p-6 pt-0 border-t border-slate-50 mt-4 flex items-center justify-between">
                    <div className="text-left">
                      <span className="block text-[10px] text-slate-400 font-mono uppercase">{language === 'id' ? 'MULAI' : 'STARTS'}</span>
                      <span className="text-md sm:text-lg font-bold text-emerald-600 font-mono">
                        {item.price}
                      </span>
                    </div>
                    <a href="#booking-widget" className="px-4 py-2 rounded text-xs font-bold text-white transition-colors" style={{ backgroundColor: accentColor }}>
                      {language === 'id' ? 'Booking' : 'Book'}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================
            5. ITINERARY ACCORDION / WHY CHOOSE US
            ========================================== */}
        <section className="py-20 bg-slate-50 border-t border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 text-left space-y-6">
              <span className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase block">
                {language === 'id' ? 'ALUR ITINERARY TERSTRUKTUR' : 'DETAILED ITINERARY WAYPOINTS'}
              </span>
              <h2 className="text-3xl font-bold font-serif text-slate-900 leading-tight">
                {language === 'id' ? 'Detail Perjalanan Transparan & Rinci' : 'Transparent & Detailed Plan'}
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                {language === 'id' 
                  ? 'Setiap template kami dilengkapi widget Itinerary Accordion interaktif. Calon peserta bisa memeriksa detail akomodasi dan tujuan per jam tanpa membingungkan.' 
                  : 'All our templates feature a highly styled interactive itinerary Accordion widget. Travelers can inspect hour-by-hour accommodation details with zero confusion.'}
              </p>

              {/* Itinerary Interactive Accordion */}
              <div className="space-y-3">
                {[
                  {
                    day: 'Day 1: Arrival & Sunset Dinner',
                    content: language === 'id' ? 'Penjemputan di bandara/stasiun oleh supir profesional, check-in penginapan, dan santap malam seafood mewah di tepi laut.' : 'Airport pickup by a private professional chauffeur, hotel check-in, and beachfront seafood candlelight dinner.'
                  },
                  {
                    day: 'Day 2: Core Adventure & Snorkeling',
                    content: language === 'id' ? 'Mengarungi gugusan karang menggunakan speedboat, snorkeling bersama satwa laut, dokumentasi udara (drone), makan siang prasmanan.' : 'Cruising beautiful islands via private speedboat, reef snorkeling, drone photography sessions, and gourmet buffet lunch.'
                  },
                  {
                    day: 'Day 3: Souvenirs & Drop-off',
                    content: language === 'id' ? 'Mengunjungi pusat kerajinan lokal untuk cinderamata, hunting foto spot instagramable, serta pengantaran kembali ke bandara.' : 'Visit local craft artisan village, instagram photo hunting, and timely airport return drop-off.'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-lg border border-slate-100 shadow-xs overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setIsItineraryOpen(isItineraryOpen === idx ? -1 : idx)}
                      className="w-full py-4 px-5 text-left font-bold text-slate-800 text-sm flex items-center justify-between focus:outline-none"
                    >
                      <span>{item.day}</span>
                      <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-300 ${isItineraryOpen === idx ? 'rotate-180' : ''}`} />
                    </button>
                    {isItineraryOpen === idx && (
                      <div className="px-5 pb-4 text-xs sm:text-sm text-slate-500 border-t border-slate-50 pt-3 leading-relaxed">
                        {item.content}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Features / Badges Grid right side */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs text-left space-y-3">
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  <Shield className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">{language === 'id' ? '100% Bergaransi' : '100% Guaranteed'}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {language === 'id' ? 'Jaminan keberangkatan aman atau uang kembali penuh.' : 'Guaranteed safe departure or full instant refund.'}
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs text-left space-y-3">
                <div className="w-10 h-10 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
                  <Heart className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">{language === 'id' ? 'Supir Ramah' : 'Local Experts'}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {language === 'id' ? 'Pemandu lokal tersertifikasi dan ramah wisatawan.' : 'Certified local guide experts with excellent reviews.'}
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs text-left space-y-3">
                <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">{language === 'id' ? 'Armada Baru' : 'New Fleet Vehicles'}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {language === 'id' ? 'Semua unit mobil & kapal rutin dirawat berkala.' : 'All cars & yachts maintained to strict safety standards.'}
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs text-left space-y-3">
                <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                  <Clock className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">{language === 'id' ? 'Support 24/7' : '24/7 Booking Care'}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {language === 'id' ? 'Customer service sigap menjawab kebutuhan Anda.' : 'Responsive agents ready to answer inquiries.'}
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ==========================================
            6. MOCK INTERACTIVE BOOKING / CONVERSION FORM
            ========================================== */}
        <section id="booking-widget" className="py-24 bg-white relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="bg-slate-900 text-white rounded-3xl overflow-hidden shadow-2xl border border-slate-800 grid grid-cols-1 md:grid-cols-12">
              
              {/* Left Column info */}
              <div className="md:col-span-5 p-8 sm:p-10 bg-slate-950 flex flex-col justify-between text-left relative">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                  <Compass className="w-48 h-48 text-white" />
                </div>

                <div className="space-y-4 relative z-10">
                  <span className="text-xs font-mono font-bold tracking-widest text-slate-400 block uppercase">
                    {language === 'id' ? 'SISTEM BOOKING OTOMATIS' : 'AUTOMATED RESERVATIONS'}
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-white">
                    {language === 'id' ? 'Siap Kirim Pesanan Instan' : 'Ready to Send Instant Booking'}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {language === 'id' 
                      ? 'Simulasikan pengisian formulir di sebelah kanan. Tombol ini akan merapikan data dan siap mengirimkannya langsung via WhatsApp!' 
                      : 'Simulate filling the form on the right. This button will automatically compile the data and send it directly via WhatsApp!'}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-800 space-y-2 mt-6 relative z-10">
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{language === 'id' ? 'Keamanan Data Enkripsi' : 'Secure Encrypted Connection'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{language === 'id' ? 'Tersambung CS 24 Jam' : 'Direct Chauffeur/Sales Line'}</span>
                  </div>
                </div>
              </div>

              {/* Right Column Form */}
              <div className="md:col-span-7 p-8 sm:p-10 text-left">
                {bookingStep === 'success' ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-8">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/25">
                      <Check className="w-8 h-8 stroke-[3]" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold text-lg text-white">
                        {language === 'id' ? '🎉 Booking Berhasil Disimulasikan!' : '🎉 Booking Successfully Simulated!'}
                      </h4>
                      <p className="text-xs text-slate-400 max-w-sm mx-auto leading-relaxed">
                        {language === 'id' 
                          ? 'Pada website asli milik Anda kelak, formulir ini akan mengonversi rincian di atas menjadi format pesan rapi lalu membukanya langsung di WhatsApp pelanggan Anda.' 
                          : 'On your actual website, this form compiles the selections into a neat message layout and redirects the client to WhatsApp instantly.'}
                      </p>
                    </div>

                    <button 
                      type="button"
                      onClick={() => setBookingStep('idle')}
                      className="text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white underline pt-2 focus:outline-none"
                    >
                      {language === 'id' ? 'Coba Isi Formulir Lagi' : 'Fill Form Again'}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleMockBookingSubmit} className="space-y-4">
                    <div>
                      <label className="block text-[10px] font-mono uppercase text-slate-400 mb-1.5">{language === 'id' ? 'Nama Lengkap' : 'Full Name'}</label>
                      <input 
                        type="text" 
                        required
                        placeholder="E.g. Budi Santoso"
                        defaultValue="Budi Santoso"
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-mono uppercase text-slate-400 mb-1.5">{language === 'id' ? 'Nomor WhatsApp' : 'WhatsApp Number'}</label>
                        <input 
                          type="tel" 
                          required
                          placeholder="E.g. 08123456789"
                          defaultValue="08123456789"
                          className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-mono uppercase text-slate-400 mb-1.5">{language === 'id' ? 'Tanggal Keberangkatan' : 'Departure Date'}</label>
                        <input 
                          type="date" 
                          required
                          defaultValue="2026-08-15"
                          className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono uppercase text-slate-400 mb-1.5">{language === 'id' ? 'Pilih Paket Wisata' : 'Select Tour Package'}</label>
                      <select className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500">
                        <option>{language === 'id' ? 'Eksotisme Nusa Penida & Snorkeling' : 'Exotic Nusa Penida & Snorkeling'}</option>
                        <option>{language === 'id' ? 'Surga Bawah Laut Kepulauan Pianemo' : 'Pianemo Island Underwater Heaven'}</option>
                        <option>{language === 'id' ? 'Midnight Golden Sunrise Gunung Bromo' : 'Midnight Golden Sunrise Bromo Tour'}</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-lg text-xs font-black uppercase tracking-wider text-white shadow-lg transition-transform hover:scale-[1.01] cursor-pointer flex items-center justify-center gap-2"
                      style={{ backgroundColor: accentColor }}
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{language === 'id' ? 'Simulasi Kirim Booking WA' : 'Simulate Send Booking Chat'}</span>
                    </button>
                  </form>
                )}
              </div>

            </div>
          </div>
        </section>

        {/* Mock Template Footer */}
        <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6 border-b border-slate-800 pb-8 mb-8">
              <div className="flex items-center gap-2">
                <Compass className="w-6 h-6 text-white" />
                <span className="text-xl font-bold text-white tracking-tight">{currentT.name}</span>
              </div>
              <p className="text-xs max-w-md text-center sm:text-right">
                {language === 'id' 
                  ? 'Kami adalah agen perjalanan terpercaya yang melayani ribuan wisatawan mancanegara dan lokal dengan dedikasi tinggi.' 
                  : 'We are a trusted travel agency serving thousands of international and local tourists with absolute dedication.'}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center text-[10px] gap-4">
              <span>&copy; 2026 {currentT.name}. {language === 'id' ? 'Hak Cipta Dilindungi.' : 'All Rights Reserved.'}</span>
              <div className="flex gap-4">
                <span>Terms of Service</span>
                <span>Privacy Policy</span>
              </div>
            </div>
          </div>
        </footer>

      </div>

      {/* =======================================================
          5. LOWER FLOATING PREVIEW BAR FOR RE-ASSURANCE
          ======================================================= */}
      <div className="bg-slate-950 border-t border-slate-800 py-3 px-4 sm:px-6 flex items-center justify-between z-40 relative">
        <div className="flex items-center gap-2 text-left">
          <Layers className="w-4 h-4 text-brand-primary hidden sm:block" />
          <p className="text-[10px] sm:text-xs text-slate-400 font-medium">
            {language === 'id' 
              ? 'Menyukai tampilan template ini? TourNative bisa online-kan website Anda dalam 24 jam.' 
              : 'Love this layout? TourNative can launch your live travel website in 24 hours.'}
          </p>
        </div>
        <button
          onClick={handleOrderTemplate}
          className="bg-brand-secondary hover:bg-brand-secondary/90 text-white font-extrabold text-[10px] sm:text-xs px-3 sm:px-4 py-1.5 rounded transition"
        >
          {language === 'id' ? 'Pesan Sekarang' : 'Order Now'}
        </button>
      </div>

      {/* =======================================================
          6. FLOATING THEME PALETTE SELECTOR WIDGET
          ======================================================= */}
      <div className="fixed bottom-20 right-4 sm:right-6 z-50">
        {!isPaletteOpen ? (
          <button
            onClick={() => setIsPaletteOpen(true)}
            className="bg-slate-950 text-white hover:bg-slate-900 p-3.5 rounded-full shadow-2xl border border-slate-800 flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-105"
            style={{ borderLeftWidth: '4px', borderLeftColor: accentColor }}
          >
            <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
            <span className="text-xs font-bold font-sans uppercase tracking-wider">{language === 'id' ? 'Skema Warna' : 'Color Palette'}</span>
          </button>
        ) : (
          <div className="bg-slate-950 text-white rounded-2xl p-4 shadow-2xl border border-slate-800 w-72 sm:w-80 text-left space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="flex justify-between items-center pb-2 border-b border-slate-800">
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
                <h4 className="font-extrabold text-[11px] uppercase tracking-wider text-white">
                  {language === 'id' ? 'Palet Warna Tema Website' : 'Website Theme Palette'}
                </h4>
              </div>
              <button 
                onClick={() => setIsPaletteOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-900"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="text-[10px] text-slate-400 leading-relaxed">
              {language === 'id' 
                ? 'Klik warna di bawah ini untuk melihat keajaiban perubahan skema warna utama & sekunder instan di seluruh elemen website!' 
                : 'Click any palette below to instantly experience real-time primary & secondary theme transformations across all components!'}
            </p>

            <div className="grid grid-cols-1 gap-1.5 max-h-48 overflow-y-auto pr-1">
              {COLOR_PALETTES.map((palette) => {
                const isSelected = selectedPaletteId === palette.id;
                return (
                  <button
                    key={palette.id}
                    onClick={() => setSelectedPaletteId(palette.id)}
                    className={`w-full flex items-center justify-between p-2 rounded-lg border text-left transition-all ${
                      isSelected 
                        ? 'bg-slate-900 border-white/40 shadow-inner' 
                        : 'bg-slate-950/40 border-slate-800/80 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-1.5 shrink-0">
                        <span className="w-4.5 h-4.5 rounded-full border border-slate-900 shadow-md inline-block" style={{ backgroundColor: palette.primary }} />
                        <span className="w-4.5 h-4.5 rounded-full border border-slate-900 shadow-md inline-block" style={{ backgroundColor: palette.accent }} />
                      </div>
                      <div className="leading-none">
                        <span className="text-[10px] font-bold block text-white">{palette.name}</span>
                        <span className="text-[8px] text-slate-500 font-mono block mt-0.5">{palette.description}</span>
                      </div>
                    </div>
                    {isSelected && (
                      <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 flex items-center justify-center text-slate-950">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {selectedPaletteId && (
              <button
                onClick={() => setSelectedPaletteId(null)}
                className="w-full text-center text-[10px] text-slate-400 hover:text-white underline py-1 font-mono uppercase tracking-wider"
              >
                {language === 'id' ? 'RESET KE DEFAULT TEMPLATE' : 'RESET TO TEMPLATE DEFAULT'}
              </button>
            )}
          </div>
        )}
      </div>

    </div>
  );
}
