import { Component, OnInit } from '@angular/core';
import {UserProjectService} from "../services/user-project/user-project.service";

@Component({
  selector: 'app-transaction-historic',
  templateUrl: './transaction-historic.component.html',
  styleUrls: ['./transaction-historic.component.scss']
})
export class TransactionHistoricComponent implements OnInit {

  usersProject;

  constructor(private userProjectService: UserProjectService) { }

  ngOnInit(): void {
    this.userProjectService.getUserProject().subscribe(
      (data: any) => {this.usersProject = data;}
    );
  }

}
