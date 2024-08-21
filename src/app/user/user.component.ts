import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserServiceService } from './user-service.service';
import { Observable } from 'rxjs';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  isLoginMode=false;

  userAuthenticationObservable  = new Observable<User>();
  errorMsg=null;

  constructor(private userService:UserServiceService){

  }
  onSubmitUserForm(userForm: NgForm){
    console.log(userForm.value)
    let email=userForm.value.email;
    let password=userForm.value.password;
    this.errorMsg=null;
    if(this.isLoginMode){

    } else{
      this.userAuthenticationObservable=this.userService.signup(email,password)
    }

    this.userAuthenticationObservable.subscribe((user)=>{
      console.log(user);
    },(err)=>{
      this.errorMsg=err;
    })

    userForm.reset();

  }
  OnSwitchMode(){
    this.isLoginMode=!this.isLoginMode;
  }

}
