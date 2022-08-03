import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from '../form.service';
import { ILD } from '../ild';

@Component({
  selector: 'app-addld',
  templateUrl: './addld.component.html',
  styleUrls: ['./addld.component.css']
})
export class AddldComponent implements OnInit {
  LDdata: ILD={ loanamount:0,
    loantenure:0,
    loaninterestRate:0,statusid:1,customerID:0};


  constructor(private formservice:FormService,private router : Router) { }

  registerloan()
  {
    if(this.LDdata.loantenure==6)
    {
      this.LDdata.loaninterestRate=7;
    }
    else if(this.LDdata.loantenure==12)
    {
      this.LDdata.loaninterestRate=7;
    }
    else if(this.LDdata.loantenure==24)
    {
      this.LDdata.loaninterestRate=8;
    }
    else if(this.LDdata.loantenure==36)
    {
      this.LDdata.loaninterestRate=8;
    }
    else if(this.LDdata.loantenure==48)
    {
      this.LDdata.loaninterestRate=9;
    }
    else if(this.LDdata.loantenure==60)
    {
      this.LDdata.loaninterestRate=9;
    }
    else if(this.LDdata.loantenure==72)
    {
      this.LDdata.loaninterestRate=10;
    }
    else if(this.LDdata.loantenure==84)
    {
      this.LDdata.loaninterestRate=10;
    }
    
  }  

saveILD(ld:ILD)//capturing the data from the save button
{
  this.LDdata=ld;
  this.formservice.addLD(this.LDdata).subscribe(()=>{alert("Record saved successfully")
  this.router.navigate(['/documents'])
  
  })
}


  ngOnInit(): void {
  }

}
