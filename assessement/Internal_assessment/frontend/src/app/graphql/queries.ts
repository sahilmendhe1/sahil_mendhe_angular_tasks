import { gql } from "apollo-angular";

export const LIST_BOOKINGS = gql`
query{
    bookings{
      bookings{
        _id
        movieName
        date
        noOfTickets  
          }
    }
  }
`

export const GET_BOOKING = gql`
query getBookings($id: ID!) {
getBookings(id: $id) {
        _id
        movieName
        noOfTickets
        date
}
}
`