import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { WaveComponent } from '../../shared/wave/wave.component';

interface Carnet {
  id: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  body: string[];
}

/**
 * Page de détail d'un carnet (/les-carnets/:id).
 * Lit le même fichier public/assets/data/carnets.json que la liste et
 * affiche le texte complet du carnet dont l'id correspond au paramètre
 * de route.
 */
@Component({
  selector: 'app-carnet-detail',
  imports: [RouterLink, WaveComponent],
  templateUrl: './carnet-detail.component.html',
  styleUrl: './carnet-detail.component.css',
})
export class CarnetDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private titleService = inject(Title);

  carnet = signal<Carnet | null>(null);
  notFound = signal(false);

  private readonly moisFr = [
    'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
    'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre',
  ];

  formatDate(iso: string): string {
    const d = new Date(iso + 'T00:00:00');
    if (Number.isNaN(d.getTime())) return iso;
    return `${d.getDate()} ${this.moisFr[d.getMonth()]} ${d.getFullYear()}`;
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    fetch('assets/data/carnets.json')
      .then((res) => {
        if (!res.ok) throw new Error('carnets.json introuvable');
        return res.json();
      })
      .then((data: Carnet[]) => {
        const found = data.find((c) => c.id === id) ?? null;
        this.carnet.set(found);
        if (found) {
          this.titleService.setTitle(`${found.title} — Les Carnets — Le Souffle Océanique`);
        } else {
          this.notFound.set(true);
        }
      })
      .catch(() => this.notFound.set(true));
  }
}
