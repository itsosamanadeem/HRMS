import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './base/globalComponents/global-navbar/global-navbar';
import { NavbarService } from './base/Services/navbarService/service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    FontAwesomeModule, 
    NavbarComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('hrms');
  constructor(private navbar: NavbarService) {}

  ngOnInit() {
    this.navbar.setTitle('HRMS');
    this.navbar.setDropdowns([]);
  }

  faArrowCircleLeft = faArrowCircleLeft;
}
