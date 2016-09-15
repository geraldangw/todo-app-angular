import { Component, OnInit, Inject } from '@angular/core';
import { TasksService } from '../planner.service';
import { Task, TaskComponent } from '../task/task.component';

@Component({
  moduleId: module.id,
  selector: 'ga-deletedtasks',
  templateUrl: 'deletedtasks.component.html',
  styleUrls: ['deletedtasks.component.css'],
  inputs: ['tasks']
})
export class DeletedtasksComponent {
  //initializing tasks as Task array from Service
  tasks: Task[]; 
  switchdelete: boolean = false;

  //getting data from Service
  constructor(@Inject(TasksService) private _TasksService: TasksService) { 
  }

  // // drawing the data from seed-tasks via Service
  // getTasks(): void {
  //   this._TasksService.getUserTasks().subscribe(tasks => {
  //   this.tasks = tasks;
  //   })
  // }

  // //getting tasks before load
  // ngOnInit(): void {
  //   this.getTasks();
  // }

  //delete all items in the archive permanently from the array
  emptyAll(): any {
    for( var i = 0; i < this.tasks.length; i++) {
    if(this.tasks[i].deleted === true) {
    this.tasks.splice(this.tasks.indexOf(this.tasks[i]),1);
      }
    }
  }

    switchDelete(): any {
    this.switchdelete = !this.switchdelete;
  }

}
