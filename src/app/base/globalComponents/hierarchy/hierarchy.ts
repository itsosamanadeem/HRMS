import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronDown, faChevronRight, faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hierarchy',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './hierarchy.html',
  styleUrls: ['./hierarchy.css'],
})
export class Hierarchy implements OnChanges {
  @Input() data: any[] = [];
  @Input() title: string = 'Hierarchy';

  faChevronDown = faChevronDown;
  faChevronRight = faChevronRight;
  faUserCircle = faUserCircle;

  hierarchyData: any[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && this.data?.length > 0) {
      this.hierarchyData = this.buildHierarchy(this.data);
    }
  }

  buildHierarchy(flatData: any[]): any[] {
    const map = new Map<number, any>();
    flatData.forEach(emp => map.set(emp.id, { ...emp, children: [], expanded: true }));

    const roots: any[] = [];
    flatData.forEach(emp => {
      if (emp.managerId && map.has(emp.managerId)) {
        map.get(emp.managerId).children.push(map.get(emp.id));
      } else {
        roots.push(map.get(emp.id));
      }
    });

    return roots;
  }

  toggle(node: any) {
    node.expanded = !node.expanded;
  }
}
