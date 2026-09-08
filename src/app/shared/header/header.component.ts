import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  menuOpen = signal(false);

  toggleMenu() {
    this.menuOpen.update((open) => !open);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }

  readonly links = [
    { path: '/yoga', label: 'Yoga' },
    { path: '/son-et-relaxation', label: 'Son & Relaxation' },
    { path: '/experiences', label: 'Expériences' },
    { path: '/evenements', label: 'Événements' },
    { path: '/les-carnets', label: 'Les Carnets' },
    { path: '/informations-pratiques', label: 'Infos pratiques' },
    { path: '/a-propos', label: 'À propos' },
  ];
}
