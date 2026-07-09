import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function DevenirMembre() {
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
          <h1 className="text-4xl md:text-6xl font-extrabold font-serif tracking-tight text-white mb-6">
            {t('devenirMembre.title')}
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#C39B2E] to-[#E5C158] mx-auto rounded-full mb-6"></div>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-normal leading-relaxed">
            {t('devenirMembre.description')}
          </p>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-20 space-y-12">
        {/* Conditions (Grille Équilibrée) */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">

          {/* bloc Gauche - Conditions d'Adhésion */}
          <div className="lg:col-span-7 modern-card bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-[#0A2540] text-[#E5C158] flex items-center justify-center text-xl">
                  <i className="fas fa-clipboard-check"></i>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0A2540]">
                  {t('devenirMembre.conditionsTitle')}
                </h2>
              </div>

              <p className="text-gray-700 leading-relaxed mb-8 bg-[#F8F5F0] p-4 rounded-2xl font-medium text-sm sm:text-base border-l-4 border-[#C39B2E]">
                {t('devenirMembre.conditionsIntro')}
              </p>

              <ul className="space-y-4 text-gray-700 text-sm sm:text-base">
                <li className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-[#F8F5F0] transition">
                  <span className="w-6 h-6 rounded-full bg-[#C39B2E]/20 text-[#C39B2E] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</span>
                  <span>{t('devenirMembre.cond1')}</span>
                </li>
                <li className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-[#F8F5F0] transition">
                  <span className="w-6 h-6 rounded-full bg-[#C39B2E]/20 text-[#C39B2E] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</span>
                  <span>{t('devenirMembre.cond2')}</span>
                </li>
                <li className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-[#F8F5F0] transition">
                  <span className="w-6 h-6 rounded-full bg-[#C39B2E]/20 text-[#C39B2E] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</span>
                  <span>{t('devenirMembre.cond3')}</span>
                </li>
                <li className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-[#F8F5F0] transition">
                  <span className="w-6 h-6 rounded-full bg-[#C39B2E]/20 text-[#C39B2E] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</span>
                  <span>{t('devenirMembre.cond4')}</span>
                </li>
                <li className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-[#F8F5F0] transition">
                  <span className="w-6 h-6 rounded-full bg-[#C39B2E]/20 text-[#C39B2E] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</span>
                  <span>{t('devenirMembre.cond5')}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bloc Droite - Une voix pour votre entreprise */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#061526] via-[#0A2540] to-[#123B6D] rounded-3xl p-8 sm:p-12 text-white flex flex-col justify-center items-center text-center relative overflow-hidden shadow-2xl border border-white/10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C39B2E]/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="w-24 h-24 bg-gradient-to-br from-[#D4AF37] to-[#C39B2E] rounded-3xl flex items-center justify-center mb-8 shadow-gold-glow transform hover:scale-110 transition duration-300">
              <i className="fas fa-handshake text-4xl text-white"></i>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white mb-4 leading-snug">
              {t('devenirMembre.boxRightTitle')}
            </h3>
            <div className="w-16 h-1 bg-[#E5C158] mx-auto rounded-full mb-6"></div>
            <p className="text-white/80 max-w-sm leading-relaxed text-sm sm:text-base">
              {t('devenirMembre.boxRightText')}
            </p>
          </div>

        </div>

        {/* Dossier d'Adhésion (Cadre Foncé) */}
        <div className="bg-[#0A2540] rounded-3xl p-8 sm:p-14 text-white shadow-2xl border border-white/10 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C39B2E]/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-serif mb-4">
              {t('devenirMembre.dossierTitle')}
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#C39B2E] to-[#E5C158] mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-md">
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#E5C158] mb-8 text-center flex items-center justify-center gap-3">
              <i className="fas fa-folder-open"></i>
              <span>{t('devenirMembre.requiredDocs')}</span>
            </h3>
            <ul className="grid sm:grid-cols-2 gap-6 text-sm sm:text-base">
              <li className="bg-white/5 p-4 rounded-2xl border border-white/10 flex items-center gap-4 hover:bg-white/10 transition">
                <span className="w-10 h-10 rounded-xl bg-[#C39B2E]/20 text-[#E5C158] flex items-center justify-center text-xl shrink-0" role="img" aria-label="document">📄</span> 
                <span className="font-medium">{t('devenirMembre.doc1')}</span>
              </li>
              <li className="bg-white/5 p-4 rounded-2xl border border-white/10 flex items-center gap-4 hover:bg-white/10 transition">
                <span className="w-10 h-10 rounded-xl bg-[#C39B2E]/20 text-[#E5C158] flex items-center justify-center text-xl shrink-0" role="img" aria-label="folder">📑</span> 
                <span className="font-medium">{t('devenirMembre.doc2')}</span>
              </li>
              <li className="bg-white/5 p-4 rounded-2xl border border-white/10 flex items-center gap-4 hover:bg-white/10 transition">
                <span className="w-10 h-10 rounded-xl bg-[#C39B2E]/20 text-[#E5C158] flex items-center justify-center text-xl shrink-0" role="img" aria-label="camera">📸</span> 
                <span className="font-medium">{t('devenirMembre.doc3')}</span>
              </li>
              <li className="bg-white/5 p-4 rounded-2xl border border-white/10 flex items-center gap-4 hover:bg-white/10 transition">
                <span className="w-10 h-10 rounded-xl bg-[#C39B2E]/20 text-[#E5C158] flex items-center justify-center text-xl shrink-0" role="img" aria-label="card">💳</span> 
                <span className="font-medium">{t('devenirMembre.doc4')}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Déposer votre demande / Contact */}
        <div className="modern-card bg-white rounded-3xl p-8 sm:p-14 text-center shadow-xl border border-gray-100">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-[#0A2540] mb-6">
            {t('devenirMembre.submitTitle')}
          </h2>

          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto mb-8 font-normal leading-relaxed">
            {t('devenirMembre.submitText')}
          </p>

          <div className="inline-block bg-[#F8F5F0] px-8 py-4 rounded-2xl border border-gray-200 text-xl sm:text-2xl font-bold font-mono text-[#C39B2E] mb-10 select-all tracking-wide shadow-inner">
            contact.administration@opa.dz
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="../Docs/Dossier-Complet.pdf"
              download
              className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] via-[#C39B2E] to-[#b08b28] hover:brightness-110 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-lg hover:shadow-gold-glow transition duration-300 flex items-center gap-2"
            >
              <i className="fas fa-file-download text-sm"></i>
              <span>{t('devenirMembre.btnDownload')}</span>
            </a>

            <a 
              href="#contact"
              className="px-8 py-4 bg-white hover:bg-[#0A2540] text-[#0A2540] hover:text-white border-2 border-[#0A2540] font-bold text-xs uppercase tracking-wider rounded-full shadow-sm hover:shadow-md transition duration-300 flex items-center gap-2"
            >
              <i className="fas fa-envelope"></i>
              <span>{t('devenirMembre.btnContact')}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
