export interface Booking {
    _id: string;
    movieName: string;
    noOfTickets: Number;
    date: string;
}

export interface ListBookingGroup {
    data: { bookings: Booking[] };
}

export interface GetBookingGroup {
    data: { getBooking: Booking }
}

export interface AddBooking {
    data: { addBooking: Booking }
}

export interface UpdateBooking {
    data: { updateBooking: Booking }
}

export interface DeleteBooking {
    data: { deleteBooking: Booking }
}