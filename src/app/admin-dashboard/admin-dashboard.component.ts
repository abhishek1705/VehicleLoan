import { Component, OnInit } from '@angular/core';
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

  constructor(private adminservice:AdminService) {
    this.adminservice.getApplicantDetails().subscribe(data => { this.userlist = data })
    this.adminservice.getApplicants().subscribe(data => { this.applicantslist = data })
    this.adminservice.getClients().subscribe(data => { this.clientslist = data })
    this.adminservice.getRejectedList().subscribe(data => { this.rejectslist = data })
   }

  ngOnInit(): void {
  }

}
