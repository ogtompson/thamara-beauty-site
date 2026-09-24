import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.scss'
})
export class Button {
  @Input() variant: ButtonVariant = 'primary';
  @Input() href?: string;
  @Input() type: 'button' | 'submit' = 'button';
}
