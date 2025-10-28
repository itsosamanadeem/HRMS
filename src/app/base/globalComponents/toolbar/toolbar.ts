import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  faList,
  faProjectDiagram,
  faChartLine,
  faTable,
  faSitemap,
  faPlus,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, FormsModule],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.css'
})
export class GlobalToolbarComponent {
  @Input() title = '';
  @Input() activeView: string = 'list';
  @Input() views: string[] = [];
  @Input() baseRoute: string = '';

  @Output() searchChange = new EventEmitter<string>();
  @Output() newClick = new EventEmitter<void>();
  @Output() viewChange = new EventEmitter<string>();

  searchTerm = '';
  mobileViewOpen = false; 
  mobileSearchOpen = false;
  viewIcons: Record<string, any> = {
    list: faList,
    graph: faChartLine,
    pivot: faTable,
    hierarchy: faSitemap,
    kanban: faProjectDiagram,
  };

  faPlus = faPlus;
  faSearch = faSearch;

  constructor(private router: Router) { }

  onSearchInput() {
    this.searchChange.emit(this.searchTerm);
  }

  onNewClick() {
    if (this.baseRoute) {
      this.router.navigate([`/${this.baseRoute}`]);
    } else {
      this.newClick.emit();
    }
  }

  onViewSelect(view: string) {
    this.activeView = view;
    this.viewChange.emit(view);
  }
}
