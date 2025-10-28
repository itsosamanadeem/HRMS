import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { routes } from '../app.routes';
import { AppTile } from '../app-tile/app-tile';
import { faArrowAltCircleRight, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { faWallet, faPlane, faReceipt, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { NavbarComponent } from '../base/globalComponents/global-navbar/global-navbar';
import { NavbarService } from '../base/Services/navbarService/service';

@Component({
  selector: 'app-appdashboard',
  imports: [AppTile, FontAwesomeModule, FormsModule,CommonModule],
  templateUrl: './appdashboard.html',
  styleUrls: ['./appdashboard.css']
})
export class Appdashboard implements OnInit{
  faWallet= faWallet
  faPlane = faPlane
  faReceipt = faReceipt
  faUserCheck = faUserCheck
  faEmployee = faUserCheck
  constructor(private router: Router, private navbar: NavbarService) {}

  ngOnInit(){
      this.navbar.setTitle('Apps Dashboard');
      this.navbar.setIcon(null);
      this.navbar.setDropdowns([]);
      this.navbar.setDropdowns([]);
  }
  faArrowCircleLeft = faArrowCircleLeft;

  showSearch = false;
  searchTerm = '';
  allRoutes = routes.filter(r => r.data?.['label']);
  filteredRoutes = [...this.allRoutes];

  @HostListener('document:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent) {
    const ignored = ['Shift', 'Control', 'Alt', 'Escape', 'Tab', 'Enter', 'CapsLock', 'ArrowUp', 'ArrowDown'];
    if (ignored.includes(event.key)) return;

    if (!this.showSearch) {
      this.showSearch = true;
      this.searchTerm = event.key;
      this.onSearchChange();
    } else if (event.key === 'Escape') {
      this.closeSearch();
    }
  }

  onSearchChange() {
    const query = this.searchTerm.trim().toLowerCase();
    this.filteredRoutes = this.allRoutes.filter(r => r.data?.['label']?.toLowerCase().includes(query));
  }

  closeSearch() {
    this.showSearch = false;
    this.searchTerm = '';
  }

  navigate(path: string) {
    this.router.navigate([path]);
    this.closeSearch();
  }
}
