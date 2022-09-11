import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookRoomComponent } from './book-room/book-room.component';
import { HomeComponent } from './home/home.component';
import { ReserveRoomComponent } from './reserve-room/reserve-room.component';

const  routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'book', component: BookRoomComponent },
  { path: 'reserve', component: ReserveRoomComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
    
 }
