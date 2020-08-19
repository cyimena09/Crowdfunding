import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../services/project/project.service";
import {AuthService} from "../services/auth/auth.service";
import {CompanyService} from "../services/company/company.service";
import {UserService} from "../services/user/user.service";

@Component({
  selector: 'app-user-space-view',
  templateUrl: './user-space-view.component.html',
  styleUrls: ['./user-space-view.component.scss']
})
export class UserSpaceViewComponent implements OnInit {

  currentUser;
  company: any = [];
  projects;
  update = false

  constructor(private projectService: ProjectService, private authService: AuthService,
              private companyService: CompanyService, private userService: UserService) { }

  ngOnInit(): void {
    this.companyService.getUserCompany().subscribe(
      (data) => {this.company = data}
    );

    this.authService.userSubject.subscribe(
      (data)=> {this.currentUser = data}
    );
    this.projects = this.projectService.getProjectsByUser();
    this.projectsByUserSubscription();
  }

   projectsByUserSubscription(){
     let table = [];
    let userID = Number(this.authService.currentUser.UserID);
    this.projectService.projectSubject.subscribe(
      (data: any) => {
        const nb = data.length;
        for(let i = 0; i< nb; i++){
          if(data[i].creatorID === userID) {
            table.push(data[i])
          }
        }
        this.projects = table
      });
    return table;
  }

  onRemoveAccount(){
    return this.userService.RemoveAccount(this.currentUser.UserID);
  }

  onRemoveProject(id){
    return this.projectService.RemoveProject(id)
  }

  onUpdateUser() {
    if (!this.update){
      this.update = true;
    }
    else if (this.update){
      //this.userService.updateUser(this.currentUser).subscribe();
      this.update = false;
    }
  }
}
