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
  constructor(private service : EmployeeService , private router : Router) { }

  ngOnInit(): void {
    // this.addEmployee();
  }

  addEmployee(){
    this.service.addEmployee(this.addEmployeeRequest).subscribe( (x : EmployeeModel) => {  this.router.navigate(['employee'])} );
    console.log(this.addEmployeeRequest);
  }

}
