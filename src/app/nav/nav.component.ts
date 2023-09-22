import { Component, OnInit } from '@angular/core';
import { AccountService } from '../Services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent  {
  model:any={};
  loggedIn:boolean=false;
  constructor(public accountService:AccountService){}
  login(){
    this.accountService.login(this.model).subscribe({
      next: (res)=>{
        console.log(res);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  logout(){
    this.accountService.logout();
  }

}
