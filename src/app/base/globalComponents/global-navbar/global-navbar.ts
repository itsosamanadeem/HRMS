import { Component, OnInit } from '@angular/core';
import { NavbarService, DropdownMenu } from '../../Services/navbarService/service';
import { faChevronDown, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-global-navbar',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule, FontAwesomeModule],
  templateUrl: './global-navbar.html',
  styleUrls: ['./global-navbar.css']
})
export class NavbarComponent implements OnInit {
  title: string = '';
  icon: IconDefinition | null = null;
  dropdowns: DropdownMenu[] = [];
  openDropdown: string | null = null;

  // mobile menu state
  mobileMenuOpen: boolean = false;
  mobileDropdownOpen: string | null = null;

  faChevronDown = faChevronDown;

  constructor(private navbarService: NavbarService) { }

  ngOnInit() {
    this.navbarService.title$.subscribe((title) => (this.title = title));
    this.navbarService.icon$.subscribe((icon) => (this.icon = icon));
    this.navbarService.dropdowns$.subscribe((dropdowns) => (this.dropdowns = dropdowns));
  }

  toggleDropdown(label: string) {
    this.openDropdown = this.openDropdown === label ? null : label;
  }

  toggleMobileDropdown(label: string) {
    this.mobileDropdownOpen = this.mobileDropdownOpen === label ? null : label;
  }

  closeDropdown() {
    this.openDropdown = null;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
    this.mobileDropdownOpen = null;
  }
}
