import {AfterViewInit, Component} from '@angular/core';
import { gsap } from 'gsap';
import {FadeInOnScrollDirective} from '../fade-in-on-scroll';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.css',
  imports: [
    FadeInOnScrollDirective
  ],
  standalone: true
})
export class About implements AfterViewInit {
  ngAfterViewInit(): void {
    gsap.from('.fade-on-load', {
      opacity: 0,
      y: 24,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.15
    });
  }
}
