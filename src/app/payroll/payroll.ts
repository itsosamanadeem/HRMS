import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowCircleLeft, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HostListener, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../base/globalComponents/global-navbar/global-navbar';
import { NavbarService } from '../base/Services/navbarService/service';
import { faWallet, faFileContract, faFileInvoiceDollar, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { on } from 'events';
import { GlobalInterface } from '../interfaces/global_interface';

@Component({
  selector: 'app-payroll',
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule, CommonModule, NavbarComponent],
  templateUrl: './payroll.html',
  styleUrl: './payroll.css'
})

export class Payroll implements OnInit, GlobalInterface {

  constructor(private navbar: NavbarService) { }
  ngOnInit() {
    this.navbar.setTitle('Payroll');
    this.navbar.setIcon(faWallet);

    this.navbar.setDropdowns([
      {
        label: 'Contracts',
        items: [
          { name: 'View Contracts', route: '/payroll/contracts/view', permission: 'view_contracts' },
          { name: 'Edit Contracts', route: '/payroll/contracts/edit', permission: 'edit_contracts' },
        ],
      },
      {
        label: 'Payslips',
        items: [
          { name: 'Generate Payslips', route: '/payroll/payslips/generate', permission: 'generate_payslips' },
          { name: 'View Payslips', route: '/payroll/payslips/view', permission: 'view_payslips' },
        ],
      },
      {
        label: 'Reports',
        items: [
          {
            name: 'Monthly Reports',
            children: [
              { name: 'Summary Report', route: '/payroll/reports/monthly-summary' },
              { name: 'Detail Report', route: '/payroll/reports/monthly-detail' },
            ],
          },
        ],
      },
    ]);
  }

  onEnter(){
    this.navbar.setIcon(faArrowCircleLeft)
  }

  onleave(){
    this.navbar.setIcon(faWallet)
  }
}
