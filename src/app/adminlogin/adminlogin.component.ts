import { Component, OnInit } from '@angular/core';
import { Iadmin } from '../iadmin';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {


  adminlogin:Iadmin={adminid:0,adminpassword:''}

  constructor(private admin:RegistrationService,private router:Router) { }


  loginadmin(admin:Iadmin){
    this.adminlogin = admin;
    this.admin.userAdmin(this.adminlogin).subscribe(()=>
    {alert("Correct Credentials")
    this.router.navigate(['/admindashboard'])
    

    sessionStorage.setItem('userid',String(this.adminlogin.adminid));
    sessionStorage.setItem('password',this.adminlogin.adminpassword)


  })

  }

  ngOnInit(): void {
  }

}
