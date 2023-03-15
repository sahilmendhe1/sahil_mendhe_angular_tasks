import { Booking } from "../service/Booking";
import { createReducer, on } from "@ngrx/store";
import {
    addBooking,
    removeBooking,
    fetchBookings,
    updateBooking
} from "./booking.action";

export interface BookingState {
    bookings: Booking[];
}

const initialState: BookingState = {
    bookings: []
}

const _bookingReducer = createReducer(
    initialState,
    on(fetchBookings, (state, { bookings }) => {
        return ({
            ...state,
            bookings: bookings,
        });
    }),
    on(addBooking, (state, { booking }) => {
        return {
            ...state,
            bookings: [...state.bookings, booking],
        };
    }),
    on(updateBooking, (state, { id, booking }) => {
        return {
            ...state,
            bookings: state.bookings.map((t) => (t._id == id ? booking : t)),
        };
    }),
    on(removeBooking, (state, { id }) => {
        return {
            ...state,
            bookings: state.bookings.filter((t) => t._id != id),
        };
    })
);

export const bookingReducer = (state: any, action: any) => {
    return _bookingReducer(state, action);
}
