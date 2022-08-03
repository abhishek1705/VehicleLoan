import { Component, OnInit } from '@angular/core';
import { Iloanscheme } from '../iloanscheme';
import { FormService } from '../form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loanscheme',
  templateUrl: './loanscheme.component.html',
  styleUrls: ['./loanscheme.component.css']
})
export class LoanschemeComponent implements OnInit {

  

  loanscheme:Iloanscheme={schemename:'Monsoon Madness Offer',maxloanamount:100000000,interestrate:8,emi:50000,processingfee:2000,accounttype:'',customerid:0}

  constructor(private formservice:FormService,private router:Router) { }

  addloan(scheme:Iloanscheme){
    this.loanscheme=scheme;
    this.formservice.AddLoanScheme(this.loanscheme).subscribe(()=>{alert("Record Added Successfully")})
    this.router.navigate(['addemp'])
    sessionStorage.setItem('customerId',String(this.loanscheme.customerid))
  }

  


  ngOnInit(): void {
  }

}
