import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher.jsx';

export default function Navbar() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navBg = scrolled
    ? 'bg-[#0A2540]/95 backdrop-blur-md shadow-2xl border-b border-white/10 py-1'
    : 'bg-gradient-to-b from-[#061526]/90 via-[#0A2540]/50 to-transparent backdrop-blur-sm py-3';

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 cursor-pointer group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#C39B2E] to-[#E5C158] rounded-full opacity-0 group-hover:opacity-40 blur transition duration-300"></div>
              <img
                src="/images/OPA.png"
                alt="Logo OPA"
                className="h-14 w-auto object-contain relative z-10 transform group-hover:scale-105 transition duration-300"
                onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/56x56/C39B2E/FFFFFF?text=OPA'; }}
              />
            </div>
            <div>
              <div className="font-extrabold text-2xl tracking-tight text-white flex items-center gap-1.5">
                <span>OPA</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C39B2E]"></span>
              </div>
              <div className="text-[10px] text-white/80 -mt-1 font-medium tracking-[1.5px] uppercase">
                {t('nav.subtitle')}
              </div>
            </div>
          </Link>

          {/* Menu Desktop */}
          <div className="hidden lg:flex items-center gap-x-6 text-sm font-semibold tracking-wide">
            {/* 1. OPA dropdown */}
            <div className="relative group">
              <button className="nav-link text-white flex items-center gap-1.5 py-2">
                <span>{t('nav.opa')}</span>
                <i className="fas fa-chevron-down text-[10px] text-[#C39B2E] transition-transform duration-300 group-hover:rotate-180"></i>
              </button>
              <div className="dropdown-menu absolute left-0 mt-2 w-64 bg-[#081A2F]/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/15 overflow-hidden p-1.5">
                <Link to="/mot-du-president" className="flex items-center justify-between px-4 py-3 text-white/90 hover:text-white hover:bg-gradient-to-r hover:from-[#C39B2E] hover:to-[#a8811a] rounded-xl transition-all duration-200 group/link">
                  <span>{t('nav.presidentWord')}</span>
                  <i className="fas fa-angle-right text-xs opacity-0 group-hover/link:opacity-100 transition-opacity"></i>
                </Link>
                <Link to="/organisation" className="flex items-center justify-between px-4 py-3 text-white/90 hover:text-white hover:bg-gradient-to-r hover:from-[#C39B2E] hover:to-[#a8811a] rounded-xl transition-all duration-200 group/link">
                  <span>{t('nav.presentation')}</span>
                  <i className="fas fa-angle-right text-xs opacity-0 group-hover/link:opacity-100 transition-opacity"></i>
                </Link>
              </div>
            </div>

            <Link to="/actualites" className="nav-link text-white py-2">{t('nav.news')}</Link>

            {/* Services dropdown */}
            <div className="relative group">
              <button className="nav-link text-white flex items-center gap-1.5 py-2">
                <span>{t('nav.services')}</span>
                <i className="fas fa-chevron-down text-[10px] text-[#C39B2E] transition-transform duration-300 group-hover:rotate-180"></i>
              </button>
              <div className="dropdown-menu absolute left-0 mt-2 w-64 bg-[#081A2F]/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/15 overflow-hidden p-1.5">
                <Link to="/#social" className="flex items-center justify-between px-4 py-3 text-white/90 hover:text-white hover:bg-gradient-to-r hover:from-[#C39B2E] hover:to-[#a8811a] rounded-xl transition-all duration-200 group/link">
                  <span>{t('nav.social')}</span>
                  <i className="fas fa-angle-right text-xs opacity-0 group-hover/link:opacity-100 transition-opacity"></i>
                </Link>
                <Link to="/#eco" className="flex items-center justify-between px-4 py-3 text-white/90 hover:text-white hover:bg-gradient-to-r hover:from-[#C39B2E] hover:to-[#a8811a] rounded-xl transition-all duration-200 group/link">
                  <span>{t('nav.economic')}</span>
                  <i className="fas fa-angle-right text-xs opacity-0 group-hover/link:opacity-100 transition-opacity"></i>
                </Link>
                <Link to="/#international" className="flex items-center justify-between px-4 py-3 text-white/90 hover:text-white hover:bg-gradient-to-r hover:from-[#C39B2E] hover:to-[#a8811a] rounded-xl transition-all duration-200 group/link">
                  <span>{t('nav.international')}</span>
                  <i className="fas fa-angle-right text-xs opacity-0 group-hover/link:opacity-100 transition-opacity"></i>
                </Link>
              </div>
            </div>

            {/* Communication dropdown */}
            <div className="relative group">
              <button className="nav-link text-white flex items-center gap-1.5 py-2">
                <span>{t('nav.communication')}</span>
                <i className="fas fa-chevron-down text-[10px] text-[#C39B2E] transition-transform duration-300 group-hover:rotate-180"></i>
              </button>
              <div className="dropdown-menu absolute left-0 mt-2 w-72 bg-[#081A2F]/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/15 overflow-visible p-1.5">
                <div className="relative group/event">
                  <Link to="/actualites" className="flex justify-between items-center px-4 py-3 text-white/90 hover:text-white hover:bg-gradient-to-r hover:from-[#C39B2E] hover:to-[#a8811a] rounded-xl transition-all duration-200">
                    <span>{t('nav.events')}</span>
                    <i className="fas fa-chevron-right text-xs text-[#C39B2E] group-hover/event:text-white"></i>
                  </Link>
                  <div className="absolute left-full top-0 ml-2 w-64 bg-[#081A2F]/98 backdrop-blur-xl rounded-2xl shadow-2xl opacity-0 invisible group-hover/event:opacity-100 group-hover/event:visible transition-all duration-300 border border-white/15 p-1.5">
                    <Link to="/seminaire" className="flex items-center justify-between px-4 py-3 text-white/90 hover:text-white hover:bg-gradient-to-r hover:from-[#C39B2E] hover:to-[#a8811a] rounded-xl transition-all duration-200 group/link">
                      <span>{t('nav.seminar2019')}</span>
                      <i className="fas fa-angle-right text-xs opacity-0 group-hover/link:opacity-100 transition-opacity"></i>
                    </Link>
                    <Link to="/conference" className="flex items-center justify-between px-4 py-3 text-white/90 hover:text-white hover:bg-gradient-to-r hover:from-[#C39B2E] hover:to-[#a8811a] rounded-xl transition-all duration-200 group/link">
                      <span>{t('nav.pressConference2024')}</span>
                      <i className="fas fa-angle-right text-xs opacity-0 group-hover/link:opacity-100 transition-opacity"></i>
                    </Link>
                    <Link to="/b2b" className="flex items-center justify-between px-4 py-3 text-white/90 hover:text-white hover:bg-gradient-to-r hover:from-[#C39B2E] hover:to-[#a8811a] rounded-xl transition-all duration-200 group/link">
                      <span>{t('nav.b2bEvents')}</span>
                      <i className="fas fa-angle-right text-xs opacity-0 group-hover/link:opacity-100 transition-opacity"></i>
                    </Link>
                  </div>
                </div>
                <Link to="/contribution" className="flex items-center justify-between px-4 py-3 text-white/90 hover:text-white hover:bg-gradient-to-r hover:from-[#C39B2E] hover:to-[#a8811a] rounded-xl transition-all duration-200 group/link">
                  <span>{t('nav.contributions')}</span>
                  <i className="fas fa-angle-right text-xs opacity-0 group-hover/link:opacity-100 transition-opacity"></i>
                </Link>
                <Link to="/albums" className="flex items-center justify-between px-4 py-3 text-white/90 hover:text-white hover:bg-gradient-to-r hover:from-[#C39B2E] hover:to-[#a8811a] rounded-xl transition-all duration-200 group/link">
                  <span>{t('nav.photoAlbum')}</span>
                  <i className="fas fa-angle-right text-xs opacity-0 group-hover/link:opacity-100 transition-opacity"></i>
                </Link>
              </div>
            </div>

            {/* Documentation dropdown */}
            <div className="relative group">
              <button className="nav-link text-white flex items-center gap-1.5 py-2">
                <span>{t('nav.documentation')}</span>
                <i className="fas fa-chevron-down text-[10px] text-[#C39B2E] transition-transform duration-300 group-hover:rotate-180"></i>
              </button>
              <div className="dropdown-menu absolute left-0 mt-2 w-72 bg-[#081A2F]/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/15 overflow-hidden p-1.5">
                <Link to="/startup" className="flex items-center justify-between px-4 py-3 text-white/90 hover:text-white hover:bg-gradient-to-r hover:from-[#C39B2E] hover:to-[#a8811a] rounded-xl transition-all duration-200 group/link">
                  <span>{t('nav.startupAlgeria')}</span>
                  <i className="fas fa-angle-right text-xs opacity-0 group-hover/link:opacity-100 transition-opacity"></i>
                </Link>
                <Link to="/loi-reglement" className="flex items-center justify-between px-4 py-3 text-white/90 hover:text-white hover:bg-gradient-to-r hover:from-[#C39B2E] hover:to-[#a8811a] rounded-xl transition-all duration-200 group/link">
                  <span>{t('nav.lawsRegulations')}</span>
                  <i className="fas fa-angle-right text-xs opacity-0 group-hover/link:opacity-100 transition-opacity"></i>
                </Link>
              </div>
            </div>

            <Link to="/#contact" className="nav-link text-white py-2">{t('nav.contact')}</Link>
          </div>

          {/* Boutons d'actions + Sélecteur de langue */}
          <div className="flex items-center gap-3 ml-4">
            <LanguageSwitcher />
            
            {/* Conteneur Côte à Côte pour Desktop */}
            <div className="hidden md:flex items-center gap-2.5">
              {/* Bouton Devenir Membre */}
              <Link
                to="/devenir-membre"
                className="group flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#D4AF37] via-[#C39B2E] to-[#b08b28] hover:brightness-110 text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 shadow-md hover:shadow-gold-glow transform hover:-translate-y-0.5 border border-[#E5C158]/30"
              >
                <i className="fas fa-user-plus text-xs group-hover:scale-110 transition-transform duration-200"></i>
                <span>{t('nav.becomeMember')}</span>
              </Link>

              {/* Bouton Demandes */}
              <Link
                to="/demandes"
                className="group flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 border border-white/20 backdrop-blur-md"
              >
                <i className="fas fa-paper-plane text-xs text-[#C39B2E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"></i>
                <span>{t('nav.request')}</span>
              </Link>
            </div>

            {/* Menu Mobile Trigger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-all"
              aria-label="Menu"
            >
              <i className={`fas ${mobileOpen ? 'fa-times' : 'fa-bars'} text-lg`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#061526]/98 backdrop-blur-2xl border-t border-white/10 max-h-[85vh] overflow-y-auto shadow-2xl animate-fade-in">
          <div className="px-6 py-6 flex flex-col gap-y-3 text-sm font-medium">
            
            <div className="text-[11px] font-bold text-[#C39B2E] uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C39B2E]"></span>
              <span>{t('nav.opa')}</span>
            </div>
            <Link to="/mot-du-president" onClick={() => setMobileOpen(false)} className="pl-4 py-1.5 text-white/80 hover:text-white hover:translate-x-1 transition-all flex items-center justify-between">
              <span>{t('nav.presidentWord')}</span>
              <i className="fas fa-chevron-right text-[10px] text-[#C39B2E]"></i>
            </Link>
            <Link to="/organisation" onClick={() => setMobileOpen(false)} className="pl-4 py-1.5 text-white/80 hover:text-white hover:translate-x-1 transition-all flex items-center justify-between">
              <span>{t('nav.presentation')}</span>
              <i className="fas fa-chevron-right text-[10px] text-[#C39B2E]"></i>
            </Link>

            <div className="text-[11px] font-bold text-[#C39B2E] uppercase tracking-widest flex items-center gap-2 mt-3">
              <span className="w-2 h-2 rounded-full bg-[#C39B2E]"></span>
              <span>{t('nav.news')}</span>
            </div>
            <Link to="/actualites" onClick={() => setMobileOpen(false)} className="pl-4 py-1.5 text-white/80 hover:text-white hover:translate-x-1 transition-all flex items-center justify-between">
              <span>{t('nav.news')}</span>
              <i className="fas fa-chevron-right text-[10px] text-[#C39B2E]"></i>
            </Link>

            <div className="text-[11px] font-bold text-[#C39B2E] uppercase tracking-widest flex items-center gap-2 mt-3">
              <span className="w-2 h-2 rounded-full bg-[#C39B2E]"></span>
              <span>{t('nav.services')}</span>
            </div>
            <Link to="/#social" onClick={() => setMobileOpen(false)} className="pl-4 py-1.5 text-white/80 hover:text-white hover:translate-x-1 transition-all flex items-center justify-between">
              <span>{t('nav.social')}</span>
              <i className="fas fa-chevron-right text-[10px] text-[#C39B2E]"></i>
            </Link>
            <Link to="/#eco" onClick={() => setMobileOpen(false)} className="pl-4 py-1.5 text-white/80 hover:text-white hover:translate-x-1 transition-all flex items-center justify-between">
              <span>{t('nav.economic')}</span>
              <i className="fas fa-chevron-right text-[10px] text-[#C39B2E]"></i>
            </Link>
            <Link to="/#international" onClick={() => setMobileOpen(false)} className="pl-4 py-1.5 text-white/80 hover:text-white hover:translate-x-1 transition-all flex items-center justify-between">
              <span>{t('nav.international')}</span>
              <i className="fas fa-chevron-right text-[10px] text-[#C39B2E]"></i>
            </Link>

            <div className="text-[11px] font-bold text-[#C39B2E] uppercase tracking-widest flex items-center gap-2 mt-3">
              <span className="w-2 h-2 rounded-full bg-[#C39B2E]"></span>
              <span>{t('nav.communication')}</span>
            </div>
            <Link to="/seminaire" onClick={() => setMobileOpen(false)} className="pl-4 py-1.5 text-white/80 hover:text-white hover:translate-x-1 transition-all flex items-center justify-between">
              <span>{t('nav.seminar2019')}</span>
              <i className="fas fa-chevron-right text-[10px] text-[#C39B2E]"></i>
            </Link>
            <Link to="/conference" onClick={() => setMobileOpen(false)} className="pl-4 py-1.5 text-white/80 hover:text-white hover:translate-x-1 transition-all flex items-center justify-between">
              <span>{t('nav.pressConference2024')}</span>
              <i className="fas fa-chevron-right text-[10px] text-[#C39B2E]"></i>
            </Link>
            <Link to="/b2b" onClick={() => setMobileOpen(false)} className="pl-4 py-1.5 text-white/80 hover:text-white hover:translate-x-1 transition-all flex items-center justify-between">
              <span>{t('nav.b2bEvents')}</span>
              <i className="fas fa-chevron-right text-[10px] text-[#C39B2E]"></i>
            </Link>
            <Link to="/contribution" onClick={() => setMobileOpen(false)} className="pl-4 py-1.5 text-white/80 hover:text-white hover:translate-x-1 transition-all flex items-center justify-between">
              <span>{t('nav.contributions')}</span>
              <i className="fas fa-chevron-right text-[10px] text-[#C39B2E]"></i>
            </Link>
            <Link to="/albums" onClick={() => setMobileOpen(false)} className="pl-4 py-1.5 text-white/80 hover:text-white hover:translate-x-1 transition-all flex items-center justify-between">
              <span>{t('nav.photoAlbum')}</span>
              <i className="fas fa-chevron-right text-[10px] text-[#C39B2E]"></i>
            </Link>

            <div className="text-[11px] font-bold text-[#C39B2E] uppercase tracking-widest flex items-center gap-2 mt-3">
              <span className="w-2 h-2 rounded-full bg-[#C39B2E]"></span>
              <span>{t('nav.documentation')}</span>
            </div>
            <Link to="/statut" onClick={() => setMobileOpen(false)} className="pl-4 py-1.5 text-white/80 hover:text-white hover:translate-x-1 transition-all flex items-center justify-between">
              <span>{t('nav.statuts')}</span>
              <i className="fas fa-chevron-right text-[10px] text-[#C39B2E]"></i>
            </Link>
            <Link to="/startup" onClick={() => setMobileOpen(false)} className="pl-4 py-1.5 text-white/80 hover:text-white hover:translate-x-1 transition-all flex items-center justify-between">
              <span>{t('nav.startupAlgeria')}</span>
              <i className="fas fa-chevron-right text-[10px] text-[#C39B2E]"></i>
            </Link>
            <Link to="/loi-reglement" onClick={() => setMobileOpen(false)} className="pl-4 py-1.5 text-white/80 hover:text-white hover:translate-x-1 transition-all flex items-center justify-between">
              <span>{t('nav.lawsRegulations')}</span>
              <i className="fas fa-chevron-right text-[10px] text-[#C39B2E]"></i>
            </Link>

            <div className="border-t border-white/10 my-3 pt-3"></div>
            <Link to="/#contact" onClick={() => setMobileOpen(false)} className="py-2 text-white font-bold hover:text-[#C39B2E] transition-all flex items-center gap-2">
              <i className="fas fa-envelope text-[#C39B2E]"></i>
              <span>{t('nav.contact')}</span>
            </Link>
            
            {/* Les deux boutons en version Mobile */}
            <div className="flex flex-col gap-3 mt-4 pb-4">
              <Link 
                to="/devenir-membre" 
                onClick={() => setMobileOpen(false)} 
                className="w-full text-center py-3 bg-gradient-to-r from-[#D4AF37] via-[#C39B2E] to-[#b08b28] text-white font-bold uppercase tracking-wider text-xs rounded-full shadow-lg flex items-center justify-center gap-2"
              >
                <i className="fas fa-user-plus"></i>
                <span>{t('nav.becomeMember')}</span>
              </Link>
              <Link 
                to="/demandes" 
                onClick={() => setMobileOpen(false)} 
                className="w-full text-center py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold uppercase tracking-wider text-xs rounded-full flex items-center justify-center gap-2"
              >
                <i className="fas fa-paper-plane text-[#C39B2E]"></i>
                <span>{t('nav.request')}</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
