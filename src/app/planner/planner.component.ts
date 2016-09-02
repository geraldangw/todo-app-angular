import { Component } from '@angular/core';
import { TaskComponent, Task } from './task/task.component';
import { DailygoalComponent } from './dailygoal/dailygoal.component';

@Component({
  moduleId: module.id,
  selector: 'ga-planner',
  templateUrl: 'planner.component.html',
  styleUrls: ['planner.component.css'],
  directives: [TaskComponent, DailygoalComponent],
  inputs: ['dailyGoalsValue']
})
export class PlannerComponent{
  dailyGoalsValue: string;

  tasks: Task[];

  constructor() {
    this.tasks = [
      new Task('Do a To Do App', "Gerald", false, false),
      new Task('Sleep', "Gerald", false, true),
      new Task('Eat', "John", false, false),
      new Task('Talk', "Tom", false, false),
      new Task('Rinse', "Ming", false, false),
      new Task('Go to US', "Tyler", false, true),
      new Task('Buy my Ticket', "Gerald", true, true),
      new Task('Repeat', "Gerald", false, false),
      new Task('Apply for Visa', "Gerald", true, false),
      new Task('Wake up early', "Gerald", true, false),
      new Task('Drink Beer', "Jack", false, true),
    ];
  }

    addTask(task: HTMLInputElement, assign: HTMLInputElement, priority: HTMLInputElement): void {
    this.tasks.push(new Task(task.value, assign.value, false, priority.checked));
    task.value = '';
    assign.value = '';
    priority.checked = false;
  }

    pendingTasks(): Task[] {
    return this.tasks.filter(this.checkPending);
    }

    checkPending(task) : any {
    return task.status === false && task.priority === false; 
    }

    doneTasks(): Task[] {
    return this.tasks.filter(this.checkDone);
    }

    checkDone(task) : any {
    return task.status === true; 
    }

    priorityTasks(): Task[] {
    return this.tasks.filter(this.checkPriority);
    }

    checkPriority(task) : any {
    return task.priority === true && task.status === false; 
    }

    onChange(value: string){
    this.dailyGoalsValue = value;
    }

}
