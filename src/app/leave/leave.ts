import { Component } from '@angular/core';
import { faWallet, faPlane, faReceipt, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../base/globalComponents/global-navbar/global-navbar';
import { NavbarService } from '../base/Services/navbarService/service';

@Component({
  selector: 'app-leave',
  imports: [FontAwesomeModule, CommonModule, NavbarComponent],
  templateUrl: './leave.html',
  styleUrl: './leave.css'
})
export class Leave {
  faPlus = faPlus;
  faArrowCircleLeft = faArrowCircleLeft;
  currentIcon = faPlane;

  constructor(private navbar: NavbarService) { }
  ngOnInit() {
    this.navbar.setTitle('Leave Management');
    this.navbar.setIcon(faPlane);
    this.navbar.setDropdowns([
      {
        label: 'Leave',
        items: [
          { name: 'Apply Leave', route: '/leave/apply', permission: 'apply_leave' },
          { name: 'My Leave', route: '/leave/my-leave', permission: 'view_my_leave' },
          { name: 'Team Leave', route: '/leave/team-leave', permission: 'view_team_leave' },
        ],
      },
      {
        label: 'Holidays',
        items: [
          { name: 'View Holidays', route: '/leave/holidays', permission: 'view_holidays' },
          { name: 'Add Holiday', route: '/leave/holidays/add', permission: 'add_holiday' },
        ],
      },
      {
        label: 'Reports',
        items: [
          { name: 'Leave Balance  Report', route: '/leave/reports/balance', permission: 'view_leave_reports' },
          { name: 'Leave Usage Report', route: '/leave/reports/usage', permission: 'view_leave_reports' },
        ],
      }
    ]);
  }
  onMouseEnter() {
    this.currentIcon = faArrowCircleLeft;
  }

  onMouseLeave() {
    this.currentIcon = faPlane;
  }
  showModal = false;

  leaveRequests = [
    { name: 'John Doe', department: 'Finance', type: 'Annual', from: '2025-10-10', to: '2025-10-15', status: 'Pending' },
    { name: 'Jane Smith', department: 'HR', type: 'Sick', from: '2025-09-28', to: '2025-09-30', status: 'Approved' },
    { name: 'Ali Khan', department: 'IT', type: 'Casual', from: '2025-10-03', to: '2025-10-04', status: 'Rejected' },
  ];

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
  onEnter() {
    this.navbar.setIcon(faArrowCircleLeft)
  }

  onLeave() {
    this.navbar.setIcon(faWallet)
  }
}
