import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { PortfolioGallery } from '../../components/portfolio-gallery/portfolio-gallery';
import { Footer } from '../../components/footer/footer';

@Component({
  imports: [Header,PortfolioGallery,Footer],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {}
