import { createAction, props } from "@ngrx/store";
import { Booking } from "../service/Booking";

export const FETCH_BOOKINGS = '[Book Component] FETCH_BOOKINGS';
export const UPDATE_BOOKING = '[Book Component] UPDATE_BOOKING';
export const ADD_BOOKING = '[Book Component] ADD_BOOKING';
export const REMOVE_BOOKING = '[Book Component] REMOVE_BOOKING';

export const fetchBookings = createAction(FETCH_BOOKINGS, props<{ bookings: Booking[] }>());
export const addBooking = createAction(ADD_BOOKING, props<{ booking: Booking }>());

export const updateBooking = createAction(UPDATE_BOOKING,
    props<{ id: String; booking: Booking }>());

export const removeBooking = createAction(REMOVE_BOOKING, props<{ id: String }>());