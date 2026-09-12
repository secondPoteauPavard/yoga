# Handoff : refonte visuelle — Le Souffle Océanique

## Vue d'ensemble

Refonte de la direction visuelle du site vitrine `secondPoteauPavard/yoga` (Angular 
standalone, branche `main`). Le contenu, la structure des pages et la palette de 
`src/styles.css` sont **inchangés**. Ce qui change, ce sont les **proportions** : 
fond écru dominant, blanc réservé aux respirations, bleu réduit à un rôle d'accent 
et de motif graphique.

Demande cliente à l'origine du travail : « quelque chose de dominante plus blanc et 
moins bleu », « envie de textures et d'espace », puis, après une première passe, 
« laisse quand même un peu plus de bleu, et plus de vagues », et enfin l'application 
du document *Les couleurs* (écru privilégié plutôt qu'un blanc pur omniprésent, 
bleu violacé pour les textes courants).

## À propos des fichiers de design

`Le Souffle Oceanique.dc.html` est une **référence de design en HTML**, pas du code de 
production. C'est un prototype d'un seul fichier qui montre l'apparence et le 
comportement visés, avec une navigation interne entre les 9 pages (état local, pas 
de routeur).

Le travail attendu est de **reporter cette direction dans l'application Angular 
existante** : mettre à jour `src/styles.css` (tokens, gabarits communs) et les 
templates des composants de page, en gardant l'architecture Angular en place 
(routes, composants standalone, `app-wave`, SEO service). Ne pas copier le HTML tel 
quel, et ne pas réécrire le contenu.

Le prototype s'ouvre directement dans un navigateur (il a besoin de `support.js`, 
`fonts/`, `images/` et `data/` livrés à côté).

## Fidélité

**Hi-fi.** Couleurs, typographies, échelles de taille, rayons et espacements sont 
définitifs et doivent être repris à l'identique. Les emplacements photo sont en 
revanche des placeholders : les vraies images de la cliente ne sont pas encore 
fournies.

## Ce qui change par rapport au site actuel

| Avant (dépôt) | Après (ce design) |
| --- | --- |
| Fond `--sand-light` avec blocs `.section--ocean` en dégradé bleu plein (hero de chaque page, CTA, pied de page) | Fond écru `#F6F2EC` continu ; **aucun** aplat bleu plein. Les héros sont sur l'écru, en grande typo bleu océan |
| Vagues pleines `app-wave` (aire remplie, 90–260 px de haut) | Vagues en **filets** : 3 traits de 1,5 px superposés (bleu océan, turquoise, bleu ciel), 46–110 px de haut. Une vague sous chaque hero, une seconde retournée (`scaleY(-1)`) avant chaque bandeau de fin de page |
| Pied de page `--ocean-deep` (grand aplat bleu foncé, texte blanc) | Pied de page bleu très clair `#EDF4F8`, titres bleu océan, liens bleu violacé |
| `.card` avec `box-shadow: var(--shadow-soft)` | Cartes blanches à liseré fin `1px solid #EAE2D7`, sans ombre |
| Blobs organiques floutés (`.hero-blob`, `.page-hero::before/after`) | Supprimés |
| `.photo-placeholder` en dégradé turquoise/corail, forme organique | Placeholders blancs, `border-radius: 28px`, liseré `#EAE2D7`, libellé en bleu violacé |
| Textes secondaires `--ink-soft` `#4A5A6A` (gris-bleu) | Bleu violacé `#455F97` |
| CTA « Contact / Inscription » en bouton corail plein dans le header | Lien de menu comme les autres (soulignement corail à l'état actif) |
| Header arrondi `0 0 26px 26px`, fond blanchâtre translucide | Header droit, fond écru translucide `rgba(246,242,236,0.94)`, liseré bas `rgba(22,93,135,0.09)` |
| Espacements `clamp(3rem, 7vw, 5.5rem)` par section | Nettement plus généreux : héros `clamp(48px, 8vw, 104px)`, sections `clamp(40px, 6vw, 80px)`, bandeaux `clamp(56px, 8vw, 110px)` |

## Design tokens

Tous issus de `src/styles.css` et du document *Les couleurs* — aucune couleur inventée.

### Couleurs

| Token | Hex | Usage dans ce design |
| --- | --- | --- |
| `--ocean-deep` | `#165D87` | Tous les titres (h1, h2, h3), `<strong>` dans les listes, bordure des boutons secondaires, titres du footer, premier trait des vagues |
| `--ocean` | `#006DA8` | Couleur de lien par défaut (`a`) |
| `--turquoise` | `#2788AE` | Deuxième trait des vagues |
| `--sky-blue` | `#3BA5CF` | Troisième trait des vagues, liserés pointillés « à venir » |
| `--violet-blue` | `#455F97` | **Texte courant et secondaire** (paragraphes, listes, libellés de placeholder, liens du footer) |
| `--coral` | `#CB9380` | Survol des boutons primaires |
| `--terracotta` | `#D18877` | Sur-titres (eyebrow), boutons primaires, phrases manuscrites, liens actifs et survols, « Lire la suite → » |
| `--sand` | `#F1E8DD` | Pastilles (`.pill`) |
| `--sand-light` | `#F6F2EC` | **Fond général du site** et du header (translucide) |
| `--white` | `#FFFFFF` | Respirations : cartes, lignes de tarifs, placeholders photo |
| `--ink` | `#223244` | Liens du menu à l'état inactif |
| — | `#EDF4F8` | Bandeaux de fin de page et pied de page (bleu très clair ; nouvelle valeur, dérivée du bleu ciel) |
| — | `#EAE2D7` | Liseré des cartes et placeholders (nouvelle valeur, sable assombri) |
| — | `#DCEAF2` | Filet vertical à gauche des listes d'horaires (nouvelle valeur, bleu très pâle) |

### Typographies

Auto-hébergées, `public/assets/fonts/` — inchangées.

- **Display** — `'Swistblnk Moabhoers', 'Quicksand', sans-serif`, `font-weight: 700`. 
  Titres, sur-titres, boutons, nom de marque, titres du footer.
- **Script** — `'Better Signature', 'Caveat', cursive`, `font-weight: 600`. 
  « Respirer. Ressentir. Mettre le corps en mouvement. » et la ligne de la page À propos.
- **Corps** — `'Futura Std', 'Nunito', sans-serif`, `400` / `700`. 
  `line-height: 1.65`.

### Échelle typographique

| Rôle | Valeur |
| --- | --- |
| H1 accueil | `clamp(2.6rem, 7vw, 5rem)` / `line-height: 1.06` |
| H1 pages intérieures | `clamp(2.4rem, 5.6vw, 4.2rem)` / `1.08` |
| H1 long (page Yoga) | `clamp(2.1rem, 4.6vw, 3.4rem)` / `1.12`, `max-width: 26ch` |
| H2 de section | `clamp(1.7rem, 3.4vw, 2.4rem)` |
| H2 de sous-section | `clamp(1.6rem, 3vw, 2.1rem)` |
| H2 / H3 de carte | `clamp(1.2rem, 2vw, 1.45rem)` / `1.25`, `overflow-wrap: break-word` |
| Sur-titre (eyebrow) | `0.78rem`, `letter-spacing: 0.14em`, `text-transform: uppercase` |
| Lede | `1.12rem`, `max-width: 52–62ch` |
| Corps | `1rem` |
| Listes de détail, meta | `0.95rem` / `0.85rem` |
| Script hero | `clamp(1.7rem, 3.6vw, 2.6rem)` |
| Liens du menu | `0.92rem` |
| Boutons | `0.98rem` (`0.95rem` dans la page Contact) |

### Espacements, rayons, liserés

- Largeur de contenu : `max-width: 1140px`, gouttières `clamp(20px, 4vw, 40px)`. 
  Header : `1320px`. Colonne de lecture (carnets, contact) : `720px`.
- Padding hero : `clamp(48px,8vw,104px)` en haut, `clamp(20px,3vw,36px)` en bas 
  (accueil : `clamp(56px,9vw,120px)` / `clamp(24px,4vw,48px)`).
- Padding de section : `clamp(40px,6vw,80px)` ; bandeaux colorés `clamp(56px,8vw,110px)`.
- Grilles : `repeat(auto-fit, minmax(240px, 1fr))` pour les cartes, 
  `repeat(auto-fit, minmax(min(100%,300px), 1fr))` pour les deux colonnes, 
  `gap: clamp(20px,2.4vw,32px)` / `clamp(32px,4vw,64px)`.
- Rayons : cartes et placeholders `28px` ; lignes de tarifs `14px` ; 
  encart « à compléter » `16px` ; boutons et pastilles `999px`.
- Liserés : cartes `1px solid #EAE2D7` ; header/footer `1px solid rgba(22,93,135,0.09)` ; 
  séparateur bas du footer `rgba(22,93,135,0.12)` ; 
  filet de liste `1px solid #DCEAF2` avec `padding-left: 1.2rem` ; 
  éléments « à venir » `1px dashed #3BA5CF`.
- **Aucune ombre** nulle part.

### Boutons

- **Primaire** : fond `#D18877`, texte `#FFFFFF`, `border-radius: 999px`, 
  `padding: 0.85em 1.8em`, police display 700, `0.98rem`. 
  Survol : fond `#CB9380`. Pas de `translateY` (le mouvement du site actuel est retiré).
- **Secondaire** : `border: 2px solid #165D87`, texte `#165D87`, mêmes métriques. 
  Survol : fond `#FFFFFF`.
- **Lien de menu** : `0.92rem`, couleur `#223244`, `padding-bottom: 2px`, 
  `border-bottom: 1px solid transparent`. 
  Actif : couleur et bordure `#D18877`.

### Vagues (remplace `app-wave`)

```html
<svg viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true"
     style="display:block;width:100%;height:clamp(46px,7vw,110px)">
  <path d="M0,104 Q300,4 600,58 T1200,58"  fill="none" stroke="#165D87" stroke-width="1.5" opacity="0.55"/>
  <path d="M0,92  Q300,-8 600,46 T1200,46" fill="none" stroke="#2788AE" stroke-width="1.5" opacity="0.5"/>
  <path d="M0,116 Q300,16 600,70 T1200,70" fill="none" stroke="#3BA5CF" stroke-width="1.5" opacity="0.45"/>
</svg>
```

Conteneur : `max-width:1400px; margin:0 auto; padding:0 clamp(20px,4vw,40px)`. 
Variante retournée avant les bandeaux colorés : `transform: scaleY(-1)` et 
`height: clamp(40px,6vw,96px)`.

Le composant `app-wave` existant peut être conservé en changeant son template 
(les entrées `fill` / `from` n'ont plus de sens : la vague n'a plus d'aire remplie ; 
prévoir plutôt une entrée `flip: boolean`).

## Écrans

Neuf pages, contenu strictement identique au dépôt. Rythme commun : 
hero sur écru → vague → contenu → (vague retournée → bandeau `#EDF4F8`).

### 1. Accueil — `/`
Hero pleine largeur sur écru : sur-titre corail, H1 « Le Souffle Océanique » 
(`max-width: 20ch`), ligne manuscrite corail, lede `52ch`, deux boutons 
(primaire « Découvrir le Yoga », secondaire « Contact / Inscription »). 
Puis vague ; section « Par où commencer ? » centrée avec 4 cartes-liens 
(titre, texte, « Découvrir → » poussé en bas par `margin-top:auto`, survol : 
liseré `#3BA5CF`) ; section « Prochains cours » en deux colonnes (liste à filet 
vertical + pastilles de lieu, bouton primaire | placeholder `4/3`) ; 
section « Les Carnets » centrée ; vague retournée ; bandeau `#EDF4F8` 
« Envie d'essayer ? ».

### 2. Yoga — `/yoga`
Hero long ; vague ; 3 cartes (pastille, H2, texte, liste d'horaires) ; 
vague retournée ; bandeau `#EDF4F8` « S'inscrire » : liste de tarifs 
(lignes blanches, `justify-content: space-between`, prix `white-space: nowrap`) 
+ placeholder `4/3`.

### 3. Son & Relaxation — `/son-et-relaxation`
Hero ; vague ; deux colonnes : trois sous-sections H2 empilées 
(`margin-top: 2.5rem` entre elles) + placeholder `3/4`.

### 4. Expériences — `/experiences`
Hero ; vague ; 3 cartes avec pastille en pied ; vague retournée ; 
bandeau `#EDF4F8` centré « Une idée en tête ? ».

### 5. Événements — `/evenements`
Hero court (H1 seul) ; vague ; un lede centré et un bouton. 
Beaucoup de blanc — c'est voulu, la page est une page d'attente.

### 6. Les Carnets — `/les-carnets`
Hero ; vague ; filtres par catégorie en pastilles centrées (pastille active : 
fond `#165D87`, texte blanc) affichés seulement si plus d'une catégorie ; 
liste de cartes en colonne unique `max-width: 720px` (pastille + date en français, 
titre lien, extrait, « Lire la suite → ») ; paragraphe de clôture et bouton primaire.

### 7. Détail d'un carnet — `/les-carnets/:id`
Colonne `720px` : retour « ← Tous les carnets » en corail, pastille + date, 
H1, corps en paragraphes `1.08rem` bleu violacé, `margin-bottom: 1.4em`.

### 8. Infos pratiques — `/informations-pratiques`
Hero (H1 seul) ; vague ; deux colonnes « Lieux & horaires » (liste à filet) / 
« Tarifs » (6 lignes blanches) ; vague retournée ; bandeau `#EDF4F8` avec 
« Contact » et « Bon à savoir ».

### 9. À propos — `/a-propos`
Hero (H1 « Qui suis-je ? ») ; vague ; deux colonnes : lede + encart 
« Section à compléter avec Émilie » (`1px dashed #3BA5CF`, fond blanc) / 
placeholder portrait `3/4` en pointillés ; vague retournée ; bandeau `#EDF4F8` 
avec la ligne manuscrite et un bouton.

### 10. Contact — `/contact`
Hero ; vague ; une carte `max-width: 720px` : H2 « Coordonnées », liste de 4 lignes, 
puis 4 boutons (1 primaire « Appeler », 3 secondaires) en `flex-wrap`.

### Header
Sticky, fond `rgba(246,242,236,0.94)` + `backdrop-filter: blur(8px)`, 
liseré bas. Logo rond 46 px + nom de marque en display 700 `1.05rem`. 
8 liens de menu de même traitement, y compris « Contact / Inscription » 
(ce n'est plus un bouton), `gap: clamp(14px,1.7vw,26px)`, `flex-wrap`. 
Le menu burger du dépôt (< 1300 px) n'est pas traité dans ce prototype — 
**le conserver tel quel**, en reprenant seulement les couleurs ci-dessus.

### Footer
Fond `#EDF4F8`, 4 colonnes `repeat(auto-fit, minmax(min(100%,200px), 1fr))` : 
logo 56 px + ligne manuscrite corail | Navigation | Contact | Suivre. 
Barre du bas séparée par un liseré, `0.82rem`. 
Titres de colonne en display 700 `1rem` bleu océan, liens bleu violacé, 
survol corail.

### Page non traitée
`mentions-legales` : page légale, à laisser telle quelle (elle héritera 
automatiquement des nouveaux tokens de `styles.css`).

## Interactions et comportement

- **Navigation** : dans le prototype, un état local `page` et des `onClick` avec 
  `preventDefault()` + `window.scrollTo(0, 0)`. Dans l'app, garder le routeur 
  Angular et `routerLink` / `routerLinkActive` existants.
- **État actif du menu** : couleur et `border-bottom` corail `#D18877` 
  (remplace le simple changement de couleur actuel).
- **Survols** : liens → corail ; cartes-liens → liseré `#3BA5CF` ; 
  bouton primaire → `#CB9380` ; bouton secondaire → fond blanc. 
  Aucune transformation ni ombre au survol.
- **Filtres des carnets** : un seul filtre actif à la fois, « Tous » remet à zéro ; 
  message « Aucun carnet dans cette catégorie pour le moment. » si le filtre est vide. 
  Logique identique à `carnets.component.ts`.
- **Responsive** : tout est fluide (`clamp`, `minmax(min(100%,…), 1fr)`, `auto-fit`). 
  Pas de media query dans le prototype hors le burger à reprendre du dépôt.
- **Dates** : formatées en français (« 2 septembre 2026 »).

## État

- `page` : page courante (routeur Angular dans l'app).
- `category` : catégorie de carnet filtrée, `null` = tous.
- `carnetId` : carnet ouvert (paramètre de route dans l'app).
- `carnets` : chargé depuis `assets/data/carnets.json` (`fetch`, tableau vide en cas d'erreur).

## Assets

Tous repris du dépôt, aucun nouvel asset :

- `fonts/swistblnk-moabhoers.woff2`, `better-signature.woff2`, 
  `futura-std-book.woff2`, `futura-std-bold.woff2` — depuis `public/assets/fonts/`
- `images/logo.jpg` — depuis `public/assets/images/`
- `data/carnets.json` — depuis `public/assets/data/`

Les emplacements photo restent des placeholders : « pratique en extérieur », 
« cours de yoga », « bols chantants », « Portrait à venir ». Les vraies photos de la 
cliente sont attendues ; le sable et les textures dont elle parle viendront en grande 
partie d'elles.

## Fichiers

- `Le Souffle Oceanique.dc.html` — le prototype complet (9 pages). Template en haut, 
  classe de logique dans le `<script>` en bas.
- `support.js` — runtime du prototype, nécessaire pour l'ouvrir dans un navigateur. 
  **À ne pas porter** dans l'app.
- `fonts/`, `images/`, `data/` — assets copiés du dépôt.
