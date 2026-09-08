import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WaveComponent } from '../../shared/wave/wave.component';

@Component({
  selector: 'app-evenements',
  imports: [RouterLink, WaveComponent],
  templateUrl: './evenements.component.html',
  styleUrl: './evenements.component.css',
})
export class EvenementsComponent {}
