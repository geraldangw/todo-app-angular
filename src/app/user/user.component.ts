import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  moduleId: module.id,
  selector: 'ga-user',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.css']
})
export class UserComponent implements OnInit {
  users: User[] = [];

  constructor(private _userService: UserService) { }

  ngOnInit() {
    //get users from secure api end point.
    this._userService.GetAll()
        .subscribe(users => {
          this.users = users;
        })
  }
}

export class User {

  public id: String;
  public first_name: String;
  public last_name: String;
  public email: String;
  public password: String;

  // constructor(_id: String, first_name: String, last_name: String, email: String, password: String) {
  //   this._id = _id;
  //   this.first_name = first_name;
  //   this.last_name = last_name;
  //   this.email = email;
  //   this.password = password;
  // }

}
