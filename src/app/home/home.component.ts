import { Component, OnInit } from '@angular/core';
import{ Sample}from'src/app/login.service';
import{ Router,ActivatedRoute }from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public demo =[];
count=0;
username :string;
  constructor(private _Sample:Sample,private router : Router) { }

  ngOnInit() {
    this._Sample.getstudent().subscribe(data => this.demo = data);
    this._Sample.currentMessage.subscribe(message => this.username = message);

  }
  validuser(uname)
  {
    for(let i=0;i< this.demo.length;i++)
    {
      
      if(this.demo[i].id ==uname)
      {
       this.count=1;
        this._Sample.changeMessage(uname);
        this._Sample.username=uname;
        this.router.navigate(['/login']);
      
       break;
      }
    }
  
     if(this.count==0)
      {
        alert("Invalid user ");
      }
      
    
    
    }
    
  
}

