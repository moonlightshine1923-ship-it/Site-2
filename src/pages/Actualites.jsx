import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const articles = [
  { id: 1, img: '/images/Actualites/Actualites 1.webp', cat: 'category', titleKey: 'art1Title', descKey: 'art1Desc' },
  { id: 2, img: '/images/Actualites/Actualites 4.jpeg', cat: 'category', titleKey: 'art2Title', descKey: 'art2Desc' },
  { id: 3, img: '/images/Actualites/Actualites 2.jpeg', cat: 'categoryMemoire', titleKey: 'art3Title', descKey: 'art3Desc' },
  { id: 4, img: '/images/Actualites/Actualites 6.jpg', cat: 'categoryAgri', titleKey: 'art4Title', descKey: 'art4Desc' },
  { id: 5, img: '/images/Actualites/Actualites 3.jpeg', cat: 'categoryEco', titleKey: 'art5Title', descKey: 'art5Desc' },
  { id: 6, img: '/images/photo opa 3.jpeg', cat: 'categoryDev', titleKey: 'art6Title', descKey: 'art6Desc' },
  { id: 7, img: '/images/Actualites/Actualites 5.jpg', cat: 'categoryAgri', titleKey: 'art7Title', descKey: 'art7Desc' }
];

export default function Actualites() {
  const { t } = useTranslation();

  return (
    <div className="bg-[#F8F5F0] min-h-screen pb-24">
      {/* Page Header Banner */}
      <div className="page-header-banner">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold font-serif tracking-tight text-white mb-6">
            {t('actualites.title')}
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#C39B2E] to-[#E5C158] mx-auto rounded-full mb-6"></div>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-normal leading-relaxed">
            {t('actualites.intro')}
          </p>
        </div>
      </div>

      {/* Grid Articles */}
      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map(a => (
            <article key={a.id} className="modern-card bg-white rounded-3xl overflow-hidden border border-gray-100 flex flex-col justify-between group hover:shadow-2xl transition duration-500">
              <div>
                <div className="relative overflow-hidden h-64">
                  <img src={a.img} alt="" className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-out" />
                  <div className="absolute top-4 left-4 bg-[#0A2540]/90 backdrop-blur-md text-[#E5C158] text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-white/10 shadow-lg">
                    {t(`actualites.${a.cat}`)}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold font-serif text-[#0A2540] group-hover:text-[#C39B2E] transition-colors leading-snug mb-3">
                    {t(`actualites.${a.titleKey}`)}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
                    {t(`actualites.${a.descKey}`)}
                  </p>
                </div>
              </div>
              <div className="px-8 pb-8 pt-4 border-t border-gray-50 flex items-center justify-between">
                <Link
                  to={`/article/${a.id}`}
                  className="group/btn inline-flex items-center gap-2 text-xs font-bold text-[#0A2540] uppercase tracking-wider hover:text-[#C39B2E] transition-colors"
                >
                  <span>{t('actualites.readMore')}</span>
                  <i className="fas fa-arrow-right text-[10px] text-[#C39B2E] group-hover/btn:translate-x-1 transition-transform"></i>
                </Link>
                <span className="text-[11px] font-mono text-gray-400">OPA Actus</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
