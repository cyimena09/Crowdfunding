import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: any = [];
  usersSubject = new Subject();
  apiURL = 'https://localhost:44370/api/users';

  constructor(private httpClient: HttpClient) {
    this.getUsers();
  }

  getUsers(){
    return this.httpClient.get(this.apiURL).subscribe(
      (data) => {this.users = data; this.usersSubject.next(data)}
    );
  }

  registerUser(newUser){
    return this.httpClient.post(this.apiURL, newUser).subscribe(
      () => {this.users.push(newUser); this.usersSubject.next(this.users); }
    );
  }


}
