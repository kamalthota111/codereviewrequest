import { Component, OnInit } from '@angular/core';
import{ Sample}from'src/app/login.service';
import { from } from 'rxjs';
import { unwrapResolvedMetadata } from '@angular/compiler';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public demo =[];
  constructor(private _Sample:Sample) { }

  ngOnInit() {
      this._Sample.getstudent().subscribe(data => this.demo = data);
  }
  
  valid(uname,psw)
  {
    for(let i=0;i<=this.demo.length;i++)
    {
      if(this.demo[i].id == uname && this.demo[i].password == psw)
      {
       console.log("successful");
      }
     
    }
  }

}
