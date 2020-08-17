import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user/user.service";
import {ProjectService} from "../services/project/project.service";
import {AuthService} from "../services/auth/auth.service";
import {CompanyService} from "../services/company/company.service";
import {UserProjectService} from "../services/user-project/user-project.service";

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {

  currentUser;
  userCompany: any = [];
  projects;
  amounts;
  pourcent = []

  constructor(private userService: UserService,
              private projectService: ProjectService, private userProjectService: UserProjectService,
              private authService: AuthService, private companyService: CompanyService) { }


  ngOnInit(): void {
    this.authService.userSubject.subscribe(
      (data)=> {this.currentUser = data;}
    );
    this.getUserCompany()


    this.projectService.getProjects();
    this.projectService.projectSubject.subscribe(
      (data) => {this.projects = data;this.getAmount();}
    );

  }

  getUserCompany(){
    if(this.currentUser !== null){
      this.companyService.getUserCompany().subscribe(
      (data) => {this.userCompany = data;}
      );
    }
  }

  getAmount(){
    return this.userProjectService.getAmount().subscribe(
      (data) => {this.amounts = data; this.pourcent = this.getPourcent(); }
    );
  }

  getPourcent(){
    let table = []
    let pc = 0
    const nb = this.projects.length;
    for(let i = 0; i< nb; i++){
      for (let j =0; j< nb; j++){
        if(this.projects[i].projectID === this.amounts[j].projectID){
          pc = (this.amounts[j].amount / this.projects[i].fundingMax) * 100
          //on converti à 1 décimal
          pc = Math.round(pc * 10) /10
          table.push(pc)
        }
      }
    }
    return table;
  }


}
