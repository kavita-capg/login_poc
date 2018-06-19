import {Component,OnInit} from '@angular/core';
import {User} from '../user';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {UserService} from '../services/userService';
import { Location } from '@angular/common';

@Component({
    selector:'details',
    templateUrl:'./details.component.html'
})

export class DetailsComponent implements OnInit{
    currentUser:User;
    
    constructor(
    private userservice: UserService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  
   ngOnInit(): void {
  this.route.paramMap
      .switchMap((params: ParamMap) => this.userservice.getUser(+params.get('id')))
      .subscribe(user=>{console.log(user);this.currentUser=user})
  }

  saveUser(user:User): void {
  this.userservice.updateUser(user).subscribe(success=>this.goBack())
  }
  
  goBack(): void {
    this.location.back();
  }
}