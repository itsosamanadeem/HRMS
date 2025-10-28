import { Component } from '@angular/core';
import jsonData from '../../employee.json'
import { List } from '../../../base/globalComponents/list/list';
import { GlobalToolbarComponent } from '../../../base/globalComponents/toolbar/toolbar';

@Component({
  selector: 'app-contracts',
  imports: [List, GlobalToolbarComponent],
  templateUrl: './contracts.html',
  styleUrl: './contracts.css'
})
export class Contracts {
  data: any[] = [];
  dataColumn: any[] = []
  view: string = 'list';
  keyword: string = '';
  filteredEmployees: any[] = [];

  ngOnInit() {

    this.data = jsonData;
    this.filteredEmployees = [...this.data];
    if (this.data.length > 0) {
      this.dataColumn = Object.keys(this.data[0]);
    }
  }

  onSearch(keyword: string) {
    this.keyword = keyword.toLowerCase();
    this.filteredEmployees = this.keyword
      ? this.data.filter(emp =>
        Object.values(emp).some(val =>
          String(val).toLowerCase().includes(this.keyword)
        )
      )
      : [...this.data];
    console.log('✅ Filtered Employees:', this.filteredEmployees);

  }

}
