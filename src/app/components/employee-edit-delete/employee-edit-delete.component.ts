import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-edit-delete',
  imports: [CommonModule,FormsModule],
  templateUrl: './employee-edit-delete.component.html',
  styleUrl: './employee-edit-delete.component.scss'
})
export class EmployeeEditDeleteComponent {
  employee: any;

  employees = [
    { id: 1, name: 'John Doe', department: 'IT', email: 'john@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', department: 'HR', email: 'jane@example.com', phone: '987-654-3210' },
    { id: 3, name: 'Bob Johnson', department: 'IT', email: 'bob@example.com', phone: '555-555-5555' },
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const employeeId = this.route.snapshot.params['id'];
    this.employee = this.employees.find((e) => e.id.toString() === employeeId);
  }

  updateEmployee() {
    // Save updated employee (mock behavior here)
    alert(`Updated: ${this.employee.name}`);
    this.router.navigate(['/employees']);
  }

  deleteEmployee() {
    const confirmDelete = confirm(`Are you sure you want to delete ${this.employee.name}?`);
    if (confirmDelete) {
      this.employees = this.employees.filter((e) => e.id !== this.employee.id);
      this.router.navigate(['/employees']);
    }
  }
}
