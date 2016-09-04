import { Routes, RouterModule } from '@angular/router';
import { PlannerComponent } from './planner/planner.component';


const routes: Routes = [
    {path:'', component: PlannerComponent}
];

export const routing = RouterModule.forRoot(routes);