import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BookingService } from 'src/app/service/booking.service';
import { addBooking } from 'src/app/state/booking.action';
@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.css']
})
export class AddBookingComponent {
  movieName: string = ''
  date: string = ''
  noOfTickets: any = '';
  _id: any = ''




  constructor(
    private store: Store,
    private bookingService: BookingService,
    private router: Router
  ) { };

  onSubmit(): void {
    console.log("sahil", this.movieName, this.date, this.noOfTickets);
    const reqBody = {
      movieName: this.movieName,
      date: this.date,
      noOfTickets: this.noOfTickets,
      _id: this._id

    };
    console.log("sahil", reqBody);


    this.bookingService.addBooking(reqBody).subscribe(
      (value) => {
        this.store.dispatch(addBooking({ booking: value }));
        this.router.navigateByUrl('/bookings');
      },
      (error) => {
        this.movieName = '';
        this.date = '';
        this.noOfTickets = '';
        this._id = '';
        console.log(error);
      }
    );
  }


}
