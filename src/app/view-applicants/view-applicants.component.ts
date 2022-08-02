import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-view-applicants',
  templateUrl: './view-applicants.component.html',
  styleUrls: ['./view-applicants.component.css']
})
export class ViewApplicantsComponent implements OnInit {

  applicantslist: any[] = [];
  loanId:number = 0;
  p: number = 1;
  key: string = 'id';
  reverse: boolean = false;

  constructor(private adminservice: AdminService, private router:Router) {
    this.adminservice.getApplicants().subscribe(data => { this.applicantslist = data })
  }

  approveLoan(loanId:number)
  {
    this.loanId=loanId;
    console.log(loanId);
    this.adminservice.approveLoan(loanId).subscribe(data => { this.loanId = data; });
    window.location.reload();
  }

  rejectLoan(loanId:number)
  {
    this.loanId=loanId;
    console.log(loanId);
    this.adminservice.rejectLoan(loanId).subscribe(data => { this.loanId= data; });
    window.location.reload();
  }

  sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }


  ngOnInit(): void {
  }

}
