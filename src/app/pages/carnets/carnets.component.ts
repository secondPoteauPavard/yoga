import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-carnets',
  imports: [RouterLink],
  templateUrl: './carnets.component.html',
  styleUrl: './carnets.component.css',
})
export class CarnetsComponent {
  readonly categories = [
    'Corps & mouvement',
    'Souffle',
    'Yoga de l\'Énergie',
    'Son & vibration',
    'Enfants & transmission',
    'Réflexions',
    'Traversées',
  ];
}
