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

  id : number = 0;
  employe : EmployeeModel ={
    id : 0,
    name : '',
    email : '',
    salary : 0,
    department : ''
  };
  constructor(private route : ActivatedRoute, private service : EmployeeService , private rout : Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( x => { this.id  = Number(x.get('id'))
    
    if(this.id > 0){
      this.service.getEmpbyId(this.id).subscribe( (x : EmployeeModel) => {  this.employe = x    
      console.log(x);
      })
    }
  
  });
  }
  
editEmployee(){
  this.service.editEmployee(this.employe).subscribe( (x : EmployeeModel) => { ( x = this.employe)
  this.rout.navigate(['employee']);
  } );
}

deleteEmployee(){
  this.service.deleteEmployee(this.employe.id).subscribe( (x : EmployeeModel)=> {
    this.rout.navigate(['employee']);
  })
}
}
