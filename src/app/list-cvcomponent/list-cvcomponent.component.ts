import { Component, OnInit, Input } from '@angular/core';
import { person } from '../model/person';

@Component({
  selector: 'app-list-cvcomponent',
  templateUrl: './list-cvcomponent.component.html',
  styleUrls: ['./list-cvcomponent.component.css']
})
export class ListCvcomponentComponent implements OnInit {
 
  @Input() person : person[];
  constructor() { }

  ngOnInit(): void {
  }

  selectPerson(selectedPerson){
    console.log(selectedPerson)
  }
}
