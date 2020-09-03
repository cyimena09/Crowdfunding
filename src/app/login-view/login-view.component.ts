import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Login} from "../models/login";
import {AuthService} from "../services/auth/auth.service";
import * as CryptoJS from 'crypto-js';

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
    const email = form.value['email'];
    const password = form.value['password'];
    const logger = new Login();
    logger.email= email;
    logger.password = password;
    this.authService.login(logger);
  }

}
