import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }
  user: User = {
    userId: null,
    email: '',
    password: '',
    metricsList: []
  }
  signup(email: string, password: string) {
    this.user.email = email;
    this.user.password = password;
    console.log(this.user);
    return this.http.post<User>('http://localhost:8080/user/signUp', this.user).pipe(catchError(this.handleAuthenticationErrors))
  }

  handleAuthenticationErrors(error: HttpErrorResponse) {
    let errorMessage = "An unexpected error occurred";
    if (!error.error) {
      return throwError(errorMessage);
    }
    else {
      switch (error.error) {
        case 'EMAIL_ALREADY_EXISTS':
          errorMessage = "Email already exists";
          break;
        case 'EMAIL_NOT_FOUND':
          errorMessage = "Email doesn't exists";
          break;
        case 'INVALID_LOGIN_CREDENTIALS':
          errorMessage = "invalid login credentials";
          break;
        default:
          errorMessage = "An unexpected error occurred";
      }
      return throwError(errorMessage);
    }
  }
}
