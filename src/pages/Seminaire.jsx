import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Seminaire() {
  const { t, i18n } = useTranslation();

  const opexPhotos = Array.from({ length: 30 }, (_, i) => `/images/Opex/photo ${i + 1}.jpg`);

  return (
    <div className="bg-[#F8F5F0] min-h-screen pb-24">
      {/* Page Header Banner */}
      <div className="page-header-banner">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold font-serif tracking-tight text-white mb-6">
            {t('seminaire.title')}
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#C39B2E] to-[#E5C158] mx-auto rounded-full mb-6"></div>
          <p className="text-lg md:text-xl text-[#E5C158] font-semibold max-w-3xl mx-auto">
            {t('seminaire.subtitle')}
          </p>
        </div>
      </div>

      {/* Contenu Principal */}
      <div className="max-w-6xl mx-auto px-6 -mt-10 relative z-20 space-y-12">
        {/* Photo principale */}
        <div className="flex justify-center">
          <div className="modern-card bg-white p-4 sm:p-6 rounded-3xl shadow-2xl border border-gray-100 w-full max-w-4xl">
            <img
              src="/images/Opex/Affiche-AR-OPEX-2024.jpeg"
              alt={t('seminaire.title')}
              className="w-full h-[400px] sm:h-[550px] rounded-2xl object-cover shadow-inner"
            />
          </div>
        </div>

        {/* Contenu */}
        <div
          className="modern-card bg-white p-8 sm:p-14 rounded-3xl shadow-xl border border-gray-100"
          dir={i18n.dir()}
        >
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-100">
            <div className="w-12 h-12 rounded-xl bg-[#0A2540] text-[#E5C158] flex items-center justify-center text-xl">
              <i className="fas fa-chalkboard-teacher"></i>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0A2540]">Rapport & Synthèse du Séminaire</h2>
          </div>

          <div className="space-y-6 text-gray-700 leading-relaxed text-base sm:text-lg font-normal">
            <p className="bg-[#F8F5F0] p-6 rounded-2xl border-l-4 border-[#C39B2E] font-medium text-[#0A2540]">{t('seminaire.p1')}</p>
            <p>{t('seminaire.p2')}</p>
            <p>{t('seminaire.p3')}</p>
            <p>{t('seminaire.p4')}</p>
            <p>{t('seminaire.p5')}</p>
            <p>{t('seminaire.p6')}</p>
            <p>{t('seminaire.p7')}</p>
            <p>{t('seminaire.p8')}</p>
          </div>
        </div>

        {/* GALERIE OPEX */}
        <div className="modern-card bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-gray-100">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-[#0A2540]">
              {t('seminaire.galleryTitle')}
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#C39B2E] to-[#E5C158] mx-auto rounded-full mt-4"></div>
          </div>

          <div className="relative">
            <div
              id="opexGallery"
              className="flex gap-6 overflow-x-auto pb-6 px-4 scroll-smooth"
            >
              {opexPhotos.map((src, i) => (
                <div key={i} className="shrink-0 group">
                  <div className="overflow-hidden rounded-3xl shadow-md border border-gray-200/60 bg-gray-100">
                    <img
                      src={src}
                      alt={`OPEX 2024 - ${i + 1}`}
                      className="w-80 h-60 object-cover transform group-hover:scale-110 transition duration-500 ease-out"
                    />
                  </div>
                  <div className="mt-3 text-center text-xs font-bold text-[#0A2540] uppercase tracking-wider">
                    OPEX 2024 #{i + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
