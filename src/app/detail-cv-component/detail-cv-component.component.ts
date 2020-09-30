import { Component, Input, OnInit } from '@angular/core';
import { ObPerson } from '../model/person';
import { EmployServiceService } from '../services/employ-service.service';

@Component({
  selector: 'app-detail-cv-component',
  templateUrl: './detail-cv-component.component.html',
  styleUrls: ['./detail-cv-component.component.css']
})
export class DetailCvComponentComponent implements OnInit {

  @Input() selectedPerson : ObPerson;
  constructor(
    private empoyservive : EmployServiceService
  ) { }

  ngOnInit(): void {
  }

  employ(){
    this.empoyservive.employ(this.selectedPerson);
  }
  unemploy(){
    this.empoyservive.unemploy(this.selectedPerson);
  }
}

