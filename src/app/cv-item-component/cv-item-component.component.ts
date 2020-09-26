import { Component, OnInit, Input, Output } from '@angular/core';
import { person } from '../model/person';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-cv-item-component',
  templateUrl: './cv-item-component.component.html',
  styleUrls: ['./cv-item-component.component.css']
})
export class CvItemComponentComponent implements OnInit {
 
  @Input() person : person;
  @Output() selectedPerson = new  EventEmitter();
  constructor() { }

  ngOnInit(): void {
    
  }
  selectPerson(){
    this.selectedPerson.emit(this.person);
  }

}
