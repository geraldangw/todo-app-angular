import { Component, EventEmitter, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import{ PlannerComponent } from '../planner.component';

import { TasksService } from '../planner.service';

@Component({
  moduleId: module.id,
  selector: 'ga-task',
  templateUrl: 'task.component.html',
  styleUrls: ['task.component.css'],
  inputs: ['task', 'tasks'],
  outputs: ['dailyGoalsChanged']
})
export class TaskComponent{
  task: Task;
  tasks: Task[];
  date: Date;

  constructor(@Inject(TasksService) private _TasksService: TasksService, private router: Router, private route: ActivatedRoute, private plannerComponent: PlannerComponent) {
  this.date = new Date;
  }

   onSelect(task: Task) {
    this.router.navigate(['/task', task._id]);
  }

  getTasks(): void {
    this._TasksService.getUserTasks().subscribe(tasks => {
    this.tasks = tasks;
    })
  }

  done(): any {
    this._TasksService.Done(this.task._id)
    .subscribe(task => {
      if(task) {
        console.log(task);
        console.log("task updated");
        this.plannerComponent.getTasks();
      } else {
        console.log("task update failed");
      }
    })
    return false;
  }

  prioritize(): any {
    this._TasksService.Pinned(this.task._id)
    .subscribe(task => {
      if(task) {
        console.log(task);
        console.log("task updated");
        this.plannerComponent.getTasks();
      } else {
        console.log("task update failed");
      }
    })
    return false;
  }

  delete(): any {
    this._TasksService.TempDelete(this.task._id)
    .subscribe(task => {
      if(task) {
        console.log(task);
        console.log("task updated");
        this.plannerComponent.getTasks();
      } else {
        console.log("task update failed");
      }
    })
    return false;
  }

  restore(): any {
    this._TasksService.Restore(this.task._id)
    .subscribe(task => {
      if(task) {
        console.log(task);
        console.log("task updated");
        this.plannerComponent.getTasks();
      } else {
        console.log("task update failed");
      }
    })
    return false;
  }

  clearforever(): any {
    this._TasksService.Delete(this.task._id)
    .subscribe(  data => {
           // refresh the list
           console.log("works!");
          this.plannerComponent.getTasks();
         },
         error => {
           console.log("This is the " + error);
         }
      );
      return false;
    }; 
  

  dailyGoalsChanged = new EventEmitter();

  onChange(value: string) {
    this.dailyGoalsChanged.emit(value);
  }



}

export class Task {
  public _id: string;
  public task: string;
  public status: boolean;
  public description: string;
  public priority: boolean;
  public deleted: boolean;
  public deadline: Date;
  public user: String;

    constructor(_id: string, task: string, description: string, deadline: Date, user: string, status?: boolean, priority?:boolean, deleted?:boolean) {
    this._id = _id;
    this.task = task;
    this.description = description;
    this.deadline = deadline;
    this.user = user;
    this.status = status || false;
    this.priority = priority || false;
    this.deleted = deleted || false;
    
  }
  
}


