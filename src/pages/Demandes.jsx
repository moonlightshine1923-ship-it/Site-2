import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function DeposerDemande() {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [trackingNumber, setTrackingNumber] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [phoneError, setPhoneError] = useState('');

const [formData, setFormData] = useState({
  nom: '',
  prenom: '',
  num_tel: '',        // Correspond à la colonne num_tel
  matricule: '',
  wilaya: '',         // Correspond à la colonne wilaya
  titre_demande: '',  // Votre code utilisait 'objet', la BDD attend 'titre_demande'
  priorite: 'Normale'
});

  // Liste des objets autorisés par le backend
  const objetsAutorises = [
    'Demande de contact',
    'Réclamation',
    'Demande de renseignement ',
    'Autre'
  ];

  const wilayas = [
    "01 - Adrar", "02 - Chlef", "03 - Laghouat", "04 - Oum El Bouaghi", "05 - Batna", "06 - Béjaïa", "07 - Biskra", "08 - Béchar", "09 - Blida", "10 - Bouira",
    "11 - Tamanrasset", "12 - Tébessa", "13 - Tlemcen", "14 - Tiaret", "15 - Tizi Ouzou", "16 - Alger", "17 - Djelfa", "18 - Jijel", "19 - Sétif", "20 - Saïda",
    "21 - Skikda", "22 - Sidi Bel Abbès", "23 - Annaba", "24 - Guelma", "25 - Constantine", "26 - Médéa", "27 - Mostaganem", "28 - M'Sila", "29 - Mascara", "30 - Ouargla",
    "31 - Oran", "32 - El Bayadh", "33 - Illizi", "34 - Bordj Bou Arréridj", "35 - Boumerdès", "36 - El Tarf", "37 - Tindouf", "38 - Tissemsilt", "39 - El Oued", "40 - Khenchela",
    "41 - Souk Ahras", "42 - Tipaza", "43 - Mila", "44 - Aïn Defla", "45 - Naâma", "46 - Aïn Témouchent", "47 - Ghardaïa", "48 - Relizane",
    "49 - El M'Ghair", "50 - El Meniaa", "51 - Ouled Djellal", "52 - Bordj Badji Mokhtar", "53 - Béni Abbès", "54 - In Salah", "55 - In Guezzam", "56 - Touggourt", "57 - Djanet", "58 - El Bayadh"
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'num_tel' && phoneError) {
      setPhoneError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Nettoyage du numéro de téléphone (suppression des espaces, tirets et points)
    const cleanPhone = formData.num_tel.trim().replace(/\s+/g, '').replace(/-/g, '').replace(/\./g, '');
    
    // Vérification pour les numéros commençant par 05, 06 ou 07 -> exactement 10 chiffres en tout
    const isMobile = /^(05|06|07)\d{8}$/.test(cleanPhone);
    
    // Vérification pour les indicatifs fixes de wilayas (021, 023, 027, etc.) -> exactement 9 chiffres en tout
    const fixedPrefixes = ['021', '023', '024', '025', '026', '027', '028', '029', '031', '032', '033', '034', '035', '036', '037', '038', '041', '043', '045', '046', '048', '049'];
    const isFixed = fixedPrefixes.some(pref => cleanPhone.startsWith(pref)) && cleanPhone.length === 9 && /^\d{9}$/.test(cleanPhone);

    if (!isMobile && !isFixed) {
      setPhoneError('Numéro de téléphone invalide.');
      return;
    }

    setIsSending(true);
    setPhoneError('');
    setFormSubmitted(false);

    try {
      // Envoi à l'API qui insère la demande dans MySQL (opa_db.demandes_site)
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3002';
      const response = await fetch(`${apiUrl}/api/demandes/public`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, num_tel: cleanPhone }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.message || 'Erreur lors de l’insertion en base de données');
      }

      setTrackingNumber(result.numero || 'DEM-OK');
      setFormSubmitted(true);

      // Réinitialisation du formulaire
      setFormData({
        nom: '',
        prenom: '',
        num_tel: '',
        matricule: '',
        wilaya: '',
        titre_demande: '',
        priorite: 'Normale'
      });
      
    } catch (error) {
      console.error("Erreur d'envoi BDD:", error);
      alert(t('deposer_demande.erreur_reseau'));
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="bg-[#F8F5F0] text-[#1F2937] font-sans antialiased min-h-screen pb-24">
      
      {/* PAGE HEADER */}
      <div className="page-header-banner">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white font-serif mb-4">
            {t('deposer_demande.titre_page')}
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#C39B2E] to-[#E5C158] mx-auto rounded-full"></div>
        </div>
      </div>

      {/* CONTENU PRINCIPAL */}
      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Formulaire Card */}
          <div className="lg:col-span-8">
            <div className="modern-card bg-white rounded-3xl shadow-xl border border-gray-100 p-8 sm:p-12">
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-[#0A2540] text-[#E5C158] flex items-center justify-center text-xl">
                  <i className="fas fa-paper-plane"></i>
                </div>
                <div>
                  <h2 className="text-2xl font-bold font-serif text-[#0A2540]">Formulaire Officiel de Transmission</h2>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">Traitement rapide par notre secrétariat général</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Nom & Prénom */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      {t('deposer_demande.label_nom')} <span className="text-red-500">*</span>
                    </label>
                    <input type="text" name="nom" required value={formData.nom} onChange={handleInputChange}
                           className="w-full px-4 py-3.5 border border-gray-200 focus:border-[#C39B2E] rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#C39B2E]/20 bg-gray-50/50 focus:bg-white transition" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      {t('deposer_demande.label_prenom')} <span className="text-red-500">*</span>
                    </label>
                    <input type="text" name="prenom" required value={formData.prenom} onChange={handleInputChange}
                           className="w-full px-4 py-3.5 border border-gray-200 focus:border-[#C39B2E] rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#C39B2E]/20 bg-gray-50/50 focus:bg-white transition" />
                  </div>
                </div>

                {/* Téléphone & Matricule */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Numéro de téléphone <span className="text-red-500">*</span>
                    </label>
                    <input type="tel" name="num_tel" required  value={formData.num_tel} onChange={handleInputChange}
                           className={`w-full px-4 py-3.5 border ${phoneError ? 'border-red-500 bg-red-50/50 text-red-900' : 'border-gray-200 focus:border-[#C39B2E] bg-gray-50/50'} rounded-2xl text-sm focus:outline-none focus:ring-2 ${phoneError ? 'focus:ring-red-200' : 'focus:ring-[#C39B2E]/20'} focus:bg-white transition font-mono`} />
                    {phoneError && (
                      <p className="text-red-600 text-xs mt-2 font-medium flex items-start gap-1.5 animate-fade-in leading-relaxed">
                        <i className="fas fa-exclamation-circle mt-0.5"></i>
                        <span>{phoneError}</span>
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      {t('deposer_demande.label_matricule')}
                    </label>
                    <input type="text" name="matricule" value={formData.matricule} onChange={handleInputChange}
                           className="w-full px-4 py-3.5 border border-gray-200 focus:border-[#C39B2E] rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#C39B2E]/20 bg-gray-50/50 focus:bg-white transition font-mono" />
                  </div>
                </div>

                {/* Wilaya & Objet (Liste déroulante) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      {t('deposer_demande.label_wilaya')} <span className="text-red-500">*</span>
                    </label>
                    <select name="wilaya" required value={formData.wilaya} onChange={handleInputChange}
                            className="w-full px-4 py-3.5 border border-gray-200 focus:border-[#C39B2E] rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#C39B2E]/20 bg-gray-50/50 focus:bg-white transition">
                      <option value="">{t('deposer_demande.selectionnez_wilaya')}</option>
                      {wilayas.map((w, idx) => (
                        <option key={idx} value={w}>{w}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      {t('deposer_demande.label_objet')} <span className="text-red-500">*</span>
                    </label>
                    <select name="titre_demande" required value={formData.titre_demande} onChange={handleInputChange}
                            className="w-full px-4 py-3.5 border border-gray-200 focus:border-[#C39B2E] rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#C39B2E]/20 bg-gray-50/50 focus:bg-white transition">
                      <option value="">Sélectionnez l'objet de votre demande</option>
                      {objetsAutorises.map((obj, idx) => (
                        <option key={idx} value={obj}>{obj}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Priorité caché ou sélectionnable */}
                <div className="pt-4">
                  <button type="submit" disabled={isSending}
                          className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#D4AF37] via-[#C39B2E] to-[#b08b28] hover:brightness-110 text-white font-bold py-4 px-6 rounded-full uppercase tracking-wider text-xs shadow-lg hover:shadow-gold-glow transition-all duration-300 disabled:opacity-70">
                    {isSending ? (
                      <span><i className="fas fa-spinner fa-spin mr-2"></i> {t('deposer_demande.bouton_connexion')}</span>
                    ) : (
                      <span><i className="fas fa-paper-plane mr-2"></i> {t('deposer_demande.bouton_envoyer')}</span>
                    )}
                  </button>
                </div>
              </form>

              {formSubmitted && (
                <div className="mt-8 p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-center font-semibold animate-fade-in shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-2xl mx-auto mb-3">
                    <i className="fas fa-check"></i>
                  </div>
                  <div className="text-lg font-bold mb-1">{t('deposer_demande.succes_envoi')}</div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6 sticky top-28">
            <div className="modern-card bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-[#C39B2E]/10 text-[#C39B2E] flex items-center justify-center text-xl mb-4">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3 className="font-bold text-lg font-serif text-[#0A2540] mb-3">
                {t('deposer_demande.sidebar_titre_secu')}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {t('deposer_demande.sidebar_txt_secu')}
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-[#061526] via-[#0A2540] to-[#123B6D] text-white rounded-3xl p-8 shadow-2xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#C39B2E]/10 rounded-full blur-2xl pointer-events-none"></div>
              <div className="w-12 h-12 rounded-xl bg-white/10 text-[#E5C158] flex items-center justify-center text-xl mb-4">
                <i className="fas fa-headset"></i>
              </div>
              <h3 className="font-bold font-serif text-xl mb-3 text-white">
                {t('deposer_demande.sidebar_titre_support')}
              </h3>
              <p className="text-xs text-white/80 mb-6 leading-relaxed">
                {t('deposer_demande.sidebar_txt_support')}
              </p>
              <div className="space-y-3 text-xs pt-4 border-t border-white/10 font-medium">
                <div className="flex items-center gap-3"><i className="fas fa-envelope text-[#C39B2E]"></i> <span>contact.administration@opa.dz</span></div>
                <div className="flex items-center gap-3"><i className="fas fa-phone text-[#C39B2E]"></i> <span className="font-mono">+ 213 28 35 92 64</span></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
