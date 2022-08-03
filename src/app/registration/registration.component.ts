import { Component, OnInit } from '@angular/core';
import { Iregistration } from '../iregistration';
import { RegistrationService } from '../registration.service';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

applicantdata:Iregistration = {firstname:'',lastname:'',age:0,gender:'',contactno:0,emailid:'',address:'',
state:'',city:'',pincode:0,userid:'',password:''}

showPassword:boolean=false

constructor(private applicant:RegistrationService,private router:Router){ }


showHidePassword(){
  this.showPassword = !this.showPassword;
}

saveDetails(register:Iregistration){
  this.applicantdata = register;
  this.applicant.addApplicant(this.applicantdata).subscribe(()=>{
    alert("Registration Successful Please Login from Home")
    this.router.navigate(['/home'])

    sessionStorage.setItem('fname',this.applicantdata.firstname)
    sessionStorage.setItem('lname',this.applicantdata.lastname)
    sessionStorage.setItem('age',String(this.applicantdata.age))
    sessionStorage.setItem('gender',this.applicantdata.gender)
    sessionStorage.setItem('contact',String(this.applicantdata.contactno))
    sessionStorage.setItem('email',this.applicantdata.emailid)
    sessionStorage.setItem('address',this.applicantdata.address)
    sessionStorage.setItem('state',this.applicantdata.state)
    sessionStorage.setItem('city',this.applicantdata.city)
    sessionStorage.setItem('pincode',String(this.applicantdata.pincode))
    sessionStorage.setItem('userid',this.applicantdata.userid)
    sessionStorage.setItem('password',this.applicantdata.password)
    
  })
}


















  ngOnInit(): void {
    
    

  }

}
