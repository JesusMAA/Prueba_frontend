import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EmployeeListComponentComponent } from '../employee-list-component/employee-list-component.component';
import { EmployeeInterface } from 'src/assets/shared/interfaces';


@Component({
  selector: 'app-employee-form-component',
  templateUrl: './employee-form-component.component.html',
  styleUrls: ['./employee-form-component.component.scss']
})
export class EmployeeFormComponentComponent implements OnInit {

  @ViewChild(EmployeeListComponentComponent) newEmployee;

  nameEployee:FormControl;
  statusEmployee:FormControl;

  constructor() { 
    this.nameEployee = new FormControl('');
    this.statusEmployee = new FormControl('');
    this.newEmployee  = new EmployeeListComponentComponent();
  }

  ngOnInit(): void {
    console.log("ngOnInit - EmployeeFormComponentComponent");
  }

  addEmployee():void{
    this.newEmployee.pushNewEmployee(
        {
          name: this.nameEployee.value,
          status: this.statusEmployee.value
        }
    )
  }

}
