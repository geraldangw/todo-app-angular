import { Injectable } from '@angular/core';

import { Task } from './task/task.component';
import { TASK } from './task/seed-tasks';

@Injectable()
export class TasksService {

constructor() {}

getSeedTasks(): Promise<Task[]>  {
return Promise.resolve(TASK);
  }  
}