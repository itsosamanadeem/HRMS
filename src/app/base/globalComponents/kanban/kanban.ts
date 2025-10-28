import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-kanban',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './kanban.html',
  styleUrl: './kanban.css',
})
export class Kanban {
  @Input() data: any[] = [];
  @Input() groupBy: string = 'status';
  @Input() title?: string;
  @Input() baseRoute?: string;

  @Output() eventEmitter = new EventEmitter<any>();

  constructor(private router: Router) { }

  // get groupedData() {
  //   if (!this.data?.length) return {};
  //   return this.data.reduce((acc: any, item) => {
  //     const key = item[this.groupBy] || 'Uncategorized';
  //     acc[key] = acc[key] || [];
  //     acc[key].push(item);
  //     return acc;
  //   }, {});
  // }

  // get groupKeys() {
  //   return Object.keys(this.groupedData);
  // }

  // getColumnColor(index: number) {
  //   const colors = [
  //     'from-blue-400/20 to-blue-100/40',
  //     'from-pink-400/20 to-pink-100/40',
  //     'from-green-400/20 to-green-100/40',
  //     'from-yellow-400/20 to-yellow-100/40',
  //     'from-purple-400/20 to-purple-100/40',
  //   ];
  //   return colors[index % colors.length];
  // }

  onEdit(value: any, index: number) {
    if (this.baseRoute && index !== undefined) {
      this.router.navigate([`/${this.baseRoute}`, index]);
    }
    else {
      this.eventEmitter.emit({ index });
    }
  }
}
