import { Component, Input, OnInit } from '@angular/core';
import { EmployeeInterface } from 'src/assets/shared/interfaces';

@Component({
  selector: 'app-employee-list-component',
  templateUrl: './employee-list-component.component.html',
  styleUrls: ['./employee-list-component.component.scss']
})
export class EmployeeListComponentComponent implements OnInit {

  

  employees:Array<EmployeeInterface>;

  constructor() {
    this.employees =[{
      status:"activo",
      name:"Jesús"
    },
    {
      status:"inactivo",
      name:"Miguel"
    }];
   }

  ngOnInit(): void {
    console.log("ngOnInit - EmployeeListComponentComponent");
  }

  pushNewEmployee(obj:EmployeeInterface):void{
    console.log("hola");
    this.employees.push(obj);
  }

}
