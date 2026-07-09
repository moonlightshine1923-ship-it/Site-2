import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function B2B() {
  const { t } = useTranslation();
  const [mainPhoto, setMainPhoto] = useState('/images/B2B/photo 1.jpg');

  const photoIds = [
    1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32
  ];

  return (
    <div className="bg-[#F8F5F0] min-h-screen pb-24">
      {/* Page Header Banner */}
      <div className="page-header-banner">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold font-serif tracking-tight text-white mb-6">
            {t('b2b.title')}
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#C39B2E] to-[#E5C158] mx-auto rounded-full mb-6"></div>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-normal leading-relaxed">
            {t('b2b.subtitle')}
          </p>
        </div>
      </div>

      {/* Contenu Principal */}
      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-20 space-y-12">
        {/* PHOTO PRINCIPALE */}
        <div className="flex justify-center">
          <div className="modern-card bg-white p-4 sm:p-6 rounded-3xl shadow-2xl border border-gray-100 w-full max-w-5xl">
            <img
              src="/images/B2B/photo principale.jpg"
              alt={t('b2b.title')}
              className="w-full h-[400px] sm:h-[550px] rounded-2xl object-cover shadow-inner"
            />
          </div>
        </div>

        {/* ARTICLE */}
        <div className="modern-card bg-white p-8 sm:p-14 rounded-3xl shadow-xl border border-gray-100">
          <h2 className="text-2xl sm:text-4xl font-bold font-serif text-[#0A2540] mb-8 text-center pb-6 border-b border-gray-100" dir="rtl">
            تباحث حول فرص الشراكة والإستثمار بين الجزائر و تركيا
          </h2>

          <div dir="rtl" className="text-gray-700 text-base sm:text-lg leading-loose space-y-6 font-normal">
            <p className="bg-[#F8F5F0] p-6 rounded-2xl border-r-4 border-[#C39B2E]">{t('b2b.arp1')}</p>
            <p>{t('b2b.arp2')}</p>
            <p>{t('b2b.arp3')}</p>
            <p>{t('b2b.arp4')}</p>
          </div>

          {/* VERSION FR / AUTRE LANGUE */}
          <div className="mt-14 border-t border-gray-200 pt-12">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-3 h-8 bg-gradient-to-b from-[#C39B2E] to-[#123B6D] rounded-full"></span>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#0A2540]">
                {t('b2b.frHeading')}
              </h3>
            </div>

            <div className="space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed font-normal pl-4 border-l-2 border-gray-100">
              <p className="font-medium text-[#0A2540]">{t('b2b.frp1')}</p>
              <p>{t('b2b.frp2')}</p>
              <p>{t('b2b.frp3')}</p>
              <p>{t('b2b.frp4')}</p>
            </div>
          </div>
        </div>

        {/* GALERIE INTERACTIVE */}
        <div className="modern-card bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-gray-100">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-[#0A2540]">
              {t('b2b.galleryTitle')}
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#C39B2E] to-[#E5C158] mx-auto rounded-full mt-4"></div>
          </div>

          {/* IMAGE PRINCIPALE SÉLECTIONNÉE */}
          <div className="flex justify-center mb-8">
            <div className="w-full max-w-5xl bg-[#F8F5F0] p-3 rounded-2xl border border-gray-200 shadow-inner">
              <img
                src={mainPhoto}
                alt="B2B OPA"
                className="w-full h-[350px] sm:h-[500px] object-cover rounded-xl transition-all duration-300 shadow-md"
              />
            </div>
          </div>

          {/* MINIATURES */}
          <div className="flex gap-4 overflow-x-auto pb-6 px-2 justify-start scroll-smooth">
            {photoIds.map((id) => {
              const imgSrc = `/images/B2B/photo ${id}.jpg`;
              const isSelected = mainPhoto === imgSrc;
              return (
                <img
                  key={id}
                  src={imgSrc}
                  alt={`Thumb ${id}`}
                  onClick={() => setMainPhoto(imgSrc)}
                  className={`w-32 h-24 object-cover rounded-2xl cursor-pointer shrink-0 transition-all duration-300 ${
                    isSelected 
                      ? 'border-4 border-[#C39B2E] scale-105 shadow-xl opacity-100 ring-2 ring-[#C39B2E]/30' 
                      : 'opacity-60 hover:opacity-100 hover:scale-105 border border-gray-200'
                  }`}
                />
              );
            })}
          </div>
        </div>

        {/* VIDEO */}
        <div className="text-center pt-4">
          <a
            href="https://youtu.be/7uIgtCD_AG4"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white rounded-full text-base font-bold uppercase tracking-wider transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
              <i className="fab fa-youtube"></i>
            </div>
            <span>{t('b2b.videoBtn')}</span>
            <i className="fas fa-external-link-alt text-xs opacity-70"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
