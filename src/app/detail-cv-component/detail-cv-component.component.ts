import { Component, Input, OnInit } from '@angular/core';
import { ObPerson } from '../model/person';

@Component({
  selector: 'app-detail-cv-component',
  templateUrl: './detail-cv-component.component.html',
  styleUrls: ['./detail-cv-component.component.css']
})
export class DetailCvComponentComponent implements OnInit {

  @Input() selectedPerson : ObPerson;
  constructor() { }

  ngOnInit(): void {
  }

}

