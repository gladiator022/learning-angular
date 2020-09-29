import { Component, OnInit, Output } from '@angular/core';
import { ObPerson } from '../model/person';
import { CvServiceService } from '../services/cv-service.service';

@Component({
  selector: 'app-cvcomponent',
  templateUrl: './cvcomponent.component.html',
  styleUrls: ['./cvcomponent.component.css']
})
export class CvcomponentComponent implements OnInit {

  person : ObPerson[];
  selectedPerson : ObPerson;
  constructor(
    private cvservice : CvServiceService
  ) {}

  ngOnInit(): void {
    this.person = this.cvservice.getPerson();
    this.selectedPerson = new ObPerson(1, 'williams', 'tchichi', 23, 'rotating_card_profile.png', 122, 'engineer')
  }

  selectPerson(selectedPerson: ObPerson){
    this.selectedPerson = selectedPerson;
    console.log(this.selectedPerson)
  }
}
