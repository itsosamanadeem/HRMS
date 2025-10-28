import { Component } from '@angular/core';
import employeeData from '../../employee.json';
import skillsData from './skills.json';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { List } from '../../../base/globalComponents/list/list';
import { GlobalToolbarComponent } from '../../../base/globalComponents/toolbar/toolbar';

@Component({
  selector: 'app-skill-reports',
  standalone: true,
  imports: [CommonModule, FormsModule, List, GlobalToolbarComponent],
  templateUrl: './skill-reports.html',
  styleUrls: ['./skill-reports.css']
})
export class SkillReports {
  employees = employeeData;
  skills = skillsData;

  keyword: string = "";
  labels: string[] = ["imageUrl","name", "department", "skills", "level"];

  EmployeeSkills: any[] = [];
  filteredSkills: any[] = [];

  ngOnInit() {
    this.loadAllEmployees();
  }

  // 🔹 Load all employees + their skills (flattened)
  loadAllEmployees() {
    this.EmployeeSkills = [];

    this.employees.forEach(emp => {
      const skillRecord = this.skills.find(s => s.employeeId === emp.id);

      if (skillRecord && skillRecord.skills?.length) {
        skillRecord.skills.forEach(skill => {
          this.EmployeeSkills.push({
            imageUrl: emp.imageUrl,
            name: emp.name,
            department: skillRecord.department,
            skills: skill.name,
            level: skill.level
          });
        });
      } else {
        this.EmployeeSkills.push({
          imageUrl: emp.imageUrl, 
          name: emp.name,
          department: skillRecord?.department || 'N/A',
          skills: 'N/A',
          level: 'N/A'
        });
      }
    });

    // Initially show all
    this.filteredSkills = [...this.EmployeeSkills];
  }

  // 🔍 Search by keyword (matches name, department, skill, or level)
  onSearch(keyword: string) {
    this.keyword = keyword.toLowerCase();

    this.filteredSkills = this.keyword
      ? this.EmployeeSkills.filter(item =>
          Object.values(item).some(val =>
            String(val).toLowerCase().includes(this.keyword)
          )
        )
      : [...this.EmployeeSkills];
  }
}
