import { Component, OnInit, Inject } from '@angular/core';
import { TasksService } from '../planner.service';
import { Task, TaskComponent } from '../task/task.component';

@Component({
  moduleId: module.id,
  selector: 'ga-deletedtasks',
  templateUrl: 'deletedtasks.component.html',
  styleUrls: ['deletedtasks.component.css']
})
export class DeletedtasksComponent implements OnInit {

   tasks: Task[]; 

    constructor(@Inject(TasksService) private _TasksService: TasksService) { }

  getTasks(): void {
    this._TasksService.getSeedTasks().then(tasks => {
    this.tasks = tasks;
    })
  }

  ngOnInit(): void {
    this.getTasks();
  }

    emptyAll(): any {
    for( var i = 0; i < this.tasks.length; i++) {
    if(this.tasks[i].deleted === true) {
    this.tasks.splice(this.tasks.indexOf(this.tasks[i]),1);
      }
    }
  }

}
