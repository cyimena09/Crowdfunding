import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProjectService} from "../../services/project/project.service";
import {NgForm} from "@angular/forms";
import {Userproject} from "../../models/userproject";
import {AuthService} from "../../services/auth/auth.service";
import {UserProjectService} from "../../services/user-project/user-project.service";

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  id = this.activatedRoute.snapshot.params['id'];
  currentUser;
  project: any = [];

  constructor(private activatedRoute: ActivatedRoute,
              private projectService: ProjectService,
              private authService: AuthService,
              private userProjectService: UserProjectService) { }

  ngOnInit(): void {
    this.projectService.getProject(this.id).subscribe(
      (data) => {this.project = data}
    );

    this.authService.userSubject.subscribe(
      (data)=> {this.currentUser = data}
    );
  }

  onFinanceProject(form: NgForm){
    const userID = Number(this.currentUser.UserID);
    const projectID = Number(this.id);
    const amount = Number(form.value['amount']);
    const date = new Date();
    const newUserProject = new Userproject();
    newUserProject.userID = userID;
    newUserProject.projectID = projectID;
    newUserProject.amount = amount;
    newUserProject.date = date;
    this.userProjectService.addUserProject(newUserProject)
  }

}
