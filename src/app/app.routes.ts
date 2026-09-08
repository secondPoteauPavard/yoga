import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/accueil/accueil.component').then((m) => m.AccueilComponent),
    title: 'Le Souffle Océanique — Yoga de l\'Énergie à Labenne',
  },
  {
    path: 'yoga',
    loadComponent: () => import('./pages/yoga/yoga.component').then((m) => m.YogaComponent),
    title: 'Yoga de l\'Énergie — Le Souffle Océanique',
  },
  {
    path: 'son-et-relaxation',
    loadComponent: () =>
      import('./pages/son-relaxation/son-relaxation.component').then(
        (m) => m.SonRelaxationComponent
      ),
    title: 'Son & Relaxation — Le Souffle Océanique',
  },
  {
    path: 'informations-pratiques',
    loadComponent: () =>
      import('./pages/informations-pratiques/informations-pratiques.component').then(
        (m) => m.InformationsPratiquesComponent
      ),
    title: 'Informations pratiques — Le Souffle Océanique',
  },
  {
    path: 'experiences',
    loadComponent: () =>
      import('./pages/experiences/experiences.component').then((m) => m.ExperiencesComponent),
    title: 'Expériences — Le Souffle Océanique',
  },
  {
    path: 'evenements',
    loadComponent: () =>
      import('./pages/evenements/evenements.component').then((m) => m.EvenementsComponent),
    title: 'Événements — Le Souffle Océanique',
  },
  {
    path: 'les-carnets',
    loadComponent: () =>
      import('./pages/carnets/carnets.component').then((m) => m.CarnetsComponent),
    title: 'Les Carnets — Le Souffle Océanique',
  },
  {
    path: 'les-carnets/:id',
    loadComponent: () =>
      import('./pages/carnet-detail/carnet-detail.component').then(
        (m) => m.CarnetDetailComponent
      ),
    title: 'Carnet — Le Souffle Océanique',
  },
  {
    path: 'a-propos',
    loadComponent: () =>
      import('./pages/a-propos/a-propos.component').then((m) => m.AProposComponent),
    title: 'À propos — Le Souffle Océanique',
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then((m) => m.ContactComponent),
    title: 'Contact / Inscription — Le Souffle Océanique',
  },
  {
    path: 'mentions-legales',
    loadComponent: () =>
      import('./pages/mentions-legales/mentions-legales.component').then(
        (m) => m.MentionsLegalesComponent
      ),
    title: 'Mentions légales — Le Souffle Océanique',
  },
  { path: '**', redirectTo: '' },
];
