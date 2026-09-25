import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SmoothScrollService } from '../../services/smooth-scroll.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  readonly currentYear = new Date().getFullYear();
  private readonly smoothScroll = inject(SmoothScrollService);

  scrollToSection(event: MouseEvent, sectionId: string) {
    this.smoothScroll.scrollTo(event, sectionId);
  }
}
