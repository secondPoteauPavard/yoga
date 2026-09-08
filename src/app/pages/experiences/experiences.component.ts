import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WaveComponent } from '../../shared/wave/wave.component';

@Component({
  selector: 'app-experiences',
  imports: [RouterLink, WaveComponent],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.css',
})
export class ExperiencesComponent {}
