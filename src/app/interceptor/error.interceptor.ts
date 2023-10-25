import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { NavigationExtras, Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router:Router,private toast:ToastrService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error:HttpErrorResponse)=>{
        if(error){
           switch (error.status){
            case 400:
              this.toast.error(error.error,error.status.toString())
              break;
            case 401:
              this.toast.error("Unathorized",error.status.toString())
              break;
            case 500:
              const extras: NavigationExtras = {
                state: {
                  userName: 'John Doe'
                }
              };
                this.router.navigate(["server-error"],extras);
                this.toast.error("Internal server Error",error.status.toString())
                break;
            case 404:
                  this.router.navigate(["/not-found"]);
                  this.toast.error("Service not found",error.status.toString())
                  break;
            default:
              this.toast.error("Something unexpected error occured ",error.status.toString())
              break;
           }
        }
        throw error;
      })
    );
  }
}
