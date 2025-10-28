import { Component } from '@angular/core';
import { faArrowCircleLeft, faUserCheck, faWallet } from '@fortawesome/free-solid-svg-icons';
import { NavbarComponent } from '../base/globalComponents/global-navbar/global-navbar';
import { NavbarService } from '../base/Services/navbarService/service';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { GlobalToolbarComponent } from '../base/globalComponents/toolbar/toolbar';
import { CommonModule } from '@angular/common';
import employeesData from './employee.json'
import { List } from '../base/globalComponents/list/list';
import { Kanban } from '../base/globalComponents/kanban/kanban';
import { Graph } from '../base/globalComponents/graphs/graphs';
import { Hierarchy } from '../base/globalComponents/hierarchy/hierarchy';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-employee',
  imports: [RouterOutlet, NavbarComponent, GlobalToolbarComponent, CommonModule, List, Kanban, Graph, Hierarchy],
  templateUrl: './employee.html',
  styleUrl: './employee.css'
})
export class Employee {
  view: string = 'list';
  keyword: string = '';
  employees: any[] = [];
  filteredEmployees: any[] = [];
  employeeColumns: string[] = [];
  employeeHierarchy = employeesData;
  isChildRoute: boolean = false;

  constructor(private navbar: NavbarService, private router: Router,) { }

  ngOnInit() {
    this.navbar.setTitle('Employee');
    this.navbar.setIcon(faUserCheck);
    this.navbar.setDropdowns([
      {
        label: 'Employee',
        items: [
          { name: 'Employees', route: '/employees', permission: 'view_employees' },
          { name: 'Org Chart', route: '/employees/org-chart', permission: 'add_employee' },
          { name: 'Contracts', route: '/employees/contracts', permission: 'add_employee' },
        ],
      },
      {
        label: 'Departments',
        items: [
          { name: 'Departments', route: '/employees/employee-department', permission: 'view_departments' },
        ],
      },
      {
        label: 'Reports',
        items: [
          { name: 'Contracts', route: '/employees/contracts-report', permission: 'view_employee_reports' },
          { name: 'Skills', route: '/employees/skill-report', permission: 'view_employee_reports' },
          { name: 'Certifications', route: '/employees/certification-report', permission: 'view_employee_reports' },
        ],
      },
    ]);

    this.employees = employeesData;
    this.filteredEmployees = [...this.employees];
    if (this.employees.length > 0) {
      this.employeeColumns = Object.keys(this.employees[0]);
    }

    this.updateIsChildRoute(this.router.url);

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.updateIsChildRoute(this.router.url));

  }
  updateIsChildRoute(url: string) {
    // Adjust this check to your base path
    this.isChildRoute = url !== '/employees' && !url.endsWith('/employees/');
  }

  onViewChange(view: string) {
    this.view = view;
  }

  onSearch(keyword: string) {
    this.keyword = keyword.toLowerCase();
    this.filteredEmployees = this.keyword
      ? this.employees.filter(emp =>
        Object.values(emp).some(val =>
          String(val).toLowerCase().includes(this.keyword)
        )
      )
      : [...this.employees];
  }

  onEnter() {
    this.navbar.setIcon(faArrowCircleLeft);
  }

  onLeave() {
    this.navbar.setIcon(faWallet);
  }
}
