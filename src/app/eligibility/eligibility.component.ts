import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eligibility',
  templateUrl: './eligibility.component.html',
  styleUrls: ['./eligibility.component.css']
})
export class EligibilityComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
  elig: boolean=false;
  stat:string=''
  onroadprice:number=0 
  monthlysavings:number =0
  existingemi:number =0
  loantenure:number =0
  newemi:number = this.onroadprice/this.loantenure;
  age:number=0
  

  checkeligiblity(){
    if (((this.onroadprice/this.loantenure)+this.existingemi)<=this.monthlysavings && this.age>=21)
    {
      if(this.elig==false)
      {
        this.stat="User Is Eligible!";
        alert(this.stat);
      }
    }
    else
    {
      this.stat="Sorry, You Are Not Eligible!";
      alert(this.stat);
      window.location.reload();
    }
  }

  

 

}
