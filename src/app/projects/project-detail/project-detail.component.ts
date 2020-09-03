import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProjectService} from "../../services/project/project.service";
import {AuthService} from "../../services/auth/auth.service";


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
              private authService: AuthService) { }


  ngOnInit(): void {
   this.projectService.getProject(this.id).subscribe(
      (data) => {this.project = data}
    );

    this.authService.userSubject.subscribe(
      (data)=> {this.currentUser = data}
    );
  }
}
