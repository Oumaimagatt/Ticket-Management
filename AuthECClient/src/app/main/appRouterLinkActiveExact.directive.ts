import { Directive, Input, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appRouterLinkActiveExact]'
})
export class RouterLinkActiveExactDirective {

  @Input('appRouterLinkActiveExact') link: string | undefined; // Input to specify the link to match exactly

  constructor(private el: ElementRef, private router: Router) {}

  @HostListener('click') onClick() {
    const currentUrl = this.router.url;
    if (currentUrl === this.link) {
      this.el.nativeElement.classList.add('active-exact');
    } else {
      this.el.nativeElement.classList.remove('active-exact');
    }
  }
}
