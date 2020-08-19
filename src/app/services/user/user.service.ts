import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: any = [];
  usersSubject = new Subject();
  apiURL = 'https://localhost:44370/api/users/';

  constructor(private httpClient: HttpClient, private router: Router) {
    this.getUsers();
  }

  getUsers(){
    return this.httpClient.get(this.apiURL).subscribe(
      (data) => {this.users = data; this.usersSubject.next(data)}
    );
  }

  updateUser(user){
    return this.httpClient.put(this.apiURL, user)
  }

  createUser(newUser){
    return this.httpClient.post(this.apiURL, newUser).subscribe(
      () => {this.users.push(newUser); this.usersSubject.next(this.users); }
    );
  }

  RemoveAccount(userid){
    return this.httpClient.delete(this.apiURL + userid).subscribe(
      () => {this.router.navigate(['/home'])}
    );
  }


}
