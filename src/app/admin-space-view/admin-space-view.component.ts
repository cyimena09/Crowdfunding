import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../services/project/project.service";
import {AuthService} from "../services/auth/auth.service";
import {CompanyService} from "../services/company/company.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-space-view',
  templateUrl: './admin-space-view.component.html',
  styleUrls: ['./admin-space-view.component.scss']
})
export class AdminSpaceViewComponent implements OnInit {
  currentUser
  company: any = []
  projects;
  yourProjects;

  constructor(private projectService: ProjectService, private authService: AuthService,
              private companyService: CompanyService, private router: Router) { }

  ngOnInit(): void {
    this.companyService.getUserCompany().subscribe(
      (data) => {this.company = data}
    );
    this.projects = this.projectService.projects;

    this.projectService.projectSubject.subscribe(
      (data) => {this.projects = data; console.log("ocucou", this.projects)}
    );
    this.authService.userSubject.subscribe(
      (data)=> {this.currentUser = data}
    );
    this.yourProjects = this.projectService.getProjectsByUser();
  }

  onNavigate(){
    this.router.navigate(['historic_transaction'])
  }

}
