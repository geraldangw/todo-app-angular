import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PlannerComponent } from './planner/planner.component';
import { TaskComponent } from './planner/task/task.component';
import { DailygoalComponent } from './planner/dailygoal/dailygoal.component';
import { AboutComponent } from './about/about.component';
import { routing } from './app.routes';

@NgModule( {
    imports: [BrowserModule, routing],
    declarations: [AppComponent, NavbarComponent, FooterComponent, PlannerComponent, TaskComponent, DailygoalComponent, AboutComponent ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
