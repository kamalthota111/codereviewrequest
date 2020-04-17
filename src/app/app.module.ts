import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from "@angular/common/http";
import{ Sample} from'./login.service';
import { RequestComponent } from './request/request.component';
import { Routes, RouterModule } from '@angular/router';
import { ResponceComponent } from './responce/responce.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RequestComponent,
    ResponceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  
  ],
  providers: [Sample],
  bootstrap: [AppComponent]
})
export class AppModule { }
