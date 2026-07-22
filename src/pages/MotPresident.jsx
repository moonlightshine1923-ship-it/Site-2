import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function MotPresident() {
  const { t } = useTranslation();
  const [isServiceOpen, setIsServiceOpen] = useState(false);

  const toggleService = () => {
    setIsServiceOpen(!isServiceOpen);
  };

  return (
    <div className="bg-[#F8F5F0] text-[#1F2937] min-h-screen pb-24">
      {/* Page Header Banner */}
      <div className="page-header-banner">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          
          <h1 className="text-4xl md:text-6xl font-extrabold font-serif tracking-tight text-white mb-4">
            {t('mot_president.titre_section')}
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#C39B2E] to-[#E5C158] mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Photo Président */}
          <div className="lg:col-span-4 sticky top-28">
            <div className="modern-card bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 group">
              <div className="relative overflow-hidden h-[450px]">
                <img
                  src="/images/president 2.jpg"
                  alt={t('mot_president.nom_president')}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061526] via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#E5C158] bg-[#C39B2E]/30 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 inline-block mb-2">
                    Président de l'OPA
                  </span>
                  <h3 className="text-2xl font-bold font-serif text-white">
                    {t('mot_president.nom_president')}
                  </h3>
                  <p className="text-[#E5C158] text-xs mt-1 font-medium tracking-wider uppercase">
                    {t('mot_president.fonction_president')}
                  </p>
                </div>
              </div>
              <div className="p-6 bg-[#061526] text-white/80 text-xs text-center border-t border-white/10 flex items-center justify-around">
                <div className="flex items-center gap-2">
                  <i className="fas fa-handshake text-[#C39B2E]"></i>
                  <span>Partenariat Économique</span>
                </div>
                <div className="w-px h-4 bg-white/20"></div>
                <div className="flex items-center gap-2">
                  <i className="fas fa-landmark text-[#C39B2E]"></i>
                  <span>Dialogue National</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mot & Message */}
          <div className="lg:col-span-8">
            <div className="modern-card bg-white p-8 sm:p-12 lg:p-14 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#C39B2E]/5 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-100">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0A2540] to-[#123B6D] text-[#E5C158] flex items-center justify-center text-2xl shadow-md shrink-0">
                  <i className="fas fa-quote-left"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-serif text-[#0A2540]">Message Officiel</h3>
                </div>
              </div>

              <div className="space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
                <p className="bg-[#F8F5F0] p-6 rounded-2xl border-l-4 border-[#C39B2E] font-medium text-[#0A2540] italic shadow-sm">
                  {t('mot_president.paragraphe_1')}
                </p>
                <p>{t('mot_president.paragraphe_2')}</p>
                <p>{t('mot_president.paragraphe_3')}</p>
                <p>{t('mot_president.paragraphe_4')}</p>
                <p>{t('mot_president.paragraphe_5')}</p>
                <p>{t('mot_president.paragraphe_6')}</p>
                <p>{t('mot_president.paragraphe_7')}</p>
                <p>{t('mot_president.paragraphe_8')}</p>
              </div>

              <div className="mt-14 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-end justify-between gap-6 bg-gradient-to-r from-[#F8F5F0] to-white p-6 rounded-2xl">
                <div className="text-xs text-gray-500 max-w-sm">
                  Organisation Du Patronat Algérien (OPA) — Le leadership au service des entreprises algériennes et de la croissance nationale.
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400 uppercase tracking-wider font-mono mb-1">Signataire</div>
                  <p className="font-extrabold text-[#0A2540] text-2xl font-serif">
                    {t('mot_president.nom_president')}
                  </p>
                  <p className="text-[#C39B2E] font-bold text-sm tracking-wide mt-0.5">
                    {t('mot_president.fonction_president')}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
