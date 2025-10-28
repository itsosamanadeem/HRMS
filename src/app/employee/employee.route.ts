import { Routes } from '@angular/router';
import { Employee } from './employee';

export const EMPLOYEE_ROUTES: Routes = [
  {
    path: '',
    children: [

      {
        path: 'employee-form',
        loadComponent: () => import('./component/new/new').then(m => m.New),
      },
      {
        path: 'employee-form/:id',
        loadComponent: ()=> import('./component/edit/edit').then(m => m.Edit),
      },
      {
        path: 'org-chart',
        loadComponent: () => import('./component/org-chart/org-chart').then(m => m.OrgChart),
      },
      {
        path: 'employee-department',
        // loadChildren: () => import('./component/departments/departments.route').then(m => m.DEPARTMENT_ROUTES)
        loadComponent: ()=> import('./component/departments/departments').then(m => m.Departments)
      },
      {
        path: 'employee-department/employee-department-form',
        loadComponent: ()=> import('./component/departments/department-form/department-form').then(m => m.DepartmentForm)
      },
      {
        path: 'contracts',
        loadComponent: () => import('./component/contracts/contracts').then(m => m.Contracts),
      },
      {
        path: 'contracts-report',
        loadComponent: () => import('./component/contract-reports/contract-reports').then(m => m.ContractReports),
      },
      {
        path: 'skill-report',
        loadComponent: () => import('./component/skill-reports/skill-reports').then(m => m.SkillReports),
      },
      {
        path: 'certification-report',
        loadComponent: () => import('./component/certification-reports/certification-reports').then(m => m.CertificationReports),
      },
      {
        path: '',redirectTo: 'employees', pathMatch: 'full'
      }
    ],
  },
];
