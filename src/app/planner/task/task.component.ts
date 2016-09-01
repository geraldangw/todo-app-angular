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

  dailyGoalsChanged = new EventEmitter();

  onChange(value: string) {
    this.dailyGoalsChanged.emit(value);
  }



}

export class Task {
  task: string;
  status: boolean;
  assign: string;

    constructor(task: string, assign: string, status?: boolean) {
    this.task = task;
    this.assign = assign;
    this.status = status || false;
  }

    done(): void {
    this.status = true;
  }
}


