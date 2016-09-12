import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User, UserComponent } from '../user.component';
import { UserService } from '../user.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  moduleId: module.id,
  selector: 'ga-userdetail',
  templateUrl: 'userdetail.component.html',
  styleUrls: ['userdetail.component.css']
})
export class UserdetailComponent implements OnInit {
  user: User;
  
  constructor(private router: Router, private route: ActivatedRoute, private UserService: UserService) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.UserService.GetSingle(id).subscribe((data:User) => this.user = data,
    error => console.log(error),
    () => console.log(this.user));
  }

  delete(id: string) {
    this.UserService.Delete(id).subscribe(
         data => {
           // refresh the list
           console.log("works!");
           this.router.navigate(['/user']);
           return true;
         },
         error => {
           console.log("This is the " + error);
         }
      );
    };  

}
