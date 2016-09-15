import { Pipe, PipeTransform } from '@angular/core';

//pipe to count total number of today's tasks
@Pipe({
  name: "todaystaskscount",
  pure: false
})
export class TodaysTasksCountPipe implements PipeTransform {
  transform(tasks: any, Task: any ) {
    let date = new Date;
    if (tasks == null) {
      return null;
    }
    return tasks.filter((task: any) => new Date(task.deadline).getDate() === date.getDate() && new Date(task.deadline).getMonth() === date.getMonth() && task.status === false && task.deleted === false).length;
  }
}

//pipe to count total number of pinned tasks
@Pipe({
  name: "pinnedtaskscount",
  pure: false
})
export class PinnedTasksCountPipe implements PipeTransform {
  transform(tasks: any, Task: any ) {
    let date = new Date;
    if (tasks == null) {
      return null;
    }
    return tasks.filter((task: any) => task.priority === true && task.status === false && task.deleted === false).length;
  }
}

//pipe to count total number of pending tasks
@Pipe({
  name: "pendingtaskscount",
  pure: false
})
export class PendingTasksCountPipe implements PipeTransform {
  transform(tasks: any, Task: any ) {
    let date = new Date;
    if (tasks == null) {
      return null;
    }
    return tasks.filter((task: any) => task.status === false && task.priority === false && task.deleted === false && new Date(task.deadline).getDate() !== date.getDate()).length;
  }
}

//pipe to count number of done tasks
@Pipe({
  name: "donetaskscount",
  pure: false
})
export class DoneTasksCountPipe implements PipeTransform {
  transform(tasks: any, Task: any ) {
    let date = new Date;
    if (tasks == null) {
      return null;
    }
    return tasks.filter((task: any) => task.status === true && task.deleted === false).length;
  }
}

//pipe to count number of deleted tasks
@Pipe({
  name: "deletedtaskscount",
  pure: false
})
export class DeletedTasksCountPipe implements PipeTransform {
  transform(tasks: any, Task: any ) {
    let date = new Date;
    if (tasks == null) {
      return null;
    }
    return tasks.filter((task: any) => task.deleted === true).length;
  }
}