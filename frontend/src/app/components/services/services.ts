import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ServiceItem {
  name: string;
  price: string;
  duration: string;
}

export interface ServiceCategory {
  title: string;
  description: string;
  items: ServiceItem[];
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class Services {
  @Input() categories: ServiceCategory[] = [];
}