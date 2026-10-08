// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// ============================================================
// Adresse du site : calculée automatiquement.
//
// Pendant le déploiement GitHub Actions, GitHub fournit le nom du repo
// (GITHUB_REPOSITORY, ex. "mon-pseudo/mon-site"). On en déduit l'adresse :
//   https://mon-pseudo.github.io/mon-site/
// Si le repo s'appelle "mon-pseudo.github.io", l'adresse est
//   https://mon-pseudo.github.io/
//
// Pour un nom de domaine perso (ex. www.mon-domaine.com), écris-le ici
// entre les guillemets, sans https:// :
const CUSTOM_DOMAIN = '';
// ============================================================

const repository = process.env.GITHUB_REPOSITORY ?? '';
const [owner = '', repoName = ''] = repository.split('/');
const isUserSite = repoName.toLowerCase() === `${owner.toLowerCase()}.github.io`;

let SITE = 'http://localhost:4321';
let BASE = '/';

if (CUSTOM_DOMAIN) {
  SITE = `https://${CUSTOM_DOMAIN}`;
  BASE = '/';
} else if (owner) {
  SITE = `https://${owner.toLowerCase()}.github.io`;
  BASE = isUserSite ? '/' : `/${repoName}/`;
}

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
