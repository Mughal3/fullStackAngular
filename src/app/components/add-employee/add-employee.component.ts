import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeModel } from 'src/app/models/employee.mode';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  addEmployeeRequest : EmployeeModel = {
    id : 0,
    name : '',
    email: '',
    salary : 0,
    department : ''
  }; 
  constructor() { }

  ngOnInit(): void {
    // this.addEmployee();
  }

  

}
