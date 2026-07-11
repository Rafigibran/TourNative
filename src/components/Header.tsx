import { useState, useEffect } from 'react';
import { Menu, X, Globe2, Sparkles, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Logo } from './Logo';

interface HeaderProps {
  onNavClick: (sectionId: string) => void;
  activeSection: string;
}

export default function Header({ onNavClick, activeSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t('nav.home'), id: 'hero' },
    { label: t('nav.features'), id: 'features' },
    { label: t('nav.templates'), id: 'templates' },
    { label: t('nav.pricing'), id: 'pricing' },
    { label: t('nav.faq'), id: 'faq' },
  ];

  const handleItemClick = (id: string) => {
    onNavClick(id);
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand: TourNative */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => handleItemClick('hero')}
          >
            <Logo className="w-10 h-10 flex-shrink-0" />
            
            <div className="flex flex-col">
              <span className={`font-sans text-xl font-black tracking-tight leading-none transition-colors duration-300 ${
                isScrolled ? 'text-brand-primary' : 'text-white'
              }`}>
                Tour<span className="text-brand-accent">Native</span>
              </span>
              <span className={`text-[9px] font-mono tracking-[0.25em] uppercase transition-colors duration-300 mt-1.5 ${
                isScrolled ? 'text-slate-400' : 'text-slate-300/80'
              }`}>
                PREMIUM TRAVEL SITE
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`text-sm font-medium transition-colors cursor-pointer relative py-1 ${
                  activeSection === item.id
                    ? 'text-brand-secondary font-semibold'
                    : isScrolled
                    ? 'text-slate-600 hover:text-slate-900'
                    : 'text-slate-200 hover:text-white'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-secondary rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Actions: Lang Selector & CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md border text-xs font-mono transition-all cursor-pointer ${
                isScrolled
                  ? 'border-slate-200 text-slate-700 hover:bg-slate-50'
                  : 'border-white/20 text-white hover:bg-white/10'
              }`}
            >
              <Globe2 className="w-3.5 h-3.5" />
              <span>{language.toUpperCase()}</span>
            </button>
            
            <button
              onClick={() => handleItemClick('pricing')}
              className={`flex items-center gap-1 px-4 py-2 rounded-md text-xs font-semibold tracking-wide transition-all duration-300 transform active:scale-95 cursor-pointer shadow-sm ${
                isScrolled
                  ? 'bg-brand-secondary text-white hover:bg-brand-secondary/90'
                  : 'bg-white text-brand-primary hover:bg-slate-50'
              }`}
            >
              <span>{t('nav.cta.short')}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleLanguage}
              className={`flex sm:hidden items-center gap-1 px-2.5 py-1.5 rounded-md border text-[11px] font-mono transition-all ${
                isScrolled
                  ? 'border-slate-200 text-slate-700'
                  : 'border-white/20 text-white'
              }`}
            >
              <Globe2 className="w-3 h-3" />
              <span>{language.toUpperCase()}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors cursor-pointer ${
                isScrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-xl animate-fade-in">
          <div className="px-4 pt-3 pb-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-md text-base font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-slate-50 text-brand-secondary font-semibold border-l-4 border-brand-secondary pl-3'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3 px-4">
              <button
                onClick={() => {
                  toggleLanguage();
                  setIsOpen(false);
                }}
                className="flex items-center justify-between w-full py-2 text-sm text-slate-600"
              >
                <div className="flex items-center gap-2">
                  <Globe2 className="w-4 h-4 text-slate-400" />
                  <span>Bahasa / Language</span>
                </div>
                <span className="font-mono bg-slate-100 px-2 py-0.5 rounded text-xs text-slate-800 font-bold">{language.toUpperCase()}</span>
              </button>
              
              <button
                onClick={() => handleItemClick('pricing')}
                className="w-full bg-brand-secondary text-white py-3 rounded-md text-sm font-semibold text-center flex items-center justify-center gap-1.5 shadow-sm hover:bg-brand-secondary/90 cursor-pointer"
              >
                <span>{t('nav.cta')}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
