import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { HomeViewComponent } from './home-view/home-view.component';
import { NavViewComponent } from './nav-view/nav-view.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { RegisterViewComponent } from './register-view/register-view.component';
import { NotFoundViewComponent } from './not-found-view/not-found-view.component';
import { AdminSpaceViewComponent } from './admin-space-view/admin-space-view.component';
import { UserSpaceViewComponent } from './user-space-view/user-space-view.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddProjectViewComponent } from './add-project-view/add-project-view.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { TransactionHistoricComponent } from './transaction-historic/transaction-historic.component';
import { ProjectStatusComponent } from './projects/project-status/project-status.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    NavViewComponent,
    LoginViewComponent,
    RegisterViewComponent,
    NotFoundViewComponent,
    AdminSpaceViewComponent,
    AddProjectViewComponent,
    ProjectDetailComponent,
    UserSpaceViewComponent,
    TransactionHistoricComponent,
    ProjectStatusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: "fr-Fr" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
