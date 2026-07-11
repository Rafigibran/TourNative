/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import LazyHydrate from './components/LazyHydrate';
import { useLanguage } from './LanguageContext';

const FeatureShowcase = lazy(() => import('./components/FeatureShowcase'));
const TemplatePreviewer = lazy(() => import('./components/TemplatePreviewer'));
const PricingSection = lazy(() => import('./components/PricingSection'));
const TestimonialSection = lazy(() => import('./components/TestimonialSection'));
const FaqSection = lazy(() => import('./components/FaqSection'));
const DemoPage = lazy(() => import('./components/DemoPage'));

export default function App() {
  const [selectedPlanId, setSelectedPlanId] = useState<'basic' | 'pro' | 'enterprise'>('pro');
  const [isYearlySelected, setIsYearlySelected] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  
  const [demoId, setDemoId] = useState<string | null>(null);
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const demo = params.get('demo');
    if (demo) {
      setDemoId(demo);
    } else {
      setDemoId(null);
    }

    const handleLocationChange = () => {
      const p = new URLSearchParams(window.location.search);
      setDemoId(p.get('demo'));
    };
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const handleExitDemo = () => {
    const newUrl = window.location.pathname;
    window.history.pushState({}, '', newUrl);
    setDemoId(null);
  };

  // Smooth scroll helper with header offset
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
  };

  // Intersection Observer to highlight active navigation link dynamically on scroll
  useEffect(() => {
    const sections = ['hero', 'features', 'templates', 'pricing', 'faq'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // offset to trigger slightly earlier
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectPlan = (planId: 'basic' | 'pro' | 'enterprise', isYearly: boolean) => {
    setSelectedPlanId(planId);
    setIsYearlySelected(isYearly);
    
    // Direct WhatsApp booking based on plan selected
    const planName = planId === 'basic' ? 'Basic (Sewa Web)' : planId === 'pro' ? 'Pro (Sewa Web + Custom)' : 'Enterprise';
    const duration = isYearly ? '1 Tahun (Hemat 20%)' : '1 Bulan';
    const text = encodeURIComponent(`Halo TourNative, saya ingin memesan website travel siap pakai dengan paket: ${planName} durasi sewa: ${duration}. Mohon informasi pendaftaran.`);
    window.open(`https://wa.me/628123456789?text=${text}`, '_blank');
  };

  if (demoId) {
    return (
      <Suspense fallback={
        <div className="min-h-screen bg-slate-900 flex items-center justify-center text-white font-mono text-sm">
          Loading Live Sandbox Demo...
        </div>
      }>
        <DemoPage 
          initialId={demoId} 
          onBackToMain={handleExitDemo} 
          language={language} 
          onLanguageChange={toggleLanguage} 
        />
      </Suspense>
    );
  }

  const siteTitle = language === 'id' 
    ? 'TourNative - Jasa Sewa Website Travel & Agen Wisata Premium'
    : 'TourNative - Premium Travel Agency Website Rental Services';
  const siteDesc = language === 'id'
    ? 'Sewa website travel instan & kustomisasi penuh dari TourNative. Tingkatkan kredibilitas agen wisata Anda dengan fitur booking instan, kustomisasi desain, dan performa super cepat.'
    : 'Rent high-converting travel website templates with TourNative. Elevate your tourism agency brand with custom designs, integrated booking systems, and top performance.';
  const canonicalUrl = typeof window !== 'undefined' ? window.location.origin + window.location.pathname : 'https://tournative.com';

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": `${canonicalUrl}#software`,
        "name": "TourNative",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "All",
        "description": language === 'id'
          ? "Sistem persewaan template website agen perjalanan premium dengan pelacak kursi langsung, mesin pemesanan interaktif, dan dukungan multibahasa."
          : "Premium travel agency website template rental system with live seat trackers, interactive booking engines, and multi-language support.",
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "IDR",
          "lowPrice": "145000",
          "highPrice": "495000",
          "offerCount": "3",
          "priceValuedRanges": "Monthly subscription options",
          "offers": [
            {
              "@type": "Offer",
              "name": "Basic Plan",
              "price": "145000",
              "priceCurrency": "IDR",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "145000",
                "priceCurrency": "IDR",
                "referenceQuantity": {
                  "@type": "QuantitativeValue",
                  "value": "1",
                  "unitCode": "MON"
                }
              }
            },
            {
              "@type": "Offer",
              "name": "Pro Plan",
              "price": "295000",
              "priceCurrency": "IDR",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "295000",
                "priceCurrency": "IDR",
                "referenceQuantity": {
                  "@type": "QuantitativeValue",
                  "value": "1",
                  "unitCode": "MON"
                }
              }
            },
            {
              "@type": "Offer",
              "name": "Enterprise Plan",
              "price": "495000",
              "priceCurrency": "IDR",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "495000",
                "priceCurrency": "IDR",
                "referenceQuantity": {
                  "@type": "QuantitativeValue",
                  "value": "1",
                  "unitCode": "MON"
                }
              }
            }
          ]
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "142"
        }
      },
      {
        "@type": "Service",
        "@id": `${canonicalUrl}#service`,
        "name": language === 'id' ? "Sewa & Kustomisasi Website TourNative" : "TourNative Web Rental & Customization Services",
        "serviceType": "Travel Website Development and Rental",
        "provider": {
          "@type": "LocalBusiness",
          "name": "TourNative Indonesia",
          "image": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&h=630&q=80",
          "telephone": "+62-812-3456-789",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Jl. Sunset Road No. 88, Seminyak",
            "addressLocality": "Badung",
            "addressRegion": "Bali",
            "postalCode": "80361",
            "addressCountry": "ID"
          },
          "priceRange": "RP"
        },
        "areaServed": [
          {
            "@type": "Country",
            "name": "Indonesia"
          },
          {
            "@type": "Country",
            "name": "Malaysia"
          },
          {
            "@type": "Country",
            "name": "Singapore"
          }
        ],
        "description": language === 'id'
          ? "Solusi pembuatan dan penyewaan website berkinerja tinggi yang disesuaikan khusus untuk agen perjalanan, biro umroh, dan operator tur lokal."
          : "Professional high-performance website rental and customization solutions tailored specifically for travel agencies, umrah bureaus, and local tour operators."
      },
      {
        "@type": "LocalBusiness",
        "@id": `${canonicalUrl}#hq`,
        "name": "TourNative Indonesia (Headquarters - Bali)",
        "image": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&h=630&q=80",
        "telephone": "+62-812-3456-789",
        "priceRange": "RP",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Jl. Sunset Road No. 88, Seminyak",
          "addressLocality": "Badung",
          "addressRegion": "Bali",
          "postalCode": "80361",
          "addressCountry": "ID"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "-8.6913",
          "longitude": "115.1682"
        },
        "url": canonicalUrl
      },
      {
        "@type": "LocalBusiness",
        "@id": `${canonicalUrl}#jakarta`,
        "name": language === 'id' ? "TourNative Jakarta - Sewa Website Travel & Agen Wisata" : "TourNative Jakarta - Travel Agency Website Rental",
        "image": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&h=630&q=80",
        "telephone": "+62-812-3456-789",
        "priceRange": "RP",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Sudirman Central Business District (SCBD) Lot 28",
          "addressLocality": "Jakarta Selatan",
          "addressRegion": "DKI Jakarta",
          "postalCode": "12190",
          "addressCountry": "ID"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "-6.2233",
          "longitude": "106.8085"
        },
        "url": `${canonicalUrl}?city=jakarta`
      },
      {
        "@type": "LocalBusiness",
        "@id": `${canonicalUrl}#surabaya`,
        "name": language === 'id' ? "TourNative Surabaya - Sewa Website Travel & Agen Wisata" : "TourNative Surabaya - Travel Agency Website Rental",
        "image": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&h=630&q=80",
        "telephone": "+62-812-3456-789",
        "priceRange": "RP",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Jl. Tunjungan No. 12, Genteng",
          "addressLocality": "Surabaya",
          "addressRegion": "Jawa Timur",
          "postalCode": "60275",
          "addressCountry": "ID"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "-7.2575",
          "longitude": "112.7423"
        },
        "url": `${canonicalUrl}?city=surabaya`
      },
      {
        "@type": "LocalBusiness",
        "@id": `${canonicalUrl}#bandung`,
        "name": language === 'id' ? "TourNative Bandung - Sewa Website Travel & Agen Wisata" : "TourNative Bandung - Travel Agency Website Rental",
        "image": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&h=630&q=80",
        "telephone": "+62-812-3456-789",
        "priceRange": "RP",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Jl. Asia Afrika No. 140, Braga",
          "addressLocality": "Bandung",
          "addressRegion": "Jawa Barat",
          "postalCode": "40111",
          "addressCountry": "ID"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "-6.9204",
          "longitude": "107.6049"
        },
        "url": `${canonicalUrl}?city=bandung`
      },
      {
        "@type": "LocalBusiness",
        "@id": `${canonicalUrl}#yogyakarta`,
        "name": language === 'id' ? "TourNative Yogyakarta - Sewa Website Travel & Agen Wisata" : "TourNative Yogyakarta - Travel Agency Website Rental",
        "image": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&h=630&q=80",
        "telephone": "+62-812-3456-789",
        "priceRange": "RP",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Jl. Malioboro No. 42",
          "addressLocality": "Yogyakarta",
          "addressRegion": "DIY Yogyakarta",
          "postalCode": "55271",
          "addressCountry": "ID"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "-7.7956",
          "longitude": "110.3695"
        },
        "url": `${canonicalUrl}?city=yogyakarta`
      },
      {
        "@type": "LocalBusiness",
        "@id": `${canonicalUrl}#medan`,
        "name": language === 'id' ? "TourNative Medan - Sewa Website Travel & Agen Wisata" : "TourNative Medan - Travel Agency Website Rental",
        "image": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&h=630&q=80",
        "telephone": "+62-812-3456-789",
        "priceRange": "RP",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Jl. Balai Kota No. 2, Kesawan",
          "addressLocality": "Medan",
          "addressRegion": "Sumatera Utara",
          "postalCode": "20111",
          "addressCountry": "ID"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "3.5952",
          "longitude": "98.6722"
        },
        "url": `${canonicalUrl}?city=medan`
      },
      {
        "@type": "LocalBusiness",
        "@id": `${canonicalUrl}#makassar`,
        "name": language === 'id' ? "TourNative Makassar - Sewa Website Travel & Agen Wisata" : "TourNative Makassar - Travel Agency Website Rental",
        "image": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&h=630&q=80",
        "telephone": "+62-812-3456-789",
        "priceRange": "RP",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Jl. Penghibur No. 10, Losari",
          "addressLocality": "Makassar",
          "addressRegion": "Sulawesi Selatan",
          "postalCode": "90111",
          "addressCountry": "ID"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "-5.1477",
          "longitude": "119.4085"
        },
        "url": `${canonicalUrl}?city=makassar`
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-brand-secondary selection:text-white modern-sans">
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDesc} />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDesc} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&h=630&q=80" />

        {/* Twitter */}
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={siteDesc} />
        <meta name="twitter:url" content={canonicalUrl} />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&h=630&q=80" />

        {/* JSON-LD Structured Schema.org Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* 1. Header Navigation inspired by A&A Transportasi style */}
      <Header onNavClick={scrollToSection} activeSection={activeSection} />

      {/* 2. Hero Section with tropical coastal overlay and serif headers */}
      <Hero onCtaClick={scrollToSection} />

      {/* 3. Interactive Features Sandbox with mock admin/dashboard panels */}
      <LazyHydrate minHeight="600px">
        <FeatureShowcase />
      </LazyHydrate>

      {/* 4. Interactive Theme Template Previewer (Desktop / Mobile views) */}
      <LazyHydrate minHeight="800px">
        <TemplatePreviewer />
      </LazyHydrate>

      {/* 5. Custom Pricing Sections with monthly/yearly toggles */}
      <LazyHydrate minHeight="700px">
        <PricingSection onSelectPlan={handleSelectPlan} />
      </LazyHydrate>

      {/* 7. Travel Agent Client Reviews & Succes Outcomes */}
      <LazyHydrate minHeight="400px">
        <TestimonialSection />
      </LazyHydrate>

      {/* 8. Frequently Asked Questions with interactive category accordions */}
      <LazyHydrate minHeight="500px">
        <FaqSection />
      </LazyHydrate>

      {/* 9. Premium Brand Footer */}
      <Footer onNavClick={scrollToSection} />
    </div>
  );
}

