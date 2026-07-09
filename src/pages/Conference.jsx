import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Conference() {
  const { t, i18n } = useTranslation();

  const photoIds = [1, 2, 3, 4, 6, 7, 8];

  return (
    <div className="bg-[#F8F5F0] min-h-screen pb-24">
      {/* Page Header Banner */}
      <div className="page-header-banner">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold font-serif tracking-tight text-white mb-6">
            {t('conference.title')}
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#C39B2E] to-[#E5C158] mx-auto rounded-full mb-6"></div>
          <p className="text-lg md:text-xl text-[#E5C158] font-semibold max-w-3xl mx-auto">
            {t('conference.subtitle')}
          </p>
        </div>
      </div>

      {/* Contenu Principal */}
      <div className="max-w-6xl mx-auto px-6 -mt-10 relative z-20 space-y-12">
        {/* Article */}
        <div
          className="modern-card bg-white p-8 sm:p-14 rounded-3xl shadow-xl border border-gray-100"
          dir={i18n.dir()}
        >
          <div className="space-y-8 text-gray-700 leading-relaxed text-base sm:text-lg font-normal">
            <p className="bg-[#F8F5F0] p-6 rounded-2xl border-l-4 border-[#C39B2E] font-medium text-[#0A2540]">{t('conference.p1')}</p>

            <div className="bg-gradient-to-br from-[#061526] via-[#0A2540] to-[#123B6D] text-white text-center py-10 px-8 rounded-3xl my-10 shadow-2xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#C39B2E]/10 rounded-full blur-3xl pointer-events-none"></div>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-serif text-[#E5C158]">
                {t('conference.infoTitle')}
              </h2>
              <div className="w-16 h-1 bg-white/20 mx-auto rounded-full my-4"></div>
              <p className="text-white/90 text-lg sm:text-xl font-medium tracking-wide">
                {t('conference.infoDate')}
              </p>
            </div>

            <p>{t('conference.p2')}</p>
            <p>{t('conference.p3')}</p>
            <p>{t('conference.p4')}</p>
            <p>{t('conference.p5')}</p>
            <p>{t('conference.p6')}</p>
          </div>
        </div>

        {/* Galerie */}
        <div className="modern-card bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-gray-100">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-[#0A2540]">
              {t('conference.galleryTitle')}
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#C39B2E] to-[#E5C158] mx-auto rounded-full mt-4"></div>
          </div>

          <div className="relative">
            <div
              id="conferenceGallery"
              className="flex gap-6 overflow-x-auto pb-6 px-4 scroll-smooth"
            >
              {photoIds.map((id) => (
                <div key={id} className="shrink-0 group">
                  <div className="overflow-hidden rounded-3xl shadow-md border border-gray-200/60 bg-gray-100">
                    <img
                      src={`/images/Conference/photo ${id}.jpg`}
                      alt={`Conférence de Presse OPA - ${id}`}
                      className="w-80 h-60 object-cover transform group-hover:scale-110 transition duration-500 ease-out"
                    />
                  </div>
                  <div className="mt-3 text-center text-xs font-bold text-[#0A2540] uppercase tracking-wider">
                    Photo Conférence #{id}
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
