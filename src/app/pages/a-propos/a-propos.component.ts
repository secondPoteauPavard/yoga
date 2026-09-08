import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WaveComponent } from '../../shared/wave/wave.component';

@Component({
  selector: 'app-a-propos',
  imports: [RouterLink, WaveComponent],
  templateUrl: './a-propos.component.html',
  styleUrl: './a-propos.component.css',
})
export class AProposComponent {}
