import { Component, OnInit } from '@angular/core';
import{ Sample}from'src/app/login.service';
import { from } from 'rxjs';
import{ Router,ActivatedRoute }from '@angular/router';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { analyzeAndValidateNgModules } from '@angular/compiler';
@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  username:any;
  private _ulr:string="http://localhost:4200/assets/request.json";
  postdata:[{test :'mytest'}]
 constructor(private _Sample:Sample,private http : HttpClient) { }

  ngOnInit() {
    this._Sample.currentMessage.subscribe(message => this.username = message);
    this.http.post(this._ulr,this.postdata).toPromise().then((data:any)=>{
      console.log(data);});
    }
  
  }

