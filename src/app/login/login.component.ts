import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'login-page',
  templateUrl: './login.component.html'
})

export class LoginComponent {
 constructor(private router:Router){
 
 }
  email= /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  user={
    username:'',
    password:''
  }
 submitted:boolean = false;
 
 onSubmit(){
    this.submitted = true;
    this.router.navigate(['/home']);
 }
}
