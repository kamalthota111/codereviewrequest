import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Ilog } from './log';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class Sample {
  private _ulr:string="/assets/logdetails.json";
   getstudent(): Observable<Ilog[]>
   {
     
      return this.http.get<Ilog[]>(this._ulr);
   }
  constructor(private http : HttpClient) { }
}