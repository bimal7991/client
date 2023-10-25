import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {
   url:string="https://localhost:5001/api/Error/";
   constructor(private http:HttpClient)  {}

   get401Error(){
       this.http.get(this.url+"auth").subscribe({
        next: (response)=>{},
        error: (error)=>{
              console.log(error);
        }
       })
   }
   getNotFoundError(){
    this.http.get(this.url+"not-found").subscribe({
     next: (response)=>{},
     error: (error)=>{
           console.log(error);
     }
    })
  }
    getServerError(){
      this.http.get(this.url+"server-error").subscribe({
       next: (response)=>{},
       error: (error)=>{
             console.log(error);
       }
      })
    }
      getBadRequest(){
        this.http.get(this.url+"bad-request").subscribe({
         next: (response)=>{},
         error: (error)=>{
               console.log(error);
         }
        })
      }

}
