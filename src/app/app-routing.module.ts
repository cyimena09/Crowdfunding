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
import {MessagerieComponent} from "./messagerie/messagerie.component";
import {TestComponent} from "./test/test.component";
import {ProjectPayementComponent} from "./projects/project-payement/project-payement.component";


const routes: Routes = [
  {path: 'home', component: HomeViewComponent},
  {path: 'project-detail/:id', component: ProjectDetailComponent},
  {path: 'project-payement/:id', canActivate: [AuthGuardService], component: ProjectPayementComponent},
  {path: 'login', component: LoginViewComponent},
  {path: 'register', component: RegisterViewComponent},
  {path: 'add_project', canActivate: [AuthGuardService], component: AddProjectViewComponent},
  {path: 'user_space', canActivate: [AuthGuardService], component: UserSpaceViewComponent},
  {path: 'admin_space', canActivate: [AuthGuardService], component: AdminSpaceViewComponent},
  {path: 'messagerie', canActivate: [AuthGuardService], component: MessagerieComponent},
  {path: 'historic_transaction', canActivate: [AuthGuardService], component: TransactionHistoricComponent},
  {path: 'test', component: TestComponent},
  {path: 'not_found', component: NotFoundViewComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'not_found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
