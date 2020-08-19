import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user/user.service";
import {ProjectService} from "../services/project/project.service";
import {AuthService} from "../services/auth/auth.service";
import {CompanyService} from "../services/company/company.service";
import {UserProjectService} from "../services/user-project/user-project.service";
import {MessagerieService} from "../services/messagerie/messagerie.service";

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {

  currentUser;
  userCompany: any = [];
  projects: any = [];
  amounts:any = [];
  pourcent = []

  constructor(private userService: UserService,
              private projectService: ProjectService,
              private userProjectService: UserProjectService,
              private authService: AuthService,
              private companyService: CompanyService,
              private messageService: MessagerieService) { }


  ngOnInit(): void {
    this.authService.userSubject.subscribe(
      (data)=> {this.currentUser = data;}
    );
    this.getUserCompany();
    this.projectService.getProjects();
    this.projectService.projectSubject.subscribe(
      (data) => {this.projects = data; this.getAmount();}
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
      (data) => {this.amounts = data; this.getPourcent();}
    );
  }

  getPourcent(){
    let pc = 0
    let nbAmounts = this.amounts.length;
    let nbProject = this.projects.length;
    for(let i = 0; i< nbProject; i++){
      for (let j =0; j< nbAmounts; j++){
        if(this.projects[i].projectID === this.amounts[j].projectID){
          this.projects[i].amount = this.amounts[j].amount
          pc = (this.amounts[j].amount / this.projects[i].fundingMax) * 100
          //on converti à 1 décimal
          pc = Math.round(pc * 10) /10;
          this.projects[i].pourcent = pc
        }
      }
    }
  }

  onFuck(){
    return this.messageService.updateMessage(2,2,2)
  }

}
