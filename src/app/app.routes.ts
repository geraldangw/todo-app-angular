import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { PlannerComponent } from './planner/planner.component';
import { DeletedtasksComponent } from './planner/deletedtasks/deletedtasks.component';
import { AboutComponent} from './about/about.component';
// import { TaskdetailComponent } from './planner/taskdetail/taskdetail.component';
// import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

//setting app paths
const routes: Routes = [
    {path:'', component: PlannerComponent},
    {path:'about', component: AboutComponent},
    {path: 'archive', component: DeletedtasksComponent},
    // {path: 'task/:id', component: TaskdetailComponent},
    // {path: '**', component: PagenotfoundComponent}
];


//not sure what this for yet (Take note). From Angular.io routing tutorial. If using this, have to add ModuleWithProviders below.
export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);