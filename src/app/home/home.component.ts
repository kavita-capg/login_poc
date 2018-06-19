import {Component , OnInit} from '@angular/core';
import {UserService} from '../services/userService';
import {User} from '../user';

@Component({
selector:'home',
templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit{
constructor(private userService:UserService){}
selectedUser:User;
USERS:User[];

onSelect(user:User){
    this.selectedUser = user;
}

deleteProfile(user:User){
    this.userService.deleteUser(user.id)
    .subscribe(success=>{console.log('succ comp');this.USERS=this.USERS.filter(u=>u!==user)})
}

ngOnInit(){
    this.getUsers();
}

getUsers(){
    this.userService.getUsers().subscribe(data=>{this.USERS=data;console.log(data);})
}
}