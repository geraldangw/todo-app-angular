import { Component } from '@angular/core';
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
export class PlannerComponent{
  dailyGoalsValue: string;
  showdeleted: boolean;
  showdone: boolean;
  showpending: boolean;
  showpinned: boolean;
  showtaskform: boolean;

  tasks: Task[];

  constructor() {
    this.tasks = [
      new Task('Do a To Do App', "Gerald", false, false, false),
      new Task('Sleep', "Gerald", false, true, false),
      new Task('Eat', "John", false, false, false),
      new Task('Talk', "Tom", false, false, false),
      new Task('Rinse', "Ming", false, false, false),
      new Task('Go to US', "Tyler", false, true, false),
      new Task('Buy my Ticket', "Gerald", true, true, false),
      new Task('Repeat', "Gerald", false, false, false),
      new Task('Apply for Visa', "Gerald", true, false, false),
      new Task('Wake up early', "Gerald", true, false, true),
      new Task('Drink Beer', "Jack", false, true, false),
      new Task('Find Places', "Tom", false, false, false),
      new Task('Buy Groceries', "Ming", false, false, true),
      new Task('Find a house', "Tyler", false, true, false),
      new Task('Buy a turntable', "Gerald", true, true, false),
      new Task('Win at the horses', "Gerald", false, false, false),
      new Task('Bring out the thrash', "Gerald", true, false, false),
      new Task('Sleep more', "Gerald", true, false, false),
      new Task('Drink more', "Jack", false, true, false)
    ];
    this.showpinned = false;
    this.showdone = false;
    this.showpending = false;
    this.showdeleted = false;
  }

    addTask(task: HTMLInputElement, assign: HTMLInputElement, priority: HTMLInputElement): void {
    this.tasks.push(new Task(task.value, assign.value, false, priority.checked, false));
    task.value = '';
    assign.value = '';
    priority.checked = false;
  }

    pendingTasks(): Task[] {
    return this.tasks.filter(this.checkPending);
    }

    checkPending(task) : any {
    return task.status === false && task.priority === false && task.deleted === false; 
    }

    doneTasks(): Task[] {
    return this.tasks.filter(this.checkDone);
    }

    checkDone(task) : any {
    return task.status === true && task.deleted === false; 
    }

    priorityTasks(): Task[] {
    return this.tasks.filter(this.checkPriority);
    }

    checkPriority(task) : any {
    return task.priority === true && task.status === false && task.deleted === false; 
    }

    deletedTasks(): Task[] {
      return this.tasks.filter(this.checkDeleted);
    }

    checkDeleted(task): any {
      return task.deleted === true;
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

    showDeleted(): any {
      this.showdeleted = true;
    }

    hideDeleted(): any {
      this.showdeleted = false;
    }

    showDone(): any {
      this.showdone = true;
    }

    hideDone(): any {
      this.showdone = false;
    }

    showPending(): any {
      this.showpending = true;
    }

    hidePending(): any {
      this.showpending = false;
    }

    showPinned(): any {
      this.showpinned = true;
    }

    hidePinned(): any {
      this.showpinned = false;
    }

    showTaskForm(): any {
      this.showtaskform = true;
    }

    hideTaskForm(): any {
      this.showtaskform = false;
    }

    onChange(value: string){
    this.dailyGoalsValue = value;
    }

}
