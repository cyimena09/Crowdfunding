import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeViewComponent} from "./home-view/home-view.component";
import {LoginViewComponent} from "./login-view/login-view.component";
import {RegisterViewComponent} from "./register-view/register-view.component";
import {NotFoundViewComponent} from "./not-found-view/not-found-view.component";
import {AdminSpaceViewComponent} from "./admin-space-view/admin-space-view.component";
import {AuthGuardService} from "./services/auth-guard/auth-guard.service";
import {AddProjectViewComponent} from "./add-project-view/add-project-view.component";
import {ProjectDetailComponent} from "./projects/project-detail/project-detail.component";
import {UserSpaceViewComponent} from "./user-space-view/user-space-view.component";
import {TransactionHistoricComponent} from "./transaction-historic/transaction-historic.component";


const routes: Routes = [
  {path: 'home', component: HomeViewComponent},
  {path: 'project_detail/:id', component: ProjectDetailComponent},
  {path: 'login', component: LoginViewComponent},
  {path: 'register', component: RegisterViewComponent},
  {path: 'add_project', canActivate: [AuthGuardService], component: AddProjectViewComponent},
  {path : 'user_space', canActivate: [AuthGuardService], component: UserSpaceViewComponent},
  {path: 'admin_space', canActivate: [AuthGuardService], component: AdminSpaceViewComponent},
  {path: 'historic_transaction', component: TransactionHistoricComponent},
  {path: 'not_found', component: NotFoundViewComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'not_found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
