import { Component } from '@angular/core';
import { Button } from '../button/button';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [Button],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {
  images = [
    'https://picsum.photos/400/500?a',
    'https://picsum.photos/300/350?b',
    'https://picsum.photos/280/280?c',
  ];
}
