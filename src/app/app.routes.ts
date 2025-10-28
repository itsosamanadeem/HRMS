// app.routes.ts
import { Routes } from '@angular/router';
import { Appdashboard } from './appdashboard/appdashboard';
import { Payroll } from './payroll/payroll';
import { Leave } from './leave/leave';
import { Expense } from './expense/expense';
import { Attendance } from './attendance/attendance';
import { Employee } from './employee/employee';
import { faWallet, faPlane, faReceipt, faUserCheck } from '@fortawesome/free-solid-svg-icons';

export const routes: Routes = [
    {
        path: 'payroll',
        component: Payroll,
        loadChildren: () =>
            import('./payroll/payroll.routes').then(m => m.PAYROLL_ROUTES),
        data: { label: 'Payroll', icon: faWallet }
    },
    {
        path: 'employees',
        component: Employee,
        loadChildren: () =>
            import('./employee/employee.route').then(m => m.EMPLOYEE_ROUTES),
        data: { label: 'Employees', icon: faUserCheck }
    },
    { path: 'leave', component: Leave, data: { label: 'Leave', icon: faPlane } },
    { path: 'expense', component: Expense, data: { label: 'Expense', icon: faReceipt } },
    { path: 'attendance', component: Attendance, data: { label: 'Attendance', icon: faUserCheck } },
    { path: 'dashboard', component: Appdashboard},
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];
