import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-view-rejected',
  templateUrl: './view-rejected.component.html',
  styleUrls: ['./view-rejected.component.css']
})
export class ViewRejectedComponent implements OnInit {

  rejectslist: any[] = []
  p: number = 1;
  key: string = 'id';
  reverse: boolean = false;

  constructor(private adminservice:AdminService) {
    this.adminservice.getRejectedList().subscribe(data => { this.rejectslist = data })
  }

  sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }


  ngOnInit(): void {
  }

}
