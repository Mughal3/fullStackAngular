import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { EmployeeModel } from '../models/employee.mode';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl: string = 'https://localhost:7181/api/Employee';

  constructor(private http : HttpClient) { }

  getAllEmploye () : Observable<EmployeeModel[]>{

    return this.http.get<EmployeeModel[]>(this.baseUrl);

  }
  addEmployee( emp : EmployeeModel) : Observable<EmployeeModel>{

    return this.http.post<EmployeeModel>(this.baseUrl,emp);
  }

  getEmpbyId (id : number) : Observable<EmployeeModel> {
    return this.http.get<EmployeeModel>(this.baseUrl+'/'+id);
  }

  editEmployee(obj : EmployeeModel) : Observable<EmployeeModel>{
    return this.http.put<EmployeeModel> (this.baseUrl,obj);
  }

  deleteEmployee( id : number) : Observable<EmployeeModel>{

    return this.http.delete<EmployeeModel>(this.baseUrl+'/'+id);
  }
}
