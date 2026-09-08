import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WaveComponent } from '../../shared/wave/wave.component';

@Component({
  selector: 'app-yoga',
  imports: [RouterLink, WaveComponent],
  templateUrl: './yoga.component.html',
  styleUrl: './yoga.component.css',
})
export class YogaComponent {}
