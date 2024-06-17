import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';


interface OrganizationsHierarchy{
  organizationId: string;
  name: string;
  childOrganizations: OrganizationsHierarchy[];
}

@Component({
  selector: 'app-org',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './org.component.html',
  styleUrl: './org.component.css'
})
export class OrgComponent {
  @Input({required: true}) organizations: OrganizationsHierarchy[] = [];
  expanded: { [key: string]: boolean } = {};

  toggleExpand(orgId: string): void {
    this.expanded[orgId] = !this.expanded[orgId];
  }

  isExpanded(orgId: string): boolean {
    return !!this.expanded[orgId];
  }



  printOrganizationTree(organizations: OrganizationsHierarchy[], depth: number = 0): void {
    organizations.forEach(org => {
      console.log('  '.repeat(depth) + org.name);
      this.printOrganizationTree(org.childOrganizations, depth + 1);
    });
  }

}
