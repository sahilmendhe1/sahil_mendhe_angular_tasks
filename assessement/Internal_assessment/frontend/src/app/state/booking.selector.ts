import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BookingState } from './booking.reducer';
import { AppState } from '.';

const selectBookingState = createFeatureSelector<AppState, BookingState>('booking');

export const selectBookings = createSelector(
    selectBookingState,
    (state: BookingState) => state.bookings
)