import { Component, OnInit, Inject } from '@angular/core';
import { TasksService } from '../planner.service';
import { Task, TaskComponent } from '../task/task.component';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'ga-todaystasks',
  templateUrl: 'todaystasks.component.html',
  styleUrls: ['todaystasks.component.css']
})
export class TodaystasksComponent implements OnInit {
  //initializing tasks as Task array from Service
  tasks: Task[]; 

  //state declaration for collapsible view
  switchtoday: boolean = false;

  //getting data from Service
  constructor(private router: Router, @Inject(TasksService) private _TasksService: TasksService) { }

  //drawing the data from seed-tasks via Service
  getTasks(): void {
    this._TasksService.getUserTasks().subscribe(tasks => {
    this.tasks = tasks;
    })
  }

  //getting tasks before load
  ngOnInit(): void {
    this.getTasks();
  }

  //function to switch state to make collapsible work
  switchToday(): any {
    this.switchtoday = !this.switchtoday;
  }

}
