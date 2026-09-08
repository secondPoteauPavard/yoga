import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WaveComponent } from '../../shared/wave/wave.component';

@Component({
  selector: 'app-son-relaxation',
  imports: [RouterLink, WaveComponent],
  templateUrl: './son-relaxation.component.html',
  styleUrl: './son-relaxation.component.css',
})
export class SonRelaxationComponent {}
