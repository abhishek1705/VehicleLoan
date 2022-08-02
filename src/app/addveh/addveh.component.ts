import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from '../form.service';
import { IVeh } from '../iveh';

@Component({
  selector: 'app-addveh',
  templateUrl: './addveh.component.html',
  styleUrls: ['./addveh.component.css']
})
export class AddvehComponent implements OnInit {

  Vehdata:IVeh={customerID:0,
    carmake:'',
    carmodel:'',
    exShowroomPrice:0,
    onRoadPrice:0}
  
    constructor(private formservice:FormService,private router : Router) { }
  
    saveVeh(veh:IVeh)//capturing the data from the save button
  {
    this.Vehdata=veh;
    this.formservice.AddVehicle(this.Vehdata).subscribe(()=>{alert("Record saved successfully")
    this.router.navigate(['/addloan'])
    sessionStorage.setItem('customerId',String(this.Vehdata.customerID))  
  })
  }

  ngOnInit(): void {
  }

}
