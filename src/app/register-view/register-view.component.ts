import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user/user.service";
import {NgForm} from "@angular/forms";
import {User} from "../models/user";

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  styleUrls: ['./register-view.component.scss']
})
export class RegisterViewComponent implements OnInit {

    constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

   onRegisterUser(form: NgForm){
    const firstName = form.value['firstName'];
    const lastName = form.value['lastName'];
    const birthDate = form.value['birthDate'];
    const email = form.value['email'];
    const password = form.value['password'];
    const newUser = new User(firstName, lastName, birthDate, email, password, 0, 1);
    this.userService.registerUser(newUser);
  }

}
