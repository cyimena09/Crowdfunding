import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import * as jwt_decode from 'jwt-decode';
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser;
  tokenString = localStorage.getItem('token')
  userSubject;

  logURL = 'https://apicrowdfunding.emile404.be/api/auth/Login';

  constructor(private httpClient: HttpClient, private router: Router) {

    if (this.tokenString != null){
      this.userSubject =  new BehaviorSubject(jwt_decode(this.tokenString))
    }
    else {
      this.userSubject = new BehaviorSubject(null)
    }

    this.userSubject.subscribe(
      (data) => {this.currentUser = data}
    );
  }


  login(logger){
    this.httpClient.post(this.logURL, logger, {responseType: 'text'}).subscribe(
      (tokenString) => {
        localStorage.setItem('token', tokenString);
        console.log(jwt_decode(tokenString)); this.userSubject.next(jwt_decode(tokenString)); this.getCurrentUser();
        this.router.navigate(['/home']);
      },
      (error) => {error}
    );
  }

  logout(){
    localStorage.removeItem('token');
    this.userSubject.next(null);
    this.router.navigate(['/login']);
  }

  getCurrentUser(){
    this.userSubject.subscribe(
      (data) => {this.currentUser = data;
      }
    )
  }
}
