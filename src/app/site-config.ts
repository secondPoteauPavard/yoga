/**
 * URL de base (sans slash final) du site déployé, utilisée pour construire les
 * URLs absolues requises par Open Graph, la balise canonical et le sitemap.
 *
 * Un seul endroit à modifier le jour où un nom de domaine personnalisé
 * remplace le sous-domaine Vercel — robots.txt et sitemap.xml sont des
 * fichiers statiques (public/) et devront être mis à jour à la main à ce
 * moment-là, mais tout le reste (balises générées en JS) suivra automatiquement.
 */
export const SITE_URL = 'https://le-souffle-oceanique-yoga.vercel.app';
