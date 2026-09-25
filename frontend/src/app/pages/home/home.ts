import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  PLATFORM_ID,
  inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
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
export class Home implements AfterViewInit, OnDestroy {
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly platformId = inject(PLATFORM_ID);
  private revealObserver?: IntersectionObserver;
  readonly serviceCategories: ServiceCategory[] = [
    {
      title: 'Sobrancelhas e olhar',
      description: 'Design e tratamentos para valorizar os traços naturais.',
      items: [
        { name: 'Design de sobrancelhas', duration: '', price: 'R$ 35,00' },
        { name: 'Design de sobrancelhas com henna', duration: '', price: 'R$ 45,00' },
        { name: 'Design + tintura para pelos brancos', duration: '', price: 'R$ 50,00' },
        { name: 'Brow lamination', duration: '', price: 'R$ 100,00' },
      ],
    },
    {
      title: 'Micropigmentação e retoques',
      description: 'Procedimentos e manutenção de resultados.',
      items: [
        { name: 'Micropigmentação de sobrancelhas', duration: '', price: 'R$ 500,00' },
        { name: 'Micropigmentação labial', duration: '', price: 'R$ 600,00' },
        { name: 'Retoque anual de sobrancelhas', duration: '', price: 'R$ 350,00' },
        { name: 'Retoque anual de lábios', duration: '', price: 'R$ 450,00' },
        { name: 'Retoque de 30 dias', duration: '', price: 'R$ 100,00' },
      ],
    },
    {
      title: 'Cílios',
      description: 'Aplicações, manutenção e cuidados para os cílios.',
      items: [
        { name: 'Lash lifting', duration: '', price: 'R$ 100,00' },
        { name: 'Remoção de extensão de cílios', duration: '', price: 'R$ 60,00' },
        { name: 'Volume Brasileiro', duration: 'Aplicação', price: 'R$ 120,00' },
        { name: 'Manutenção Volume Brasileiro', duration: 'Até 21 dias', price: 'R$ 100,00' },
        { name: 'Volume Glam 5D marrom', duration: 'Aplicação', price: 'R$ 140,00' },
        { name: 'Manutenção Glam 5D marrom', duration: 'Até 21 dias', price: 'R$ 100,00' },
        { name: 'Volume Glam 5D preto', duration: 'Aplicação', price: 'R$ 140,00' },
        { name: 'Manutenção Glam 5D preto', duration: 'Até 21 dias', price: 'R$ 110,00' },
        { name: 'Volume Fox Eyes', duration: 'Aplicação', price: 'R$ 140,00' },
        { name: 'Manutenção Fox Eyes', duration: 'Até 21 dias', price: 'R$ 100,00' },
      ],
    },
    {
      title: 'Epilação e depilação',
      description: 'Cuidados faciais e corporais.',
      items: [
        { name: 'Epilação facial', duration: '', price: 'R$ 25,00' },
        { name: 'Epilação de buço', duration: '', price: 'R$ 15,00' },
        { name: 'Depilação de axila', duration: '', price: 'R$ 25,00' },
        { name: 'Depilação de meia perna', duration: '', price: 'R$ 30,00' },
        { name: 'Depilação de perna completa', duration: '', price: 'R$ 70,00' },
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
    {
      imageUrl: 'https://picsum.photos/800/650?random=16',
      title: 'Volume personalizado',
      category: 'Cílios',
    },
    {
      imageUrl: 'https://picsum.photos/500/650?random=17',
      title: 'Acabamento delicado',
      category: 'Sobrancelhas',
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
      icon: 'whatsapp',
      label: 'WhatsApp',
      value: '(81) 98257-1761',
    },
    {
      icon: 'clock',
      label: 'Atendimento',
      value: 'Horário a confirmar',
    },
    {
      icon: 'instagram',
      label: 'Instagram',
      value: '@thamaravasconcelospmu',
    },
  ];

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId) || !('IntersectionObserver' in window)) {
      return;
    }

    const host = this.elementRef.nativeElement as HTMLElement;
    const sections = host.querySelectorAll<HTMLElement>('.section-reveal');

    this.revealObserver = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-reveal--visible');
            this.revealObserver?.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.04, rootMargin: '0px 0px -10% 0px' },
    );

    sections.forEach(section => {
      this.revealObserver?.observe(section);
    });
  }

  ngOnDestroy() {
    this.revealObserver?.disconnect();
  }
}
