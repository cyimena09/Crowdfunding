import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";
import {AuthService} from "../auth/auth.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects: any = [];
  apiURL = 'https://localhost:44370/api/projects/';
  projectSubject = new Subject();

  constructor(private httpClient: HttpClient, private authService: AuthService, private router: Router) {
    this.getProjects();
  }


  getProjects(){
    return this.httpClient.get(this.apiURL).subscribe(
      (data) => {this.projects = data; this.projectSubject.next(this.projects);}
    );
  }

  getProjectsToValidate(){
    let table = [];
    const nb = this.projects.length
    for(let i = 0; i < nb; i++){
      if(this.projects[i].validation !== 1){
          table.push(this.projects[i])
        }
      }
    return table;
  }

  getProject(id){
    return this.httpClient.get(this.apiURL + id);
  }

  getProjectsByUser(){
    let table = [];
    let userID = Number(this.authService.currentUser.UserID);
    const nb = this.projects.length;
    for(let i = 0; i< nb; i++){
      if(this.projects[i].creatorID === userID) {
        table.push(this.projects[i])
      }
    }
    return table;
  }

  addProject(newProject){
    return this.httpClient.post(this.apiURL, newProject).subscribe(
      (data) => {
        this.projects.push(newProject); this.projectSubject.next(this.projects);
        if(Number(this.authService.currentUser.Role) === 1){
          this.router.navigate(['/admin_space'])
        }
        else {
          this.router.navigate(['/user_space'])
        }
        },
      (error) => {console.log(error)}
    );
  }
}
