# 🚀 OPA React — Guide de démarrage complet

Bienvenue ! Ce document explique **pas à pas** comment lancer votre site OPA en React avec le support multilingue (9 langues).

---

## 📋 Prérequis (à installer une seule fois)

Vous devez avoir **Node.js** installé sur votre ordinateur.

### ➡️ Comment installer Node.js ?

1. Allez sur https://nodejs.org/
2. Téléchargez la version **LTS** (recommandée, le gros bouton vert)
3. Installez-le (cliquez "Suivant" partout, garde les options par défaut)
4. Pour vérifier que c'est bien installé, ouvrez un terminal et tapez :
   ```bash
   node --version
   npm --version
   ```
   Vous devriez voir quelque chose comme `v20.x.x` et `10.x.x`.

---

## 🎬 Démarrage rapide (3 commandes)

Ouvrez un terminal **dans le dossier `opa-react`** et tapez ces 3 commandes :

```bash
# 1. Installer toutes les dépendances (à faire UNE SEULE FOIS)
npm install

# 2. Lancer le site en mode développement
npm run dev

# 3. (Plus tard, quand vous voudrez publier) Construire la version finale
npm run build
```

Après `npm run dev`, le site s'ouvrira automatiquement dans votre navigateur à l'adresse **http://localhost:5173**.

> 💡 Pour arrêter le serveur : appuyez sur **Ctrl+C** dans le terminal.

---

## 🌍 Les 9 langues disponibles

Le site est disponible dans les langues suivantes :

| Drapeau | Code | Langue       |
|---------|------|--------------|
| 🇫🇷      | fr   | Français     |
| 🇬🇧      | en   | English      |
| 🇩🇿      | ar   | العربية (Arabe, avec support RTL) |
| 🇮🇹      | it   | Italiano     |
| 🇪🇸      | es   | Español      |
| 🇩🇪      | de   | Deutsch      |
| 🇷🇺      | ru   | Русский      |
| 🇨🇳      | zh   | 中文          |
| 🇹🇷      | tr   | Türkçe       |

Le sélecteur de langue est en **haut à droite de la navbar**.

✅ Quand l'utilisateur choisit l'arabe, la page bascule automatiquement en mode **RTL** (de droite à gauche).
✅ La langue choisie est **mémorisée** dans le navigateur (localStorage).
✅ Au premier chargement, la langue du navigateur est **détectée automatiquement**.

---

## 📁 Structure du projet

```
opa-react/
├── public/
│   └── images/              ← Toutes vos images (copiées du site original)
├── src/
│   ├── assets/
│   │   └── style.css        ← Votre CSS original + RTL + sélecteur langue
│   ├── components/
│   │   ├── Navbar.jsx       ← La barre de navigation
│   │   ├── Footer.jsx       ← Le pied de page
│   │   ├── LanguageSwitcher.jsx ← Le sélecteur de langue
│   │   └── PagePlaceholder.jsx
│   ├── locales/             ← 🌍 Fichiers de traduction (1 par langue)
│   │   ├── fr.json          ← Français (langue de référence)
│   │   ├── en.json          ← English
│   │   ├── ar.json          ← العربية
│   │   ├── it.json          ← Italiano
│   │   ├── es.json          ← Español
│   │   ├── de.json          ← Deutsch
│   │   ├── ru.json          ← Русский
│   │   ├── zh.json          ← 中文
│   │   └── tr.json          ← Türkçe
│   ├── pages/               ← Chaque page de votre site
│   │   ├── Home.jsx
│   │   ├── Actualites.jsx
│   │   ├── MotPresident.jsx
│   │   ├── Organisation.jsx
│   │   ├── Demandes.jsx
│   │   ├── DevenirMembre.jsx
│   │   ├── Albums.jsx
│   │   ├── Article.jsx
│   │   └── ... (autres pages)
│   ├── App.jsx              ← Configuration des routes
│   ├── main.jsx             ← Point d'entrée React
│   └── i18n.js              ← ⚙️ Configuration de la traduction
├── index.html               ← HTML principal
├── package.json             ← Dépendances du projet
├── vite.config.js           ← Configuration de Vite
└── COMMENT_DEMARRER.md      ← Ce fichier
```

---

## ✏️ Comment modifier une traduction ?

Très simple ! Il suffit d'ouvrir le fichier JSON de la langue concernée dans `src/locales/`.

### Exemple : changer "Contactez-Nous" en anglais

1. Ouvrez `src/locales/en.json`
2. Trouvez la ligne :
   ```json
   "contactUs": "Contact Us",
   ```
3. Modifiez-la, par exemple :
   ```json
   "contactUs": "Get in Touch",
   ```
4. **Enregistrez** le fichier
5. Le site se met à jour automatiquement dans votre navigateur ! ✨

> ⚠️ **Important** : respectez bien les guillemets `"` et les virgules `,`. Un seul caractère manquant peut casser le fichier.

---

## ➕ Comment ajouter une nouvelle traduction ?

### Exemple : ajouter un texte "Nos partenaires" sur la page d'accueil

**Étape 1** — Ajoutez la clé dans **TOUS** les fichiers `locales/*.json` :

```json
// src/locales/fr.json
"home": {
  ...
  "partners": "Nos partenaires"   // ⬅️ Nouvelle clé
}

// src/locales/en.json
"home": {
  ...
  "partners": "Our partners"      // ⬅️ Nouvelle clé
}

// ...et ainsi de suite pour ar, it, es, de, ru, zh, tr
```

**Étape 2** — Utilisez-la dans votre composant React :

```jsx
import { useTranslation } from 'react-i18next';

function MaPage() {
  const { t } = useTranslation();
  return <h2>{t('home.partners')}</h2>;
}
```

---

## ➕ Comment ajouter une nouvelle langue ?

Disons que vous voulez ajouter le **portugais** (pt) :

1. Créez le fichier `src/locales/pt.json` (copiez `fr.json` et traduisez)
2. Ouvrez `src/i18n.js` et :
   - Ajoutez l'import : `import pt from './locales/pt.json';`
   - Ajoutez dans `LANGUAGES` : `{ code: 'pt', label: 'Português', flag: '🇵🇹' }`
   - Ajoutez dans `resources` : `pt: { translation: pt }`
3. Enregistrez. C'est tout ! 🎉

---

## 🎨 Le design est-il identique au site original ?

**Oui, 100% identique !** Voici ce qui a été préservé :
- ✅ Le CSS original (`style.css`) est copié tel quel
- ✅ Tailwind CSS (via CDN) comme dans l'original
- ✅ Font Awesome (via CDN) pour toutes les icônes
- ✅ Les mêmes polices (Inter + Playfair Display)
- ✅ Les mêmes couleurs (`#0A2540` bleu OPA, `#C39B2E` doré)
- ✅ Le carrousel, les cartes services, le menu déroulant, etc.
- ✅ Le comportement de scroll (navbar transparente → opaque)

Le seul ajout visuel : **le sélecteur de langue** en haut à droite (drapeau + dropdown).

---

## 🐛 Problèmes courants

### ❌ "command not found: npm"
Node.js n'est pas installé. Voir la section "Prérequis" plus haut.

### ❌ Le site est blanc / il y a des erreurs rouges
1. Arrêtez le serveur (Ctrl+C)
2. Supprimez le dossier `node_modules` et le fichier `package-lock.json`
3. Relancez : `npm install` puis `npm run dev`

### ❌ Les images ne s'affichent pas
Vérifiez que le dossier `public/images/` contient bien vos images. Sinon, recopiez-les depuis le projet original.

### ❌ Une langue affiche les clés (ex: "home.welcome") au lieu du texte
La clé n'existe pas dans ce fichier de langue. Ouvrez `src/locales/XX.json` et ajoutez-la.

---

## 🚀 Publier le site sur internet

```bash
npm run build
```

Cela crée un dossier `dist/` avec tous les fichiers prêts à être déployés sur :
- **Netlify** : glisser-déposer le dossier `dist/` sur https://app.netlify.com/drop
- **Vercel** : `npm install -g vercel` puis `vercel`
- **GitHub Pages** : configurer Pages dans les paramètres du repo
- **Votre hébergement classique** : uploader le contenu de `dist/` via FTP

---

## 📚 Ressources utiles

- 📖 [Documentation react-i18next](https://react.i18next.com/) — pour aller plus loin
- 📖 [Documentation Vite](https://vitejs.dev/) — le bundler utilisé
- 📖 [Documentation React](https://react.dev/) — le framework

---

## 💡 Résumé en 1 phrase

Pour démarrer : ouvrez un terminal dans `opa-react/`, tapez `npm install` puis `npm run dev`. Allez sur `http://localhost:5173`. Pour traduire, modifiez les fichiers dans `src/locales/`.

**Bon développement ! 🎉**
