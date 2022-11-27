import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from 'src/app/models/employee.mode';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employeeList : EmployeeModel[] = [];
  displayedColumns: string[] = ['id', 'name', 'email', 'salary' , 'department'];

  constructor(private service : EmployeeService) { }

  ngOnInit(): void {
    this.getAllEmployeeList();
  }

  getAllEmployeeList(){
    this.service.getAllEmploye().subscribe( (x: EmployeeModel[] ) => { this.employeeList = x });
  }

}
