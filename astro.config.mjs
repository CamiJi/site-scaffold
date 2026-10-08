// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// ============================================================
// 👇 À MODIFIER : l'adresse de ton site GitHub Pages
// ============================================================
//
// Pour un site "projet" (adresse https://TON-PSEUDO.github.io/NOM-DU-REPO/) :
//   SITE = 'https://TON-PSEUDO.github.io'
//   BASE = '/NOM-DU-REPO/'
//
// Pour un site "utilisateur" (repo nommé TON-PSEUDO.github.io,
// adresse https://TON-PSEUDO.github.io/) :
//   SITE = 'https://TON-PSEUDO.github.io'
//   BASE = '/'
//
// Pour un domaine personnalisé (ex. https://www.mon-domaine.com/) :
//   SITE = 'https://www.mon-domaine.com'
//   BASE = '/'
// ============================================================
const SITE = 'https://TON-PSEUDO.github.io';
const BASE = '/NOM-DU-REPO/';

export default defineConfig({
  site: SITE,
  base: BASE,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
