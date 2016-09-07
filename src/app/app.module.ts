import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { TasksService } from './planner/planner.service';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PlannerComponent } from './planner/planner.component';
import { TaskComponent } from './planner/task/task.component';
import { DailygoalComponent } from './planner/dailygoal/dailygoal.component';
import { AboutComponent } from './about/about.component';
import { WeatherComponent } from './planner/weather/weather.component';
import { TodaysTasksPipe, PendingTasksPipe, PinnedTasksPipe, DoneTasksPipe, DeletedTasksPipe } from './pipes/status.pipes';
import { TodaysTasksCountPipe, PendingTasksCountPipe, PinnedTasksCountPipe, DoneTasksCountPipe, DeletedTasksCountPipe } from './pipes/count.pipes';
import { routing } from './app.routes';

@NgModule( {
    imports: [BrowserModule, routing, HttpModule],
    declarations: [
        AppComponent, 
        NavbarComponent, 
        FooterComponent, 
        PlannerComponent, 
        TaskComponent, 
        DailygoalComponent, 
        AboutComponent, 
        WeatherComponent, 
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
    providers: [ TasksService ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
