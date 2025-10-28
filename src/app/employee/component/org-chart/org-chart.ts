import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import jsonData from '../../employee.json';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faChevronDown,faChevronUp } from '@fortawesome/free-solid-svg-icons';
export interface OrgNode {
  id: string | number;
  name: string;
  jobTitle?: string;
  department?: string;
  imageUrl?: string;
  email?: string;
  phone?: string;
  location?: string;
  status?: string;
  salary?: number;
  managerId?: number | null;
  hireDate?: string;
  children?: OrgNode[];
  collapsed?: boolean;
  active?: boolean;
}

@Component({
  selector: 'app-org-chart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './org-chart.html',
  styleUrls: ['./org-chart.css'],
})
export class OrgChart {
  /** Input tree. If not provided, sample data will be used. */
  @Input() tree: OrgNode[] | OrgNode = sampleTree();

  // UI state
  search = '';
  focused?: OrgNode;
  
  // dynamic department colors
  departmentColors = new Map<string, string>();
  colorPalette = [
    '#8b5cf6', // purple
    '#3b82f6', // blue
    '#10b981', // green
    '#f59e0b', // amber
    '#ef4444', // red
    '#ec4899', // pink
    '#6366f1', // indigo
    '#0ea5e9', // sky
    '#22c55e', // emerald
    '#eab308', // yellow
    '#f97316', // orange
    '#14b8a6', // teal
  ];

  constructor() {
    this.assignDepartmentColors();
  }

  /** Assign each unique department a color from the palette (wraps around if many) */
  assignDepartmentColors() {
    const all = flatten(this.asArray(this.tree));
    const unique = Array.from(new Set(all.map((e) => e.department).filter(Boolean)));
    unique.forEach((dept, i) => {
      const color = this.colorPalette[i % this.colorPalette.length];
      this.departmentColors.set(dept!, color);
    });
  }

  /** Toggle collapsed state for a node */
  toggle(node: OrgNode) {
    node.collapsed = !node.collapsed;
  }

  /** Recursive search */
  matches(node: OrgNode): boolean {
    const q = this.search.trim().toLowerCase();
    if (!q) return true;
    if (
      node.name.toLowerCase().includes(q) ||
      (node.jobTitle || '').toLowerCase().includes(q) ||
      (node.department || '').toLowerCase().includes(q)
    )
      return true;
    return (node.children || []).some((c) => this.matches(c));
  }

  /** Select node */
  select(node: OrgNode) {
    this.focused = node;
  }

  /** Normalize input */
  asArray(tree: OrgNode[] | OrgNode): OrgNode[] {
    return Array.isArray(tree) ? tree : [tree];
  }

  getDepartmentColor(department: string): string {
    const colors: any = {
      'IT': '#60A5FA', // Blue
      'Human Resources': '#34D399', // Green
      'Design': '#A78BFA', // Purple
      'Marketing': '#F472B6', // Pink
      'Finance': '#FBBF24', // Yellow
      'Management': '#9CA3AF' // Gray
    };
    return colors[department] || '#93C5FD';
  }

}

function sampleTree(): OrgNode[] {
  const employees = jsonData as OrgNode[];

  const map = new Map<number | string, OrgNode>();
  employees.forEach((emp) => {
    emp.children = [];
    map.set(emp.id, emp);
  });

  const roots: OrgNode[] = [];
  employees.forEach((emp) => {
    if (emp.managerId) {
      const manager = map.get(emp.managerId);
      if (manager) manager.children!.push(emp);
    } else {
      roots.push(emp);
    }
  });

  return roots;
}

/** Utility: flatten tree */
function flatten(nodes: OrgNode[]): OrgNode[] {
  return nodes.flatMap((n) => [n, ...(n.children ? flatten(n.children) : [])]);
}
