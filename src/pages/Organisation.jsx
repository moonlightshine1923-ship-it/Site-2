import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function OrganisationPatronatAlgerien() {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[#F8F5F0] text-[#1F2937] font-sans antialiased pb-24">
      
      {/* HERO SECTION */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden bg-[#061526]" id="hero">
        <img
          src="/images/Photo opa !.jpg"
          alt={t('presentation.heroAlt')}
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#061526]/80 via-[#0A2540]/60 to-[#061526]/95"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 pt-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-serif text-white tracking-tight mb-4">
            {t('presentation.qui_sommes_nous')}
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#C39B2E] to-[#E5C158] mx-auto rounded-full"></div>
        </div>
      </section>

      {/* PRESENTATION */}
      <section className="bg-white py-20 border-b border-gray-100 relative z-20 -mt-10 rounded-t-3xl shadow-xl max-w-7xl mx-auto px-6" id="presentation">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* COLONNE GAUCHE */}
          <div className="lg:col-span-5">
            <div className="relative group">
              <div className="absolute -inset-3 bg-gradient-to-r from-[#C39B2E] via-[#E5C158] to-[#123B6D] rounded-3xl opacity-20 blur-xl"></div>
              <img
                src="/images/president 2.jpg"
                alt={t('presentation.presidentAlt')}
                className="relative z-10 w-full rounded-2xl shadow-2xl border-4 border-white object-cover"
              />
            </div>
          </div>

          {/* COLONNE DROITE */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed font-normal">
              <p className="bg-[#F8F5F0] p-5 rounded-2xl border-l-4 border-[#C39B2E]">{t('presentation.paragraphe_1')}</p>
              <p>{t('presentation.paragraphe_2')}</p>
              <p>{t('presentation.paragraphe_3')}</p>
            </div>
            <div className="border-l-4 border-[#C39B2E] pl-6 py-4 bg-gradient-to-r from-[#F8F5F0] to-transparent rounded-r-2xl mt-6">
              <p className="text-xl md:text-2xl font-bold font-serif text-[#0A2540] italic leading-relaxed">
                "{t('presentation.citation')}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIE */}
      <section className="bg-[#F8F5F0] py-20" id="strategie">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold font-serif text-[#0A2540] mb-8">
            {t('presentation.strategie_heading')}
          </h2>
          <div className="bg-white rounded-3xl p-10 md:p-14 shadow-xl border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C39B2E]/5 rounded-full blur-2xl pointer-events-none"></div>
            <p className="text-2xl md:text-3xl font-bold font-serif text-[#C39B2E] mb-6 leading-snug">
              "{t('presentation.strategie_slogan')}"
            </p>
            <div className="w-16 h-1 bg-[#C39B2E] mx-auto rounded-full mb-6"></div>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              {t('presentation.strategie_texte')}
            </p>
          </div>
        </div>
      </section>

      {/* MISSIONS */}
      <section className="bg-white py-20 border-t border-b border-gray-100" id="missions">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold font-serif text-[#0A2540]">
              {t('presentation.missions_heading')}
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#C39B2E] to-[#E5C158] mx-auto rounded-full mt-4"></div>
          </div>

          <div className="flex justify-center items-center mb-16">
            <div className="relative group max-w-4xl w-full">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#0A2540] to-[#C39B2E] rounded-3xl opacity-15 blur-lg"></div>
              <img
                src="/images/president et ministres.jpg"
                alt={t('presentation.missions_titre')}
                className="relative z-10 h-[380px] object-cover rounded-2xl shadow-xl w-full border-2 border-white"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="modern-card bg-[#F8F5F0] p-8 rounded-3xl border border-gray-100 flex flex-col justify-between group hover:bg-white hover:shadow-xl transition duration-300">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#0A2540] text-[#E5C158] flex items-center justify-center font-bold font-mono text-lg mb-6 shadow-md group-hover:bg-[#C39B2E] group-hover:text-white transition duration-300">
                    0{num}
                  </div>
                  <h3 className="text-xl font-bold font-serif text-[#0A2540] mb-3 group-hover:text-[#C39B2E] transition-colors">
                    {t(`presentation.mission_${num}_titre`)}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    {t(`presentation.mission_${num}_texte`)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center max-w-4xl mx-auto bg-gradient-to-r from-[#061526] to-[#0A2540] text-white p-8 md:p-10 rounded-3xl shadow-xl relative overflow-hidden">
            <i className="fas fa-quote-left text-4xl text-[#C39B2E]/30 absolute top-4 left-6"></i>
            <p className="text-xl md:text-2xl font-serif font-bold text-[#E5C158] relative z-10 leading-relaxed">
              "{t('presentation.mission_citation')}"
            </p>
          </div>
        </div>
      </section>

      {/* PRINCIPES */}
      <section className="bg-[#F8F5F0] py-20" id="principes">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold font-serif text-[#0A2540]">
              {t('presentation.principes_heading')}
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#C39B2E] to-[#E5C158] mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { id: 1, icon: "fa-scale-balanced" },
              { id: 2, icon: "fa-shield-halved" },
              { id: 3, icon: "fa-handshake" }
            ].map((principe) => (
              <div key={principe.id} className="modern-card bg-white p-10 rounded-3xl text-center border border-gray-100 group hover:shadow-2xl transition duration-500">
                <div className="w-20 h-20 bg-gradient-to-br from-[#0A2540] to-[#123B6D] rounded-2xl flex items-center justify-center text-[#E5C158] text-3xl mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#D4AF37] group-hover:to-[#C39B2E] group-hover:text-white transition duration-300">
                  <i className={`fas ${principe.icon}`}></i>
                </div>
                <h3 className="font-bold font-serif text-2xl text-[#0A2540] mb-4 group-hover:text-[#C39B2E] transition-colors">
                  {t(`presentation.principe_${principe.id}_titre`)}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t(`presentation.principe_${principe.id}_texte`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section className="bg-white py-20 border-t border-b border-gray-100" id="valeurs">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold font-serif text-[#0A2540]">
              {t('presentation.valeurs_heading')}
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#C39B2E] to-[#E5C158] mx-auto rounded-full mt-4"></div>
          </div>

          <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-14 font-normal">
            {t('presentation.valeurs_intro')}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="modern-card bg-[#F8F5F0] p-8 rounded-3xl border border-gray-100 flex items-start gap-5 group hover:bg-white hover:shadow-xl transition duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#C39B2E] text-white flex items-center justify-center font-bold shrink-0 shadow-md group-hover:scale-110 transition duration-300">
                  <i className="fas fa-check"></i>
                </div>
                <div>
                  <h3 className="font-bold font-serif text-xl text-[#0A2540] mb-2 group-hover:text-[#C39B2E] transition-colors">
                    {t(`presentation.valeur_${num}_titre`)}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {t(`presentation.valeur_${num}_texte`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="bg-[#F8F5F0] py-20" id="vision">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold font-serif text-[#0A2540]">
              {t('presentation.vision_heading')}
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#C39B2E] to-[#E5C158] mx-auto rounded-full mt-4"></div>
          </div>

          <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12 font-normal">
            {t('presentation.vision_intro')}
          </p>

          <div className="bg-white p-8 md:p-14 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-3 h-full bg-gradient-to-b from-[#C39B2E] via-[#E5C158] to-[#123B6D]"></div>
            <ul className="space-y-5 text-base md:text-lg text-gray-700 leading-relaxed pl-4">
              {Array.isArray(t('presentation.vision_items', { returnObjects: true })) &&
                t('presentation.vision_items', { returnObjects: true }).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 p-3 rounded-2xl hover:bg-[#F8F5F0] transition duration-200">
                    <div className="w-7 h-7 rounded-full bg-[#C39B2E]/20 text-[#C39B2E] flex items-center justify-center shrink-0 mt-0.5 font-bold">✓</div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </section>

      {/* OBJECTIFS */}
      <section className="bg-white py-20 border-t border-gray-100" id="objectifs">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold font-serif text-[#0A2540]">
              {t('presentation.objectifs_heading')}
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#C39B2E] to-[#E5C158] mx-auto rounded-full mt-4"></div>
          </div>

          <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-16 font-normal">
            {t('presentation.objectifs_intro')}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <div key={num} className="modern-card bg-white p-8 rounded-3xl border border-gray-100 flex flex-col justify-between group hover:shadow-2xl transition duration-500">
                <div>
                  <div className="flex items-center justify-between mb-4">
                   
                    <i className="fas fa-bullseye text-gray-300 group-hover:text-[#C39B2E] transition-colors"></i>
                  </div>
                  <h3 className="text-xl font-bold font-serif text-[#0A2540] mb-3 group-hover:text-[#C39B2E] transition-colors">
                    {t(`presentation.objectif_${num}_titre`)}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {t(`presentation.objectif_${num}_texte`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
