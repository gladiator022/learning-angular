import {Component, NgModule, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css']
})
  
export class AddCvComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

  addPerson(myform: NgForm) {
    console.log(myform);
  }
}
 