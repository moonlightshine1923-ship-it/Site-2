import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Contribution() {
  const { t, i18n } = useTranslation();

  const photoIds = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29
  ];

  return (
    <div id="contributions-opa" className="bg-[#F8F5F0] min-h-screen pb-24">
      {/* Page Header Banner */}
      <div className="page-header-banner">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          
          <h1 className="text-4xl md:text-6xl font-extrabold font-serif tracking-tight text-white mb-6">
            {t('contribution.title')}
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#C39B2E] to-[#E5C158] mx-auto rounded-full mb-6"></div>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-normal leading-relaxed">
            {t('contribution.subtitle')}
          </p>
        </div>
      </div>

      {/* Contenu Principal */}
      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-20 space-y-12">
        {/* Image */}
        <div className="flex justify-center">
          <div className="modern-card bg-white p-4 sm:p-6 rounded-3xl shadow-2xl border border-gray-100 w-full max-w-4xl">
            <img
              src="/images/Contrubution/Contribution opA.jpg"
              alt={t('contribution.title')}
              className="w-full h-[350px] sm:h-[500px] rounded-2xl object-cover shadow-inner"
            />
          </div>
        </div>

        {/* Article */}
        <div
          className="modern-card bg-white p-8 sm:p-14 rounded-3xl shadow-xl border border-gray-100"
          dir={i18n.dir()}
        >
          <h2 className="text-2xl sm:text-4xl font-bold font-serif text-[#0A2540] mb-8 pb-6 border-b border-gray-100">
            {t('contribution.heading2')}
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed text-base sm:text-lg font-normal">
            <p className="bg-[#F8F5F0] p-6 rounded-2xl border-l-4 border-[#C39B2E] font-medium text-[#0A2540]">{t('contribution.p1')}</p>
            <p>{t('contribution.p2')}</p>

            <div className="bg-gradient-to-br from-[#061526] via-[#0A2540] to-[#123B6D] text-white text-center py-10 px-8 rounded-3xl my-10 shadow-2xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#C39B2E]/10 rounded-full blur-3xl pointer-events-none"></div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-serif text-[#E5C158] leading-snug">
                {t('contribution.banner')}
              </h3>
            </div>

            <p>{t('contribution.p3')}</p>
            <p>{t('contribution.p4')}</p>
          </div>
        </div>

        {/* Galerie Photos */}
        <div className="modern-card bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-gray-100">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="badge-gold mb-3">Rencontres & Initiatives</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-[#0A2540]">
              {t('contribution.galleryTitle')}
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#C39B2E] to-[#E5C158] mx-auto rounded-full mt-4"></div>
            <p className="text-gray-600 mt-4 text-base sm:text-lg">
              {t('contribution.gallerySubtitle')}
            </p>
          </div>

          {/* Pellicule */}
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-6 px-4 scroll-smooth">
              {photoIds.map((id) => (
                <div
                  key={id}
                  className="w-80 bg-white rounded-3xl overflow-hidden shadow-md border border-gray-200/60 shrink-0 group hover:shadow-xl transition duration-300"
                >
                  <div className="overflow-hidden h-56 bg-gray-100">
                    <img
                      src={`/images/Contrubution/photo ${id}.jpg`}
                      alt={`Contribution OPA - ${id}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                    />
                  </div>
                  <div className="p-4 text-center bg-[#F8F5F0] border-t border-gray-100">
                    <p className="text-[#0A2540] font-bold text-sm">
                      {t('contribution.photoLabel')} #{id}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vidéo */}
        <div className="modern-card bg-[#061526] text-white p-8 sm:p-12 rounded-3xl shadow-2xl border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C39B2E]/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="text-center max-w-3xl mx-auto mb-10 relative z-10">
            <span className="badge-gold mb-3">Média & Interview</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-white">
              {t('contribution.videoTitle')}
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#C39B2E] to-[#E5C158] mx-auto rounded-full mt-4"></div>
          </div>

          <div className="bg-white/5 p-4 sm:p-6 rounded-3xl shadow-2xl border border-white/15 max-w-4xl mx-auto relative z-10">
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full rounded-2xl shadow-inner"
                src="https://www.youtube.com/embed/xJtC9QnkjuI"
                title="Contribution de l'OPA"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
