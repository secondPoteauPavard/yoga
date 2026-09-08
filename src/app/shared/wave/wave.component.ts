import { Component, Input } from '@angular/core';

/**
 * Séparateur organique en forme de vague entre deux sections.
 * `fill` accepte n'importe quelle couleur CSS (ex: "var(--sand)").
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
  @Input() flip = false;
}
