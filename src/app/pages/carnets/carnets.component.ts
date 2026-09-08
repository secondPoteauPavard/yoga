import { Component, OnInit, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WaveComponent } from '../../shared/wave/wave.component';

interface Carnet {
  id: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  body: string[];
}

const PAGE_SIZE = 6;

/**
 * Les Carnets — v1 sans back-office.
 * Les textes ne sont PAS écrits dans ce composant : ils viennent de
 * public/assets/data/carnets.json, chargé ici au runtime (fetch).
 * Pour ajouter/modifier un carnet, il suffit d'éditer ce fichier JSON —
 * aucune modification de code n'est nécessaire. C'est une première étape
 * simple vers le futur espace d'administration d'Émilie.
 *
 * Cette page liste uniquement les résumés (extrait) ; le texte complet
 * s'affiche sur la page de détail (/les-carnets/:id), pour ne pas charger
 * tous les textes d'un coup quand la liste grandira.
 */
@Component({
  selector: 'app-carnets',
  imports: [RouterLink, WaveComponent],
  templateUrl: './carnets.component.html',
  styleUrl: './carnets.component.css',
})
export class CarnetsComponent implements OnInit {
  readonly categories = [
    'Corps & mouvement',
    'Souffle',
    'Yoga de l\'Énergie',
    'Son & vibration',
    'Enfants & transmission',
    'Réflexions',
    'Traversées',
  ];

  carnets = signal<Carnet[]>([]);
  loadError = signal(false);
  activeCategory = signal<string | null>(null);
  visibleCount = signal(PAGE_SIZE);

  /** Catégories réellement utilisées par au moins un carnet publié. */
  usedCategories = computed(() => {
    const used = new Set(this.carnets().map((c) => c.category));
    return this.categories.filter((cat) => used.has(cat));
  });

  filtered = computed(() => {
    const cat = this.activeCategory();
    const all = this.carnets();
    return cat ? all.filter((c) => c.category === cat) : all;
  });

  visible = computed(() => this.filtered().slice(0, this.visibleCount()));

  hasMore = computed(() => this.visibleCount() < this.filtered().length);

  private readonly moisFr = [
    'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
    'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre',
  ];

  formatDate(iso: string): string {
    const d = new Date(iso + 'T00:00:00');
    if (Number.isNaN(d.getTime())) return iso;
    return `${d.getDate()} ${this.moisFr[d.getMonth()]} ${d.getFullYear()}`;
  }

  toggleCategory(cat: string) {
    this.activeCategory.set(this.activeCategory() === cat ? null : cat);
    this.visibleCount.set(PAGE_SIZE);
  }

  clearCategory() {
    this.activeCategory.set(null);
    this.visibleCount.set(PAGE_SIZE);
  }

  loadMore() {
    this.visibleCount.update((n) => n + PAGE_SIZE);
  }

  ngOnInit() {
    fetch('assets/data/carnets.json')
      .then((res) => {
        if (!res.ok) throw new Error('carnets.json introuvable');
        return res.json();
      })
      .then((data: Carnet[]) => {
        const sorted = [...data].sort((a, b) => (a.date < b.date ? 1 : -1));
        this.carnets.set(sorted);
      })
      .catch(() => this.loadError.set(true));
  }
}
