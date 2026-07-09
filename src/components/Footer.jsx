import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <>
      {/* Section Contact */}
      <section id="contact" className="bg-gradient-to-b from-[#0A2540] to-[#061526] text-white relative overflow-hidden border-t-4 border-[#C39B2E]">
        {/* Glow de fond décoratif */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C39B2E]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#123B6D]/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Colonne Contact Info */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight font-serif mt-2 mb-4 text-white">
                  {t('footer.contactUs')}
                </h2>
                <div className="w-20 h-1.5 bg-gradient-to-r from-[#C39B2E] to-[#E5C158] rounded-full"></div>
              </div>

              <div className="grid sm:grid-cols-2 gap-8 pt-4">
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-[#C39B2E]/50 transition duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[#C39B2E]/20 flex items-center justify-center text-[#C39B2E] text-xl mb-4">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="font-bold text-base text-[#E5C158] mb-2">{t('footer.address')}</div>
                  <div className="text-white/80 text-sm leading-relaxed">{t('footer.addressValue')}</div>
                </div>

                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-[#C39B2E]/50 transition duration-300 space-y-4">
                  <div>
                    <div className="flex items-center gap-3 text-[#E5C158] font-bold text-base mb-1">
                      <i className="fas fa-phone-alt"></i>
                      <span>{t('footer.phones')}</span>
                    </div>
                    <div className="text-white/80 text-sm font-mono">+ 213 (0) 778 226 808</div>
                    <div className="text-white/80 text-sm font-mono">+ 213 (0) 662 229 527</div>
                    <div className="text-white/80 text-sm font-mono">+ 213 (0) 28 35 92 64</div>
                  </div>

                  <div className="pt-2 border-t border-white/10">
                    <div className="flex items-center gap-3 text-[#E5C158] font-bold text-base mb-1">
                      <i className="fas fa-envelope"></i>
                      <span>{t('footer.email')}</span>
                    </div>
                    <a href="mailto:contact.administration@opa.dz" className="text-white/80 hover:text-[#C39B2E] text-sm underline transition">
                      contact.administration@opa.dz
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Colonne Actions & Identité */}
            <div className="lg:col-span-5 bg-white/5 p-8 lg:p-10 rounded-3xl border border-white/15 backdrop-blur-md flex flex-col justify-between space-y-6 shadow-2xl">
              <div className="flex items-center gap-4">
                <img
                  src="/images/OPA.png"
                  alt="OPA"
                  className="w-16 h-16 object-contain"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <div>
                  <h3 className="text-2xl font-bold font-serif text-white">OPA</h3>
                  <p className="text-xs text-[#E5C158] tracking-widest uppercase">{t('nav.subtitle')}</p>
                </div>
              </div>
              <p className="text-sm text-white/80 leading-relaxed">
                Rejoignez la première force de proposition et d'action pour le renouveau économique algérien et le soutien des entreprises nationales.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  to="/devenir-membre"
                  className="flex-1 text-center py-3.5 px-6 bg-gradient-to-r from-[#D4AF37] via-[#C39B2E] to-[#b08b28] hover:brightness-110 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-lg transition duration-300 flex items-center justify-center gap-2"
                >
                  <i className="fas fa-user-plus"></i>
                  <span>{t('nav.becomeMember')}</span>
                </Link>
                <Link
                  to="/demandes"
                  className="flex-1 text-center py-3.5 px-6 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-md transition duration-300 flex items-center justify-center gap-2"
                >
                  <i className="fas fa-paper-plane text-[#C39B2E]"></i>
                  <span>{t('nav.request')}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#040D18] text-white/70 text-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <h4 className="font-bold text-white text-base mb-5 pb-2 border-b border-[#C39B2E]/40 flex items-center justify-between">
                <span>{t('footer.views')}</span>
                <span className="w-2 h-2 rounded-full bg-[#C39B2E]"></span>
              </h4>
              <ul className="space-y-3 text-sm font-medium">
                <li><Link to="/" className="hover:text-[#C39B2E] transition flex items-center gap-2"><i className="fas fa-chevron-right text-[10px] text-[#C39B2E]"></i>{t('footer.home')}</Link></li>
                <li><Link to="/actualites" className="hover:text-[#C39B2E] transition flex items-center gap-2"><i className="fas fa-chevron-right text-[10px] text-[#C39B2E]"></i>{t('footer.news')}</Link></li>
                <li><Link to="/loi-reglement" className="hover:text-[#C39B2E] transition flex items-center gap-2"><i className="fas fa-chevron-right text-[10px] text-[#C39B2E]"></i>{t('footer.reglements')}</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white text-base mb-5 pb-2 border-b border-[#C39B2E]/40 flex items-center justify-between">
                <span>{t('footer.archives')}</span>
                <span className="w-2 h-2 rounded-full bg-[#C39B2E]"></span>
              </h4>
              <ul className="space-y-3 text-sm font-medium">
                <li><Link to="/contribution" className="hover:text-[#C39B2E] transition flex items-center gap-2"><i className="fas fa-chevron-right text-[10px] text-[#C39B2E]"></i>{t('footer.contribution')}</Link></li>
                <li><Link to="/actualites" className="hover:text-[#C39B2E] transition flex items-center gap-2"><i className="fas fa-chevron-right text-[10px] text-[#C39B2E]"></i>{t('footer.annualReports')}</Link></li>
                <li><Link to="/b2b" className="hover:text-[#C39B2E] transition flex items-center gap-2"><i className="fas fa-chevron-right text-[10px] text-[#C39B2E]"></i>{t('footer.partenariat')}</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white text-base mb-5 pb-2 border-b border-[#C39B2E]/40 flex items-center justify-between">
                <span>{t('footer.siteNav')}</span>
                <span className="w-2 h-2 rounded-full bg-[#C39B2E]"></span>
              </h4>
              <ul className="space-y-3 text-sm font-medium">
                <li><Link to="/" className="hover:text-[#C39B2E] transition flex items-center gap-2"><i className="fas fa-chevron-right text-[10px] text-[#C39B2E]"></i>{t('footer.aboutOpa')}</Link></li>
                <li><a href="#structures" className="hover:text-[#C39B2E] transition flex items-center gap-2"><i className="fas fa-chevron-right text-[10px] text-[#C39B2E]"></i>{t('footer.ourStructure')}</a></li>
                <li><a href="#contact" className="hover:text-[#C39B2E] transition flex items-center gap-2"><i className="fas fa-chevron-right text-[10px] text-[#C39B2E]"></i>{t('footer.contact')}</a></li>
                <li><Link to="/demandes" className="hover:text-[#C39B2E] transition flex items-center gap-2"><i className="fas fa-chevron-right text-[10px] text-[#C39B2E]"></i>{t('footer.requestsSpace')}</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white text-base mb-5 pb-2 border-b border-[#C39B2E]/40 flex items-center justify-between">
                <span>{t('footer.followUs')}</span>
                <span className="w-2 h-2 rounded-full bg-[#C39B2E]"></span>
              </h4>
              <div className="flex gap-3 text-lg">
                <a href="https://www.facebook.com/Organisation.Du.Patronat.Algerien/?locale=fr_FR"
                   target="_blank" rel="noopener noreferrer" 
                   className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 hover:bg-[#C39B2E] hover:text-white hover:border-[#C39B2E] flex items-center justify-center transition duration-300 shadow-md">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://x.com/PatronatDu" target="_blank" rel="noopener noreferrer"
                   className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 hover:bg-[#C39B2E] hover:text-white hover:border-[#C39B2E] flex items-center justify-center transition duration-300 shadow-md">
                  <i className="fab fa-x-twitter"></i>
                </a>
                <a href="https://www.youtube.com/channel/UChr2rA1fHEABq4wK8KNm9hQ"
                   target="_blank" rel="noopener noreferrer" 
                   className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 hover:bg-[#C39B2E] hover:text-white hover:border-[#C39B2E] flex items-center justify-center transition duration-300 shadow-md">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="https://www.linkedin.com/in/o-p-a-organisation-du-patronat-alg%C3%A9rien-900b671b3"
                   target="_blank" rel="noopener noreferrer" 
                   className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 hover:bg-[#C39B2E] hover:text-white hover:border-[#C39B2E] flex items-center justify-center transition duration-300 shadow-md">
                 <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              <div className="mt-6 text-xs text-white/50 leading-relaxed">
                Suivez toute l'actualité de notre organisation sur nos réseaux sociaux officiels.
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#02070D] py-6 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
            <div>
              © 2026 Organisation Du Patronat Algérien — منظمة أرباب العمل الجزائريين
            </div>
            <div className="flex gap-6">
              <Link to="/statut" className="hover:text-white transition">Mentions légales</Link>
              <Link to="/loi-reglement" className="hover:text-white transition">Règlement intérieur</Link>
              <a href="#navbar" className="hover:text-[#C39B2E] transition flex items-center gap-1">
                <span>Retour en haut</span>
                <i className="fas fa-arrow-up"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
