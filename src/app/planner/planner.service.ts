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

public getTask = (id: string): Observable<Task> => {
        let headers = new Headers({'Authorization': 'Bearer ' + this.authenticationService.token});
        let options = new RequestOptions({ headers: headers });
        return this.http.get('http://localhost:8000/api/tasks/' + id, options)
                .map((response: Response) => <Task>response.json())
                .catch(this.handleError);
    }


public addTask(task, description, deadline, priority, user): Observable<any> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        //get tasks from api
        return this.http.post('http://localhost:8000/api/tasks', JSON.stringify({
          task: task, description: description, deadline: deadline, priority: priority, user: user }), { headers })
              .map((response: Response) => {
                response.json()._id;
                return true;
              })
}

 private handleError(error: Response) {
  console.error("This is" + error);
  return Observable.throw(error.json().error || 'Server Error');
    }




}