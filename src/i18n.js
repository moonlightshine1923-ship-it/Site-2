// ============================================================
// Configuration i18n - Système de traduction multilingue
// ============================================================
// Cette configuration permet de changer la langue du site
// dynamiquement entre 9 langues sans recharger la page.
// ============================================================

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importation de tous les fichiers de traduction
import fr from './locales/fr.json';
import en from './locales/en.json';
import ar from './locales/ar.json';
import es from './locales/es.json';
import de from './locales/de.json';
import zh from './locales/zh.json';
import it from './locales/it.json';
import ru from './locales/ru.json';
import tr from './locales/tr.json';

// Liste des langues disponibles avec leur drapeau et nom
export const LANGUAGES = [
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'ar', label: 'العربية', flag: '🇩🇿', rtl: true },
  {   code: 'es', label: 'Español', flag: '🇪🇸'},
  {code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
  { code: 'it', label: 'Italiano', flag: '🇮🇹'},
  { code: 'tr', label: 'Türkçe', flag: '🇹🇷' }
];

// Initialisation d'i18next
i18n
  .use(LanguageDetector)        // Détecte automatiquement la langue du navigateur
  .use(initReactI18next)        // Intégration avec React
  .init({
    resources: {
      fr: { translation: fr },
      en: { translation: en },
      ar: { translation: ar },
      it: { translation: it },
      es: { translation: es },
      ru: { translation: ru },
      zh: { translation: zh },
      de: { translation: de },
      tr: { translation: tr }
    },
    fallbackLng: 'fr',          // Langue par défaut si la détection échoue
    interpolation: {
      escapeValue: false        // React échappe déjà les valeurs
    },
    detection: {
      order: ['localStorage', 'navigator'],   // Cherche d'abord la préférence enregistrée
      caches: ['localStorage']                 // Mémorise la langue choisie
    }
  });

// Fonction pour appliquer la direction RTL (arabe)
export function applyDirection(lang) {
  const language = LANGUAGES.find(l => l.code === lang);
  const dir = language?.rtl ? 'rtl' : 'ltr';
  document.documentElement.setAttribute('dir', dir);
  document.documentElement.setAttribute('lang', lang);
}

// Applique la direction au démarrage
applyDirection(i18n.language || 'fr');

// Change la direction à chaque changement de langue
i18n.on('languageChanged', (lng) => {
  applyDirection(lng);
});

export default i18n;
