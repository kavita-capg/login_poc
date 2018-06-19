import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {DetailsComponent} from './details/details.component';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './routing';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {MockUsers} from './mock-users';
import {UserService} from './services/userService';

@NgModule({
  imports:      [ BrowserModule , FormsModule, HttpModule, AppRoutingModule, InMemoryWebApiModule.forRoot(MockUsers)],
  declarations: [ AppComponent ,LoginComponent,HomeComponent,DetailsComponent],
  providers : [UserService],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
