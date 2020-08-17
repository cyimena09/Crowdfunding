import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth/auth.service";

@Component({
  selector: 'app-nav-view',
  templateUrl: './nav-view.component.html',
  styleUrls: ['./nav-view.component.scss']
})
export class NavViewComponent implements OnInit {

  currentUser

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

    this.authService.userSubject.subscribe(
      (data)=> {this.currentUser = data}
    );
  }

  onLogout(){
    return this.authService.logout();
  }

}
