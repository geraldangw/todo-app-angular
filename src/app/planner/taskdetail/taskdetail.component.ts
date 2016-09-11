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
export class TaskdetailComponent implements OnInit {
task: Task;
date: Date;
private sub: Subscription;

constructor(private router: Router, private route: ActivatedRoute, private _TasksService: TasksService) { 
  this.date = new Date;
}

  ngOnInit() {
      let id = +this.route.snapshot.params['id'];
      this._TasksService.getTask(id).then(task => this.task = task);
     };

    goBack() { this.router.navigate(['/']); }

    done(): boolean {
  this.task.status = true;
    return false;
  }

    undone(): boolean {
  this.task.status = false;
    return false;
    }

    prioritize(): boolean {
    this.task.priority = true;
    return false;
  }

    unprioritize(): boolean {
    this.task.priority = false;
    return false;
  }

  delete(): boolean {
    this.task.deleted = true;
    return false;
  }

  restore(): boolean {
    this.task.deleted = false;
    return false;
  }
  }




