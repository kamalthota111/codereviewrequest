import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestComponent } from './request/request.component';
import{ Router,ActivatedRoute }from '@angular/router';
import{  ResponceComponent }from'./responce/responce.component';
import { from } from 'rxjs';
import { LoginComponent } from './login/login.component';
const routes: Routes = [ {path :'request',component: RequestComponent},
                        {path :'responce',component: ResponceComponent},
                        { path: '', redirectTo: '/login', pathMatch: 'full'},
                      {path:'login',component:LoginComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }