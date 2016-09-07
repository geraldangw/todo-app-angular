import { Pipe, PipeTransform } from '@angular/core';

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
    return tasks.filter((task: any) => task.deadline.getDate() === date.getDate() && task.deadline.getMonth() === date.getMonth() && task.status === false && task.deleted === false).sort((a, b) => a.deadline.getTime() - b.deadline.getTime());
  }
}

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
    return tasks.filter((task: any) => task.priority === true && task.status === false && task.deleted === false && task.deadline.getDate() !== date.getDate() || task.deadline.getMonth() !== date.getMonth()).sort((a, b) => a.deadline.getTime() - b.deadline.getTime());
  }
}


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
    return tasks.filter((task: any) => task.status === false && task.priority === false && task.deleted === false && task.deadline.getDate() !== date.getDate() || task.deadline.getMonth() !== date.getMonth()).sort((a, b) => a.deadline.getTime() - b.deadline.getTime());
  }
}

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
    return tasks.filter((task: any) => task.status === true && task.deleted === false).sort((a, b) => a.deadline.getTime() - b.deadline.getTime());
  }
}

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
    return tasks.filter((task: any) => task.deleted === true).sort((a, b) => a.deadline.getTime() - b.deadline.getTime());
  }
}