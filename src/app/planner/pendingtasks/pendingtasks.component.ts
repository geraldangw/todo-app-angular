import { Component, OnInit, Inject } from '@angular/core';
import { TasksService } from '../planner.service';
import { Task, TaskComponent } from '../task/task.component';

@Component({
  moduleId: module.id,
  selector: 'ga-pendingtasks',
  templateUrl: 'pendingtasks.component.html',
  styleUrls: ['pendingtasks.component.css']
})
export class PendingtasksComponent implements OnInit {
  //initializing tasks as Task array from Service
  tasks: Task[]; 
  usertasks: Task[];

  //state declaration for collapsible view
  switchpending: boolean = false;

  //getting data from Service
  constructor(@Inject(TasksService) private _TasksService: TasksService) { }

  //drawing the data from seed-tasks via Service
   getTasks(): void {
    this._TasksService.getUserTasks().subscribe(tasks => {
    this.tasks = tasks;
    for(let i = 0; i < this.tasks.length; i++) {
      if(this.tasks[i].user[0] === localStorage.getItem('userId')) {
        this.usertasks.push(this.tasks[i]);
      }
    }
    console.log(this.tasks[0]);
    })
  }

  //getting tasks before load
  ngOnInit(): void {
    this.getTasks();
  }

  //function to switch state to make collapsible work
  switchPending(): any {
    this.switchpending = !this.switchpending;
  }


}
