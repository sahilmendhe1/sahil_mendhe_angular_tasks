import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Booking } from './Booking';
import { Apollo } from 'apollo-angular';
import { GET_BOOKING, LIST_BOOKINGS } from '../graphql/queries';
import { ADD_BOOKING, REMOVE_BOOKING, UPDATE_BOOKING } from '../graphql/mutations';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private apollo: Apollo) { }

  listBookings(): Observable<Booking[]> {
    return this.apollo.query({ query: LIST_BOOKINGS }).pipe(
      map((result: any) => {
        return result.data.bookings.bookings;
      })
    )
  }
  getBooking(_id: string): Observable<Booking> {
    return this.apollo
      .query({
        query: GET_BOOKING,
        variables: {
          id: _id,
        },
      })
      .pipe(
        map((result: any) => {
          console.log("data", result);
          return result.data.getBooking;
        })
      );

  }

  addBooking(reqBody: Booking): Observable<Booking> {
    console.log("5gf5ds55yjkjhhgfdatyu", reqBody);
    return this.apollo
      .mutate({
        mutation: ADD_BOOKING,
        refetchQueries: [{ query: LIST_BOOKINGS }],
        variables: {
          input: reqBody,
        },
      })
      .pipe(
        map((result: any) => {
          console.log(result.data.addBooking);
          return result.data.addBooking;
        })
      );
  }

  updateBooking(reqBody: Booking): Observable<Booking> {
    return this.apollo
      .mutate({
        mutation: UPDATE_BOOKING,
        refetchQueries: [{ query: LIST_BOOKINGS }],
        variables: {
          input: reqBody,
        },
      })
      .pipe(
        map((result: any) => {
          console.log(result.data.updateBooking);
          return result.data.updateBooking;
        })
      );
  }

  deleteBooking(_id: string): Observable<Booking> {
    return this.apollo
      .mutate({
        mutation: REMOVE_BOOKING,
        refetchQueries: [{ query: LIST_BOOKINGS }],
        variables: {
          id: _id,
        },
      })
      .pipe(
        map((result: any) => {
          return result.data.deleteBooking;
        })
      );
  }

}




