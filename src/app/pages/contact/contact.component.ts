import { Component } from '@angular/core';
import { WaveComponent } from '../../shared/wave/wave.component';

/**
 * Contact — v1 sans formulaire en ligne.
 * On affiche simplement les coordonnées (téléphone, email) en liens directs.
 * Un vrai formulaire de réservation/contact sera développé en v2.
 */
@Component({
  selector: 'app-contact',
  imports: [WaveComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {}
