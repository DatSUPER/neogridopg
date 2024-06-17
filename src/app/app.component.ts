import { Component } from '@angular/core';
import { OrgComponent } from './org/org.component';
import { DUMMY_ORGANIZATIONS } from './dummy-org';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [OrgComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  organizations = DUMMY_ORGANIZATIONS
  
}
