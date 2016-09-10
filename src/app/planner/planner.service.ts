import { Injectable } from '@angular/core';

import { Task } from './task/task.component';
import { TASK } from './task/seed-tasks';


let tasksPromise = Promise.resolve(TASK);

@Injectable()
export class TasksService {

constructor() {}

//getting seed data from seed-tasks.ts

getSeedTasks(): Promise<Task[]>  {
return tasksPromise;
  }  

getTask(id: number) {
return tasksPromise
      .then(tasks => tasks.find(task => task.id === +id));
  }

}