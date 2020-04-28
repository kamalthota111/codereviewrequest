import { Component, OnInit } from '@angular/core';
import{ Sample}from'src/app/login.service';
import { from } from 'rxjs';
import{ Router,ActivatedRoute }from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { HomeComponent } from '../home/home.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public demo =[];
count =0;


username:any;
  constructor(private _Sample:Sample,private router : Router) 
  { }

  ngOnInit() {
      this._Sample.getstudent().subscribe(data => this.demo = data);
      this._Sample.currentMessage.subscribe(message => this.username = message);
    
  }

  valid(psw)
  {
 
    for(let i=0;i< this.demo.length;i++)
    {
     
      if(this.demo[i].id==this.username && this.demo[i].password == psw)
      {
        this.count=1;
        alert("successful login ");
       this.router.navigate(["request"]);
       break;
      }
        
    }
    if(this.count==0)
    {
      alert("invalid password Re-enter correct password ");
    }
  }
}