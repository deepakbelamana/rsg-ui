import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }
  user : User ={
    userId: null,
    email: '',
    password: '',
    metricsList: []
  }
  signup(email:string, password:string){
    this.user.email = email;
    this.user.password = password;
    console.log(this.user);
    return this.http.post('http://localhost:8080/user/signUp',this.user)
  }
}
