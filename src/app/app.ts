import { Component, signal } from '@angular/core';
import {LandingComponent} from './landing/landing.component';
import {About} from './about/about';

@Component({
  selector: 'app-root',
  imports: [LandingComponent, About],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('chayanne-website');
  protected readonly scrollTo = scrollTo;
}
