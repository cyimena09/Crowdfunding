import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import * as jwt_decode from 'jwt-decode';
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser
  userSubject = new BehaviorSubject(null)

  logURL = 'https://localhost:44370/api/auth/login';

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  login(logger){
    this.httpClient.post(this.logURL, logger, {responseType: 'text'}).subscribe(
      (tokenString) => {
        localStorage.setItem('token', tokenString);
        console.log(jwt_decode(tokenString)); this.userSubject.next(jwt_decode(tokenString)); this.getCurrentUser();
        this.router.navigate(['/home']);
      },
      (error) => {console.log("Il y a eu une erreur", error)}
    );

  }

  logout(){
    localStorage.removeItem('id_token');
    this.userSubject.next(null)
  }

  getCurrentUser(){
    this.userSubject.subscribe(
      (data) => {this.currentUser = data}
    )
  }
}
