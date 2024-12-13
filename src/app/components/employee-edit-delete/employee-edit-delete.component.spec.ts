import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeEditDeleteComponent } from './employee-edit-delete.component';

describe('EmployeeEditDeleteComponent', () => {
  let component: EmployeeEditDeleteComponent;
  let fixture: ComponentFixture<EmployeeEditDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeEditDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeEditDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
