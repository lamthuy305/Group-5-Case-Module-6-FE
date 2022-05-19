import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  currentUser: any = {};


  constructor() {
  }

  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.currentUser = localStorage.getItem('currentUser');
    this.currentUser = JSON.parse(this.currentUser);
  }
}
