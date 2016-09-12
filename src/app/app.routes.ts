import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { PlannerComponent } from './planner/planner.component';
import { DeletedtasksComponent } from './planner/deletedtasks/deletedtasks.component';
import { TaskdetailComponent } from './planner/taskdetail/taskdetail.component';
import { AboutComponent} from './about/about.component';
import { TaskComponent } from './planner/task/task.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './_guards/auth.guard';

//setting app paths
const routes: Routes = [
    {path: "login", component: LoginComponent },
    {path: '', component: PlannerComponent, canActivate: [AuthGuard]},
    {path: 'user', component: UserComponent, canActivate: [AuthGuard]},
    {path:'about', component: AboutComponent, canActivate: [AuthGuard]},
    {path: 'archive', component: DeletedtasksComponent, canActivate: [AuthGuard]},
    {path: 'task/:id', component: TaskdetailComponent, canActivate: [AuthGuard] }
];


//not sure what this for yet (Take note). From Angular.io routing tutorial. If using this, have to add ModuleWithProviders below.
export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);