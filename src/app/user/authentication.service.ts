import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    public token: string;

    constructor(private http: Http) {
        //set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(email, password): Observable<boolean> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8000/login', JSON.stringify({
            email:email, password:password }), { headers })
                .map((response: Response) => {
                    //login successful if there is a jwt token
                    let token = response.json() && response.json().token;
                    if (token) {
                        //set token property
                        this.token = token;
                        localStorage.setItem('currentUser', JSON.stringify({email: email, token: token}));
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
    }
}
