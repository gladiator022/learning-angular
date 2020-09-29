import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {
  colors  = [
    'pink',
    'blue',
    'lightblue',
    'yellow',
    'red',
    'purple',
    'gold',
    'gray',
    'lightgray',
    'lightyellow',
    'lightred'
  ]

  @HostBinding ('style.borderColor') border;
  @HostBinding ('style.color') color; 
  @HostListener ('keypress') keypress(){
    const index = Math.floor(Math.random() * (this.colors.length -  1))
    let col = this.colors[index];
    this.border = col;
    this.color = this.colors[Math.floor(Math.random() * (this.colors.length -  1))];
  }
  constructor() { }

}
