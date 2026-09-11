import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from '../button/button';

export interface HeroStat {
  value: string;
  label: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, Button],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {
  stats: HeroStat[] = [
    { value: '6', label: 'Anos de atuação' },
    { value: '100%', label: 'Atendimento individual' },
  ];

  images = [
    'https://picsum.photos/400/500?a',
    'https://picsum.photos/300/350?b',
    'https://picsum.photos/280/280?c',
  ];
}