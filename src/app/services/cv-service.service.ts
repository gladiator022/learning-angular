import { Injectable } from '@angular/core';
import { ObPerson } from '../model/person';

@Injectable({
  providedIn: 'root'
})
export class CvServiceService {

  private persons : ObPerson[];
  constructor() {
    this.persons = [
      new ObPerson(1, 'williams', 'tchichi', 23, 'rotating_card_profile.png', 122, 'engineer'),
      new ObPerson(2, 'wilped', 'kengne', 23, 'rotating_card_profile2.png', 123, 'professor')
    ]
   }
   getPerson(): ObPerson[]{
     return this.persons;
   }
}
