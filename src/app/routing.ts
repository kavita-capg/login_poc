import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DetailsComponent} from './details/details.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';

const appRoutes:Routes =[

{path:'login', component:LoginComponent},
{path:'home', component:HomeComponent},
{path:'user/:id', component:DetailsComponent},
{path:'', redirectTo:'/login', pathMatch:'full' },
{path:'**', component:LoginComponent}
]

@NgModule({
imports:[RouterModule.forRoot(appRoutes)],
exports:[RouterModule]
})

export class AppRoutingModule{}