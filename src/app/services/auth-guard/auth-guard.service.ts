import { Injectable } from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  currentUser;
  constructor(private authService: AuthService, private router: Router) {

    this.authService.userSubject.subscribe(
      (data)=> {this.currentUser = data}
    );
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
     boolean  {
    if(this.currentUser !== null){
      return true;
    }
    else this.router.navigate(['/login'])
  }


}
