import { Component, Input, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface PortfolioItem {
  imageUrl: string;
  title: string;
  category: string;
}

@Component({
  selector: 'app-portfolio-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio-gallery.html',
  styleUrl: './portfolio-gallery.scss'
})
export class PortfolioGallery {
  @Input() items: PortfolioItem[] = [];

  hoveredIndex: number | null = null;
  isMobile = false;

  constructor() {
    this.checkViewport();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkViewport();
  }

  private checkViewport() {
    this.isMobile = window.innerWidth < 768;
  }

  onHover(index: number | null) {
    if (!this.isMobile) {
      this.hoveredIndex = index;
    }
  }

  // Calcula deslocamento/rotação de cada card em relação ao centro
  getCardStyle(index: number) {
    const mid = (this.items.length - 1) / 2;
    const offset = index - mid;
    const rotate = offset * 6;
    const translateY = Math.abs(offset) * 18;
    const translateX = offset * 60; // ajuste conforme a largura do card

    const isHovered = this.hoveredIndex === index;

    return {
      transform: isHovered
        ? `translate(${translateX}px, ${translateY - 16}px) rotate(0deg) scale(1.08)`
        : `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg) scale(1)`,
      zIndex: isHovered ? this.items.length + 1 : this.items.length - Math.abs(offset)
    };
  }
}