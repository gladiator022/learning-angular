import { Component, OnInit, Input, Output } from '@angular/core';
import { ObPerson } from '../model/person';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cv-item-component',
  templateUrl: './cv-item-component.component.html',
  styleUrls: ['./cv-item-component.component.css']
})
export class CvItemComponentComponent implements OnInit {
 
  @Input() person : ObPerson;
  @Output() selectedPerson = new  EventEmitter();
  constructor() { }

  ngOnInit(): void {
    
  }
  selectPerson(){
      this.selectedPerson.emit(this.person);
  }}
