import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ObPerson } from '../model/person';

@Component({
  selector: 'app-list-cvcomponent',
  templateUrl: './list-cvcomponent.component.html',
  styleUrls: ['./list-cvcomponent.component.css']
})
export class ListCvcomponentComponent implements OnInit {
 
  @Input() person : ObPerson[];
  @Output() selectedPerson = new  EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  selectPerson(selectedPerson: any){
    this.selectedPerson.emit(selectedPerson);
  }
}
