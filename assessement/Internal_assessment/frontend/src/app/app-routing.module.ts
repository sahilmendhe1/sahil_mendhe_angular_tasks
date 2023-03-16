import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookingComponent } from './components/add-booking/add-booking.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { UpdateBookingComponent } from './components/update-booking/update-booking.component';
const routes: Routes = [
  {
    path: 'addbooking', component: AddBookingComponent,
  },
  {
    path: 'bookings', component: BookingsComponent,
  },
  {
    path: 'update-booking', component: UpdateBookingComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
