import { Component, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Task, TaskComponent } from '../task/task.component';

import { TasksService } from '../planner.service';

@Component({
  moduleId: module.id,
  selector: 'ga-taskdetail',
  templateUrl: 'taskdetail.component.html',
  styleUrls: ['taskdetail.component.css'],
  inputs: ['task'],
})
export class TaskdetailComponent  implements OnInit {
task: Task;
private sub: Subscription;

constructor(private router: Router, private route: ActivatedRoute, private _TasksService: TasksService) { }

  ngOnInit() {
      let id = +this.route.snapshot.params['id'];
      this._TasksService.getTask(id).then(task => this.task = task);
     };
  }




