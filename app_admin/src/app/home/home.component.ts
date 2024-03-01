import { Component, OnInit } from '@angular/core';
import { Authentication } from 'services/authentication'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private authenticationService: Authentication
  ) { }

  ngOnInit() {
  }

  public isLoggedIn() : boolean {
    return this.authenticationService.isLoggedIn();
  }
}