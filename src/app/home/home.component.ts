import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bookedRooms: number;
  availableRooms: number;
  totalRooms: number;

  constructor() {
    this.bookedRooms = 11;
    this.availableRooms = 4;
    this.totalRooms = this.availableRooms+this.bookedRooms;
   }

  ngOnInit(): void {
   
  }

  checkRoomAvailability(){
    this.bookedRooms = 8;
    this.availableRooms = 7;
    this.totalRooms = this.availableRooms + this.bookedRooms;
  }
}
