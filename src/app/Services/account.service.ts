import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  url="https://localhost:5001/api";
  private currentUserSource=new BehaviorSubject<User| null>(null)
  currentUser$=this.currentUserSource.asObservable();
  constructor(private http:HttpClient) { }

  login(model:any){
    return this.http.post<User>(this.url+"/account/login",model).pipe(
      map((res:User)=>{
        if(res)
        localStorage.setItem("user",JSON.stringify(res));
        this.currentUserSource.next(res);
      })
    )
  }

  register(model:any){
    return this.http.post<User>(this.url+"/account/register",model).pipe(
      map((res:User)=>{
        if(res){
          localStorage.setItem("user",JSON.stringify(res));
          this.currentUserSource.next(res);
        }
      })
    )
  }

  setCurrentUser(user:User){
    this.currentUserSource.next(user)
  }

  logout(){
    localStorage.removeItem("user");
    this.currentUserSource.next(null);
  }

}
