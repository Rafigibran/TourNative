import { PricingPlan, TravelTemplate, WebFeature, Testimonial, FAQItem } from './types';

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Bronze',
    price: 199000,
    priceYearly: 149000,
    description: 'Solusi hemat untuk agen travel dan transportasi lokal pemula yang ingin go-digital dengan katalog tour dan armada sederhana.',
    features: [
      'Limit: Maksimal 15 Paket Wisata',
      'Limit: Maksimal 10 Mobil / Armada',
      'Desain Landing Page Premium Standard',
      'Dashboard Admin CMS untuk tambah/edit paket & mobil',
      'Sistem Multi-Language (Indonesia & Inggris)',
      'Integrasi Chat WhatsApp (Direct Chat)',
      'Formulir Booking Sederhana via WA',
      'Responsive Design (Mobile, Tablet, Desktop)',
      'Gratis Domain .my.id / .com (Paket Tahunan)',
      'Keamanan SSL Certificate Gratis',
    ],
    notIncluded: [
      'Sistem Pembayaran Otomatis (Payment Gateway)',
      'Dashboard Laporan Penjualan (Analitik Lengkap)',
      'Sistem Kupon Diskon & Member',
    ],
    techDetails: {
      hosting: 'Shared Cloud Hosting - 2GB SSD Storage',
      domain: 'Custom Domain (.com / .id / .my.id)',
      bandwidth: 'Unmetered Bandwidth',
      adminAccounts: '1 Akun Admin Utama',
      ssl: 'Let\'s Encrypt SSL (HTTPS)',
      seoOptimization: 'Standard SEO (Meta Tag & XML Sitemap)',
      bookingAutomation: 'Manual - diarahkan langsung ke WhatsApp',
      paymentGateway: 'Belum Termasuk',
    },
    recommendedFor: 'Agen Wisata Lokal, Personal Tour Guide, Rental Mobil Sederhana.'
  },
  {
    id: 'pro',
    name: 'Silver',
    price: 399000,
    priceYearly: 299000,
    description: 'Sangat direkomendasikan untuk agen travel menengah yang membutuhkan otomatisasi booking, kalkulator biaya, kelola trip & mobil mandiri.',
    badge: 'Paling Populer',
    features: [
      'Limit: Maksimal 30 Paket Wisata',
      'Limit: Maksimal 25 Mobil / Armada',
      'Sistem Booking Mandiri & Invoice CSV otomatis',
      'Semua Fitur Paket Bronze',
      'Integrasi Payment Gateway (SakuRupiah)',
      'Fitur Kupon Diskon & Promosi Berbatas Waktu',
      'Google Maps & Itinerary Builder Interaktif',
      'Integrasi Google Analytics & FB Pixel',
      'Bantuan Migrasi Data Paket (Maks 10 Paket)',
      'Support Premium 24/7 Respon Cepat',
    ],
    notIncluded: [
      'Priority Cloud Server (Dedicated Resource)',
      'Bantuan Input Paket Wisata (Maks 30 Paket)',
    ],
    techDetails: {
      hosting: 'High Performance VPS Cloud - 10GB NVMe SSD',
      domain: 'Custom Domain Profesional (.com / .co.id / .id)',
      bandwidth: 'Premium Bandwidth Unmetered',
      adminAccounts: 'Hingga 5 Akun Staff & Admin',
      ssl: 'Let\'s Encrypt SSL & DDoS Protection',
      seoOptimization: 'Premium SEO (Schema Markup, Core Web Vitals optimized)',
      bookingAutomation: 'Full Otomatis - Generate Booking Code & Email Notification',
      paymentGateway: 'Ready (Mendukung Transfer Bank, QRIS, E-Wallet, Alfamart)',
    },
    recommendedFor: 'Travel Agen Berizin, Tour Operator Nasional, Open Trip & Rental Mobil.'
  },
  {
    id: 'enterprise',
    name: 'Platinum',
    price: 799000,
    priceYearly: 599000,
    description: 'Solusi terlengkap untuk skala agensi besar, rental mobil nasional, Umroh & Haji, atau penyedia jasa tour dengan armada & paket tak terbatas.',
    badge: 'Fitur Terlengkap',
    features: [
      'Katalog Paket Wisata Tanpa Batas (Unlimited)',
      'Katalog Mobil & Armada Tanpa Batas (Unlimited)',
      'Semua Fitur Paket Silver Premium',
      'Priority Cloud Server (Dedicated Resource)',
      'Bantuan Input Paket Wisata (Maks 30 Paket)',
    ],
    techDetails: {
      hosting: 'Dedicated Cloud Virtual Instance - 40GB NVMe SSD',
      domain: 'Domain Premium (.com / .travel / .id) + Subdomain Agen',
      bandwidth: 'Dedicated Premium Network Link',
      adminAccounts: 'Akun Admin Tanpa Batas (Role-Based Access Control)',
      ssl: 'Enterprise-Grade SSL Certificate',
      seoOptimization: 'Advance SEO Campaign & Speed Booster (Redis Caching)',
      bookingAutomation: 'Otomatisasi Sistem Invoice & Slip Keberangkatan + Integrasi WA Gateway API',
      paymentGateway: 'Ready (Multi-currency & Instant Settlement)',
    },
    recommendedFor: 'Biro Umroh & Haji, Franchise Travel, Rental Mobil & Agen Wisata Skala Besar.'
  }
];

export const TRAVEL_TEMPLATES: TravelTemplate[] = [
  {
    id: 'adventure',
    name: 'A&A Transportasi',
    category: 'Sewa Mobil & Tour',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    description: 'Template premium bernuansa modern yang dirancang khusus untuk jasa sewa mobil dan paket tour. Dilengkapi fitur manajemen armada mobil, kalkulator harga sewa, dan tombol booking WhatsApp.',
    primaryColor: '#1e3a8a', // Senggigi Sapphire Deep Blue Primary
    accentColor: '#60a5fa', // Senggigi Sapphire Deep Blue Secondary/Accent
    featuresList: [
      'Fitur Sewa Mobil Lepas Kunci / Dengan Sopir',
      'Detail Kapasitas, Transmisi & Tipe Armada',
      'Integrasi Formulir Pemesanan ke WhatsApp',
      'Katalog Paket Wisata & Destinasi Eksklusif',
    ],
    demoPages: ['Beranda', 'Katalog Sewa Mobil', 'Paket Tour Wisata', 'Hubungi Kami']
  }
];

export const WEB_FEATURES: WebFeature[] = [
  {
    id: 'whatsapp',
    title: 'Otomatisasi Booking WhatsApp',
    shortDesc: 'Formulir booking rapi langsung dikirim ke chat sales.',
    detailedDesc: 'Ketika pelanggan mengklik booking, sistem akan menuntun mereka mengisi data peserta, tanggal, dan paket. Setelah terisi, formulir akan terkonversi menjadi format pesan chat WA yang sangat rapi dan informatif, siap diterima langsung oleh CS/Sales Anda.',
    iconName: 'MessageSquareShare',
    visualMetric: 'Konversi Naik 300%'
  },
  {
    id: 'payment',
    title: 'Integrasi Payment Gateway',
    shortDesc: 'Menerima pembayaran otomatis QRIS, E-Wallet, & VA.',
    detailedDesc: 'Sambungkan website sewa Anda ke gerbang pembayaran terpercaya SakuRupiah. Nikmati kemudahan verifikasi pembayaran otomatis, sehingga status order langsung berubah menjadi LUNAS dan invoice terkirim ke email pelanggan secara real-time.',
    iconName: 'CreditCard',
    visualMetric: 'Otomatis 24 Jam'
  },
  {
    id: 'seo',
    title: 'Optimalisasi SEO & High Speed',
    shortDesc: 'Ranking teratas Google dengan website super cepat.',
    detailedDesc: 'Website kami rancang dengan struktur kode React/Vite yang bersih, modern, dan sangat bersahabat bagi Google Bot. Dilengkapi kompresi gambar otomatis, sitemap dinamis, dan JSON-LD schema agar paket wisata Anda mudah nangkring di halaman pertama pencarian.',
    iconName: 'TrendingUp',
    visualMetric: 'PageSpeed 98/100'
  },
  {
    id: 'dashboard',
    title: 'Dashboard Analitik Bisnis',
    shortDesc: 'Pantau jumlah klik, prospek masuk, dan paket terlaris.',
    detailedDesc: 'Dapatkan grafik informatif yang menggambarkan kinerja bisnis travel Anda. Lihat paket wisata mana yang paling sering diklik, berapa banyak orang yang mendaftar hari ini, serta analisis tren kunjungan untuk strategi pemasaran Anda berikutnya.',
    iconName: 'BarChart3',
    visualMetric: 'Laporan Real-Time'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Andri Wijaya',
    role: 'Founder & CEO',
    company: 'Bali Paradise Getaway',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
    rating: 5,
    content: 'Dulu repot banget harus update katalog manual tiap minggu di Instagram. Sejak sewa website di TourNative, customer tinggal booking online. Sistem WA-nya rapi banget dan omset kami melonjak tajam karena kelihatan lebih profesional.',
    metrics: 'Omset Naik 2.5x Lipat'
  },
  {
    id: '2',
    name: 'Ustadzah Halimah',
    role: 'Direktur Operasional',
    company: 'Al-Madinah Tour & Umroh',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80',
    rating: 5,
    content: 'Sangat terbantu dengan template Al-Haramain. Pelanggan kami mayoritas lansia, tapi mereka bisa dengan mudah mengunduh brosur PDF dan melihat daftar hotel bintang 5 langsung dari HP mereka. Kecepatan loading websitenya luar biasa.',
    metrics: 'Kepercayaan Jamaah Meningkat'
  },
  {
    id: '3',
    name: 'Rian Setyadi',
    role: 'Ketua Komunitas',
    company: 'KawanJalan Open Trip',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80',
    rating: 5,
    content: 'Fitur sisa kursi di website ini bener-bener memicu FOMO! Peserta trip buru-buru transfer karena lihat kuota tinggal dikit. Integrasi ke SakuRupiah juga lancar jaya, saya ga perlu begadang buat ngecek mutasi rekening lagi.',
    metrics: 'Hemat Waktu Operasional 80%'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Apakah harga sewa website di atas sudah termasuk Hosting dan Domain?',
    answer: 'Ya, betul sekali! Semua pilihan paket sewa (Basic, Pro, Enterprise) sudah mencakup cloud hosting kecepatan tinggi dengan proteksi keamanan SSL gratis. Khusus untuk langganan tahunan, Anda juga mendapatkan gratis pendaftaran domain profesional pilihan Anda (.com, .id, dll).',
    category: 'Teknis & Harga'
  },
  {
    id: 'faq-2',
    question: 'Apakah saya bisa menggunakan domain milik saya sendiri yang sudah aktif?',
    answer: 'Bisa banget! Jika Anda sudah terlanjur membeli domain di penyedia lain, tim IT kami akan dengan senang hati membantu mengarahkan name server domain Anda ke server sewa website kami tanpa biaya tambahan.',
    category: 'Teknis & Harga'
  },
  {
    id: 'faq-3',
    question: 'Bagaimana sistem pembayaran sewa websitenya?',
    answer: 'Kami menyediakan pilihan pembayaran Bulanan (Monthly) untuk fleksibilitas arus kas Anda, atau Tahunan (Yearly) dengan diskon spesial hingga 25% (setara gratis sewa 3 bulan!). Pembayaran bisa dilakukan aman menggunakan QRIS, Transfer Bank, atau Kartu Kredit.',
    category: 'Pembayaran'
  },
  {
    id: 'faq-4',
    question: 'Apakah saya diajarkan cara mengoperasikan dan menambahkan paket wisata?',
    answer: 'Tentu saja. Setiap pelanggan akan dibekali modul video panduan interaktif serta panduan instruksi lengkap yang menjelaskan langkah demi langkah. Untuk Paket Pro & Enterprise, Anda juga mendapatkan support WA premium jika sewaktu-waktu membutuhkan bantuan instan.',
    category: 'Layanan Support'
  },
  {
    id: 'faq-5',
    question: 'Jika saya menyewa paket Pro, apakah saya perlu mendaftar akun payment gateway sendiri?',
    answer: 'Iya, kami akan memandu Anda untuk mendaftar akun di SakuRupiah atas nama perusahaan Anda sendiri agar uang pembayaran dari turis langsung masuk ke rekening bank Anda secara aman tanpa melalui perantara kami.',
    category: 'Fitur Website'
  }
];
