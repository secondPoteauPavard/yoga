import { Component, Input } from '@angular/core';

/**
 * Séparateur organique en forme d'arrondi entre deux sections.
 * `fill` accepte n'importe quelle couleur CSS (ex: "var(--sand)") : la couleur
 * de la section qui SUIT la vague.
 * `from` est la couleur (ou dégradé) de la section qui PRÉCÈDE la vague : elle
 * comble la zone transparente au-dessus de la courbe pour que l'arrondi soit
 * visible, sans avoir besoin de faire chevaucher le composant sur la section
 * précédente (ce qui recouvrirait son contenu).
 * `flip` retourne la vague verticalement pour varier les transitions.
 */
@Component({
  selector: 'app-wave',
  imports: [],
  templateUrl: './wave.component.html',
  styleUrl: './wave.component.css',
})
export class WaveComponent {
  @Input() fill = 'var(--sand)';
  @Input() from = 'transparent';
  @Input() flip = false;
}
