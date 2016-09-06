import { Component, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'ga-task',
  templateUrl: 'task.component.html',
  styleUrls: ['task.component.css'],
  inputs: ['task'],
  outputs: ['dailyGoalsChanged']
})
export class TaskComponent {
  task: Task;

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
  task: string;
  status: boolean;
  assign: string;
  priority: boolean;
  deleted: boolean;

    constructor(task: string, assign: string, status?: boolean, priority?:boolean, deleted?:boolean) {
    this.task = task;
    this.assign = assign;
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


