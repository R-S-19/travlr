import { Component, OnInit, Input} from '@angular/core';
import { Router } from "@angular/router"
import { Trip } from 'models/trip';
import { Authentication } from 'services/authentication';

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css']
})
export class TripCardComponent implements OnInit {
  
  @Input('trip') trip: any;

  constructor(
    private router: Router,
    private authenticationService: Authentication
  ) { }

  ngOnInit() {}

  public isLoggedIn() : boolean {
    return this.authenticationService.isLoggedIn();
  }
  
  private editTrip(trip: Trip): void {
    localStorage.removeItem("tripCode");
    localStorage.setItem("tripCode", trip.code);
    this.router.navigate(["edit-trip"]);
  }

}
