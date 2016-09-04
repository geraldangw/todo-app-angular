import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routes';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PlannerComponent } from './planner/planner.component';
import { TaskComponent } from './planner/task/task.component';
import { DailygoalComponent } from './planner/dailygoal/dailygoal.component';



@NgModule( {
    imports: [BrowserModule, routing],
    declarations: [AppComponent, NavbarComponent, FooterComponent, PlannerComponent, TaskComponent, DailygoalComponent ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
