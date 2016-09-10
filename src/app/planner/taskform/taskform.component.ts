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

  //state declaration for collapsible view
  switchtaskform: boolean = false;

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

  //add task into the task data array every time a form is submitted and clear fields
  addTask(task: HTMLInputElement, assign: HTMLInputElement,deadline: HTMLInputElement, priority: HTMLInputElement): void {
    this.tasks.push(new Task(this.tasks.length+1, task.value, assign.value, deadline.valueAsDate, false, priority.checked, false));
    task.value = '';
    assign.value = '';
    priority.checked = false;
  }

  //function to switch state to make collapsible work
  switchTaskForm(): any {
    this.switchtaskform = !this.switchtaskform;
  }

}
