import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {FadeInOnScrollDirective} from '../fade-in-on-scroll';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
  imports: [
    NgOptimizedImage,
    FadeInOnScrollDirective,
  ],
  standalone: true
})
export class LandingComponent {}
