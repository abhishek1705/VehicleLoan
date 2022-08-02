import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-view-clients',
  templateUrl: './view-clients.component.html',
  styleUrls: ['./view-clients.component.css']
})
export class ViewClientsComponent implements OnInit {

  clientslist: any[] = []
  p: number = 1;
  key: string = 'id';
  reverse: boolean = false;

  constructor(private adminservice: AdminService) {
    this.adminservice.getClients().subscribe((data: any[]) => { this.clientslist = data })
  }

  sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  ngOnInit(): void {
  }

}
