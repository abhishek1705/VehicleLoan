import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { OrderModule } from 'ngx-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { pipe } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all-users',
  templateUrl: './view-all-users.component.html',
  styleUrls: ['./view-all-users.component.css']
})
export class ViewAllUsersComponent implements OnInit {

  constructor(private adminservice:AdminService,private router:Router) {
    this.adminservice.getApplicantDetails().subscribe(data => { this.userlist = data })
  }

  userlist: any[] = [];
  p: number = 1;
  key: string = 'id';
  reverse: boolean = false;

 

  sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  ngOnInit(): void {
  }

}
