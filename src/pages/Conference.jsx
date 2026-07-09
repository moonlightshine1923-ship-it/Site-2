import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ImageLightbox from '../components/ImageLightbox';

export default function Conference() {
  const { t, i18n } = useTranslation();
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const photoIds = [1, 2, 3, 4, 6, 7, 8];
  const galleryImages = photoIds.map((id) => ({
    src: `/images/Conference/photo ${id}.jpg`,
    alt: `Conférence de Presse OPA - ${id}`,
    title: `Photo Conférence #${id}`
  }));

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
              {galleryImages.map((photo, index) => (
                <button
                  type="button"
                  key={photo.src}
                  onClick={() => setLightboxIndex(index)}
                  className="shrink-0 group text-left cursor-zoom-in focus:outline-none focus:ring-4 focus:ring-[#C39B2E]/30 rounded-3xl"
                  title="Cliquer pour agrandir"
                >
                  <div className="overflow-hidden rounded-3xl shadow-md border border-gray-200/60 bg-gray-100 relative">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-80 h-60 object-cover transform group-hover:scale-110 transition duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition flex items-center justify-center">
                      <i className="fas fa-search-plus text-white text-3xl opacity-0 group-hover:opacity-100 transition"></i>
                    </div>
                  </div>
                  <div className="mt-3 text-center text-xs font-bold text-[#0A2540] uppercase tracking-wider">
                    {photo.title}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ImageLightbox
        images={galleryImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onChange={setLightboxIndex}
      />
    </div>
  );
}
