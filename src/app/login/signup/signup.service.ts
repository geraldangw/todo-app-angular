import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { User } from '../../user/user.component';

@Injectable()
export class SignupService {
    private res: string;

    constructor(private http: Http) {

    }

    signup(first_name, last_name, email, password): Observable<boolean> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        //get users from api
        return this.http.post('https://afternoon-river-80988.herokuapp.com/api/users', JSON.stringify({
            first_name:first_name, last_name:last_name, email:email, password:password
        }), { headers })
                .map((response: Response) => {
            return true;
    })

    }

}
