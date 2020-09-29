import { Component, OnInit } from '@angular/core';
import { ObPerson } from '../model/person';
import { EmployServiceService } from '../services/employ-service.service';

@Component({
  selector: 'app-employ-component',
  templateUrl: './employ-component.component.html',
  styleUrls: ['./employ-component.component.css']
})
export class EmployComponentComponent implements OnInit {

  persons : ObPerson[];
  constructor(
    private empoyservive : EmployServiceService
  ) { }

  ngOnInit(): void {
    this.persons = this.empoyservive.getemployee();
  }

}
