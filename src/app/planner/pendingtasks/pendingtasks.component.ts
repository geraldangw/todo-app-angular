import { Component, OnInit, Inject } from '@angular/core';
import { TasksService } from '../planner.service';
import { Task, TaskComponent } from '../task/task.component';

@Component({
  moduleId: module.id,
  selector: 'ga-pendingtasks',
  templateUrl: 'pendingtasks.component.html',
  styleUrls: ['pendingtasks.component.css'],
  inputs: ["tasks"]
})
export class PendingtasksComponent {
  //initializing tasks as Task array from Service
  tasks: Task[]; 
  usertasks: Task[];

  //state declaration for collapsible view
  switchpending: boolean = false;

  //getting data from Service
  constructor(@Inject(TasksService) private _TasksService: TasksService) { }

  //drawing the data from seed-tasks via Service
//  getTasks(): void {
//     this._TasksService.getUserTasks().subscribe(tasks => {
//     this.tasks = tasks;
//     })
//   }

//   //getting tasks before load
//   ngOnInit(): void {
//     this.getTasks();
//   }

  //function to switch state to make collapsible work
  switchPending(): any {
    this.switchpending = !this.switchpending;
  }


}
