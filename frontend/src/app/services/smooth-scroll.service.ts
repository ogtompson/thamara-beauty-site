import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SmoothScrollService {
  private readonly platformId = inject(PLATFORM_ID);
  private animationFrame?: number;
  private restoreScrollBehavior?: string;

  scrollTo(event: MouseEvent, sectionId: string) {
    if (!isPlatformBrowser(this.platformId)) return;
    event.preventDefault();

    const target = document.getElementById(sectionId);
    if (!target) return;

    const startY = window.scrollY;
    const targetY = Math.max(0, target.getBoundingClientRect().top + startY - 80);
    this.finishAnimation();
    this.revealSectionsAlongRoute(startY, targetY);

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      window.scrollTo(0, targetY);
      history.replaceState(null, '', `#${sectionId}`);
      return;
    }

    const root = document.documentElement;
    this.restoreScrollBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = 'auto';

    const distance = targetY - startY;
    const duration = Math.min(1200, Math.max(700, Math.abs(distance) * 0.16));
    const startedAt = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      window.scrollTo(0, startY + distance * eased);

      if (progress < 1) {
        this.animationFrame = requestAnimationFrame(animate);
      } else {
        this.animationFrame = undefined;
        this.restoreBehavior();
        history.replaceState(null, '', `#${sectionId}`);
      }
    };

    this.animationFrame = requestAnimationFrame(animate);
  }

  private revealSectionsAlongRoute(startY: number, targetY: number) {
    const minY = Math.min(startY, targetY);
    const maxY = Math.max(startY, targetY) + window.innerHeight;

    document.querySelectorAll<HTMLElement>('.section-reveal').forEach(section => {
      const sectionY = section.getBoundingClientRect().top + window.scrollY;
      if (sectionY >= minY && sectionY <= maxY) {
        section.classList.add('section-reveal--visible');
      }
    });
  }

  private finishAnimation() {
    if (this.animationFrame !== undefined) {
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = undefined;
    }
    this.restoreBehavior();
  }

  private restoreBehavior() {
    if (this.restoreScrollBehavior !== undefined) {
      document.documentElement.style.scrollBehavior = this.restoreScrollBehavior;
      this.restoreScrollBehavior = undefined;
    }
  }
}
