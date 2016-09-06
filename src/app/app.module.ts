import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PlannerComponent } from './planner/planner.component';
import { TaskComponent } from './planner/task/task.component';
import { DailygoalComponent } from './planner/dailygoal/dailygoal.component';
import { AboutComponent } from './about/about.component';
import { WeatherComponent } from './planner/weather/weather.component';
import { routing } from './app.routes';

@NgModule( {
    imports: [BrowserModule, routing, HttpModule],
    declarations: [AppComponent, NavbarComponent, FooterComponent, PlannerComponent, TaskComponent, DailygoalComponent, AboutComponent, WeatherComponent],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
