import { Component, OnInit } from '@angular/core';
import { person } from '../model/person';

@Component({
  selector: 'app-cvcomponent',
  templateUrl: './cvcomponent.component.html',
  styleUrls: ['./cvcomponent.component.css']
})
export class CvcomponentComponent implements OnInit {

  person : person[];
  constructor() { }

  ngOnInit(): void {
    this.person = [
      new person(1, 'williams', 'tchichi', 23, 'rotating_card_profile.png', 122, 'engineer'),
      new person(2, 'wilped', 'kengne', 23, 'rotating_card_profile2.png', 123, 'professor')
    ]
  }

}
