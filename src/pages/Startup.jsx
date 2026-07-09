import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Startup() {
  const { t, i18n } = useTranslation();

  return (
    <div id="startup" className="bg-[#F8F5F0] min-h-screen pb-24">
      {/* Page Header Banner */}
      <div className="page-header-banner">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold font-serif tracking-tight text-white mb-6">
            {t('startup.title')}
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#C39B2E] to-[#E5C158] mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Contenu Principal */}
      <div className="max-w-6xl mx-auto px-6 -mt-10 relative z-20 space-y-12">
        {/* Image */}
        <div className="flex justify-center">
          <div className="modern-card bg-white p-4 sm:p-6 rounded-3xl shadow-2xl border border-gray-100 w-full max-w-2xl">
            <img
              src="/images/Startup/START-UP3.png"
              alt={t('startup.title')}
              className="w-full h-auto rounded-2xl object-cover shadow-inner"
            />
          </div>
        </div>

        {/* Texte */}
        <div
          className="modern-card bg-white p-8 sm:p-14 rounded-3xl shadow-xl border border-gray-100"
          dir={i18n.dir()}
        >
          <div className="text-center max-w-3xl mx-auto mb-10 pb-6 border-b border-gray-100">
            <h2 className="text-2xl sm:text-4xl font-extrabold font-serif text-[#0A2540]">
              {t('startup.subtitle')}
            </h2>
          </div>

          <div className="space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed font-normal">
            <p className="bg-[#F8F5F0] p-6 rounded-2xl border-l-4 border-[#C39B2E] font-medium text-[#0A2540]">{t('startup.p1')}</p>
            <p>{t('startup.p2')}</p>
            <p>{t('startup.p3')}</p>
            <p>{t('startup.p4')}</p>
            <p>{t('startup.p5')}</p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between bg-[#F8F5F0] p-6 rounded-2xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#C39B2E]/20 text-[#C39B2E] flex items-center justify-center font-bold">🚀</div>
              <div className="text-xs sm:text-sm font-bold text-[#0A2540]">Initiative Startup Algérie</div>
            </div>
            <span className="text-xs text-gray-500 font-mono">OPA Documentation</span>
          </div>
        </div>
      </div>
    </div>
  );
}
