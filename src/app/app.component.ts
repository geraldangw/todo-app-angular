import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PlannerComponent } from './planner/planner.component';

@Component({
  moduleId: module.id,
  selector: 'ga-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ NavbarComponent, FooterComponent, PlannerComponent ]
})
export class AppComponent {
  title = 'app works!';
}
