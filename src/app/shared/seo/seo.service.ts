import { Injectable, inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SITE_URL } from '../../site-config';

/**
 * Centralise les balises SEO/partage qui changent d'une page à l'autre :
 * <meta name="description">, Open Graph, Twitter Card, et <link rel="canonical">.
 *
 * Angular gère déjà le <title> tout seul via la propriété `title` de chaque
 * route. Ce service fait la même chose pour la description : il lit une
 * propriété `data.description` posée sur chaque route (voir app.routes.ts) et
 * met à jour les balises correspondantes à chaque navigation.
 *
 * Limite importante : tout ceci s'exécute en JavaScript, après le chargement
 * de la page. Google l'exécute et en tient compte, mais les robots qui
 * génèrent les aperçus de lien (Facebook, Instagram, LinkedIn, WhatsApp...)
 * n'exécutent pas le JavaScript : ils ne verront jamais ces balises
 * dynamiques, seulement celles écrites en dur dans index.html. C'est pour ça
 * qu'index.html porte aussi un jeu de balises Open Graph statiques et
 * génériques, qui servent de filet de sécurité pour ces robots-là quelle que
 * soit la page partagée.
 */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private meta = inject(Meta);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  /** À appeler une seule fois, au démarrage de l'application (AppComponent). */
  init(): void {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      const leaf = this.leafRouteSnapshot();
      const description = leaf.data['description'] as string | undefined;
      if (description) {
        this.updateDescription(description);
      }
      // On relit `title` directement sur le snapshot de route plutôt que via le
      // Title service : au moment où NavigationEnd se déclenche, la stratégie de
      // titre d'Angular n'a pas toujours fini d'écrire le nouveau <title> dans le
      // DOM, donc Title.getTitle() peut encore renvoyer l'ancienne page. Le
      // snapshot, lui, porte déjà la bonne valeur de façon synchrone.
      if (leaf.title) {
        this.updateTitleTags(leaf.title);
      }
      this.updateUrlTags(this.router.url);
    });
  }

  /** Description spécifique (ex: l'extrait d'un carnet) — écrase celle de la route. */
  updateDescription(description: string): void {
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ name: 'twitter:description', content: description });
  }

  /** Titre spécifique pour le partage — indépendant du <title> de l'onglet si besoin. */
  updateTitleTags(title: string): void {
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ name: 'twitter:title', content: title });
  }

  private updateUrlTags(path: string): void {
    const url = path === '/' ? SITE_URL + '/' : `${SITE_URL}${path}`;
    this.meta.updateTag({ property: 'og:url', content: url });
    this.setCanonical(url);
  }

  private setCanonical(url: string): void {
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  private leafRouteSnapshot(): ActivatedRouteSnapshot {
    let route = this.activatedRoute.root;
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route.snapshot;
  }
}
