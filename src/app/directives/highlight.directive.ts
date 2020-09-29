import { style } from '@angular/animations';
import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostBinding ('style.backgroundColor') bg;
  @HostBinding ('style.font-size') size;
  @HostListener ('mouseenter') mouseenter(){
    this.bg = 'yellow'
    this.size = 50 +'px';
  }
  @HostListener ('mouseleave') mouseleave(){
    this.bg = 'blue';
    this.size = 40 +'px';
  }
  constructor() { }

}
