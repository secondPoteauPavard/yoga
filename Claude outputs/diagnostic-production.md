# Diagnostic de mise en production — Le Souffle Océanique

Date : 8 septembre 2026
Périmètre : code source Angular (`C:\projets\yoga`), build de production, contenu, SEO, conformité légale, infra.

## Verdict

**Pas encore prête.** Le site est techniquement solide (build propre, design cohérent, bugs visuels corrigés), mais il reste du contenu factice visible publiquement et deux manques structurels (pas de mentions légales, pas de gestion de version) qu'il vaut mieux régler avant d'annoncer le site.

---

## 1. Bloquant — à faire avant toute mise en ligne publique

**Contenu factice encore présent sur le site en l'état :**
- Page d'accueil : "Photo à venir — pratique en extérieur"
- Page Yoga : "Photo à venir — cours de yoga"
- Page À propos : le texte de présentation d'Émilie est un encadré "Section à compléter avec Émilie" — actuellement visible tel quel par n'importe quel visiteur.

Ces trois éléments sont des repères de travail, pas du contenu fini. Ils doivent être remplacés (vraies photos, bio écrite avec Émilie) avant d'ouvrir le site au public.

**Aucune gestion de version (git).** Le dossier `C:\projets\yoga` n'est pas un dépôt git : aucun historique, aucune possibilité de revenir en arrière si une modification casse quelque chose, aucune sauvegarde hors de ce poste. À faire avant d'accumuler davantage de changements : `git init` en local, puis pousser vers un dépôt privé (GitHub/GitLab). C'est rapide et ça sécurise tout le travail déjà fait.

**Mentions légales absentes.** En France, un site professionnel (même sans vente en ligne) doit légalement afficher des mentions légales (identité de l'éditeur, statut, hébergeur). Le SIRET d'Émilie est déjà affiché en pied de page, ce qui est un bon début, mais il manque une page dédiée avec : identité de l'éditeur/directeur de publication, coordonnées de l'hébergeur (nom, adresse) une fois le VPS choisi.

---

## 2. Recommandé avant l'annonce publique (pas bloquant techniquement, mais impact réel)

**Référencement (SEO) :**
- Une seule balise `<meta name="description">`, commune à toutes les pages (dans `index.html`). Chaque page a bien son propre `<title>`, mais pas sa propre description — un moteur de recherche affichera la même description pour toutes les pages.
- Pas de balises Open Graph / Twitter Card (image, titre, description pour le partage sur Facebook/Instagram) : partager un lien du site sur les réseaux n'affichera pas d'aperçu soigné. C'est particulièrement pertinent puisque le contact passe justement par Facebook/Instagram.
- Pas de `robots.txt` ni de `sitemap.xml`.
- Pas de données structurées (schema.org "LocalBusiness") — utile pour apparaître correctement dans les recherches locales ("cours de yoga Labenne").
- Le site est en rendu 100% côté navigateur (pas de SSR/pré-rendu). Google gère bien ce cas aujourd'hui, mais les robots des réseaux sociaux (aperçu de lien Facebook/Instagram), eux, n'exécutent pas le JavaScript : tant qu'il n'y a pas de pré-rendu, les futures balises Open Graph devront être ajoutées avec cette limite en tête (ou un pré-rendu ajouté plus tard).

**Vie privée / RGPD :**
- Les polices (Quicksand, Caveat, Nunito) sont chargées depuis les serveurs Google Fonts, ce qui transmet l'adresse IP du visiteur à Google. Pas de formulaire ni de cookie actuellement, donc l'empreinte RGPD reste faible, mais une courte politique de confidentialité mentionnant ce point est recommandée par la CNIL (ou, plus simple, héberger les polices soi-même).
- Aucun bandeau de consentement pour l'instant — normal puisqu'il n'y a ni cookies ni analytics. À prévoir le jour où un outil de mesure d'audience sera ajouté.

**Contenu encore temporaire (connu, non bloquant) :**
- Les polices Quicksand/Caveat sont des choix provisoires en attendant les polices définitives ("Better Signature"/"Swistblnk Moabhoers").

---

## 3. Peut attendre une v2

- Formulaire de contact (déjà volontairement reporté).
- Tests automatisés : aucun test n'existe (0 fichier `.spec.ts`), alors que Karma/Jasmine sont configurés. Risque faible pour un site vitrine, mais la page Carnets (filtres, pagination) n'a aucun filet de sécurité en cas de régression.

---

## 4. Ce qui est déjà solide

- **Build de production propre** : aucune erreur, bundle initial ≈ 75 kB compressé, largement sous le budget Angular (500 kB) — chargement rapide à prévoir.
- **Toutes les images ont un texte alternatif** (`alt`), bon point pour l'accessibilité et le SEO.
- Tous les bugs visuels rencontrés pendant le développement (arrondi invisible, en-tête sur deux lignes, menu burger, ligne parasite, débordement de titre de carte) ont été corrigés et vérifiés visuellement.
- Architecture de contenu "Carnets" pensée pour qu'Émilie puisse ajouter du contenu (une fois le fichier JSON accessible) sans toucher au code — bonne base pour un futur espace d'administration.
- 34 vulnérabilités remontées par `npm audit`, mais **toutes concernent les outils de build/dev** (Angular CLI, webpack-dev-server, Vite, Karma) — rien de tout ça n'est livré dans le site final. Pas urgent ; à surveiller lors d'une future mise à jour d'Angular.

---

## 5. Reste à préparer côté infrastructure (hors code de l'appli)

Rien n'existe encore à ce niveau, normal à ce stade — à prévoir pour le déploiement VPS :
- Nom de domaine pointé vers le VPS.
- Configuration nginx (ou équivalent) avec fallback SPA (`try_files $uri /index.html`), compression gzip/brotli, cache long sur les fichiers `.js`/`.css` (ils sont déjà nommés avec un hash à chaque build, donc un cache "immutable" est sans risque).
- HTTPS via Let's Encrypt/certbot + redirection HTTP → HTTPS automatique.
- En-têtes de sécurité de base (HSTS, X-Content-Type-Options, X-Frame-Options).

---

## Résumé en une phrase

Le code est prêt techniquement ; ce qui manque avant d'ouvrir le site au public, ce sont le contenu réel (photos + bio), une page de mentions légales, et une sauvegarde du code sous git — le reste (SEO avancé, tests) peut suivre juste après le lancement.
