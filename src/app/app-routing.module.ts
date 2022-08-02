import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { EmicalculatorComponent } from './emicalculator/emicalculator.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { EligibilityComponent } from './eligibility/eligibility.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ApplicationDetailedComponent } from './application-detailed/application-detailed.component';
import { ViewAllUsersComponent } from './view-all-users/view-all-users.component';
import { ViewApplicantsComponent } from './view-applicants/view-applicants.component';
import { ViewClientsComponent } from './view-clients/view-clients.component';
import { ViewRejectedComponent } from './view-rejected/view-rejected.component';
import { AddempComponent } from './addemp/addemp.component';
import { AddvehComponent } from './addveh/addveh.component';
import { AddldComponent } from './addld/addld.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { LoanSuccessComponent } from './loan-success/loan-success.component';
import { LoanStatusCheckComponent } from './loan-status-check/loan-status-check.component';


const routes: Routes = [
  {path:'add',component:RegistrationComponent},
  {path:'home',component:HomepageComponent},
  {path:'emicalc',component:EmicalculatorComponent},
  {path:'login',component:LoginpageComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'userlogin',component:UserloginComponent},
  {path:'eligibility',component:EligibilityComponent},
  {path:'admindashboard',component:AdminDashboardComponent},
  {path:'applicationdetailed/:id',component:ApplicationDetailedComponent},
  {path:'allusers',component:ViewAllUsersComponent},
  {path:'viewapplicants',component:ViewApplicantsComponent},
  {path:'viewclients',component:ViewClientsComponent},
  {path:'viewrejected',component:ViewRejectedComponent,},
  {path:'addemp',component:AddempComponent},
  {path:'addvehicle',component:AddvehComponent},
  {path:'addloan',component:AddldComponent},
  {path:'userdashboard/:id',component:UserDashboardComponent},
  {path:'loansuccess',component:LoanSuccessComponent},
  {path:'loanstatus/:id',component:LoanStatusCheckComponent}




  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
