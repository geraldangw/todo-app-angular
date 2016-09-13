import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AuthenticationService } from '../user/authentication.service';
import { User } from '../user/user.component';

import { Task } from './task/task.component';
import { TASK } from './task/seed-tasks';


let tasksPromise = Promise.resolve(TASK);

@Injectable()
export class TasksService {
  private token: string;
  private headers: Headers;
  private currentUser: string;

constructor(private http: Http, private authenticationService: AuthenticationService) {
  this.currentUser = JSON.parse(localStorage.getItem('userId')).id;
  console.log(this.currentUser);
}

//getting seed data from seed-tasks.ts

public getUserTasks = (): Observable<Task[]> => {
  let headers = new Headers({'Authorization': 'Bearer ' + this.authenticationService.token});
  let options = new RequestOptions({ headers: headers });
return this.http.get((('http://localhost:8000/api/users/').concat(this.currentUser)), options)
                .map((response: Response) => <User>response.json().task)
                .catch(this.handleError);
    }

 private handleError(error: Response) {
  console.error("This is" + error);
  return Observable.throw(error.json().error || 'Server Error');
    }

// getTask(id: number) {
// return tasksPromise
//       .then(tasks => tasks.find(task => task.id === +id));
//   }


}