import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'id' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  id: {
    // Nav / Header
    'nav.home': 'Beranda',
    'nav.features': 'Fitur',
    'nav.templates': 'Pilihan Template',
    'nav.pricing': 'Paket Sewa',
    'nav.faq': 'FAQ',
    'nav.cta': 'Sewa Website Sekarang',
    'nav.cta.short': 'Sewa Web',

    // Hero
    'hero.promo': 'SEWA WEBSITE TRAVEL',
    'hero.subtitle': 'Sewa website siap pakai premium khusus agen travel, tour operator, dan rental mobil dari TourNative. Dilengkapi sistem booking otomatis, manajemen paket wisata, dan invoice digital otomatis.',
    'hero.badge.1.val': '1 Hari',
    'hero.badge.1.lbl': 'Siap Online',
    'hero.badge.2.val': '3 Paket',
    'hero.badge.2.lbl': 'Sewa Fleksibel',
    'hero.badge.3.lbl': 'WhatsApp Support',
    'hero.cta.view': 'LIHAT PAKET SEWA',
    'hero.cta.learn': 'PELAJARI FITUR',

    // Features Section
    'features.title': 'Fitur Unggulan Website Travel Anda',
    'features.subtitle': 'TOURNATIVE EXCLUSIVE ECOSYSTEM & AUTOMATION',
    'features.sandbox.input.title': 'CMS KELOLA PAKET WISATA',
    'features.sandbox.input.live': 'Database Aktif',
    'features.sandbox.input.placeholder.name': 'Contoh: Trip Bromo Sunrise',
    'features.sandbox.input.placeholder.price': 'Harga (contoh: Rp 950k)',
    'features.sandbox.input.add': 'Tambah',
    'features.sandbox.input.table.name': 'Nama Paket Wisata',
    'features.sandbox.input.table.duration': 'Durasi',
    'features.sandbox.input.table.price': 'Harga Sewa',
    'features.sandbox.input.responsive': 'Didesain Responsif untuk Semua Gadget',
    'features.sandbox.input.ecosystem': 'A&A Ekosistem v2.4',
    
    'features.sandbox.wa.title': 'FORMULIR BOOKING WHATSAPP',
    'features.sandbox.wa.name': 'Nama Lengkap',
    'features.sandbox.wa.phone': 'Nomor WhatsApp',
    'features.sandbox.wa.select': 'Pilih Paket Wisata',
    'features.sandbox.wa.btn': 'Kirim via WhatsApp',
    'features.sandbox.wa.preview': 'Live Preview Chat',
    'features.sandbox.wa.waiting': 'Menunggu input booking...',
    'features.sandbox.wa.format.greeting': 'Halo Sales *TourNative*, saya ingin booking paket berikut:',
    'features.sandbox.wa.format.name': 'Nama',
    'features.sandbox.wa.format.phone': 'No. WA',
    'features.sandbox.wa.format.pkg': 'Paket',

    'features.sandbox.payment.title': 'INTEGRASI PAYMENT GATEWAY',
    'features.sandbox.payment.simulate': 'Simulasi Pembayaran Otomatis',
    'features.sandbox.payment.method': 'PILIH METODE PEMBAYARAN',
    'features.sandbox.payment.btn': 'BAYAR SEKARANG',
    'features.sandbox.payment.processing': 'Memproses pembayaran...',
    'features.sandbox.payment.success': 'PEMBAYARAN BERHASIL!',
    'features.sandbox.payment.desc': 'Invoice & tiket otomatis dikirim via WA/Email.',

    'features.sandbox.seo.title': 'GOOGLE SERP MOCKUP',
    'features.sandbox.seo.rating': 'Ulasan',
    'features.sandbox.seo.cancel': 'Gratis Batal',
    
    'features.sandbox.analytics.title': 'GOOGLE CORE WEB VITALS',
    'features.sandbox.analytics.score': 'LUAR BIASA',
    'features.sandbox.analytics.load': 'Load Time: < 0.8 Detik',

    // Templates Section
    'templates.title': 'Pilihan Template Website Siap Pakai',
    'templates.subtitle': 'PILIH DESAIN PREMIUM YANG SESUAI DENGAN KARAKTER BISNIS TRAVEL ANDA',
    'templates.palette': 'PALET WARNA IDENTITAS:',
    'templates.accent': 'Aksen',
    'templates.features': 'FITUR KHUSUS TEMPLATE:',
    'templates.demo': 'HALAMAN DEMO TERMASUK:',
    'templates.select': 'PILIH TEMPLATE INI',
    'templates.liveDemo': 'Buka Live Demo ↗',
    'templates.liveDemo.desc': 'Lihat website tiruan utuh di tab baru',

    // Pricing Section
    'pricing.title': 'Pilihan Paket Sewa Website',
    'pricing.subtitle': 'PILIH PAKET YANG SESUAI DENGAN SKALA BISNIS TRAVEL ANDA. SEMUA PAKET BEBAS BIAYA SETUP.',
    'pricing.toggle.monthly': 'Bulanan',
    'pricing.toggle.yearly': 'Tahunan',
    'pricing.toggle.save': 'HEMAT 25%',
    'pricing.recommended': 'Direkomendasikan Untuk:',
    'pricing.cta.contact': 'Hubungi Tim Sales',
    'pricing.cta.rent': 'Sewa Sekarang',
    'pricing.included': 'Yang Termasuk:',
    'pricing.notIncluded': 'Belum Termasuk:',
    'pricing.specs.title': 'Detail Spesifikasi Teknis',
    'pricing.specs.hide': 'Sembunyikan Spek',
    'pricing.specs.show': 'Lihat Spek Lengkap',
    'pricing.specs.hosting': 'Infrastruktur Hosting',
    'pricing.specs.domain': 'Pilihan Custom Domain',
    'pricing.specs.bandwidth': 'Bandwidth Bulanan',
    'pricing.specs.admin': 'Akun Admin CMS',
    'pricing.specs.ssl': 'Proteksi Keamanan SSL',
    'pricing.specs.seo': 'Optimalisasi SEO',
    'pricing.specs.booking': 'Sistem Booking',
    'pricing.specs.payment': 'Pintu Pembayaran',

    // Testimonials Section
    'testimonials.title': 'Ulasan Pemilik Bisnis Travel & Agen',
    'testimonials.subtitle': 'BACA BAGAIMANA REKAN SEJAWAT ANDA BERHASIL MENINGKATKAN OMSET & OTOMATISASI OPERASIONAL',

    // FAQ Section
    'faq.title': 'Tanya Jawab Seputar Layanan',
    'faq.subtitle': 'TEMUKAN JAWABAN CEPAT UNTUK PERTANYAAN YANG SERING DIAJUKAN TENTANG SEWA WEBSITE TOURNATIVE',

    // Footer
    'footer.desc': 'Penyedia jasa pembuatan dan sewa website travel premium siap pakai terlengkap di Indonesia. Bantu agen travel go-digital dalam 24 jam.',
    'footer.nav': 'Navigasi',
    'footer.contact': 'Kontak Support',
    'footer.rights': 'Hak Cipta',
  },
  en: {
    // Nav / Header
    'nav.home': 'Home',
    'nav.features': 'Features',
    'nav.templates': 'Templates',
    'nav.pricing': 'Pricing Plans',
    'nav.faq': 'FAQ',
    'nav.cta': 'Rent Website Now',
    'nav.cta.short': 'Rent Web',

    // Hero
    'hero.promo': 'PROMO TRAVEL WEBSITE RENTAL 2026',
    'hero.subtitle': 'Rent premium, ready-to-use websites custom built for travel agencies, tour operators, and car rentals by TourNative. Complete with automated booking systems, tour package management, and automatic digital invoices.',
    'hero.badge.1.val': '1 Day',
    'hero.badge.1.lbl': 'Ready Online',
    'hero.badge.2.val': '3 Plans',
    'hero.badge.2.lbl': 'Flexible Rental',
    'hero.badge.3.lbl': 'WhatsApp Support',
    'hero.cta.view': 'VIEW PRICING PLANS',
    'hero.cta.learn': 'LEARN FEATURES',

    // Features Section
    'features.title': 'Superior Features of Your Travel Website',
    'features.subtitle': 'TOURNATIVE EXCLUSIVE ECOSYSTEM & AUTOMATION',
    'features.sandbox.input.title': 'CMS TOUR PACKAGE MANAGEMENT',
    'features.sandbox.input.live': 'Live Database',
    'features.sandbox.input.placeholder.name': 'Example: Bromo Sunrise Trip',
    'features.sandbox.input.placeholder.price': 'Price (e.g., Rp 950k)',
    'features.sandbox.input.add': 'Add Package',
    'features.sandbox.input.table.name': 'Tour Package Name',
    'features.sandbox.input.table.duration': 'Duration',
    'features.sandbox.input.table.price': 'Rental Price',
    'features.sandbox.input.responsive': 'Responsive Design for All Devices',
    'features.sandbox.input.ecosystem': 'A&A Ecosystem v2.4',

    'features.sandbox.wa.title': 'WHATSAPP BOOKING FORM',
    'features.sandbox.wa.name': 'Full Name',
    'features.sandbox.wa.phone': 'WhatsApp Number',
    'features.sandbox.wa.select': 'Select Tour Package',
    'features.sandbox.wa.btn': 'Send via WhatsApp',
    'features.sandbox.wa.preview': 'Live Preview Chat',
    'features.sandbox.wa.waiting': 'Waiting for booking input...',
    'features.sandbox.wa.format.greeting': 'Hello Sales *TourNative*, I would like to book the following package:',
    'features.sandbox.wa.format.name': 'Name',
    'features.sandbox.wa.format.phone': 'WA No.',
    'features.sandbox.wa.format.pkg': 'Package',

    'features.sandbox.payment.title': 'PAYMENT GATEWAY INTEGRATION',
    'features.sandbox.payment.simulate': 'Automated Payment Simulation',
    'features.sandbox.payment.method': 'CHOOSE PAYMENT METHOD',
    'features.sandbox.payment.btn': 'PAY NOW',
    'features.sandbox.payment.processing': 'Processing payment...',
    'features.sandbox.payment.success': 'PAYMENT SUCCESSFUL!',
    'features.sandbox.payment.desc': 'Invoice & ticket automatically sent via WA/Email.',

    'features.sandbox.seo.title': 'GOOGLE SERP MOCKUP',
    'features.sandbox.seo.rating': 'Reviews',
    'features.sandbox.seo.cancel': 'Free Cancellation',

    'features.sandbox.analytics.title': 'GOOGLE CORE WEB VITALS',
    'features.sandbox.analytics.score': 'OUTSTANDING',
    'features.sandbox.analytics.load': 'Load Time: < 0.8 Seconds',

    // Templates Section
    'templates.title': 'Ready-to-Use Website Template Options',
    'templates.subtitle': 'CHOOSE A PREMIUM DESIGN THAT MATCHES THE CHARACTER OF YOUR TRAVEL BUSINESS',
    'templates.palette': 'IDENTITY COLOR PALETTE:',
    'templates.accent': 'Accent',
    'templates.features': 'TEMPLATE SPECIAL FEATURES:',
    'templates.demo': 'DEMO PAGES INCLUDED:',
    'templates.select': 'SELECT THIS TEMPLATE',
    'templates.liveDemo': 'Open Live Demo ↗',
    'templates.liveDemo.desc': 'View full mock website in a new tab',

    // Pricing Section
    'pricing.title': 'Website Rental Pricing Plans',
    'pricing.subtitle': 'CHOOSE THE PLAN THAT MATCHES YOUR TRAVEL BUSINESS SCALE. ALL PLANS HAVE ZERO SETUP FEES.',
    'pricing.toggle.monthly': 'Monthly',
    'pricing.toggle.yearly': 'Yearly',
    'pricing.toggle.save': 'SAVE 25%',
    'pricing.recommended': 'Recommended For:',
    'pricing.cta.contact': 'Contact Sales',
    'pricing.cta.rent': 'Rent Now',
    'pricing.included': 'What\'s Included:',
    'pricing.notIncluded': 'Not Included:',
    'pricing.specs.title': 'Technical Specification Details',
    'pricing.specs.hide': 'Hide Specs',
    'pricing.specs.show': 'View Full Specs',
    'pricing.specs.hosting': 'Hosting Infrastructure',
    'pricing.specs.domain': 'Custom Domain Options',
    'pricing.specs.bandwidth': 'Monthly Bandwidth',
    'pricing.specs.admin': 'CMS Admin Accounts',
    'pricing.specs.ssl': 'SSL Security Protection',
    'pricing.specs.seo': 'SEO Optimization',
    'pricing.specs.booking': 'Booking System',
    'pricing.specs.payment': 'Payment Gateway',

    // Testimonials Section
    'testimonials.title': 'Reviews from Travel Agency Owners',
    'testimonials.subtitle': 'READ HOW YOUR PEERS SUCCESSFULLY INCREASED REVENUE & AUTOMATED OPERATIONS',

    // FAQ Section
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'FIND QUICK ANSWERS TO FREQUENTLY ASKED QUESTIONS ABOUT TOURNATIVE WEBSITE RENTAL',

    // Footer
    'footer.desc': 'Provider of the most complete premium ready-to-use travel website creation and rental services in Indonesia. Helping travel agencies go digital in 24 hours.',
    'footer.nav': 'Navigation',
    'footer.contact': 'Contact Support',
    'footer.rights': 'Copyright',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('tournative_lang');
    return (saved === 'id' || saved === 'en') ? saved : 'id';
  });

  useEffect(() => {
    localStorage.setItem('tournative_lang', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'id' ? 'en' : 'id'));
  };

  const t = (key: string): string => {
    return translations[language][key] || translations['id'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
