import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { AccountService } from './Services/account.service';
import { User } from './Models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Dating App';
  users:any;
  constructor(private http:HttpClient,private accountService:AccountService){}

 ngOnInit(): void {
      this.getUser();
      this.setCurrentUser();
 }
 getUser(){
  this.http.get("https://localhost:5001/api/users").subscribe((data:any)=>{
      this.users=data;
    })
 }

 setCurrentUser(){
  let userString=localStorage.getItem('user');
  console.log(userString);

  if(!userString)
     return;
  let user:User=JSON.parse(userString);
  this.accountService.setCurrentUser(user);
 }

}
