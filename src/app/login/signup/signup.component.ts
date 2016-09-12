import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SignupService } from './signup.service';

@Component({
  moduleId: module.id,
  selector: 'ga-signup',
  templateUrl: 'signup.component.html',
  styleUrls: ['signup.component.css']
})
export class SignupComponent implements OnInit {
  model: any = {}
  loading = false;
  error = '';
  signed: boolean = false;

  constructor( private router: Router, private signupService: SignupService ) { }

  ngOnInit() {
  }

  signup() {
    this.loading = true;
    this.signupService.signup(this.model.first_name, this.model.last_name, this.model.email, this.model.password)
    .subscribe( result => {
      if(result === true) {
        //signup successful
        this.loading = false;
        this.signed = true;
        // this.router.navigate(['/']);
      } else {
        //login failed
        this.error = 'signup failed!';
        this.loading = false;
        console.log(this.error);
      }
    })
  }

}
