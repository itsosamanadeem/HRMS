import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-payslips',
  imports: [CommonModule,],
  templateUrl: './payslips.html',
  styleUrl: './payslips.css'
})
export class Payslips {
  employees = [
    { name: 'Ayesha Khan', department: 'Finance', basic: 1200, allowance: 300, deduction: 50, net: 1450 },
    { name: 'Ali Raza', department: 'HR', basic: 1100, allowance: 200, deduction: 100, net: 1200 },
    { name: 'Sara Malik', department: 'IT', basic: 1500, allowance: 400, deduction: 0, net: 1900 },
    { name: 'Hassan Ahmed', department: 'Sales', basic: 1000, allowance: 250, deduction: 20, net: 1230 },
  ];
}
