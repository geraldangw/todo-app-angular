import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TasksService } from './planner/planner.service';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PlannerComponent } from './planner/planner.component';
import { TodaystasksComponent } from './planner/todaystasks/todaystasks.component';
import { PinnedtasksComponent } from './planner/pinnedtasks/pinnedtasks.component';
import { PendingtasksComponent } from './planner/pendingtasks/pendingtasks.component';
import { DonetasksComponent } from './planner/donetasks/donetasks.component';
import { DeletedtasksComponent } from './planner/deletedtasks/deletedtasks.component';
import { TaskformComponent } from './planner/taskform/taskform.component';
import { TaskComponent } from './planner/task/task.component';
import { TaskdetailComponent } from './planner/taskdetail/taskdetail.component';
import { DailygoalComponent } from './planner/dailygoal/dailygoal.component';
import { AboutComponent } from './about/about.component';
import { WeatherComponent } from './planner/weather/weather.component';
import { AuthGuard } from './_guards/auth.guard';
import { UserComponent } from  './user/user.component';
import { UserService } from './user/user.service';
import { AuthenticationService } from './user/authentication.service';
import { LoginComponent } from './login/login.component';
import { TodaysTasksPipe, PendingTasksPipe, PinnedTasksPipe, DoneTasksPipe, DeletedTasksPipe } from './pipes/status.pipes';
import { TodaysTasksCountPipe, PendingTasksCountPipe, PinnedTasksCountPipe, DoneTasksCountPipe, DeletedTasksCountPipe } from './pipes/count.pipes';
import { routing, appRoutingProviders  } from './app.routes';

//this takes over from having to put directives in each component. Makes components/providers/etc available across
@NgModule( {
    imports: [
        BrowserModule, 
        FormsModule,
        routing, 
        HttpModule],
    declarations: [
        AppComponent, 
        NavbarComponent, 
        FooterComponent, 
        PlannerComponent, 
        TaskComponent, 
        DailygoalComponent, 
        AboutComponent, 
        WeatherComponent, 
        TodaystasksComponent,
        PinnedtasksComponent,
        PendingtasksComponent,
        DonetasksComponent,
        DeletedtasksComponent,
        TaskformComponent,
        TaskdetailComponent,
        UserComponent,
        LoginComponent,
        TodaysTasksPipe, 
        PendingTasksPipe, 
        PinnedTasksPipe, 
        DoneTasksPipe, 
        DeletedTasksPipe, 
        TodaysTasksCountPipe, 
        PendingTasksCountPipe, 
        PinnedTasksCountPipe, 
        DoneTasksCountPipe, 
        DeletedTasksCountPipe ],
    providers: [ 
        TasksService, 
        appRoutingProviders,
        AuthGuard,
        AuthenticationService,
        UserService ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
