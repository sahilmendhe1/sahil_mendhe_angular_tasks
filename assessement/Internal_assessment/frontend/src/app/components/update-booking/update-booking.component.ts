import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { of, switchMap } from 'rxjs';
import { Booking } from 'src/app/service/Booking';
import { BookingService } from 'src/app/service/booking.service';
import { fetchBookings, updateBooking } from 'src/app/state/booking.action';
import { selectBookings } from 'src/app/state/booking.selector';

@Component({
  selector: 'app-update-booking',
  templateUrl: './update-booking.component.html',
  styleUrls: ['./update-booking.component.css']
})
export class UpdateBookingComponent implements OnInit {
  movieName: string = ''
  date: string = ''
  noOfTickets: any = '';
  _id: any = ''
  bookings!: Booking;;


  constructor(
    private store: Store,
    private bookingService: BookingService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(
      (value) => (this._id = (value['bookingId'])),
      (error) => console.log(error)
    );
  };

  ngOnInit() {
    this.bookingService.getBooking(this._id).subscribe(
      (value) => {
        this.movieName = <string>value.movieName;
        this.noOfTickets = <number>value.noOfTickets;
        this.date = <string>value.date;
        this.bookings = value;
        console.log("data", value);
      },
      (error) => {
        console.log(error);
      }
    );

  }


  onSubmit(): void {
    console.log("sahil", this.movieName, this.date, this.noOfTickets);
    const reqBody: Booking = {
      movieName: this.movieName,
      date: this.date,
      noOfTickets: this.noOfTickets,
      _id: this._id

    };
    console.log("sahil", reqBody);

    this.bookingService.updateBooking(reqBody).subscribe(
      (value) => {
        this.store.dispatch(updateBooking({ id: this._id, booking: value }));
        this.router.navigateByUrl('/bookings');
      },
      (error) => {
        this.movieName = '';
        this.date = '';
        this.noOfTickets = '';
        console.log(error);
      }
    );
  }
}
