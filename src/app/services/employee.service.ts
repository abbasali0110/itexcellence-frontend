import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  private apiUrl = 'http://localhost:8080/api/employees'; // Backend API for employees

  constructor(private http: HttpClient) {}

  // Get employees by department ID
  getEmployeesByDepartment(departmentId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?departmentId=${departmentId}`);
  }

  // Get a single employee by ID
  getEmployeeById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/emp/${id}`);
  }

  // Create or update an employee
  saveEmployee(employee: any): Observable<any> {
    if (employee.id) {
      return this.http.put<any>(`${this.apiUrl}/${employee.id}`, employee);
    } else {
      return this.http.post<any>(this.apiUrl, employee);
    }
  }

  // Delete an employee by ID
  deleteEmployee(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
   // Update employee details (edit)
   updateEmployee(id: string, employee: EmployeeService): Observable<EmployeeService> {
    return this.http.put<EmployeeService>(`${this.apiUrl}/${id}`, employee);
  }

  
}