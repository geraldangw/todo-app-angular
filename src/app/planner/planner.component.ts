import { Component } from '@angular/core';
import { TaskComponent, Task } from './task/task.component';

@Component({
  moduleId: module.id,
  selector: 'ga-planner',
  templateUrl: 'planner.component.html',
  styleUrls: ['planner.component.css'],
  directives: [TaskComponent]
})
export class PlannerComponent{

  tasks: Task[];

  constructor() {
    this.tasks = [
      new Task('Do a To Do App', false),
      new Task('Sleep', false),
    ];
  }

    addTask(task: HTMLInputElement): void {
    console.log(`Adding task: ${task.value}`);
    this.tasks.push(new Task(task.value, false));
    task.value = '';
  }

    sortedTasks(): Task[] {
    return this.tasks.sort(function(a, b) {
    if(a.status > b.status) {
        return 1;
    } else if(a.status < b.status) {
        return -1;
    }
  })
}

}
