import { Component } from '@angular/core';
import jsonData from './employee_certifications.json'
import empData from '../../employee.json'
import { List } from '../../../base/globalComponents/list/list';
import { GlobalToolbarComponent } from '../../../base/globalComponents/toolbar/toolbar';

@Component({
  selector: 'app-certification-reports',
  imports: [List,GlobalToolbarComponent],
  templateUrl: './certification-reports.html',
  styleUrl: './certification-reports.css'
})
export class CertificationReports {
  employeeCertification = jsonData
  empData = empData

  keyword: string = "";
  empCert: Array<Object> = []
  filtered: Array<Object> = []

  certLabel: string[] = ['imageUrl','name','certificationName','provider','issueDate','expireDate','status']

  ngOnInit() {
    this.empCert = []
    this.empData.forEach(employee => {
      const empCert = this.employeeCertification.find(cert => employee.id === cert.employeeId)
      if (empCert && empCert.certifications?.length) {
        empCert.certifications.forEach(emp => {
          this.empCert.push({
            imageUrl: employee.imageUrl,
            name: employee.name,
            certificationName: emp.name,
            provider: emp.provider,
            issueDate: emp.issuedDate,
            expireDate: emp.expiryDate,
            status: emp.status
          })
        })
      }
    })
    this.filtered = [...this.empCert]
  }
  onSearch(keyword: string) {
    this.keyword = keyword.toLowerCase();

    this.filtered = this.keyword
      ? this.empCert.filter(item =>
          Object.values(item).some(val =>
            String(val).toLowerCase().includes(this.keyword)
          )
        )
      : [...this.employeeCertification];
  }

}
