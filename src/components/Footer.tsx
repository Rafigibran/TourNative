import { Globe2, MessageSquare, Mail, MapPin, Sparkles, Phone } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Logo } from './Logo';

interface FooterProps {
  onNavClick: (sectionId: string) => void;
}

export default function Footer({ onNavClick }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const { language, t } = useLanguage();

  return (
    <footer className="bg-brand-dark text-slate-400 border-t border-slate-900 pt-16 pb-8 text-left relative z-10">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-12">
          
          {/* Logo & Bio Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => onNavClick('hero')}>
              <Logo className="w-10 h-10 flex-shrink-0" />
              <div className="flex flex-col">
                <span className="text-white font-sans text-xl font-black tracking-tight leading-none">
                  Tour<span className="text-brand-accent">Native</span>
                </span>
                <span className="text-[9px] font-mono tracking-[0.25em] uppercase text-slate-500 mt-1.5">
                  SEWA WEBSITE TRAVEL
                </span>
              </div>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              {t('footer.desc')}
            </p>

            <div className="flex gap-3 pt-2">
              <a href="#" className="p-2 bg-slate-900 hover:bg-brand-secondary/20 hover:text-white rounded transition-colors" title="Instagram">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" className="p-2 bg-slate-900 hover:bg-brand-secondary/20 hover:text-white rounded transition-colors" title="Facebook">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
              <a href="#" className="p-2 bg-slate-900 hover:bg-brand-secondary/20 hover:text-white rounded transition-colors" title="LinkedIn">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white font-mono text-xs font-bold uppercase tracking-wider">{t('footer.nav')}</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button onClick={() => onNavClick('hero')} className="hover:text-white cursor-pointer transition-colors">{t('nav.home')}</button>
              </li>
              <li>
                <button onClick={() => onNavClick('features')} className="hover:text-white cursor-pointer transition-colors">{t('nav.features')}</button>
              </li>
              <li>
                <button onClick={() => onNavClick('templates')} className="hover:text-white cursor-pointer transition-colors">{t('nav.templates')}</button>
              </li>
              <li>
                <button onClick={() => onNavClick('pricing')} className="hover:text-white cursor-pointer transition-colors">{t('nav.pricing')}</button>
              </li>
              <li>
                <button onClick={() => onNavClick('faq')} className="hover:text-white cursor-pointer transition-colors">{t('nav.faq')}</button>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-white font-mono text-xs font-bold uppercase tracking-wider">{t('footer.contact')}</h4>
            <ul className="space-y-3.5 text-xs sm:text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-secondary shrink-0 mt-0.5" />
                <span>Rempung, Lombok Timur, NTB.</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-secondary shrink-0" />
                <span>+6287788642932/span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-secondary shrink-0" />
                <span>support@tournative.xyz</span>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom copyright details */}
        <div className="border-t border-slate-900 pt-8 mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500">
            {language === 'id' 
              ? `© ${currentYear} TourNative (PT TourNative Global Teknologi). Hak Cipta Dilindungi Undang-Undang.` 
              : `© ${currentYear} TourNative (PT TourNative Global Technology). All Rights Reserved.`}
          </p>
          <div className="flex gap-6 text-slate-500">
            <a href="#" className="hover:text-white">{language === 'id' ? 'Syarat Ketentuan' : 'Terms & Conditions'}</a>
            <a href="#" className="hover:text-white">{language === 'id' ? 'Kebijakan Privasi' : 'Privacy Policy'}</a>
            <a href="#" className="hover:text-white">SLA Server</a>
          </div>
        </div>

      </div>

    </footer>
  );
}
