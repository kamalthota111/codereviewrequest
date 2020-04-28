import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Ilog } from './log';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class Sample {
  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();
  private _ulr:string="/assets/logdetails.json";
  currentuser :any;
  username :any ;
  constructor(private http : HttpClient) { }
   getstudent(): Observable<Ilog[]>
   {
     
      return this.http.get<Ilog[]>(this._ulr);
   }
   getuser()
   {
          return this.currentuser;
   }
  
  changeMessage(username: string) {
    this.messageSource.next(username)
  }

}