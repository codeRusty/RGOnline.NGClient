import { Component, OnInit } from '@angular/core';
import { ClientAuthService } from '../../Services/client-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isUserLoggedIn: boolean;
  isSelected:string = 'home';
  constructor(public clientauth: ClientAuthService) { }

  ngOnInit() {
    this.isUserLoggedIn = this.clientauth.isUserLoggedIn()
  }

}
