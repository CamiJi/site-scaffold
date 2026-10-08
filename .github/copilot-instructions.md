# Instructions pour Copilot — site-scaffold

Ce repo est un site statique **Astro + Tailwind CSS v4**, publié sur **GitHub Pages** via GitHub Actions.
Il est **bilingue** : français (`/fr/`) et anglais (`/` racine). Toute modification de contenu doit rester bilingue.

## Règles de base

- Ne jamais ajouter de dépendance npm sans le demander explicitement.
- Ne jamais modifier `.github/workflows/deploy.yml` sauf demande explicite.
- Ne jamais ajouter de formulaire de contact, de script tiers ou de tracker.
- Garder le code simple et lisible : le propriétaire du site est débutant.
- Commenter en français les parties de code qui ne sont pas évidentes.

## Où modifier quoi

| Je veux… | Fichier à modifier |
|---|---|
| changer un texte (titre, services, à propos, contact, footer) | `src/content/site.json` — toujours modifier **les deux** blocs `fr` et `en` |
| changer les couleurs | `src/styles/global.css` (bloc `@theme`) |
| changer la structure d'une section (ex. ajouter une section) | `src/components/Home.astro` |
| ajouter une page | `src/pages/nom-de-la-page.astro` (anglais) **et** `src/pages/fr/nom-de-la-page.astro` (français) |
| changer l'adresse du site (domaine perso) | `astro.config.mjs` (constante `CUSTOM_DOMAIN`) — l'adresse est calculée automatiquement, ne pas la modifier autrement |
| changer l'icône du site | `public/favicon.svg` |

## Règles pour les pages et le contenu

- Chaque page doit exister en français ET en anglais.
- Les textes visibles ne doivent jamais être codés en dur dans les `.astro` : ils viennent de `src/content/site.json`.
- Les liens internes doivent utiliser `import.meta.env.BASE_URL` (jamais un chemin écrit en dur comme `/about`).
- Les liens de navigation entre langues utilisent `switchHref` dans `site.json`.
- Les images vont dans `public/` et sont référencées avec `${import.meta.env.BASE_URL}chemin/image.jpg`.

## Avant de proposer une pull request

- Vérifier que `npm run build` passe sans erreur.
- Vérifier que les deux langues ont les mêmes clés dans `src/content/site.json`.
- Résumer dans la description de la PR ce qui a changé, en français.
