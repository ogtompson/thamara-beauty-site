import { Component } from '@angular/core';
import { About } from '../../components/about/about';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { Hero } from '../../components/hero/hero';
import { Location, LocationInfoCard } from '../../components/location/location';
import {
  PortfolioGallery,
  PortfolioItem,
} from '../../components/portfolio-gallery/portfolio-gallery';
import { ServiceCategory, Services } from '../../components/services/services';
import { Testimonial, Testimonials } from '../../components/testimonials/testimonials';

@Component({
  imports: [
    Header,
    Hero,
    Services,
    PortfolioGallery,
    About,
    Testimonials,
    Location,
    Footer,
  ],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  // Conteúdo temporário para composição visual. Substituir após validação com a cliente.
  readonly serviceCategories: ServiceCategory[] = [
    {
      title: 'Sobrancelhas',
      description: 'Técnicas pensadas para valorizar o formato natural do rosto.',
      items: [
        { name: 'Design de sobrancelhas', duration: 'Duração a confirmar', price: 'Consulte' },
        { name: 'Design com henna', duration: 'Duração a confirmar', price: 'Consulte' },
        { name: 'Micropigmentação', duration: 'Duração a confirmar', price: 'Consulte' },
      ],
    },
    {
      title: 'Cílios',
      description: 'Procedimentos para destacar o olhar com acabamento personalizado.',
      items: [
        { name: 'Extensão de cílios', duration: 'Duração a confirmar', price: 'Consulte' },
        { name: 'Lash lifting', duration: 'Duração a confirmar', price: 'Consulte' },
        { name: 'Manutenção', duration: 'Duração a confirmar', price: 'Consulte' },
      ],
    },
  ];

  readonly portfolioItems: PortfolioItem[] = [
    {
      imageUrl: 'https://picsum.photos/500/650?random=11',
      title: 'Design personalizado',
      category: 'Sobrancelhas',
    },
    {
      imageUrl: 'https://picsum.photos/500/650?random=12',
      title: 'Micropigmentação',
      category: 'Sobrancelhas',
    },
    {
      imageUrl: 'https://picsum.photos/500/650?random=13',
      title: 'Extensão de cílios',
      category: 'Cílios',
    },
    {
      imageUrl: 'https://picsum.photos/500/650?random=14',
      title: 'Lash lifting',
      category: 'Cílios',
    },
    {
      imageUrl: 'https://picsum.photos/500/650?random=15',
      title: 'Resultado natural',
      category: 'Olhar',
    },
  ];

  readonly testimonials: Testimonial[] = [
    {
      authorName: 'Cliente 01',
      authorHandle: '@cliente01',
      authorAvatar: 'https://i.pravatar.cc/100?img=32',
      text: 'Depoimento real da cliente será inserido aqui.',
    },
    {
      authorName: 'Cliente 02',
      authorHandle: '@cliente02',
      authorAvatar: 'https://i.pravatar.cc/100?img=44',
      text: 'Depoimento real da cliente será inserido aqui.',
    },
    {
      authorName: 'Cliente 03',
      authorHandle: '@cliente03',
      authorAvatar: 'https://i.pravatar.cc/100?img=47',
      text: 'Depoimento real da cliente será inserido aqui.',
    },
    {
      authorName: 'Cliente 04',
      authorHandle: '@cliente04',
      authorAvatar: 'https://i.pravatar.cc/100?img=49',
      text: 'Depoimento real da cliente será inserido aqui.',
    },
  ];

  readonly locationCards: LocationInfoCard[] = [
    {
      icon: 'address',
      label: 'Endereço',
      value: 'R. Manoel Graciliano de Souza, 112 — Jardim Atlântico, Olinda — PE',
    },
    {
      icon: 'whatsapp',
      label: 'WhatsApp',
      value: '(81) 98257-1761',
    },
    {
      icon: 'clock',
      label: 'Atendimento',
      value: 'Horário a confirmar',
    },
  ];
}
