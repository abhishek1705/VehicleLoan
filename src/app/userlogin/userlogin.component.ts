import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { Iregistration } from '../iregistration';
import { Router } from '@angular/router';
import { Iuserlogin } from '../iuserlogin';
import { MatIcon } from '@angular/material/icon';


@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {


userlogin:Iuserlogin = {userid:'',password:''}


constructor(private user:RegistrationService,private router:Router) { }
  

login(user:Iuserlogin){
  this.userlogin = user;
  this.user.userLogin(this.userlogin).subscribe(()=>
  {alert("Correct Credentials")
  this.router.navigate(['/userdashboard/',this.userlogin.userid])

  sessionStorage.setItem('userid',this.userlogin.userid);
  sessionStorage.setItem('password',this.userlogin.password)
  
})
}




ngOnInit(): void {
  this.userlogin.userid=String(sessionStorage.getItem('userid'));
}
 
  

  

}
