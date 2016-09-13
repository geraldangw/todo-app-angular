import { Component, OnInit, Inject } from '@angular/core';
import { TasksService } from '../planner.service';
import { Task, TaskComponent } from '../task/task.component';

@Component({
  moduleId: module.id,
  selector: 'ga-taskform',
  templateUrl: 'taskform.component.html',
  styleUrls: ['taskform.component.css']
})
export class TaskformComponent implements OnInit {
  //initializing tasks as Task array from Service
  tasks: Task[];
  model: any = {}
  loading = false;
  error = '';
  success: boolean = false;
  currentUser: string;

  //state declaration for collapsible view
  switchtaskform: boolean = false;

  //getting data from Service
  constructor(@Inject(TasksService) private _TasksService: TasksService) { 
    this.currentUser = localStorage.getItem('userId');
  }

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

  //add task into the task data array every time a form is submitted and clear fields
  addTask() {
    this.loading = true;
    this._TasksService.addTask(this.model.task, this.model.description, this.model.deadline, this.model.priority, this.currentUser)
    .subscribe( result => {
      //add task successful
      if(result === true) {
      } else {
        this.error = 'add task failed!';
        this.loading = false;
        console.log(this.error);
      }
    })
  }

  //function to switch state to make collapsible work
  switchTaskForm(): any {
    this.switchtaskform = !this.switchtaskform;
  }

}
