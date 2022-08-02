import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from '../form.service';
import { IEmp } from '../iemp';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {

Empdata:IEmp={customerID:0,typeofemployement:'',yearlysalary:0,existingemi:0}

    
constructor(private formservice:FormService,private router : Router) { }
saveEmp(emp:IEmp)//capturing the data from the save button
{
  this.Empdata=emp;
  this.formservice.addEmp(this.Empdata).subscribe(()=>
  {alert("Record saved successfully, you will be navigated to add vehicle form")
  this.router.navigate(['/addvehicle'])

  sessionStorage.setItem('customerId',String(this.Empdata.customerID))
})
}



  ngOnInit(): void {
    
   
  }

}
