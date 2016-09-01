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
      new Task('Do a To Do App', "Gerald", false),
      new Task('Sleep', "Gerald", false),
      new Task('Eat', "John", false),
      new Task('Talk', "Tom", false),
      new Task('Rinse', "Ming", false),
      new Task('Go to US', "Tyler", false),
      new Task('Buy my Ticket', "Gerald", true),
      new Task('Repeat', "Gerald",false),
      new Task('Apply for Visa', "Gerald", true),
      new Task('Wake up early', "Gerald", true),
      new Task('Drink Beer', "Jack", false),
    ];
  }

    addTask(task: HTMLInputElement, assign: HTMLInputElement): void {
    console.log(`Adding task: ${task.value}`);
    this.tasks.push(new Task(task.value, assign.value, false));
    task.value = '';
    assign.value = '';
  }

    pendingTasks(): Task[] {
    return this.tasks.filter(this.checkPending);
    }

    checkPending(task) : any {
    return task.status === false; 
    }

    doneTasks(): Task[] {
    return this.tasks.filter(this.checkDone);
    }

    checkDone(task) : any {
    return task.status === true; 
    }

        onChange(value: string){
      this.dailyGoalsValue = value;
    }

}
