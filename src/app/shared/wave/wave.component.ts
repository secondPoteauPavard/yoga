import { Component, Input } from '@angular/core';

/**
 * Séparateur en filets entre deux sections (3 traits superposés bleu océan /
 * turquoise / bleu ciel), repris tel quel du design handoff — voir
 * design_handoff_refonte_visuelle/README.md. Remplace l'ancienne vague en
 * aire remplie : plus besoin de `fill`/`from`, le tracé est le même partout.
 * `flip` retourne la vague verticalement, utilisée avant un bandeau de fin
 * de page.
 */
@Component({
  selector: 'app-wave',
  imports: [],
  templateUrl: './wave.component.html',
  styleUrl: './wave.component.css',
})
export class WaveComponent {
  @Input() flip = false;
}
