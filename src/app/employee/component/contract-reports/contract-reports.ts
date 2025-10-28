import { Component } from '@angular/core';
import { Graph } from '../../../base/globalComponents/graphs/graphs';
import jsonData from '../../employee.json';

@Component({
  selector: 'app-contract-reports',
  imports: [Graph],
  templateUrl: './contract-reports.html',
  styleUrls: ['./contract-reports.css']
})
export class ContractReports {
  data: any[] = [];
  labels: string[] = [];
  labelData: any[] = [];

  ngOnInit() {
    this.data = jsonData;

    const typeCounts = this.data.reduce((acc: any, emp: any) => {
      const type = emp.employmentType;
      acc[type] = (acc[type] || 0) + 1;
      return acc;
    }, {});

    this.labels = Object.keys(typeCounts);
    this.labelData = Object.values(typeCounts);
  }
}
