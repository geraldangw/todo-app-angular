import { Routes, RouterModule } from '@angular/router';
import { PlannerComponent } from './planner/planner.component';
import { AboutComponent} from './about/about.component';


const routes: Routes = [
    {path:'', component: PlannerComponent},
    {path:'about', component: AboutComponent}

];

export const routing = RouterModule.forRoot(routes);