import { Component, OnInit } from '@angular/core';
import { AccountService } from '../Services/account.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent  {
  model:any={};
  loggedIn:boolean=false;
  constructor(public accountService:AccountService,private router:Router,private toast:ToastrService){}
  login(){
    this.accountService.login(this.model).subscribe({
      next: ()=>this.router.navigateByUrl('/members'),
    })
  }
  logout(){
    this.accountService.logout();
    this.router.navigateByUrl("/");
  }

}
