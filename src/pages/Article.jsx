import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Article() {
  const { id } = useParams();
  const { t, i18n } = useTranslation();

  const articleImages = {
    1: '/images/Actualites/Actualites 1.webp',
    2: '/images/Actualites/Actualites 4.jpeg',
    3: '/images/Actualites/Actualites 2.jpeg',
    4: '/images/Actualites/Actualites 6.jpg',
    5: '/images/Actualites/Actualites 3.jpeg',
    6: '/images/photo opa 3.jpeg',
    7: '/images/Actualites/Actualites 5.jpg'
  };

  const currentId = id && parseInt(id) >= 1 && parseInt(id) <= 7 ? parseInt(id) : 1;
  const artKey = `art${currentId}`;

  // Helper pour récupérer la source de l'article
  const getSource = (num) => {
    switch (num) {
      case 1:
      case 4:
      case 7:
        return t('articlePages.sourceAps');
      case 2:
        return t('articlePages.sourceJeuneIndep');
      case 5:
        return t('articlePages.sourceAhk');
      case 6:
        return t('articlePages.sourceDjazagro');
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#F8F5F0] min-h-screen pb-24">
      {/* Page Header Banner */}
      <div className="page-header-banner">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <Link
            to="/actualites"
            className="inline-flex items-center gap-2 text-[#E5C158] hover:text-white transition mb-6 text-xs font-bold uppercase tracking-widest bg-white/10 px-4 py-2 rounded-full border border-white/15"
          >
            <i className="fas fa-arrow-left"></i>
            <span>{t('articlePages.backNews')}</span>
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif tracking-tight text-white leading-tight mb-6">
            {t(`articlePages.${artKey}.title`)}
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#C39B2E] to-[#E5C158] mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Contenu Principal */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-20 space-y-12">
        {/* Image de l'article */}
        <div className="flex justify-center">
          <div className="modern-card bg-white p-4 sm:p-6 rounded-3xl shadow-2xl border border-gray-100 w-full">
            <img
              src={articleImages[currentId]}
              alt=""
              className="w-full h-[350px] sm:h-[480px] object-cover rounded-2xl shadow-inner"
            />
          </div>
        </div>

        {/* Article Container */}
        <div
          className="modern-card bg-white p-8 sm:p-14 rounded-3xl shadow-xl border border-gray-100"
          dir={i18n.dir()}
        >
          {/* ARTICLE 1 */}
          {currentId === 1 && (
            <div className="text-gray-700 leading-relaxed space-y-6 text-base sm:text-lg font-normal">
              <p className="bg-[#F8F5F0] p-6 rounded-2xl border-l-4 border-[#C39B2E] font-medium text-[#0A2540]">{t('articlePages.art1.p1')}</p>
              <p>{t('articlePages.art1.p2')}</p>
              <p>{t('articlePages.art1.p3')}</p>
              <p>{t('articlePages.art1.p4')}</p>
              <p>{t('articlePages.art1.p5')}</p>
              <p>{t('articlePages.art1.p6')}</p>
              <p>{t('articlePages.art1.p7')}</p>
              <p>{t('articlePages.art1.p8')}</p>

              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0A2540] pt-6 pb-2 border-b border-gray-100">
                {t('articlePages.art1.h2')}
              </h2>

              <p>{t('articlePages.art1.p9')}</p>
              <p>{t('articlePages.art1.p10')}</p>
              <p>{t('articlePages.art1.p11')}</p>
            </div>
          )}

          {/* ARTICLE 2 */}
          {currentId === 2 && (
            <div className="text-gray-700 leading-relaxed space-y-6 text-base sm:text-lg font-normal">
              <p className="bg-[#F8F5F0] p-6 rounded-2xl border-l-4 border-[#C39B2E] font-medium text-[#0A2540]">{t('articlePages.art2.p1')}</p>
              <p>{t('articlePages.art2.p2')}</p>
              <p>{t('articlePages.art2.p3')}</p>
              <p>{t('articlePages.art2.p4')}</p>
              <p>{t('articlePages.art2.p5')}</p>
              <p>{t('articlePages.art2.p6')}</p>

              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0A2540] pt-6 pb-2 border-b border-gray-100">
                {t('articlePages.art2.h2_1')}
              </h2>
              <p>{t('articlePages.art2.p7')}</p>
              <p>{t('articlePages.art2.p8')}</p>

              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0A2540] pt-6 pb-2 border-b border-gray-100">
                {t('articlePages.art2.h2_2')}
              </h2>
              <p>{t('articlePages.art2.p9')}</p>
              <p>{t('articlePages.art2.p10')}</p>
              <p>{t('articlePages.art2.p11')}</p>

              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0A2540] pt-6 pb-2 border-b border-gray-100">
                {t('articlePages.art2.h2_3')}
              </h2>
              <p>{t('articlePages.art2.p12')}</p>
              <p>{t('articlePages.art2.p13')}</p>
              <p>{t('articlePages.art2.p14')}</p>

              <div className="mt-10 pt-6 border-t border-gray-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0A2540] text-[#E5C158] flex items-center justify-center">
                  <i className="fas fa-pen-nib"></i>
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Auteur</div>
                  <p className="font-bold text-[#0A2540] font-serif">
                    {t('articlePages.art2.author')}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* ARTICLE 3 */}
          {currentId === 3 && (
            <div className="text-center space-y-8">
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-normal bg-[#F8F5F0] p-8 rounded-3xl border border-gray-200/60">
                {t('articlePages.art3.p1')}
              </p>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-normal">
                {t('articlePages.art3.p2')}
              </p>

              <div className="mt-14 pt-10 border-t border-gray-200 space-y-6 bg-gradient-to-br from-[#061526] via-[#0A2540] to-[#123B6D] p-8 sm:p-12 rounded-3xl text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#C39B2E]/10 rounded-full blur-3xl pointer-events-none"></div>
                <p className="text-2xl sm:text-3xl font-bold font-serif text-[#E5C158]" dir="rtl">
                  {t('articlePages.art3.arSlogan1')}
                </p>
                <div className="w-16 h-1 bg-white/20 mx-auto rounded-full"></div>
                <p className="text-xl sm:text-2xl font-bold font-serif text-white">
                  {t('articlePages.art3.frSlogan')}
                </p>
                <div className="w-16 h-1 bg-white/20 mx-auto rounded-full"></div>
                <p className="text-2xl sm:text-3xl font-bold font-serif text-[#E5C158]" dir="rtl">
                  {t('articlePages.art3.arSlogan2')}
                </p>
              </div>
            </div>
          )}

          {/* ARTICLE 4 */}
          {currentId === 4 && (
            <div className="text-gray-700 leading-relaxed space-y-6 text-base sm:text-lg font-normal">
              <p className="bg-[#F8F5F0] p-6 rounded-2xl border-l-4 border-[#C39B2E] font-medium text-[#0A2540]">{t('articlePages.art4.p1')}</p>
              <p>{t('articlePages.art4.p2')}</p>
              <p>{t('articlePages.art4.p3')}</p>
              <p>{t('articlePages.art4.p4')}</p>

              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0A2540] pt-6 pb-2 border-b border-gray-100">
                {t('articlePages.art4.h2_1')}
              </h2>
              <p>{t('articlePages.art4.p5')}</p>
              <p>{t('articlePages.art4.p6')}</p>

              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0A2540] pt-6 pb-2 border-b border-gray-100">
                {t('articlePages.art4.h2_2')}
              </h2>
              <p>{t('articlePages.art4.p7')}</p>
              <p>{t('articlePages.art4.p8')}</p>

              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0A2540] pt-6 pb-2 border-b border-gray-100">
                {t('articlePages.art4.h2_3')}
              </h2>
              <p>{t('articlePages.art4.p9')}</p>
              <p>{t('articlePages.art4.p10')}</p>
              <p>{t('articlePages.art4.p11')}</p>
            </div>
          )}

          {/* ARTICLE 5 */}
          {currentId === 5 && (
            <div className="text-gray-700 leading-relaxed space-y-6 text-base sm:text-lg font-normal">
              <p className="bg-[#F8F5F0] p-6 rounded-2xl border-l-4 border-[#C39B2E] font-medium text-[#0A2540]">{t('articlePages.art5.p1')}</p>
              <p>{t('articlePages.art5.p2')}</p>
              <p>{t('articlePages.art5.p3')}</p>

              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0A2540] pt-6 pb-2 border-b border-gray-100">
                {t('articlePages.art5.h2_1')}
              </h2>
              <p>{t('articlePages.art5.p4')}</p>
              <p>{t('articlePages.art5.p5')}</p>

              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0A2540] pt-6 pb-2 border-b border-gray-100">
                {t('articlePages.art5.h2_2')}
              </h2>
              <p>{t('articlePages.art5.p6')}</p>
              <p>{t('articlePages.art5.p7')}</p>
              <p>{t('articlePages.art5.p8')}</p>

              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0A2540] pt-6 pb-2 border-b border-gray-100">
                {t('articlePages.art5.h2_3')}
              </h2>
              <p>{t('articlePages.art5.p9')}</p>
              <p>{t('articlePages.art5.p10')}</p>

              <div className="bg-[#0A2540] text-white rounded-3xl p-8 mt-10 shadow-xl relative overflow-hidden border border-white/10">
                <i className="fas fa-quote-left text-3xl text-[#C39B2E]/30 absolute top-4 left-6"></i>
                <p className="text-[#E5C158] font-bold font-serif text-center text-xl sm:text-2xl italic relative z-10 leading-relaxed">
                  "{t('articlePages.art5.quote')}"
                </p>
              </div>
            </div>
          )}

          {/* ARTICLE 6 */}
          {currentId === 6 && (
            <div className="text-gray-700 leading-relaxed space-y-6 text-base sm:text-lg font-normal">
              <p className="bg-[#F8F5F0] p-6 rounded-2xl border-l-4 border-[#C39B2E] font-medium text-[#0A2540]">{t('articlePages.art6.p1')}</p>
              <p>{t('articlePages.art6.p2')}</p>

              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0A2540] pt-6 pb-2 border-b border-gray-100">
                {t('articlePages.art6.h2_1')}
              </h2>
              <p>{t('articlePages.art6.p3')}</p>
              <p>{t('articlePages.art6.p4')}</p>
              <p>{t('articlePages.art6.p5')}</p>

              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0A2540] pt-6 pb-2 border-b border-gray-100">
                {t('articlePages.art6.h2_2')}
              </h2>
              <p>{t('articlePages.art6.p6')}</p>
              <p>{t('articlePages.art6.p7')}</p>
              <p>{t('articlePages.art6.p8')}</p>

              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0A2540] pt-6 pb-2 border-b border-gray-100">
                {t('articlePages.art6.h2_3')}
              </h2>
              <p>{t('articlePages.art6.p9')}</p>
              <p>{t('articlePages.art6.p10')}</p>

              <div className="bg-[#0A2540] text-white rounded-3xl p-8 mt-10 shadow-xl relative overflow-hidden border border-white/10">
                <i className="fas fa-quote-left text-3xl text-[#C39B2E]/30 absolute top-4 left-6"></i>
                <p className="text-[#E5C158] font-bold font-serif text-center text-xl sm:text-2xl italic relative z-10 leading-relaxed">
                  "{t('articlePages.art6.quote')}"
                </p>
              </div>
            </div>
          )}

          {/* ARTICLE 7 */}
          {currentId === 7 && (
            <div className="text-gray-700 leading-relaxed space-y-6 text-base sm:text-lg font-normal">
              <p className="bg-[#F8F5F0] p-6 rounded-2xl border-l-4 border-[#C39B2E] font-medium text-[#0A2540]">{t('articlePages.art7.p1')}</p>
              <p>{t('articlePages.art7.p2')}</p>

              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0A2540] pt-6 pb-2 border-b border-gray-100">
                {t('articlePages.art7.h2_1')}
              </h2>
              <p>{t('articlePages.art7.p3')}</p>
              <p>{t('articlePages.art7.p4')}</p>

              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0A2540] pt-6 pb-2 border-b border-gray-100">
                {t('articlePages.art7.h2_2')}
              </h2>
              <p>{t('articlePages.art7.p5')}</p>
              <p>{t('articlePages.art7.p6')}</p>
              <p>{t('articlePages.art7.p7')}</p>

              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0A2540] pt-6 pb-2 border-b border-gray-100">
                {t('articlePages.art7.h2_3')}
              </h2>
              <p>{t('articlePages.art7.p8')}</p>
              <p>{t('articlePages.art7.p9')}</p>

              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0A2540] pt-6 pb-2 border-b border-gray-100">
                {t('articlePages.art7.h2_4')}
              </h2>
              <p>{t('articlePages.art7.p10')}</p>
              <p>{t('articlePages.art7.p11')}</p>
              <p>{t('articlePages.art7.p12')}</p>

              <div className="bg-[#0A2540] text-white rounded-3xl p-8 mt-10 shadow-xl relative overflow-hidden border border-white/10">
                <i className="fas fa-quote-left text-3xl text-[#C39B2E]/30 absolute top-4 left-6"></i>
                <p className="text-[#E5C158] font-bold font-serif text-center text-xl sm:text-2xl italic relative z-10 leading-relaxed">
                  "{t('articlePages.art7.quote')}"
                </p>
              </div>
            </div>
          )}

          {/* Source Container */}
          {getSource(currentId) && (
            <div className="mt-14 pt-6 border-t border-gray-100 flex items-center justify-between bg-[#F8F5F0] px-6 py-4 rounded-2xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0A2540]">
                <i className="fas fa-newspaper text-[#C39B2E]"></i>
                <span>Source officielle</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 font-semibold">
                {getSource(currentId)}
              </p>
            </div>
          )}
        </div>

        {/* Retour au bas de la page */}
        <div className="text-center pt-4">
          <Link
            to="/actualites"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#0A2540] to-[#123B6D] hover:from-[#C39B2E] hover:to-[#a8811a] text-white rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5"
          >
            <i className="fas fa-arrow-left text-[#C39B2E] group-hover:-translate-x-1 group-hover:text-white transition-transform"></i>
            <span>{t('articlePages.backNews')}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
