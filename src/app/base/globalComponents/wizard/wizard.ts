import { Component,EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-wizard',
  imports: [CommonModule, FormsModule],
  templateUrl: './wizard.html',
  styleUrl: './wizard.css'
})
export class Wizard {
  @Input() title: string = 'Add Record';
  @Input() fields: any[] = []; // [{ name, label, type, options? }]
  @Input() show: boolean = false;
  @Output() close = new EventEmitter<void>();
  @Output() submit = new EventEmitter<any>();

  formData: any = {};

  onSubmit() {
    this.submit.emit(this.formData);
    this.onClose();
  }

  onClose() {
    this.close.emit();
    this.formData = {};
  }

}
