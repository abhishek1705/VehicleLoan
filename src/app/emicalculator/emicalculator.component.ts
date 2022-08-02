import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-emicalculator',
  templateUrl: './emicalculator.component.html',
  styleUrls: ['./emicalculator.component.css']
})
export class EmicalculatorComponent implements OnInit {

  

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  amount:number=0;
  rate:number=0;
  time:number=0;
  emi:number=0;
  mir:number=0;
  top:number=0;
  bottom:number=0;
  sp:number=0;
  tip:number=0;
  tp:number=0;
 
  // calculatorForm=new FormGroup({
  //   amount:new FormControl('',[Validators.required]),
  //   rate:new FormControl('',[Validators.required]),
  //   time:new FormControl('',[Validators.required])
  // })
  
  emiCalculator(){
    this.mir=(this.rate/100)/12;
    this.top=Math.pow((1+this.mir),this.time);
    this.bottom=this.top-1;
    this.sp=this.top/this.bottom;
    this.emi=((this.amount * this.mir) * this.sp);
    this.tip=this.emi*this.time;
    this.tp=this.tip-this.amount;

  }

}

  