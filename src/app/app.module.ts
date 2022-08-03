import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { EmicalculatorComponent } from './emicalculator/emicalculator.component';
import { NgClass } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { EligibilityComponent } from './eligibility/eligibility.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ApplicationDetailedComponent } from './application-detailed/application-detailed.component';
import { ViewAllUsersComponent } from './view-all-users/view-all-users.component';
import { ViewApplicantsComponent } from './view-applicants/view-applicants.component';
import { ViewClientsComponent } from './view-clients/view-clients.component';
import { ViewRejectedComponent } from './view-rejected/view-rejected.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import { pipe } from 'rxjs';
import { AddempComponent } from './addemp/addemp.component';
import { AddldComponent } from './addld/addld.component';
import { AddvehComponent } from './addveh/addveh.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { LoanSuccessComponent } from './loan-success/loan-success.component';
import { LoanStatusCheckComponent } from './loan-status-check/loan-status-check.component';
import { LoanschemeComponent } from './loanscheme/loanscheme.component';
import { DocumentsuploadComponent } from './documentsupload/documentsupload.component';




@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    EmicalculatorComponent,
    HomepageComponent,
    LoginpageComponent,
    UserloginComponent,
    AdminloginComponent,
    EligibilityComponent,
    AdminDashboardComponent,
    ApplicationDetailedComponent,
    ViewAllUsersComponent,
    ViewApplicantsComponent,
    ViewClientsComponent,
    ViewRejectedComponent,
    AddempComponent,
    AddldComponent,
    AddvehComponent,
    UserDashboardComponent,
    LoanSuccessComponent,
    LoanStatusCheckComponent,
    LoanschemeComponent,
    DocumentsuploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    NgxPaginationModule,
    OrderModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
