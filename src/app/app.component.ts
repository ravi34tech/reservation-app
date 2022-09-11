import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reservation-app';

  constructor( private router: Router ) { }
  
  ngOnInit() {}

  routeToBookPage(){
    this.router.navigate(['/book']); 
  }

  routeToReservePage(){
    this.router.navigate(['/reserve']); 
  }
}
