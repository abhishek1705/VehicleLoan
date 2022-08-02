import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  userdata:any = []
  id:any

  constructor(private userService: UserService,private activatedroute:ActivatedRoute,private router:Router) {
    const tid = this.activatedroute.snapshot.paramMap.get('id');
    this.id = String(tid);
    this.userService.getUser(this.id).subscribe(data => {this.userdata = data;console.log(data)
    
    
    
    });
   }

   applyLoanValidation(cid:number)
  {
    this.id=cid;
    // console.log(cid);
    this.userService.getApplyLoanValidation(this.id).subscribe(data => {
      if (data == 1) {
      this.router.navigate(['/loanscheme/'])
    }
    else if(data == 0) {
      alert("Loan already applied!");
    }});
  }
  applicationStatusValidation(cid:number)
  {
    this.id=cid;
    // console.log(cid);
    this.userService.getApplyLoanValidation(this.id).subscribe(data => {
      if (data == 0) {
        this.router.navigate(['/loanstatus/', this.userdata.cId])
    }
    else if(data == 1) {
      alert("No Loan has been Applied!");
    }});
  }


  logout(){
    sessionStorage.removeItem('userid')
    this.router.navigate(['/home'])
  }

  ngOnInit(): void {

    this.userdata = sessionStorage.setItem('userdata',this.userdata);
    this.userdata = sessionStorage.setItem('id',this.id)
    this.id=String(sessionStorage.getItem('customerid'));
  }

}
