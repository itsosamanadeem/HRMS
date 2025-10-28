import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, EventEmitter, input, Input, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faMailReply, faMobileAndroid } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list',
  imports: [CommonModule, FormsModule, FaIconComponent],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {

  @Input() data: any[] = [];          // Dynamic data (array of objects)
  @Input() columns: string[] = [];    // Column keys to render
  @Input() title?: string;            // Optional title
  @Input() enableActions: boolean = false; // Show Edit/Delete buttons if needed
  @Input() baseRoute: string = ''; // Base route for navigation
  @Input() groupBy: string = '';

  groupedData: { key: string, items: any[] }[] = [];
  faMail = faMailReply
  faMobile = faMobileAndroid
  @Output() edit = new EventEmitter<number>();
  constructor(private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] || changes['groupBy']) {
      const key = this.groupBy && this.groupBy.trim() !== '' ? this.groupBy : 'status';
      this.groupedData = groupBy(this.data, key as keyof typeof this.data[0]);
    }
    this.columns = this.columns.filter(
      c => !['children', 'collapsed'].includes(c)
    );
  }
  ngOnInit() {
    const key = this.groupBy && this.groupBy.trim() !== '' ? this.groupBy : 'status';
    this.groupedData = groupBy(this.data, key as keyof typeof this.data[0]);
    
    this.columns = this.columns.filter(
      c => !['children', 'collapsed'].includes(c)
    );
  }
  expandedGroups: boolean[] = [];

  toggleGroup(index: number) {
    this.expandedGroups[index] = !this.expandedGroups[index];
  }

  trackByIndex(index: number): number {
    return index;
  }

  editSave(name: any) {
    console.log(name);
  }

  onEditClick(row: any, index: number) {
    const id = row.id ?? index;
    this.router.navigate([`/${this.baseRoute}`, id]);
  }
}

function groupBy<T extends Record<string, any>>(
  array: T[],
  key: keyof T
): { key: string; items: T[] }[] {
  const grouped = array.reduce((acc: Record<string, T[]>, item: T) => {
    const groupKey = (item[key] ?? 'Others') as string;
    if (!acc[groupKey]) acc[groupKey] = [];
    acc[groupKey].push(item);
    return acc;
  }, {});

  return Object.entries(grouped).map(([key, items]) => ({
    key,
    items: items as T[],
  }));
}