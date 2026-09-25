import { Component, Input } from '@angular/core';

export interface PortfolioItem {
  imageUrl: string;
  title: string;
  category: string;
}

@Component({
  selector: 'app-portfolio-gallery',
  standalone: true,
  templateUrl: './portfolio-gallery.html',
  styleUrl: './portfolio-gallery.scss',
})
export class PortfolioGallery {
  @Input() items: PortfolioItem[] = [];
}
