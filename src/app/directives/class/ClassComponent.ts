import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css'],
})
export class ClassComponent implements OnInit {
  bgcolors = [
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
  ];
  bgcolor
  class1 = false;
  class3 = true;
  constructor(
    private router : Router,
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        //const index = Math.floor(Math.random() * (this.bgcolors.length - 1));
        this.bgcolor = params['default'];
        console.log(params);
      }
    )
  }

  onClick() {
    this.class3 = false;
    this.class1 = true;
  }
  gotocv(){
    this.router.navigate(['cv']);
  }
  changeBg() {
    const index = Math.floor(Math.random() * (this.bgcolors.length - 1))
    return this.bgcolors[index]
  }
}
