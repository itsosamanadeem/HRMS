import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface DropdownItem {
  name: string;
  route?: string;              
  permission?: string;         
  children?: DropdownItem[];   
}

export interface DropdownMenu {
  label: string;
  icon?: IconDefinition | null;        
  items: DropdownItem[];        
}

@Injectable({ providedIn: 'root' })
export class NavbarService {
  private titleSubject = new BehaviorSubject<string>('Dashboard');
  private iconSubject = new BehaviorSubject<IconDefinition | null>(null);
  private dropdownsSubject = new BehaviorSubject<DropdownMenu[]>([]);

  title$ = this.titleSubject.asObservable();
  icon$ = this.iconSubject.asObservable();
  dropdowns$ = this.dropdownsSubject.asObservable();

  setTitle(title: string) {
    this.titleSubject.next(title);
  }

  setIcon(icon: IconDefinition | null) {
    this.iconSubject.next(icon);
  }

  setDropdowns(dropdowns: DropdownMenu[]) {
    this.dropdownsSubject.next(dropdowns);
  }

  clear() {
    this.titleSubject.next('Dashboard');
    this.iconSubject.next(null);
    this.dropdownsSubject.next([]);
  }
}
