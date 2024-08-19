import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserServiceService } from './user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  isLoginMode=false;

  constructor(private userService:UserServiceService){

  }
  onSubmitUserForm(userForm: NgForm){
    console.log(userForm.value)
    let email=userForm.value.email;
    let password=userForm.value.password;
    if(this.isLoginMode){
        
    } else{
      this.userService.signup(email,password).subscribe(res=>{
        console.log(res);
      })
    }


  }
  OnSwitchMode(){
    this.isLoginMode=!this.isLoginMode;
  }

}
