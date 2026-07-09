import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LoiReglement() {
  const { t, i18n } = useTranslation();

  const items = [
    { id: 'item1', link: 'https://www.ilo.org/dyn/natlex/docs/WEBTEXT/9557/64805/F97DZA01.htm' },
    { id: 'item2' },
    { id: 'item3' },
    { id: 'item4' },
    { id: 'item5' },
    { id: 'item6' },
    { id: 'item7' },
    { id: 'item8' },
    { id: 'item9' },
    { id: 'item10' },
    { id: 'item11' },
    { id: 'item12' }
  ];

  return (
    <div id="lois-reglements" className="bg-[#F8F5F0] min-h-screen pb-24">
      {/* Page Header Banner */}
      <div className="page-header-banner">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold font-serif tracking-tight text-white mb-6">
            {t('loireglement.title')}
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#C39B2E] to-[#E5C158] mx-auto rounded-full mb-6"></div>
          <p className="text-lg md:text-xl text-white/80 max-w-4xl mx-auto font-normal leading-relaxed">
            {t('loireglement.subtitle')}
          </p>
        </div>
      </div>

      {/* Contenu Principal */}
      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-20 space-y-12">
        {/* Code des marchés publics */}
        <div
          className="bg-gradient-to-br from-[#061526] via-[#0A2540] to-[#123B6D] text-white p-8 sm:p-12 rounded-3xl shadow-2xl border border-white/15 relative overflow-hidden"
          dir={i18n.dir()}
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C39B2E]/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-[#C39B2E]/20 text-[#E5C158] flex items-center justify-center text-2xl shrink-0">
              <i className="fas fa-balance-scale"></i>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-white">
              {t('loireglement.codeTitle')}
            </h2>
          </div>
          <p className="text-base sm:text-lg text-white/90 leading-relaxed font-normal pl-2 border-l-2 border-[#C39B2E]/50">
            {t('loireglement.codeDesc')}
          </p>
        </div>

        {/* Liste des lois et règlements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" dir={i18n.dir()}>
          {items.map((item, idx) => (
            <div
              key={item.id}
              className="modern-card bg-white p-8 sm:p-10 rounded-3xl border border-gray-100 flex flex-col justify-between group hover:shadow-2xl transition duration-500"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C39B2E] bg-[#C39B2E]/10 px-3.5 py-1 rounded-full">
                    Texte Légal #{idx + 1}
                  </span>
                  <i className="fas fa-file-contract text-gray-300 group-hover:text-[#C39B2E] transition-colors text-lg"></i>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#0A2540] group-hover:text-[#C39B2E] transition-colors leading-snug">
                  {t(`loireglement.items.${item.id}.title`)}
                </h3>
                <p className="text-gray-600 mt-4 text-sm sm:text-base leading-relaxed">
                  {t(`loireglement.items.${item.id}.desc`)}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#0A2540] to-[#123B6D] hover:from-[#C39B2E] hover:to-[#a8811a] text-white rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md"
                  >
                    <span>{t(`loireglement.items.${item.id}.btn`)}</span>
                    <i className="fas fa-external-link-alt text-[10px] group-hover/btn:translate-x-0.5 transition-transform"></i>
                  </a>
                ) : (
                  <span className="text-xs text-gray-500 font-semibold bg-gray-100 px-4 py-2 rounded-full flex items-center gap-2">
                    <i className="fas fa-history text-[#C39B2E]"></i>
                    <span>{t(`loireglement.items.${item.id}.date`)}</span>
                  </span>
                )}
                <span className="text-[11px] font-mono text-gray-400">OPA Doc</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
