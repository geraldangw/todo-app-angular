import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthenticationService {
    public token: string;
    public user: string;

    constructor(private http: Http) {
        //set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
        // // this.user = this.token && this.token);
        // console.log(this.user);
    }

    login(email, password): Observable<boolean> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('https://afternoon-river-80988.herokuapp.com/login', JSON.stringify({
            email:email, password:password }), { headers })
                .map((response: Response) => {
                    //login successful if there is a jwt token
                    let token = response.json() && response.json().token;
                    let id = response.json().id;
                    if (token) {
                        //set token property
                        this.token = token;
                        localStorage.setItem('currentUser', JSON.stringify({email: email, token: token}));
                        localStorage.setItem('userId', JSON.stringify({id: id}));
                        // return true to indicate successful attempt
                        return true;
                    } else {
                        //return false to indicate failed attempt
                        return false;
                    }
                });
    }

    logout(): void {
        //clear token and remove user from local storage.
        this.token = null;
        localStorage.removeItem('currentUser');
        localStorage.removeItem('userId');
    }
}

