import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  loggedinUser: string | undefined;
  constructor(private alertify: AlertifyService) { }

  ngOnInit() {
  }

  loggedin() {
    const token = localStorage.getItem('token');
  if (token) {
    this.loggedinUser = JSON.parse(token);
  }
  return token;
  }

  onLogout() {
    this.alertify.success('Successfully logged out')
    localStorage.removeItem('token');
  }
}
