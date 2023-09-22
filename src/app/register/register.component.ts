import { Component, EventEmitter, Output } from '@angular/core';
import { AccountService } from '../Services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  model:any={};
  @Output()
  registerMode=new EventEmitter<boolean>();
  constructor(private accoutService:AccountService){}

  register(){
    console.log(this.model);
    this.accoutService.register(this.model).subscribe({
      next: res=>{
         this.cancel();
      },
      error:err=> console.log(err)
    })

  }
  cancel(){
    this.registerMode.emit(false);
  }

}
