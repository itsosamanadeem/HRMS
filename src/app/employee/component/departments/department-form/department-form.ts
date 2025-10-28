import { Component } from '@angular/core';
import jsonData from '../../../employee.json'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-department-form',
  imports: [CommonModule,FormsModule],
  templateUrl: './department-form.html',
  styleUrl: './department-form.css'
})
export class DepartmentForm {

  employeeData: any[] = []
  ngOnInit(){
    this.employeeData = jsonData

  }

}
