import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  apiURL = 'https://apicrowdfunding.emile404.be/api/company/usercompany/';

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  getUserCompany(){
    const id = this.authService.currentUser.UserID
    return this.httpClient.get(this.apiURL + id);
  }
}
