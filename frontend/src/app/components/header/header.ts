import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from '../button/button';
import { SmoothScrollService } from '../../services/smooth-scroll.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, Button],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  menuOpen = signal(false);
  private readonly smoothScroll = inject(SmoothScrollService);

  toggleMenu() {
    this.menuOpen.update(open => !open);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }

  navigate(event: MouseEvent, sectionId: string) {
    this.closeMenu();
    this.smoothScroll.scrollTo(event, sectionId);
  }
}
