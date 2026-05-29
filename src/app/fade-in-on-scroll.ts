import {
  AfterViewInit,
  Directive,
  ElementRef,
  OnDestroy,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appFadeInOnScroll]',
  standalone: true
})
export class FadeInOnScrollDirective implements AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit(): void {
    const element = this.elementRef.nativeElement;

    this.renderer.addClass(element, 'fade-in-hidden');

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.renderer.addClass(element, 'fade-in-visible');
          this.renderer.removeClass(element, 'fade-in-hidden');
          this.observer?.unobserve(element);
        }
      },
      {
        threshold: 0,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    this.observer.observe(element);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
