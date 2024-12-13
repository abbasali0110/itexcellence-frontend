import { Routes } from '@angular/router';

import { DepartmentComponent } from './pages/department/department.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmployeeEditDeleteComponent } from './components/employee-edit-delete/employee-edit-delete.component';


export const routes: Routes = [
    { path: '', component: DepartmentComponent },
    { path: 'employees/:id', component: EmployeeListComponent },
    { path: 'employee/:id', component: EmployeeDetailsComponent },
    { path: 'edit-employee/:id', component: EmployeeEditDeleteComponent },
];