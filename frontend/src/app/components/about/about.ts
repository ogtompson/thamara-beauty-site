import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from '../button/button';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, Button],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  @Input() photoUrl = 'https://picsum.photos/500/600?professional';
  @Input() name = 'Thamara Vasconcelos';
  @Input() bio = '';
  @Input() specialty = '';
}