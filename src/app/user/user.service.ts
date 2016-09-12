import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AuthenticationService } from './authentication.service';
import { User } from './user.component';

@Injectable()
export class UserService {
    private token: string;
    private headers: Headers;

    constructor(private http: Http, private authenticationService: AuthenticationService) {
        this.headers = new Headers({'Authorization': 'Bearer ' + this.authenticationService.token});
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }


    public GetAll = (): Observable<User[]> => {
        return this.http.get('http://localhost:8000/api/users')
                .map((response: Response) => <User[]>response.json())
                .catch(this.handleError);
    }

    public GetSingle = (id: string): Observable<User> => {
        let headers = new Headers({'Authorization': 'Bearer ' + this.authenticationService.token});
        let options = new RequestOptions({ headers: headers });
        return this.http.get('http://localhost:8000/api/users/' + id, options)
                .map((response: Response) => <User>response.json())
                .catch(this.handleError);
    }

    public Add = (first_name: string, last_name: string, email: string, password: string): Observable<User> => {
        let toAdd = JSON.stringify({ first_name: first_name, last_name: last_name, email: email, password: password });

        return this.http.post('http://localhost:8000/api/users', toAdd, { headers: this.headers })
                .map((response: Response) => <User>response.json())
                .catch(this.handleError);
    }

    public Update = (id: string, itemToUpdate: User): Observable<User> => {
        return this.http.put('http://localhost:8000/api/users/' + id, itemToUpdate, { headers: this.headers })
                .map((response: Response) => <User>response.json())
                .catch(this.handleError);
    } 

    public Delete = (id: string): Observable<Response> => {
        let headers = new Headers({'Authorization': 'Bearer ' + this.authenticationService.token});
        let options = new RequestOptions({ headers: headers });
        return this.http.delete('http://localhost:8000/api/users/' + id, options)
                .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error("This is" + error);
        return Observable.throw(error.json().error || 'Server Error');
    }

    // getUsers(): Observable<User[]> {
    //     //add authorization header with jwt token
    //     let headers = new Headers({'Authorization': 'Bearer ' + this.authenticationService.token});
    //     let options = new RequestOptions({ headers: headers });

    //     //get users from api
    //     return this.http.get('http://localhost:8000/api/users', options)
    //             .map((response: Response) => response.json());
    // }

    



  
    
}
