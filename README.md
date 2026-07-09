OPA React — Site multilingue
Version React du site Organisation Du Patronat Algérien (OPA) avec support pour 9 langues (Français, Anglais, Arabe, Italien, Espagnol, Allemand, Russe, Chinois, Turc).

🚀 Démarrage rapide
Bash

npm install
npm run dev

Le site s'ouvrira sur http://localhost:5173

🗄️ Connexion BDD demandes

Le formulaire de la page `Demandes` envoie maintenant les données vers l'API Node/Express puis les insère dans MySQL : `opa_db.demandes_site`.

1. Copier le fichier d'environnement :

```bash
cp .env.example .env
```

2. Vérifier les identifiants MySQL dans `.env` :

```env
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_NAME=opa_db
VITE_API_URL=http://localhost:3002
```

3. Lancer le site + l'API BDD avec une seule commande :

```bash
npm run dev
```

Cette commande démarre en même temps :

- le site React/Vite : http://localhost:5173
- l'API de connexion MySQL : http://localhost:3002

4. Tester l'API : http://localhost:3002/api/health

Optionnel : pour lancer seulement le site sans API :

```bash
npm run dev:site
```

📖 Documentation complète
👉 Voir COMMENT_DEMARRER.md pour un guide pas-à-pas détaillé.

🛠️ Technologies
⚛️ React 18 + Vite (build ultra rapide)
🌍 react-i18next (traduction multilingue)
🎨 Tailwind CSS (via CDN — identique à l'original)
🛣️ React Router (navigation entre pages)
🔄 Support RTL automatique pour l'arabe
📂 Structure
text

src/
├── locales/      # Fichiers JSON de traduction (1 par langue)
├── pages/        # Pages du site
├── components/   # Composants réutilisables (Navbar, Footer...)
└── i18n.js       # Configuration de la traduction
📝 Licence
Tous droits réservés — Organisation Du Patronat Algérien.