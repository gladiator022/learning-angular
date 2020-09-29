import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  class1 = false;
  class2 = false;
  class3 = true;
  class4 = false;
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.class3 = false;
    this.class2 = true;
  }
}
