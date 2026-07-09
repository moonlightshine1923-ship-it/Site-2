import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Albums() {
  const { t } = useTranslation();
  // 24 photos prédéfinies
  const photos = Array.from({ length: 24 }, (_, i) => `/images/Album photo/photo ${i + 1}.jpg`);

  return (
    <div className="bg-[#F8F5F0] min-h-screen pb-24">
      {/* Page Header Banner */}
      <div className="page-header-banner">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold font-serif tracking-tight text-white mb-6">
            {t('nav.photoAlbum')}
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#C39B2E] to-[#E5C158] mx-auto rounded-full mb-4"></div>
          <p className="text-white/80 text-base max-w-2xl mx-auto font-normal">
            Découvrez en images les événements, rencontres et séminaires officiels de notre organisation.
          </p>
        </div>
      </div>

      {/* Grid Photos */}
      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {photos.map((src, i) => (
              <div key={i} className="relative overflow-hidden rounded-2xl shadow-md group cursor-pointer aspect-4/3 bg-gray-100 border border-gray-200/60">
                <img
                  src={src}
                  alt={`Photo ${i + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-out"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                    <i className="fas fa-camera text-[#C39B2E]"></i>
                    <span>Photo OPA #{i + 1}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
