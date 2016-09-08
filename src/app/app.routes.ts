import { Routes, RouterModule } from '@angular/router';
import { PlannerComponent } from './planner/planner.component';
import { DeletedtasksComponent } from './planner/deletedtasks/deletedtasks.component';
import { AboutComponent} from './about/about.component';

//setting app paths
const routes: Routes = [
    {path:'', component: PlannerComponent},
    {path:'about', component: AboutComponent},
    {path: 'archive', component: DeletedtasksComponent}
];

export const routing = RouterModule.forRoot(routes);