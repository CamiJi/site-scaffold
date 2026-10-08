# Site scaffold — bilingue FR / EN

Un modèle de site web prêt à l'emploi, pour créer son site **en quelques minutes**, sans rien installer.

**Stack :** [Astro](https://astro.build) · [Tailwind CSS](https://tailwindcss.com) · GitHub Pages · GitHub Actions

Ce modèle est **bilingue** : français et anglais.

🇫🇷 [Version française](#-version-française) · 🇬🇧 [English version](#-english-version)

---

## 🇫🇷 Version française

### Étape 1 — Créer ton propre repo à partir du modèle

1. Clique sur le bouton vert **« Use this template »** en haut de cette page, puis **« Create a new repository »**.
2. Choisis un nom pour ton repo, par exemple `mon-site`. **Ce nom fera partie de l'adresse de ton site.**
3. Choisis **Public** (obligatoire pour GitHub Pages gratuit).
4. Clique sur **« Create repository »**.

### Étape 2 — Régler l'adresse de ton site

Ton site sera publié à l'adresse :

```
https://TON-PSEUDO.github.io/NOM-DU-REPO/
```

1. Ouvre le fichier **`astro.config.mjs`** (bouton crayon ✏️ sur GitHub).
2. Remplace les deux lignes en bas des commentaires :

   ```js
   const SITE = 'https://TON-PSEUDO.github.io';
   const BASE = '/NOM-DU-REPO/';
   ```

   - `TON-PSEUDO` : ton pseudo GitHub.
   - `NOM-DU-REPO` : le nom de ton repo (exactement le même, avec les mêmes majuscules).
3. Clique sur **« Commit changes »**.

> ℹ️ Tu veux une adresse plus simple (`https://TON-PSEUDO.github.io/`) ? Crée un repo nommé exactement `TON-PSEUDO.github.io`, puis mets `BASE = '/'`.
>
> ℹ️ Tu veux ton propre nom de domaine (`www.mon-domaine.com`) ? Voir la section [Nom de domaine](#nom-de-domaine-optionnel) plus bas.

### Étape 3 — Activer GitHub Pages

1. Dans ton repo, va dans **Settings** (Paramètres).
2. Dans le menu de gauche, clique sur **Pages**.
3. Dans **Build and deployment → Source**, choisis **GitHub Actions**.

C'est tout. À chaque modification sur la branche `main`, le site se reconstruit et se met en ligne automatiquement.

Suis l'avancement dans l'onglet **Actions** de ton repo. Une coche verte ✅ = site en ligne.

### Étape 4 — Modifier ton contenu

Tout le texte du site se trouve dans **un seul fichier** : `src/content/site.json`.

```json
"hero": {
  "title": "Votre titre accrocheur ici",
  ...
}
```

- Il y a **deux blocs** : `"fr"` (français) et `"en"` (anglais). **Modifie toujours les deux.**
- Ne change pas les noms à gauche des `:` (comme `"title"`), seulement le texte entre guillemets.

Pour changer les **couleurs**, ouvre `src/styles/global.css` et modifie les deux lignes `--color-brand`.

### Étape 5 — Modifier avec Copilot (sans coder)

C'est la méthode recommandée : tu décris ce que tu veux, Copilot fait les modifications et te propose une **pull request**.

1. Va sur **github.com/copilot** (ou dans l'onglet **Agents** de ton repo), choisis ton repo `NOM-DU-REPO`.
2. Écris ta demande en français, par exemple :
   - « Remplace le titre du hero par "Photographe de mariage à Lyon" en français et en anglais. »
   - « Ajoute une quatrième carte de service intitulée "Formation" dans les deux langues. »
   - « Change la couleur principale en vert sapin. »
   - « Ajoute une page "Tarifs" en français et en anglais, avec le lien dans le menu. »
3. Copilot crée une **pull request**. Lis-la : onglet **Files changed** pour voir les modifications.
4. Si ça te convient, clique sur **Merge pull request** puis **Confirm merge**. Le site se met à jour dans quelques minutes.
5. Si ça ne te convient pas, ajoute un commentaire sur la PR pour demander une correction.

> 💡 Conseils pour bien demander :
> - Une demande claire à la fois.
> - Précise **la section** ou **le fichier** concerné si tu le connais.
> - Rappelle que le texte doit être **en français ET en anglais**.

> ℹ️ Utiliser Copilot pour créer des PR demande un abonnement GitHub Copilot compatible sur ton compte. Les règles que Copilot doit suivre sont dans `.github/copilot-instructions.md`.

### Tester en local (optionnel)

Si tu as Node.js 22 installé sur ton ordinateur :

```bash
npm install
npm run dev
```

Puis ouvre l'adresse affichée (en général `http://localhost:4321/NOM-DU-REPO/`).

Pour vérifier que tout se construit correctement : `npm run build`.

### Nom de domaine (optionnel)

Pour utiliser `www.mon-domaine.com` au lieu de `TON-PSEUDO.github.io/NOM-DU-REPO/` :

1. **Achète** ton nom de domaine chez un registrar (OVH, Gandi, Namecheap, Porkbun…).
2. Dans **Settings → Pages → Custom domain**, saisis ton domaine (ex. `www.mon-domaine.com`) et enregistre.
3. Chez ton registrar, crée les enregistrements DNS suivants :

   | Type | Nom | Valeur |
   |---|---|---|
   | `CNAME` | `www` | `TON-PSEUDO.github.io` |

   Pour un domaine nu (`mon-domaine.com` sans `www`), crée à la place 4 enregistrements `A` vers `185.199.108.153`, `185.199.109.153`, `185.199.110.153` et `185.199.111.153`.
4. Attends la propagation DNS (quelques minutes à 24 h), puis coche **Enforce HTTPS** dans les réglages Pages.
5. Dans `astro.config.mjs`, passe à :

   ```js
   const SITE = 'https://www.mon-domaine.com';
   const BASE = '/';
   ```

   Commit, et le site se reconstruit à la bonne adresse.

### Dépannage

| Problème | Solution |
|---|---|
| La page est blanche ou les images/styles ne chargent pas | Vérifie que `BASE` dans `astro.config.mjs` correspond exactement au nom du repo (avec les `/` au début et à la fin). |
| L'onglet Actions affiche une croix rouge ❌ | Clique dessus pour lire l'erreur. Le plus souvent : un fichier `site.json` mal formé (virgule en trop, guillemet manquant). |
| Le site ne se met pas à jour | Vérifie que **Settings → Pages → Source** est bien sur **GitHub Actions**. |
| « Pages » n'apparaît pas dans Settings | Le repo doit être **public**. |

### Structure du projet

```
src/
├── content/site.json      ← TOUS les textes (fr + en)
├── styles/global.css      ← couleurs
├── components/Home.astro  ← structure de la page d'accueil
├── layouts/Layout.astro   ← squelette HTML commun
└── pages/
    ├── index.astro        ← page anglaise (/)
    └── fr/index.astro     ← page française (/fr/)
public/favicon.svg         ← icône du site
astro.config.mjs           ← adresse du site (SITE et BASE)
.github/workflows/         ← publication automatique
.github/copilot-instructions.md ← règles pour Copilot
```

---

## 🇬🇧 English version

### Step 1 — Create your own repo from this template

1. Click the green **"Use this template"** button at the top of this page, then **"Create a new repository"**.
2. Pick a name, for example `my-site`. **This name becomes part of your site address.**
3. Choose **Public** (required for free GitHub Pages).

### Step 2 — Set your site address

Your site will live at:

```
https://YOUR-USERNAME.github.io/REPO-NAME/
```

1. Open **`astro.config.mjs`** and edit:

   ```js
   const SITE = 'https://YOUR-USERNAME.github.io';
   const BASE = '/REPO-NAME/';
   ```

2. Commit the change.

> If you name your repo exactly `YOUR-USERNAME.github.io`, set `BASE = '/'` for a shorter address.
> For your own domain, see the "Custom domain" section (in French above).

### Step 3 — Enable GitHub Pages

Go to **Settings → Pages → Source** and choose **GitHub Actions**. Each commit to `main` now publishes the site automatically. Check the **Actions** tab for a green ✅.

### Step 4 — Edit your content

All text lives in `src/content/site.json`. Always edit **both** the `"fr"` and `"en"` blocks. Colors are in `src/styles/global.css`.

### Step 5 — Edit with GitHub Copilot

Go to **github.com/copilot**, pick your repo, and describe what you want in plain language (in English or French). Copilot opens a **pull request**: review the **Files changed** tab, then merge it. Rules for Copilot are in `.github/copilot-instructions.md`. Using Copilot to create pull requests requires a compatible GitHub Copilot subscription.

### Local preview (optional)

```bash
npm install
npm run dev
```

Requires Node.js 22 or newer.
