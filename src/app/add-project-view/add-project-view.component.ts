import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../services/project/project.service";
import {NgForm} from "@angular/forms";
import {Project} from "../models/project";
import {AuthService} from "../services/auth/auth.service";

@Component({
  selector: 'app-add-project-view',
  templateUrl: './add-project-view.component.html',
  styleUrls: ['./add-project-view.component.scss']
})
export class AddProjectViewComponent implements OnInit {


 constructor(private projectService: ProjectService, private authService: AuthService) { }

  ngOnInit(): void {
  }

   onAddProject(form: NgForm){
    const creatorID = Number(this.authService.currentUser.UserID);
    const name = form.value['name'];
    const description = form.value['description'];
    const presentationURL = form.value['presentationURL'];
    const fundingMax = form.value['fundingMax'];
    const accountNumber = form.value['accountNumber'];
    const validation = 0;
    const startDate = new Date();
    const endDate = form.value['endDate'];
    const newProject = new Project(creatorID, name, description, presentationURL, fundingMax, accountNumber, validation, startDate, endDate);
    this.projectService.addProject(newProject);
  }

}
