import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserProjectService {


  apiURL = 'https://apicrowdfunding.emile404.be/api/usersprojects';

  constructor(private httpClient: HttpClient) {
    this.getUserProject();
  }

  getUserProject(){
    return this.httpClient.get(this.apiURL)
  }

  getAmount(){
    return this.httpClient.get(this.apiURL + '/amount')
  }

  addUserProject(newUserProject){
    return this.httpClient.post(this.apiURL, newUserProject).subscribe();
  }

}
