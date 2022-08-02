import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IApplicationDetailed } from '../iapplication-detailed';
import { UserService } from '../user.service';

@Component({
  selector: 'app-loan-status-check',
  templateUrl: './loan-status-check.component.html',
  styleUrls: ['./loan-status-check.component.css']
})
export class LoanStatusCheckComponent implements OnInit {

  applicationdata: IApplicationDetailed = {firstName:"", lastName: "", age: 0, gender: "", contactNo: 0, emailId: "", address: "",
   state: "", city: "", pincode: 0, userId: "", customerId: 0, typeOfEmployement: "", yearlySalary: 0, existingEmi: 0, loanId: 0,
  loanAmount: 0, loanTenure: 0, loanInterestRate: 0, accountType: "", processingFee: 0, vehicleId: 0, carMake: "", carModel: "",
   exshowroomPrice: 0, onroadPrice: 0, statusId: 0 }

   id:number=0;

  constructor(private userservice:UserService ,private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    const tid = this.activatedroute.snapshot.paramMap.get('id');
    this.id = Number(tid);
    this.userservice.getApplicationDetailed(this.id).subscribe((data:IApplicationDetailed) => {this.applicationdata = data});
  }
}
