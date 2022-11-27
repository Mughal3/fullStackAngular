import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private route : ActivatedRoute, private service : EmployeeService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( x => { this.id  = Number(x.get('id'));
    
    if(this.id > 0){
      this.service.getEmpbyId(this.id).subscribe( (x : EmployeeModel) => {  this.employe = x    
      console.log(x);
      })
    }
  
  });

    
  }

}
