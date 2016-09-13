import { Component, OnInit, Inject } from '@angular/core';
import { TasksService } from '../planner.service';
import { Task, TaskComponent } from '../task/task.component';

@Component({
  moduleId: module.id,
  selector: 'ga-donetasks',
  templateUrl: 'donetasks.component.html',
  styleUrls: ['donetasks.component.css']
})
export class DonetasksComponent implements OnInit {
  //initializing tasks as Task array from Service
  tasks: Task[]; 

  //state declaration for collapsible view
  switchdone: boolean = false;

  //getting data from Service
  constructor(@Inject(TasksService) private _TasksService: TasksService) { }

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
  switchDone(): any {
    this.switchdone = !this.switchdone;
  }

  //move all done items to archive
  deleteAll(): any {
    for( var i = 0; i < this.tasks.length; i++) {
    if(this.tasks[i].status === true) {
    this.tasks[i].deleted = true;
      }
    }
  }

}
