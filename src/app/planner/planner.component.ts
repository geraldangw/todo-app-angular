import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { TasksService } from './planner.service';
import { TaskComponent, Task } from './task/task.component';
import { WeatherComponent } from './weather/weather.component';
import { DailygoalComponent } from './dailygoal/dailygoal.component';
import { TodaysTasksPipe, PendingTasksPipe, PinnedTasksPipe, DoneTasksPipe, DeletedTasksPipe } from '../pipes/status.pipes';
import { TodaysTasksCountPipe, PendingTasksCountPipe, PinnedTasksCountPipe, DoneTasksCountPipe, DeletedTasksCountPipe } from '../pipes/count.pipes';

@Component({
  moduleId: module.id,
  selector: 'ga-planner',
  templateUrl: 'planner.component.html',
  styleUrls: ['planner.component.css'],
  inputs: ['dailyGoalsValue']
  })

export class PlannerComponent implements OnInit{
  
  tasks: Task[];
 
  dailyGoalsValue: string = "Helloz!";
  switchtoday: boolean = false;
  switchpinned: boolean = false;
  switchpending: boolean = false;
  switchtaskform: boolean = false;
  switchdone: boolean = false;
  switchdeleted: boolean = false;
 
  constructor(@Inject(TasksService) private _TasksService: TasksService) { }

  getTasks(): void {
    this._TasksService.getSeedTasks().then(tasks => {
    this.tasks = tasks;
    })
  }

  ngOnInit(): void {
    this.getTasks();
  }
 
  addTask(task: HTMLInputElement, assign: HTMLInputElement,deadline: HTMLInputElement, priority: HTMLInputElement): void {
    this.tasks.push(new Task(task.value, assign.value, deadline.valueAsDate, false, priority.checked, false));
    task.value = '';
    assign.value = '';
    priority.checked = false;
  }

  emptyAll(): any {
    for( var i = 0; i < this.tasks.length; i++) {
    if(this.tasks[i].deleted === true) {
    this.tasks.splice(this.tasks.indexOf(this.tasks[i]),1);
      }
    }
  }

  deleteAll(): any {
    for( var i = 0; i < this.tasks.length; i++) {
   if(this.tasks[i].status === true) {
    this.tasks[i].deleted = true;
      }
    }
  }

  switchDeleted(): any {
    this.switchdeleted = !this.switchdeleted;
  }

  switchToday(): any {
    this.switchtoday = !this.switchtoday;
  }

  switchDone(): any {
    this.switchdone = !this.switchdone;
  }

  switchPending(): any {
    this.switchpending = !this.switchpending;
  }

  switchPinned(): any {
    this.switchpinned = !this.switchpinned;
  }

  switchTaskForm(): any {
    this.switchtaskform = !this.switchtaskform;
  }

  onChange(value: string){
    this.dailyGoalsValue = value;
  }
}
