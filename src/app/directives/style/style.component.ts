import { Component, Input, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {

  @Input() color;
   size ;
   @Input() bgcolor;
  constructor() { }

  ngOnInit(): void {
  }
 
  //changeSize(size){
  //this.size = size + 'px' }
}
