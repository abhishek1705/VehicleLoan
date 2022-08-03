import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Idocuments } from '../idocuments';
import { UserService } from '../user.service';

@Component({
  selector: 'app-documentsupload',
  templateUrl: './documentsupload.component.html',
  styleUrls: ['./documentsupload.component.css']
})
export class DocumentsuploadComponent implements OnInit {

  documents:Idocuments={
    Adharcard: 0,
    Pancard: 0,
    Photo: 0,
    Salaryslip: 0,
    CustomerId: 0
  }

  documents1:Idocuments={
    Adharcard: 1,
    Pancard: 1,
    Photo: 1,
    Salaryslip: 1,
    CustomerId: 1
  }

  constructor(private userservice:UserService,private router:Router) { }

  saveDocuments(docs:Idocuments){
    this.documents = this.documents1;
    this.documents.CustomerId = docs.CustomerId;
    this.userservice.addDocuments(this.documents).subscribe(()=>{
      alert("Documents Added Successfully")
      this.router.navigate(['/loansuccess'])
    })
  }

  ngOnInit(): void {
  }

}
