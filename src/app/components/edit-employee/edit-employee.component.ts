import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeModel } from 'src/app/models/employee.mode';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  
  employe : EmployeeModel ={
    id : 0,
    name : '',
    email : '',
    salary : 0,
    department : ''
  };
  constructor() { }

  ngOnInit(): void {
   
  }
  


}
