import { Component, OnInit, Output } from '@angular/core';
import { ObPerson } from '../model/person';

@Component({
  selector: 'app-cvcomponent',
  templateUrl: './cvcomponent.component.html',
  styleUrls: ['./cvcomponent.component.css']
})
export class CvcomponentComponent implements OnInit {

  person : ObPerson[];
  selectedPerson : ObPerson;
  constructor() { }

  ngOnInit(): void {
    this.person = [
      new ObPerson(1, 'williams', 'tchichi', 23, 'rotating_card_profile.png', 122, 'engineer'),
      new ObPerson(2, 'wilped', 'kengne', 23, 'rotating_card_profile2.png', 123, 'professor')
    ]
    this.selectedPerson = new ObPerson(1, 'williams', 'tchichi', 23, 'rotating_card_profile.png', 122, 'engineer')
  }

  selectPerson(selectedPerson: ObPerson){
    this.selectedPerson = selectedPerson;
    console.log(this.selectedPerson)
  }
}
