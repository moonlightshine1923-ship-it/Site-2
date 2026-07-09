import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

/**
 * Composant placeholder pour les pages dont le contenu détaillé
 * sera ajouté ultérieurement. Affiche un titre et un message
 * traduits + un bouton de retour.
 */
export default function PagePlaceholder({ titleKey, image }) {
  const { t } = useTranslation();
  return (
    <div className="bg-[#F8F5F0] min-h-screen pb-24">
      {/* Page Header Banner */}
      <div className="page-header-banner">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <span className="badge-gold mb-4">{t('nav.documentation')}</span>
          <h1 className="text-4xl md:text-6xl font-extrabold font-serif tracking-tight text-white mb-6">
            {t(titleKey)}
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#C39B2E] to-[#E5C158] mx-auto rounded-full"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 -mt-10 relative z-20 text-center">
        {image && (
          <div className="modern-card bg-white p-4 rounded-3xl shadow-2xl mb-10 inline-block">
            <img src={image} alt="" className="mx-auto rounded-2xl max-h-96 object-cover" />
          </div>
        )}

        <div className="modern-card bg-white p-10 sm:p-14 rounded-3xl shadow-xl border border-gray-100">
          <div className="w-16 h-16 rounded-2xl bg-[#C39B2E]/10 text-[#C39B2E] flex items-center justify-center text-3xl mx-auto mb-6">
            <i className="fas fa-hourglass-half"></i>
          </div>
          <h3 className="text-2xl font-bold font-serif text-[#0A2540] mb-3">{t('pages.comingSoon')}</h3>
          <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">{t('pages.comingSoonDesc')}</p>
        </div>

        <div className="mt-12">
          <Link
            to="/"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#0A2540] to-[#123B6D] hover:from-[#C39B2E] hover:to-[#a8811a] text-white rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5"
          >
            <i className="fas fa-arrow-left text-[#C39B2E] group-hover:-translate-x-1 group-hover:text-white transition-transform"></i>
            <span>{t('pages.backHome')}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
