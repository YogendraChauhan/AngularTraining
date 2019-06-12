import { Directive, Input, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[bgColor]'
})
export class BgColorDirective {
  @Input()
  @HostBinding('style.background-color') bgColor: string;

  @HostListener('click') onClick() {
    console.log('clicked');
  }
}
