import { PricingPlan, TravelTemplate, WebFeature, Testimonial, FAQItem } from './types';

export const PRICING_PLANS_EN: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Bronze',
    price: 199000,
    priceYearly: 149000,
    description: 'Cost-effective solution for local travel and transport agents wanting to go digital with a simple tour and fleet catalog.',
    features: [
      'Limit: Maximum 15 Tour Packages',
      'Limit: Maximum 10 Vehicles / Cars',
      'Standard Premium Landing Page Design',
      'CMS Admin Dashboard to add/edit packages & fleet easily',
      'Multi-Language Support (English & Indonesian)',
      'Direct WhatsApp Chat Integration',
      'Simple Booking Form via WhatsApp',
      'Responsive Design (Mobile, Tablet, Desktop)',
      'Free .my.id / .com Domain (Annual Plan)',
      'Free SSL Certificate Protection',
    ],
    notIncluded: [
      'Automatic Payment Gateway Integration',
      'Full Sales Report & Advanced CMS Analytics',
      'Discount Coupon & Membership System',
    ],
    techDetails: {
      hosting: 'Shared Cloud Hosting - 2GB SSD Storage',
      domain: 'Custom Domain (.com / .id / .my.id)',
      bandwidth: 'Unmetered Bandwidth',
      adminAccounts: '1 Main Admin Account',
      ssl: 'Let\'s Encrypt SSL (HTTPS)',
      seoOptimization: 'Standard SEO (Meta Tag & XML Sitemap)',
      bookingAutomation: 'Manual - routed directly to WhatsApp',
      paymentGateway: 'Not Included',
    },
    recommendedFor: 'Local Tour Guides, Car Rentals, Small Local Operators.'
  },
  {
    id: 'pro',
    name: 'Silver',
    price: 399000,
    priceYearly: 299000,
    description: 'Highly recommended for medium-sized travel agencies requiring booking automation, cost estimation, tour & fleet management.',
    badge: 'Most Popular',
    features: [
      'Limit: Maximum 30 Tour Packages',
      'Limit: Maximum 25 Vehicles / Cars',
      'Self-Booking System & Auto-Generated CSV Invoice',
      'All Bronze Plan Features Included',
      'Payment Gateway Integration (SakuRupiah)',
      'Time-Limited Promotions & Discount Coupons',
      'Interactive Google Maps & Itinerary Builder',
      'Google Analytics & Facebook Pixel Integration',
      'Complimentary Package Migration Help (Max 10)',
      '24/7 Premium Fast-Response Support',
    ],
    notIncluded: [
      'Priority Cloud Server (Dedicated Resources)',
      'Complimentary Package Migration Help (Max 30)',
    ],
    techDetails: {
      hosting: 'High Performance VPS Cloud - 10GB NVMe SSD',
      domain: 'Custom Professional Domain (.com / .co.id / .id)',
      bandwidth: 'Premium Bandwidth Unmetered',
      adminAccounts: 'Up to 5 Staff & Admin Accounts',
      ssl: 'Let\'s Encrypt SSL & DDoS Protection',
      seoOptimization: 'Premium SEO (Schema Markup, Core Web Vitals optimized)',
      bookingAutomation: 'Fully Automated - Booking Code & Email Notifications',
      paymentGateway: 'Ready (Supports Bank Transfer, QRIS, E-Wallet)',
    },
    recommendedFor: 'Licensed Travel Agents, National Tour Operators, Open Trip & Car Rentals.'
  },
  {
    id: 'enterprise',
    name: 'Platinum',
    price: 799000,
    priceYearly: 599000,
    description: 'Ultimate solution for large-scale agencies, national car rentals, Umrah & Hajj, or operators requiring unlimited tours, vehicles & fleet.',
    badge: 'Most Complete',
    features: [
       'Unlimited Tour Packages Catalog',
       'Unlimited Fleet & Vehicles Catalog',
       'All Silver Premium Plan Features Included',
       'Priority Cloud Server (Dedicated Resource)',
       'Complimentary Package Migration Help (Max 30)',
    ],
    notIncluded: [],
    techDetails: {
      hosting: 'Dedicated Cloud Virtual Instance - 40GB NVMe SSD',
      domain: 'Premium Domain (.com / .travel / .id) + Reseller Subdomains',
      bandwidth: 'Dedicated Premium Network Link',
      adminAccounts: 'Unlimited Admin Accounts (Role-Based Access Control)',
      ssl: 'Enterprise-Grade SSL Certificate',
      seoOptimization: 'Advanced SEO Campaigns & Speed Booster (Redis Caching)',
      bookingAutomation: 'Automated Invoice & Departure Slips + WA Gateway API Integration',
      paymentGateway: 'Ready (Multi-currency & Instant Settlement)',
    },
    recommendedFor: 'Umrah & Hajj Bureaus, Travel Franchises, Large Car Rentals & Tour Agencies.'
  }
];

export const TRAVEL_TEMPLATES_EN: TravelTemplate[] = [
  {
    id: 'adventure',
    name: 'A&A Transportasi',
    category: 'Car Rental & Tours',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    description: 'Premium modern template designed specifically for car rentals and travel packages. Features vehicle fleet management, rental fare calculators, and WhatsApp integration.',
    primaryColor: '#1e3a8a', // Senggigi Sapphire Deep Blue Primary
    accentColor: '#60a5fa', // Senggigi Sapphire Deep Blue Secondary/Accent
    featuresList: [
      'Self-Drive & With Driver Booking Options',
      'Detailed Fleet Capacity, Transmission & Vehicle Details',
      'Direct WhatsApp Booking Form Integration',
      'Exclusive Tours & Travel Catalog Management',
    ],
    demoPages: ['Home', 'Car Fleet Catalog', 'Travel Tour Packages', 'Contact Us']
  }
];

export const WEB_FEATURES_EN: WebFeature[] = [
  {
    id: 'whatsapp',
    title: 'WhatsApp Booking Automation',
    shortDesc: 'Structured booking forms sent straight to sales chat.',
    detailedDesc: 'When customers click book, the system guides them through entering participant data, dates, and packages. Once complete, the form converts into a clean and informative WhatsApp chat message ready to be received by your customer support.',
    iconName: 'MessageSquareShare',
    visualMetric: 'Conversion up 300%'
  },
  {
    id: 'payment',
    title: 'Payment Gateway Integration',
    shortDesc: 'Accept automatic payments via QRIS, E-Wallet, & Cards.',
    detailedDesc: 'Connect your rental website to SakuRupiah payment gateway. Enjoy automatic payment verification, immediately updating order statuses to PAID and sending invoices to customers in real-time.',
    iconName: 'CreditCard',
    visualMetric: '24-Hour Automated'
  },
  {
    id: 'seo',
    title: 'SEO & High-Speed Optimization',
    shortDesc: 'Rank at the top of Google with super-fast load speeds.',
    detailedDesc: 'Designed with clean, modern React/Vite code that is highly search-engine friendly. Includes automatic image compression, dynamic sitemaps, and JSON-LD schema markup so your tours easily reach Google\'s front page.',
    iconName: 'TrendingUp',
    visualMetric: 'PageSpeed 98/100'
  },
  {
    id: 'dashboard',
    title: 'Business Analytics Dashboard',
    shortDesc: 'Monitor clicks, inbound leads, and best-selling tours.',
    detailedDesc: 'Get informative charts visualizing your travel business performance. Track which tours are clicked most, how many registrations occur daily, and analyze traffic trends to map out your next marketing strategies.',
    iconName: 'BarChart3',
    visualMetric: 'Real-Time Reports'
  }
];

export const TESTIMONIALS_EN: Testimonial[] = [
  {
    id: '1',
    name: 'Andri Wijaya',
    role: 'Founder & CEO',
    company: 'Bali Paradise Getaway',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
    rating: 5,
    content: 'Updating catalogs manually every week on Instagram was a major hassle. Since renting our website from TourNative, customers just book online. The WhatsApp system is extremely neat and our turnover skyrocketed because we look much more professional.',
    metrics: 'Turnover Increased 2.5x'
  },
  {
    id: '2',
    name: 'Ustadzah Halimah',
    role: 'Operations Director',
    company: 'Al-Madinah Tour & Umroh',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80',
    rating: 5,
    content: 'The Al-Haramain template was incredibly helpful. The majority of our customers are elderly, but they can easily download PDF brochures and view 5-star hotel listings straight from their phones. The speed of the website is exceptional.',
    metrics: 'Enhanced Customer Trust'
  },
  {
    id: '3',
    name: 'Rian Setyadi',
    role: 'Community Lead',
    company: 'KawanJalan Open Trip',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80',
    rating: 5,
    content: 'The remaining seat counter on this website truly triggers FOMO! Participants transfer quickly when they see limited seat availability. SakuRupiah integration is flawless, I don\'t need to stay up checking bank statements anymore.',
    metrics: 'Saved 80% Operations Time'
  }
];

export const FAQ_ITEMS_EN: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Are high-speed cloud hosting and custom domains included in the rental price?',
    answer: 'Yes! All plans (Basic, Pro, Enterprise) include high-speed cloud hosting with free SSL security. Annual plan subscribers also receive a complimentary custom professional domain (.com, .id, etc.) of their choice.',
    category: 'Price & Tech'
  },
  {
    id: 'faq-2',
    question: 'Can I connect a domain I already own to my rented website?',
    answer: 'Absolutely! If you already purchased a domain elsewhere, our IT team will be happy to assist you in pointing your domain name servers to our web server at no additional cost.',
    category: 'Price & Tech'
  },
  {
    id: 'faq-3',
    question: 'What are the available payment terms for the website rental?',
    answer: 'We offer flexible Monthly plans to support your business cash flow, as well as Annual subscriptions with special discounts of up to 25% (equivalent to 3 months of free rent!). Payments can be securely made via QRIS, Bank Transfer, or Cards.',
    category: 'Payments'
  },
  {
    id: 'faq-4',
    question: 'Will I be guided on how to operate the website and add tour packages?',
    answer: 'Yes. Every client receives an interactive video guide along with a detailed instruction guide that explains every step. Pro & Enterprise plans also include priority WhatsApp support for instant help.',
    category: 'Support Service'
  },
  {
    id: 'faq-5',
    question: 'If I rent the Pro plan, do I need to register my own payment gateway account?',
    answer: 'Yes, we will guide you to register your own merchant account with SakuRupiah in your company\'s name. This ensures all payment settlements go directly and safely to your bank account without any intermediaries.',
    category: 'Features'
  }
];
