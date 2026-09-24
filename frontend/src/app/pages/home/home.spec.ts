import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Home } from './home';

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
    }).compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should compose all institutional sections', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('app-header')).toBeTruthy();
    expect(compiled.querySelector('app-hero')).toBeTruthy();
    expect(compiled.querySelector('app-services')).toBeTruthy();
    expect(compiled.querySelector('app-portfolio-gallery')).toBeTruthy();
    expect(compiled.querySelector('app-about')).toBeTruthy();
    expect(compiled.querySelector('app-testimonials')).toBeTruthy();
    expect(compiled.querySelector('app-location')).toBeTruthy();
    expect(compiled.querySelector('app-footer')).toBeTruthy();
  });
});
