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

  updateProject(id, project){
    return this.httpClient.put(this.apiURL + id, project).subscribe(
      () => { console.log(project)}
    )
  }

  RemoveProject(projectid){
    return this.httpClient.delete(this.apiURL + projectid).subscribe(
      (data) => {this.projects.delete(projectid)} // ligne fausse chercher l'index
    );
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
      () => {
        this.getProjects();
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
