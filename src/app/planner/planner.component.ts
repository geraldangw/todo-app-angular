import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { TasksService } from './planner.service';
import { TaskComponent, Task } from './task/task.component';
import { WeatherComponent } from './weather/weather.component';
import { DailygoalComponent } from './dailygoal/dailygoal.component';

@Component({
  moduleId: module.id,
  selector: 'ga-planner',
  templateUrl: 'planner.component.html',
  styleUrls: ['planner.component.css'],
  inputs: ['dailyGoalsValue']
  })

export class PlannerComponent implements OnInit{
  
  tasks: Task[];
  usertasks: Task[];

  model: any = {}
  loading = false;
  error = '';
  success: boolean = false;
  currentUser: string;
  id: string;
  switchtaskform: boolean = false;
 
 //set property for event output from dailygoals component with a default value of "Helloz!"
  dailyGoalsValue: string = "Helloz!";
  
//injecting service to make data available
  constructor(@Inject(TasksService) private _TasksService: TasksService) { 
    this.currentUser = JSON.parse(localStorage.getItem('userId')).id;
  }

//function get the required data from seed-tasks via TasksService
   getTasks(): void {
    this._TasksService.getUserTasks().subscribe(tasks => {
    this.tasks = tasks;
    })
  }

//running get Tasks function to make data available before page load
  ngOnInit(): void {
    this.getTasks();
  }
 
 //getting value of event emitted from dailygoals component
  onChange(value: string){
    this.dailyGoalsValue = value;
  }

    //add task into the task data array every time a form is submitted and clear fields
  addTask() {
    this.loading = true;
    this._TasksService.addTask(this.model.task, this.model.description, this.model.deadline, this.model.priority, this.currentUser)
    .subscribe( result => {
      //add task successful
      if(result === true) { 
        this.getTasks();
        this.loading = false;
      } else {
        this.error = 'add task failed!';
        this.loading = false;
        console.log(this.error);
      }
    })
  }

  //function to switch state to make collapsible work
  switchTaskForm(): any {
    this.switchtaskform = !this.switchtaskform;
  }
}
