import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { of, switchMap } from 'rxjs';
import { Booking } from 'src/app/service/Booking';
import { BookingService } from 'src/app/service/booking.service';
import { fetchBookings, removeBooking, REMOVE_BOOKING } from 'src/app/state/booking.action';
import { selectBookings } from 'src/app/state/booking.selector';
import { AppState } from 'src/app/state';
import { DeleteBooking } from 'src/app/service/Booking';


@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})


export class BookingsComponent implements OnInit {

  loading: boolean = true;
  bookings: Booking[] = [];

  constructor(private bookingService: BookingService,
    private store: Store<AppState>,
    private router: Router) { }

  ngOnInit() {
    this.bookingService.listBookings().subscribe(
      (data) => {
        this.store.dispatch(fetchBookings({ bookings: data }));
        this.store
          .select(selectBookings)
          .pipe(
            switchMap((bookings) => {
              if (bookings) {
                return of(bookings);
              } else {
                return this.store.select(selectBookings);
              }
            })
          )
          .subscribe((value) => {
            this.bookings = value;
            console.log(this.bookings);
          });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onUpdateBooking(_id: string) {
    this.router.navigateByUrl(`/update-booking/${_id}`);
  }

  onDeleteBooking(_id: string) {
    this.loading = true;
    this.bookingService.deleteBooking(_id).subscribe(
      () => {
        this.store.dispatch(removeBooking({ id: _id }));
        this.store
          .select(selectBookings)
          .pipe(
            switchMap((bookings) => {
              if (bookings) {
                return of(bookings);
              } else {
                return this.store.select(selectBookings);
              }
            })
          )
          .subscribe((value) => {
            this.bookings = value;
            this.loading = false;
          });
      },
      (error) => {
        console.log(error);
        this.loading = false;
      }
    );
  }

}

