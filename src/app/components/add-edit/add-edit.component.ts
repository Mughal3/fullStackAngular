import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeModel } from 'src/app/models/employee.mode';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {

  id : number = 0;
  employ : EmployeeModel = {
    
    id : 0,
    name : '',
    email : '',
    salary :0,
    department :'',

  }

  constructor(private route : ActivatedRoute, private service : EmployeeService , private rout : Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( x => { this.id  = Number(x.get('id'))
    
    if(this.id > 0){
      this.service.getEmpbyId(this.id).subscribe( (x : EmployeeModel) => {  this.employ = x    
      console.log(x);
      })
    }
  
  });
  }

  addEmployee(){
    this.service.addEmployee(this.employ).subscribe( (x : EmployeeModel) => {  this.rout.navigate(['employee'])} );
    console.log(this.employ);
  }

  editEmployee(){
    this.service.editEmployee(this.employ).subscribe( (x : EmployeeModel) => { ( x = this.employ)
    this.rout.navigate(['employee']);
    } );
  }
  
  deleteEmployee(){
    this.service.deleteEmployee(this.employ.id).subscribe( (x : EmployeeModel)=> {
      this.rout.navigate(['employee']);
    })
  }
}
