import { Component } from '@angular/core';
import jsonData from '../../employee.json'
import { List } from '../../../base/globalComponents/list/list';
import { GlobalToolbarComponent } from '../../../base/globalComponents/toolbar/toolbar';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-departments',
  imports: [List, GlobalToolbarComponent, CommonModule, FormsModule],
  templateUrl: './departments.html',
  styleUrl: './departments.css'
})
export class Departments {
  keyword: string = ''
  data: any[] = [];
  columnData: any[] = [];
  filteredData: String[] = [];
  isChildRoute: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.data = jsonData;
    this.filteredData = [...this.data]
    if (this.data.length) {
      this.columnData = Object.keys(this.data[0]);
    }

    this.updateIsChildRoute(this.router.url);

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.updateIsChildRoute(this.router.url));

  }
  onSearch(keyword: string) {
    this.keyword = keyword.toLowerCase();
    this.filteredData = this.keyword
      ? this.data.filter(emp =>
        Object.values(emp).some(val =>
          String(val).toLowerCase().includes(this.keyword)
        )
      )
      : [...this.data];
  }
  updateIsChildRoute(url: string) {
    this.isChildRoute = url !== '/employees' && !url.endsWith('employee-department-form');
  }

}
