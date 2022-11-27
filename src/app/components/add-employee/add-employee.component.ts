import { Component, OnInit } from '@angular/core';
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
  constructor(private service : EmployeeService) { }

  ngOnInit(): void {
    // this.addEmployee();
  }

  addEmployee(){
    this.service.addEmployee(this.addEmployeeRequest).subscribe();
    console.log(this.addEmployeeRequest);
  }

}
