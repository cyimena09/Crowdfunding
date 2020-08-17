import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Login} from "../models/login";
import {AuthService} from "../services/auth/auth.service";

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss']
})
export class LoginViewComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onLogin(form: NgForm){
    const firstName = form.value['firstName'];
    const lastName = form.value['lastName'];
    const logger = new Login();
    logger.firstName = firstName;
    logger.lastName = lastName;
    this.authService.login(logger)
    }

}
