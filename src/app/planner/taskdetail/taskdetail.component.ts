import { Component, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Task, TaskComponent } from '../task/task.component';
import { DatePipe } from '@angular/common';

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
      let id = this.route.snapshot.params['id'];
      this._TasksService.getTask(id).subscribe(task => this.task = task);
     };

    goBack() { this.router.navigate(['/']); }

    done(): any {
    this._TasksService.Done(this.task._id)
    .subscribe(task => {
      if(task) {
        console.log(task);
        console.log("task updated");
      } else {
        console.log("task update failed");
      }
    })
    return false;
  }

  undone(): any {
    this._TasksService.unDone(this.task._id)
    .subscribe(task => {
      if(task) {
        console.log(task);
        console.log("task updated");
      } else {
        console.log("task update failed");
      }
    })
    return false;
  }

  prioritize(): any {
    this._TasksService.Pinned(this.task._id)
    .subscribe(task => {
      if(task) {
        console.log(task);
        console.log("task updated");
      } else {
        console.log("task update failed");
      }
    })
    return false;
  }

   unprioritize(): any {
    this._TasksService.unPin(this.task._id)
    .subscribe(task => {
      if(task) {
        console.log(task);
        console.log("task updated");
      } else {
        console.log("task update failed");
      }
    })
    return false;
  }

  delete(): any {
    this._TasksService.TempDelete(this.task._id)
    .subscribe(task => {
      if(task) {
        console.log(task);
        console.log("task updated");
      } else {
        console.log("task update failed");
      }
    })
    return false;
  }

  restore(): any {
    this._TasksService.Restore(this.task._id)
    .subscribe(task => {
      if(task) {
        console.log(task);
        console.log("task updated");
      } else {
        console.log("task update failed");
      }
    })
    return false;
  }


  }




