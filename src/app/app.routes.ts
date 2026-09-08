import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/accueil/accueil.component').then((m) => m.AccueilComponent),
    title: 'Le Souffle Océanique — Yoga de l\'Énergie à Labenne',
    data: {
      description:
        "Yoga de l'Énergie, souffle, son et mouvement à Labenne. Cours adultes, enfants et ados, méditation, yoga du son, massages sonores aux bols chantants, avec Émilie Gavart.",
    },
  },
  {
    path: 'yoga',
    loadComponent: () => import('./pages/yoga/yoga.component').then((m) => m.YogaComponent),
    title: 'Yoga de l\'Énergie — Le Souffle Océanique',
    data: {
      description:
        "Cours de Yoga de l'Énergie à Labenne pour adultes, enfants et ados avec Émilie Gavart, formée EFYSO (600h) — mouvement, souffle et méditation.",
    },
  },
  {
    path: 'son-et-relaxation',
    loadComponent: () =>
      import('./pages/son-relaxation/son-relaxation.component').then(
        (m) => m.SonRelaxationComponent
      ),
    title: 'Son & Relaxation — Le Souffle Océanique',
    data: {
      description:
        'Méditation, yoga du son et massages sonores aux bols chantants à Labenne, pour se détendre en profondeur et se reconnecter à soi.',
    },
  },
  {
    path: 'informations-pratiques',
    loadComponent: () =>
      import('./pages/informations-pratiques/informations-pratiques.component').then(
        (m) => m.InformationsPratiquesComponent
      ),
    title: 'Informations pratiques — Le Souffle Océanique',
    data: {
      description:
        'Horaires, lieux et tarifs des cours de yoga et de méditation à Labenne — Salle Manaoc et Labenne marais d\'Orx. 1er cours d\'essai gratuit en septembre.',
    },
  },
  {
    path: 'experiences',
    loadComponent: () =>
      import('./pages/experiences/experiences.component').then((m) => m.ExperiencesComponent),
    title: 'Expériences — Le Souffle Océanique',
    data: {
      description:
        "Ateliers, accompagnements individuels et cérémonies de passage avec Émilie Gavart — des expériences sur mesure autour du souffle, du son et du mouvement.",
    },
  },
  {
    path: 'evenements',
    loadComponent: () =>
      import('./pages/evenements/evenements.component').then((m) => m.EvenementsComponent),
    title: 'Événements — Le Souffle Océanique',
    data: {
      description:
        'Les prochains événements du Souffle Océanique à Labenne : ateliers, cercles et cérémonies à venir avec Émilie Gavart.',
    },
  },
  {
    path: 'les-carnets',
    loadComponent: () =>
      import('./pages/carnets/carnets.component').then((m) => m.CarnetsComponent),
    title: 'Les Carnets — Le Souffle Océanique',
    data: {
      description:
        'Les Carnets du Souffle Océanique : réflexions et récits autour du souffle, du corps, du son et du Yoga de l\'Énergie.',
    },
  },
  {
    path: 'les-carnets/:id',
    loadComponent: () =>
      import('./pages/carnet-detail/carnet-detail.component').then(
        (m) => m.CarnetDetailComponent
      ),
    title: 'Carnet — Le Souffle Océanique',
    // Pas de description ici : chaque carnet a la sienne, posée dynamiquement
    // par CarnetDetailComponent une fois l'article chargé depuis carnets.json.
  },
  {
    path: 'a-propos',
    loadComponent: () =>
      import('./pages/a-propos/a-propos.component').then((m) => m.AProposComponent),
    title: 'À propos — Le Souffle Océanique',
    data: {
      description:
        "À propos d'Émilie Gavart, formée au Yoga de l'Énergie EFYSO (600h), qui accompagne depuis 15 ans enfants, adolescents et adultes à Labenne.",
    },
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then((m) => m.ContactComponent),
    title: 'Contact / Inscription — Le Souffle Océanique',
    data: {
      description:
        "Contactez Émilie Gavart pour rejoindre un cours de Yoga de l'Énergie à Labenne — téléphone, email, Instagram ou Facebook.",
    },
  },
  {
    path: 'mentions-legales',
    loadComponent: () =>
      import('./pages/mentions-legales/mentions-legales.component').then(
        (m) => m.MentionsLegalesComponent
      ),
    title: 'Mentions légales — Le Souffle Océanique',
    data: {
      description: 'Mentions légales du site Le Souffle Océanique — Émilie Gavart, Labenne (40).',
    },
  },
  { path: '**', redirectTo: '' },
];
