import { Component, OnInit, Inject } from '@angular/core';
import { TasksService } from '../planner.service';
import { Task, TaskComponent } from '../task/task.component';

@Component({
  moduleId: module.id,
  selector: 'ga-pinnedtasks',
  templateUrl: 'pinnedtasks.component.html',
  styleUrls: ['pinnedtasks.component.css']
})
export class PinnedtasksComponent implements OnInit {
  //initializing tasks as Task array from Service
  tasks: Task[]; 

  //state declaration for collapsible view
  switchpinned: boolean = false;

  //getting data from Service
  constructor(@Inject(TasksService) private _TasksService: TasksService) { }

  //drawing the data from seed-tasks via Service
  getTasks(): void {
    this._TasksService.getSeedTasks().then(tasks => {
    this.tasks = tasks;
    })
  }

  //getting tasks before load
  ngOnInit(): void {
    this.getTasks();
  }
  //function to switch state to make collapsible work
   switchPinned(): any {
    this.switchpinned = !this.switchpinned;
  }

}