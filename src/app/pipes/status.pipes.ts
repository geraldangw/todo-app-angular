import { Pipe, PipeTransform } from '@angular/core';


//pipe to filter only todays tasks
@Pipe({
  name: "todaystasks",
  pure: false
})
export class TodaysTasksPipe implements PipeTransform {
  transform(tasks: any, Task: any ) {
    let date = new Date;
    if (tasks == null) {
      return null;
    }
    return tasks.filter((task: any) => new Date(task.deadline).getDate() === date.getDate() && new Date(task.deadline).getMonth() === date.getMonth() && task.status === false && task.deleted === false);
  }
}

//pipe to filter pinned tasks, excluding todays tasks
@Pipe({
  name: "pinnedtasks",
  pure: false
})
export class PinnedTasksPipe implements PipeTransform {
  transform(tasks: any, Task: any ) {
    let date = new Date;
    if (tasks == null) {
      return null;
    }
    return tasks.filter((task: any) => task.priority === true && task.status === false && task.deleted === false && new Date(task.deadline).getDate() !== date.getDate());
  }
}


//pipe to filter pending tasks, excluding pinned and todays tasks
@Pipe({
  name: "pendingtasks",
  pure: false
})
export class PendingTasksPipe implements PipeTransform {
  transform(tasks: any, Task: any ) {
    let date = new Date;
    if (tasks == null) {
      return null;
    }
    return tasks.filter((task: any) => task.status === false && task.priority === false && task.deleted === false && new Date(task.deadline).getDate() !== date.getDate());
    }
}

//pipe to filter done tasks thats are not deleted
@Pipe({
  name: "donetasks",
  pure: false
})
export class DoneTasksPipe implements PipeTransform {
  transform(tasks: any, Task: any ) {
    let date = new Date;
    if (tasks == null) {
      return null;
    }
    return tasks.filter((task: any) => task.status === true && task.deleted === false);
  }
}


//pipe to filter deleted tasks
@Pipe({
  name: "deletedtasks",
  pure: false
})
export class DeletedTasksPipe implements PipeTransform {
  transform(tasks: any, Task: any ) {
    let date = new Date;
    if (tasks == null) {
      return null;
    }
    return tasks.filter((task: any) => task.deleted === true);
  }
}