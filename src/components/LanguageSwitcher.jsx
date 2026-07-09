import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { LANGUAGES } from '../i18n.js';

/**
 * Sélecteur de langue affiché dans la navbar.
 * Affiche le drapeau de la langue active + un menu déroulant
 * avec toutes les langues disponibles.
 */
export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const current = LANGUAGES.find(l => l.code === i18n.language) || LANGUAGES[0];

  // Ferme le menu si on clique en dehors
  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  return (
    <div className="lang-selector" ref={ref}>
      <button className="lang-current group" onClick={() => setOpen(!open)} aria-label="Changer de langue">
        <span className="lang-flag transform group-hover:scale-110 transition-transform duration-200">{current.flag}</span>
        <span className="font-bold tracking-wider">{current.code.toUpperCase()}</span>
        <i className={`fas fa-chevron-down text-[10px] transition-transform duration-300 ${open ? 'rotate-180 text-[#C39B2E]' : 'opacity-70'}`}></i>
      </button>

      {open && (
        <div className="lang-dropdown animate-fade-in shadow-2xl border border-white/20">
          {LANGUAGES.map(lang => (
            <button
              key={lang.code}
              className={`lang-option flex items-center justify-between w-full px-4 py-3 transition-all duration-200 ${
                lang.code === current.code ? 'active bg-[#C39B2E]/20 text-[#C39B2E] font-bold' : 'hover:bg-[#C39B2E] hover:text-white'
              }`}
              onClick={() => changeLanguage(lang.code)}
            >
              <div className="flex items-center gap-3">
                <span className="lang-flag text-lg">{lang.flag}</span>
                <span className="text-sm">{lang.label}</span>
              </div>
              {lang.code === current.code && (
                <i className="fas fa-check text-xs text-[#C39B2E]"></i>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
