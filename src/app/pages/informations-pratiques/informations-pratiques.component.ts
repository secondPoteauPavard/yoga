import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WaveComponent } from '../../shared/wave/wave.component';

@Component({
  selector: 'app-informations-pratiques',
  imports: [RouterLink, WaveComponent],
  templateUrl: './informations-pratiques.component.html',
  styleUrl: './informations-pratiques.component.css',
})
export class InformationsPratiquesComponent {}
