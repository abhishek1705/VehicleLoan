import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  userlist: any[] = [];
  applicantslist: any[] = [];
  clientslist: any[] = []
  rejectslist: any[] = []

  constructor(private adminservice:AdminService,private router:Router) {
    this.adminservice.getApplicantDetails().subscribe(data => { this.userlist = data })
    this.adminservice.getApplicants().subscribe(data => { this.applicantslist = data })
    this.adminservice.getClients().subscribe(data => { this.clientslist = data })
    this.adminservice.getRejectedList().subscribe(data => { this.rejectslist = data })
   }



   adminlogout(){
    sessionStorage.removeItem('adminid')
    sessionStorage.removeItem('adminpassword')
    
    alert("You have Successfully Logged Out")
    this.router.navigate(['/home'])
  }

  ngOnInit(): void {
    
  }

}
