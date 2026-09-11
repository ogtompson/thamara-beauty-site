import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from '../button/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, Button],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  menuOpen = signal(false);

  toggleMenu() {
    this.menuOpen.update(open => !open);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }
}