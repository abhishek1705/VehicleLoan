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

constructor(private applicant:RegistrationService,private router:Router){ }

saveDetails(register:Iregistration){
  this.applicantdata = register;
  this.applicant.addApplicant(this.applicantdata).subscribe(()=>{
    alert("Record added")
    this.router.navigate(['/home'])
  })
}

















  ngOnInit(): void {
  }

}
