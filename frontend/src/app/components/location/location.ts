import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

export interface LocationInfoCard {
  icon: 'address' | 'whatsapp' | 'clock';
  label: string;
  value: string;
}

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './location.html',
  styleUrl: './location.scss'
})
export class Location {
  @Input() cards: LocationInfoCard[] = [];

  private _mapEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.179246237608!2d-34.84372108845304!3d-7.9804161795379756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab3d6cdba6b179%3A0xb8edfa16d4431e02!2sR.%20Manoel%20Graciliano%20de%20Souza%2C%20112%20-%20Jardim%20Atl%C3%A2ntico%2C%20Olinda%20-%20PE%2C%2053140-050!5e0!3m2!1spt-BR!2sbr!4v1789098909033!5m2!1spt-BR!2sbr';;
  safeMapUrl: SafeResourceUrl;

  @Input()
  set mapEmbedUrl(url: string) {
    this._mapEmbedUrl = url;
    this.safeMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  get mapEmbedUrl(): string {
    return this._mapEmbedUrl;
  }

  constructor(private sanitizer: DomSanitizer) {
    this.safeMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this._mapEmbedUrl);
  }
}
