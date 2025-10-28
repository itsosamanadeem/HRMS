import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, NgForm } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { Wizard } from '../../../base/globalComponents/wizard/wizard';

@Component({
  selector: 'app-edit',
  imports: [CommonModule,FormsModule,Wizard],
  templateUrl: './edit.html',
  styleUrl: './edit.css'
})
export class Edit {
  tabs = ['Resume', 'Work Information', 'Private Information', 'Settings'];
  activeTab = 'Resume';
  imagePreview: string | ArrayBuffer | null = null;
  showWizard = false;

  experienceFields = [
    { name: 'company', label: 'Company Name', type: 'text' },
    { name: 'title', label: 'Job Title', type: 'text' },
    { name: 'start_date', label: 'Start Date', type: 'date' },
    { name: 'end_date', label: 'End Date', type: 'date' },
    {
      name: 'experience_level',
      label: 'Experience Level',
      type: 'select',
      options: [
        { label: 'Intern', value: 'intern' },
        { label: 'Junior', value: 'junior' },
        { label: 'Mid-Level', value: 'mid' },
        { label: 'Senior', value: 'senior' },
      ],
    },
    { name: 'description', label: 'Description', type: 'textarea' },
  ];

  showSkillsWizard = false;
  skillsFields = [
    { name: 'skill_name', label: 'Skill Name', type: 'text' },
    {
      name: 'proficiency',
      label: 'Proficiency Level',
      type: 'select',
      options: [
        { label: 'Beginner', value: 'beginner' },
        { label: 'Intermediate', value: 'intermediate' },
        { label: 'Advanced', value: 'advanced' },
        { label: 'Expert', value: 'expert' },
      ],
    },
    { name: 'years_of_experience', label: 'Years of Experience', type: 'number' },
    { name: 'certifications', label: 'Certifications', type: 'textarea' },
  ];

  skillsList: any[] = [];

  onSkillsWizardSubmit(data: any) {
    this.skillsList.push(data);
    this.showSkillsWizard = false;
  }

  experienceList: any[] = [];

  onWizardSubmit(data: any) {
    this.experienceList.push(data);
    this.showWizard = false;
  }
  onImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => (this.imagePreview = reader.result);
      reader.readAsDataURL(file);
    }
  }

  onSubmit(form: any) {
    // console.log(form.value);
  }

}
