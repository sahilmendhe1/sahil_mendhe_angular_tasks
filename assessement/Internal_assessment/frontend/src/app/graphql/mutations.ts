import { gql } from "apollo-angular";

export const ADD_BOOKING = gql`
mutation addBooking($input:BookingInputData!) {
    addBooking(bookingInput: $input) {
        _id
        movieName
        noOfTickets
        date
    }
}
`;

export const UPDATE_BOOKING = gql`
mutation updateBooking($input:BookingInputData!) {
    updateBooking(bookingInput: $input) {
        _id
        movieName
        noOfTickets
        date
    }
}
`;

export const REMOVE_BOOKING = gql`
mutation deleteBooking($id: ID!) {
    deleteBooking(_id: $id) {
        _id
        movieName
        noOfTickets
        date
    }
}
`