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
  showtoday: boolean;

  tasks: Task[];

  constructor() {
    this.tasks = [
      new Task('Do a To Do App', "Gerald", new Date, false, false, false),
      new Task('Sleep', "Gerald", new Date("2016-09-6"), false, true, false),
      new Task('Eat', "John", new Date, false, false, false),
      new Task('Talk', "Tom", new Date("2016-09-9"), false, false, false),
      new Task('Rinse', "Ming", new Date("2016-09-6"), false, false, false),
      new Task('Go to US', "Tyler", new Date("2016-09-8"), false, true, false),
      new Task('Buy my Ticket', "Gerald", new Date, false, false, false),
      new Task('Repeat', "Gerald", new Date, false, false, false),
      new Task('Apply for Visa', "Gerald", new Date("2016-09-8"), true, false, false),
      new Task('Wake up early', "Gerald", new Date("2016-09-8"), true, false, true),
      new Task('Drink Beer', "Jack", new Date("2016-09-9"), false, true, false),
      new Task('Find Places', "Tom", new Date("2016-09-8"), false, false, false),
      new Task('Buy Groceries', "Ming", new Date("2016-09-10"), false, false, true),
      new Task('Find a house', "Tyler", new Date("2016-09-10"), false, false, false),
      new Task('Buy a turntable', "Gerald", new Date("2016-09-5"), true, true, false),
      new Task('Win at the horses', "Gerald", new Date("2016-09-6"), false, false, false),
      new Task('Bring out the thrash', "Gerald", new Date, true, false, false),
      new Task('Sleep more', "Gerald", new Date, false, false, false),
      new Task('Drink more', "Jack", new Date, false, true, false)
    ];
    this.showpinned = false;
    this.showdone = false;
    this.showpending = false;
    this.showdeleted = false;
    this.showtaskform = false;
    this.showtoday = false;
  }

    addTask(task: HTMLInputElement, assign: HTMLInputElement,deadline: HTMLInputElement, priority: HTMLInputElement): void {
    this.tasks.push(new Task(task.value, assign.value, deadline.valueAsDate, false, priority.checked, false));
    task.value = '';
    assign.value = '';
    priority.checked = false;
  }

    pendingTasks(): Task[] {
    return this.tasks.filter(this.checkPending).sort((a: Task, b: Task) => a.deadline.getTime() - b.deadline.getTime());
    }

    checkPending(task) : any {
      let date = new Date;
    return task.status === false && task.priority === false && task.deleted === false && task.deadline.getDate() !== date.getDate() || task.deadline.getMonth() !== date.getMonth(); 
    }

    doneTasks(): Task[] {
    return this.tasks.filter(this.checkDone).sort((a: Task, b: Task) => a.deadline.getTime() - b.deadline.getTime());
    }

    checkDone(task) : any {
      let date = new Date;
    return task.status === true && task.deleted === false; 
    }

    priorityTasks(): Task[] {
    return this.tasks.filter(this.checkPriority).sort((a: Task, b: Task) => a.deadline.getTime() - b.deadline.getTime());
    }

    checkPriority(task) : any {
      let date = new Date;
    return task.priority === true && task.status === false && task.deleted === false && task.deadline.getDate() !== date.getDate() || task.deadline.getMonth() !== date.getMonth(); 
    }

    deletedTasks(): Task[] {
      return this.tasks.filter(this.checkDeleted).sort((a: Task, b: Task) => a.deadline.getTime() - b.deadline.getTime());
    }

    checkDeleted(task): any {
      return task.deleted === true;
    }

     todaysTasks(): Task[] {
      return this.tasks.filter(this.checkToday).sort((a: Task, b: Task) => a.deadline.getTime() - b.deadline.getTime());
    }

    checkToday(task): any {
      let date = new Date;
      return task.deadline.getDate() === date.getDate() && task.deadline.getMonth() === date.getMonth() && task.status === false && task.deleted === false;
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

     showToday(): any {
      this.showtoday = true;
    }

    hideToday(): any {
      this.showtoday = false;
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
