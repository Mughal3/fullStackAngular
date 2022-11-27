import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '' , component: EmployeeListComponent},
  { path: 'employee' , component: EmployeeListComponent},
  { path: 'Add-employee' , component: AddEmployeeComponent},
  { path: 'edit/:id' , component: EditEmployeeComponent},
  { path: '**' , component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
