import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Testimonial {
  authorName: string;
  authorHandle: string;
  authorAvatar: string;
  text: string;
  likes?: number;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss'
})
export class Testimonials {
  @Input() items: Testimonial[] = [];
  @Input() animationDuration = 36;
}
