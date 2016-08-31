import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'ga-task',
  templateUrl: 'task.component.html',
  styleUrls: ['task.component.css'],
  inputs: ['task'],
})
export class TaskComponent {
  task: Task;

    done(): boolean {
    this.task.done();
    return false;
  }



}

export class Task {
  task: string;
  status: boolean;

    constructor(task: string, status?: boolean) {
    this.task = task;
    this.status = status || false;
  }

    done(): void {
    this.status = true;
  }
}


