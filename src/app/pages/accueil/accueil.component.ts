import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WaveComponent } from '../../shared/wave/wave.component';

@Component({
  selector: 'app-accueil',
  imports: [RouterLink, WaveComponent],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css',
})
export class AccueilComponent {
  readonly portes = [
    {
      path: '/yoga',
      title: 'Yoga',
      text: 'Yoga de l\'Énergie pour adultes, enfants et adolescents : souffle, mouvement, présence.',
    },
    {
      path: '/son-et-relaxation',
      title: 'Son & Relaxation',
      text: 'Yoga du son, méditation, massages sonores aux bols chantants et cercles de femmes.',
    },
    {
      path: '/experiences',
      title: 'Expériences',
      text: 'Cérémonies de passage, accompagnements individuels et ateliers thématiques sur mesure.',
    },
    {
      path: '/yoga',
      title: 'Enfants & adolescents',
      text: 'Le yoga de l\'éveil : attention, respiration, posture et émotions, dès le plus jeune âge.',
    },
  ];
}
