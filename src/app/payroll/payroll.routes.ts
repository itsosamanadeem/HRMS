import { Routes } from '@angular/router';
import { Payroll } from './payroll';

export const PAYROLL_ROUTES: Routes = [
    {
        path: '',
        
        children: [
            {
                path: 'payslips',
                loadComponent: ()=> import('./components/payslips/payslips').then(m => m.Payslips)
            },
            {
                path: 'summary',
                loadComponent: () =>
                    import('./components/summary/summary').then(m => m.Summary),
            },
            {
                path: 'settings',
                loadComponent: () =>
                    import('./components/settings/settings').then(m => m.Settings),
            },
            {
                path: '', redirectTo: 'payslips', pathMatch: 'full'
            }
        ],
    },
];
