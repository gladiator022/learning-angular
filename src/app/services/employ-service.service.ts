import { Injectable } from '@angular/core';
import { ObPerson } from '../model/person';

@Injectable({
  providedIn: 'root'
})
export class EmployServiceService {
  private employees : ObPerson[];
  constructor() {
      this.employees = [];
   }
   getemployee() : ObPerson[]{
     return this.employees;
   }
   employ(employee: ObPerson) : void{
    const index = this.employees.indexOf(employee)
    if(index < 0){
      this.employees.push(employee);
    }
    else{
      alert(`${employee.name} is already employ`)
    }
  }
  unemploy(employee: ObPerson) : void{
    const index = this.employees.indexOf(employee);
    if(index >= 0){
      this.employees.splice(index, 1)
    }
    else{
      alert('$(employee.name) is not an employee')
    }
  }
}
