import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const slides = [
  '/images/Photo opa !.jpg',
  '/images/photo opa 2.jpg',
  '/images/photo opa 3.jpeg',
  '/images/photo opa 4.jpeg',
  '/images/photo opa 5.jpeg'
];

export default function Home() {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openService, setOpenService] = useState(null);
  
  // État pour gérer l'ouverture de la modal de l'organigramme
  const [isOrganigrammeOpen, setIsOrganigrammeOpen] = useState(false);

  // Auto-rotation du carousel toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((s) => (s + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const toggleService = (key) => {
    setOpenService(openService === key ? null : key);
  };

  return (
    <>
      {/* ================= CAROUSEL CINÉMATIQUE INSTITUTIONNEL ================= */}
      <div className="w-full relative overflow-hidden h-screen bg-[#061526]">
        {/* Conteneur des images */}
        <div className="w-full h-full relative">
          {slides.map((src, i) => (
            <div
              key={i}
              className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-out select-none ${
                i === currentSlide ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-105'
              }`}
            >
              <img
                src={src}
                alt={`Slide ${i + 1}`}
                className="w-full h-full object-cover pointer-events-none"
              />
              {/* Vignette de contraste raffinée pour lecture parfaite du header et du texte */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#061526]/80 via-[#0A2540]/40 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#061526]/90 via-transparent to-transparent"></div>
            </div>
          ))}
        </div>

        {/* Bouton Précédent */}
        <button
          onClick={() => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-[#C39B2E] text-white p-4 rounded-full shadow-2xl text-xl z-20 backdrop-blur-md border border-white/20 transition-all duration-300 transform hover:scale-110"
          aria-label="Previous"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        
        {/* Bouton Suivant */}
        <button
          onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-[#C39B2E] text-white p-4 rounded-full shadow-2xl text-xl z-20 backdrop-blur-md border border-white/20 transition-all duration-300 transform hover:scale-110"
          aria-label="Next"
        >
          <i className="fas fa-chevron-right"></i>
        </button>

        {/* Indicateurs (dots en forme de pilules de luxe) */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
          {slides.map((_, i) => (
            <span
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2.5 rounded-full cursor-pointer transition-all duration-500 ${
                i === currentSlide ? 'w-12 bg-gradient-to-r from-[#D4AF37] to-[#C39B2E] shadow-gold-glow' : 'w-2.5 bg-white/40 hover:bg-white'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Présentation du président */}
      <div className="max-w-7xl mx-auto px-6 py-16 -mt-20 relative z-30">
        <div className="bg-gradient-to-br from-white via-[#FBF9F5] to-[#F3EEE3] rounded-3xl p-8 lg:p-14 border border-[#C39B2E]/30 shadow-2xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="relative group max-w-md mx-auto lg:mx-0">
                <div className="absolute -inset-3 bg-gradient-to-r from-[#C39B2E] via-[#E5C158] to-[#123B6D] rounded-3xl opacity-30 blur-xl group-hover:opacity-50 transition duration-500"></div>
                <img
                  src="/images/Image entree du site Mr sidi said.jpg"
                  alt={t('home.presidentAlt')}
                  className="relative z-10 w-full rounded-2xl shadow-2xl border-4 border-white object-cover transform group-hover:scale-[1.01] transition duration-500"
                  style={{ maxHeight: '520px' }}
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif text-[#0A2540] tracking-tight leading-tight">
                  {t('home.orgName')}
                </h1>
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#C39B2E] mt-2 dir-rtl">
                  منظمة أرباب العمل الجزائريين
                </h2>
              </div>

              <div className="inline-flex flex-wrap items-center gap-4 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-2xl border border-gray-200 shadow-sm text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-[#0A2540]">
                  <i className="fas fa-calendar-check text-[#C39B2E] text-base"></i>
                  <span><strong>{t('home.creationDate')}</strong> : 10/03/2019</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
                <div className="flex items-center gap-2 text-[#0A2540]">
                  <i className="fas fa-file-signature text-[#C39B2E] text-base"></i>
                  <span><strong>{t('home.creationDecree')}</strong> : {t('home.decreeValue')}</span>
                </div>
              </div>

              <div className="text-sm sm:text-base leading-relaxed text-gray-700 space-y-4 pt-2">
                <p className="bg-white/50 p-4 rounded-2xl border-l-4 border-[#C39B2E]">{t('home.intro1')}</p>
                <p>{t('home.intro2')}</p>
              </div>

              <div className="pt-4">
                <Link
                  to="/organisation"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#D4AF37] via-[#C39B2E] to-[#b08b28] hover:brightness-110 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-lg hover:shadow-gold-glow transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span>{t('home.readMore')}</span>
                  <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform duration-200"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services aux membres */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          
          <h2 className="text-4xl font-extrabold font-serif text-[#0A2540] section-title">
            {t('home.memberServices')}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#C39B2E] to-[#E5C158] mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Volet Social */}
          <div
            id="social"
            className="modern-card bg-white rounded-3xl p-8 border border-gray-100 cursor-pointer group flex flex-col justify-between"
            onClick={() => toggleService('social')}
          >
            <div>
              <div className="w-16 h-16 bg-gradient-to-br from-[#0A2540] to-[#123B6D] rounded-2xl flex items-center justify-center text-white text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-balance-scale text-[#E5C158]"></i>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-gray-100 mb-4">
                <h3 className="font-bold text-2xl font-serif text-[#0A2540] group-hover:text-[#C39B2E] transition-colors">{t('home.socialPart')}</h3>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${openService === 'social' ? 'bg-[#C39B2E] text-white' : 'bg-gray-100 text-[#0A2540]'}`}>
                  <i className={`fas ${openService === 'social' ? 'fa-minus' : 'fa-plus'} text-sm`}></i>
                </div>
              </div>
              {openService === 'social' && (
                <div className="mt-4 text-gray-600 text-sm leading-relaxed animate-fade-in space-y-3">
                  <p className="font-semibold text-[#0A2540] bg-[#F8F5F0] p-3 rounded-xl">{t('home.socialPartUpper')}</p>
                  <ul className="space-y-2.5 pl-2">
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check-circle text-[#C39B2E] mt-1 text-xs"></i>
                      <span>{t('home.socialItem1')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fas fa-check-circle text-[#C39B2E] mt-1 text-xs"></i>
                      <span>{t('home.socialItem2')}</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            {!openService && (
              <div className="text-xs font-bold text-[#C39B2E] uppercase tracking-wider mt-6 flex items-center gap-1 group-hover:underline">
                <span>En savoir plus</span>
                <i className="fas fa-angle-right"></i>
              </div>
            )}
          </div>

          {/* Volet Économique */}
          <div
            id="eco"
            className="modern-card bg-white rounded-3xl p-8 border border-gray-100 cursor-pointer group flex flex-col justify-between"
            onClick={() => toggleService('eco')}
          >
            <div>
              <div className="w-16 h-16 bg-gradient-to-br from-[#0A2540] to-[#123B6D] rounded-2xl flex items-center justify-center text-white text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-chart-line text-[#E5C158]"></i>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-gray-100 mb-4">
                <h3 className="font-bold text-2xl font-serif text-[#0A2540] group-hover:text-[#C39B2E] transition-colors">{t('home.economicPart')}</h3>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${openService === 'eco' ? 'bg-[#C39B2E] text-white' : 'bg-gray-100 text-[#0A2540]'}`}>
                  <i className={`fas ${openService === 'eco' ? 'fa-minus' : 'fa-plus'} text-sm`}></i>
                </div>
              </div>
              {openService === 'eco' && (
                <div className="mt-4 text-gray-600 text-sm leading-relaxed animate-fade-in space-y-3">
                  <p className="font-semibold text-[#0A2540] bg-[#F8F5F0] p-3 rounded-xl">{t('home.economicPartUpper')}</p>
                  <p className="italic text-gray-500">{t('home.economicIntro')}</p>
                  <ul className="space-y-2.5 pl-2">
                    <li className="flex items-start gap-2"><i className="fas fa-check-circle text-[#C39B2E] mt-1 text-xs"></i><span>{t('home.economicItem1')}</span></li>
                    <li className="flex items-start gap-2"><i className="fas fa-check-circle text-[#C39B2E] mt-1 text-xs"></i><span>{t('home.economicItem2')}</span></li>
                    <li className="flex items-start gap-2"><i className="fas fa-check-circle text-[#C39B2E] mt-1 text-xs"></i><span>{t('home.economicItem3')}</span></li>
                    <li className="flex items-start gap-2"><i className="fas fa-check-circle text-[#C39B2E] mt-1 text-xs"></i><span>{t('home.economicItem4')}</span></li>
                    <li className="flex items-start gap-2"><i className="fas fa-check-circle text-[#C39B2E] mt-1 text-xs"></i><span>{t('home.economicItem5')}</span></li>
                  </ul>
                </div>
              )}
            </div>
            {!openService && (
              <div className="text-xs font-bold text-[#C39B2E] uppercase tracking-wider mt-6 flex items-center gap-1 group-hover:underline">
                <span>En savoir plus</span>
                <i className="fas fa-angle-right"></i>
              </div>
            )}
          </div>

          {/* Volet International */}
          <div
            id="international"
            className="modern-card bg-white rounded-3xl p-8 border border-gray-100 cursor-pointer group flex flex-col justify-between"
            onClick={() => toggleService('international')}
          >
            <div>
              <div className="w-16 h-16 bg-gradient-to-br from-[#0A2540] to-[#123B6D] rounded-2xl flex items-center justify-center text-white text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-globe-africa text-[#E5C158]"></i>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-gray-100 mb-4">
                <h3 className="font-bold text-2xl font-serif text-[#0A2540] group-hover:text-[#C39B2E] transition-colors">{t('home.internationalPart')}</h3>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${openService === 'international' ? 'bg-[#C39B2E] text-white' : 'bg-gray-100 text-[#0A2540]'}`}>
                  <i className={`fas ${openService === 'international' ? 'fa-minus' : 'fa-plus'} text-sm`}></i>
                </div>
              </div>
              {openService === 'international' && (
                <div className="mt-4 text-gray-600 text-sm leading-relaxed animate-fade-in space-y-3">
                  <p className="font-semibold text-[#0A2540] bg-[#F8F5F0] p-3 rounded-xl">{t('home.internationalPartUpper')}</p>
                  <ul className="space-y-2.5 pl-2">
                    <li className="flex items-start gap-2"><i className="fas fa-check-circle text-[#C39B2E] mt-1 text-xs"></i><span>{t('home.internationalItem1')}</span></li>
                    <li className="flex items-start gap-2"><i className="fas fa-check-circle text-[#C39B2E] mt-1 text-xs"></i><span>{t('home.internationalItem2')}</span></li>
                  </ul>
                </div>
              )}
            </div>
            {!openService && (
              <div className="text-xs font-bold text-[#C39B2E] uppercase tracking-wider mt-6 flex items-center gap-1 group-hover:underline">
                <span>En savoir plus</span>
                <i className="fas fa-angle-right"></i>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Événements & Actualités */}
      <section id="actualites" className="max-w-7xl mx-auto px-6 py-20 border-t border-gray-200/60">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
          <div>
            
            <h2 className="text-4xl font-extrabold font-serif text-[#0A2540]">{t('home.events')}</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#C39B2E] to-[#E5C158] rounded-full mt-3"></div>
          </div>
          <Link
            to="/actualites"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-[#0A2540] text-[#0A2540] hover:text-white border border-[#0A2540]/20 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm"
          >
            <span>{t('home.seeAllEvents')}</span>
            <i className="fas fa-arrow-right text-[#C39B2E] group-hover:translate-x-1 transition-transform"></i>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              img: 'https://opa.dz/wp-content/uploads/2024/03/Affiche-AR-OPEX-2024-1131x800.jpeg', 
              cat: 'home.eventCat1', 
              title: 'home.event1Title', 
              desc: 'home.event1Desc',
              linkTo: '/article/2',
              isSmallDesc: false
            },
            { 
              img: '/images/Actualites/Actualites 4.jpeg', 
              cat: 'articlePages.art4.cat', 
              title: 'articlePages.art4.title', 
              desc: 'articlePages.art4.p1', 
              linkTo: '/article/4',
              isSmallDesc: true
            },
            { 
              img: 'https://opa.dz/wp-content/uploads/2022/12/IMG20221203131820-1920x800.jpg', 
              cat: 'home.eventCat2', 
              title: 'home.event3Title', 
              desc: 'home.event3Desc',
              linkTo: '/b2b',
              isSmallDesc: false
            },
            { 
              img: 'https://opa.dz/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-17-at-15.26.21.jpeg', 
              cat: 'home.eventCat3', 
              title: 'home.event4Title', 
              desc: 'home.event4Desc',
              linkTo: '/article/3',
              isSmallDesc: false
            }
          ].map((e, i) => (
            <Link to={e.linkTo} key={i} className="modern-card bg-white rounded-3xl overflow-hidden border border-gray-100 flex flex-col justify-between group hover:shadow-2xl transition duration-500">
              <div>
                <div className="relative overflow-hidden h-52">
                  <img src={e.img} className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-out" alt="" />
                  <div className="absolute top-4 left-4 bg-[#0A2540]/90 backdrop-blur-md text-[#E5C158] text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-white/10 shadow-lg">
                    {t(e.cat)}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-lg font-serif text-[#0A2540] group-hover:text-[#C39B2E] transition-colors line-clamp-2">{t(e.title)}</h4>
                  <p className={`text-gray-600 mt-2.5 leading-relaxed ${e.isSmallDesc ? 'text-xs line-clamp-2' : 'text-sm line-clamp-3'}`}>
                    {t(e.desc)}
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-gray-50 mt-2">
                <span className="text-xs font-bold text-[#0A2540] uppercase tracking-wider group-hover:text-[#C39B2E] transition-colors">Lire l'article</span>
                <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-[#C39B2E] group-hover:text-white text-[#0A2540] flex items-center justify-center transition-all duration-300">
                  <i className="fas fa-arrow-right text-xs"></i>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ================= NOTRE STRUCTURE CENTRÉE ET INTERACTIVE ================= */}
      <section id="structures" className="max-w-7xl mx-auto px-6 py-20 border-t border-gray-200/60">
        <div className="text-center max-w-3xl mx-auto mb-16">
          
          <h2 className="text-4xl font-extrabold font-serif text-[#0A2540] section-title">
            {t('home.ourStructure')}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#C39B2E] to-[#E5C158] mx-auto rounded-full mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto justify-center">
          
          {/* Carte 1 : Président */}
          <Link 
            to="/organisation" 
            className="modern-card bg-white p-8 rounded-3xl border border-gray-100 flex flex-col sm:flex-row items-center gap-6 group hover:shadow-2xl transition duration-500"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#C39B2E] to-[#123B6D] rounded-2xl opacity-0 group-hover:opacity-50 blur transition duration-300"></div>
              <img 
                src="https://opa.dz/wp-content/uploads/2020/08/presidentSITE-150x150.jpg" 
                className="relative z-10 w-24 h-24 rounded-2xl object-cover border-2 border-[#C39B2E] shadow-md" 
                alt="M. Sidi Said Abderrahmen" 
              />
            </div>
            <div className="text-center sm:text-left">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#C39B2E] bg-[#C39B2E]/10 px-3 py-1 rounded-full">{t('home.president')}</span>
              <h4 className="font-bold text-xl font-serif text-[#0A2540] mt-2 group-hover:text-[#C39B2E] transition-colors">M. Sidi Said Abderrahmen</h4>
              <p className="text-sm text-gray-600 mt-1">{t('home.mandate5y')}</p>
              <div className="text-xs font-semibold text-[#0A2540] mt-3 flex items-center justify-center sm:justify-start gap-1 group-hover:underline">
                <span>Voir le profil</span>
                <i className="fas fa-arrow-right text-[10px] text-[#C39B2E]"></i>
              </div>
            </div>
          </Link>

          {/* Carte 2 : Bureau Exécutif avec pop-up Organigramme */}
          <div 
            onClick={() => setIsOrganigrammeOpen(true)}
            className="modern-card bg-white p-8 rounded-3xl border border-gray-100 flex flex-col sm:flex-row items-center gap-6 group hover:shadow-2xl transition duration-500 cursor-pointer"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#C39B2E] to-[#123B6D] rounded-2xl opacity-0 group-hover:opacity-50 blur transition duration-300"></div>
              <img 
                src="/images/bureau exec.jpg" 
                className="relative z-10 w-24 h-24 rounded-2xl object-cover border-2 border-[#123B6D] shadow-md" 
                alt="Bureau Exécutif" 
              />
            </div>
            <div className="text-center sm:text-left">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#123B6D] bg-[#123B6D]/10 px-3 py-1 rounded-full">{t('home.executiveOffice')}</span>
              <h4 className="font-bold text-xl font-serif text-[#0A2540] mt-2 group-hover:text-[#C39B2E] transition-colors">{t('home.executiveOffice')}</h4>
              <p className="text-sm text-gray-600 mt-1">{t('home.executiveDesc')}</p>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C39B2E] bg-[#C39B2E]/10 group-hover:bg-[#C39B2E] group-hover:text-white px-4 py-2 rounded-full transition duration-300 mt-3">
                <i className="fas fa-sitemap"></i>
                <span>Voir l'organigramme</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= POP-UP MODAL POUR L'ORGANIGRAMME ================= */}
      {isOrganigrammeOpen && (
        <div 
          className="fixed inset-0 bg-[#061526]/80 flex items-center justify-center p-4 z-50 backdrop-blur-md animate-fade-in"
          onClick={() => setIsOrganigrammeOpen(false)}
        >
          <div 
            className="bg-white rounded-3xl p-8 max-w-5xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bouton Fermer */}
            <button 
              onClick={() => setIsOrganigrammeOpen(false)}
              className="absolute top-6 right-6 bg-gray-100 hover:bg-[#C39B2E] hover:text-white text-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition duration-300 shadow-sm"
              aria-label="Close"
            >
              <i className="fas fa-times text-lg"></i>
            </button>

            {/* Titre Modal */}
            <div className="mb-6 pb-4 border-b border-gray-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#C39B2E]/20 flex items-center justify-center text-[#C39B2E]">
                <i className="fas fa-sitemap text-lg"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-serif text-[#0A2540]">
                  {t('home.executiveOffice')} - Organigramme
                </h3>
                <p className="text-xs text-gray-500 uppercase tracking-widest">Structure Officielle du Patronat Algérien</p>
              </div>
            </div>

            {/* Image de l'organigramme */}
            <div className="flex justify-center bg-[#F8F5F0] rounded-2xl p-4 border border-gray-200">
              <img 
                src="/images/Organigramme du bureau executif.png" 
                alt="Organigramme" 
                className="max-w-full h-auto rounded-xl shadow-md"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.innerHTML = "<div class='p-12 text-center text-gray-400'><i class='fas fa-sitemap text-5xl mb-3 text-[#C39B2E]'></i><br/><span class='font-bold text-lg text-[#0A2540]'>Organigramme Officiel</span><br/><span class='text-sm'>Image de l'organigramme à placer sous public/images/organigramme.jpg</span></div>";
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
