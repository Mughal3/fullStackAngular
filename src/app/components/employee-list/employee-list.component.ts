import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from 'src/app/models/employee.mode';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employeeList : EmployeeModel[] = [
    { 
      id : 1,
      name : 'muzamil',
      email : 'abc@gmail.com',
      salary : 2000,
      department : 'cs'
    },
  ];
  displayedColumns: string[] = ['id', 'name', 'email', 'salary' , 'department'];

  constructor() { }

  ngOnInit(): void {

  }

}
