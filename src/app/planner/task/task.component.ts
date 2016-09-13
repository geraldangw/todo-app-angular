import { Component, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { TasksService } from '../planner.service';

@Component({
  moduleId: module.id,
  selector: 'ga-task',
  templateUrl: 'task.component.html',
  styleUrls: ['task.component.css'],
  inputs: ['task'],
  outputs: ['dailyGoalsChanged']
})
export class TaskComponent{
  task: Task;
  date: Date;

  constructor(private router: Router, private route: ActivatedRoute) {
  this.date = new Date;
  }

   onSelect(task: Task) {
    this.router.navigate(['/task', task._id]);
  }

  done(): boolean {
  this.task.done();
    return false;
  }

  prioritize(): boolean {
    this.task.prioritize();
    return false;
  }

  delete(): boolean {
    this.task.delete();
    return false;
  }

  restore(): boolean {
    this.task.restore();
    return false;
  }

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

    done(): void {
    this.status = true;
  }

    prioritize(): void {
    this.priority = true;
  }

   delete(): void {
    this.deleted = true;
  }

   restore(): void {
    this.deleted = false;
  }
  
}


