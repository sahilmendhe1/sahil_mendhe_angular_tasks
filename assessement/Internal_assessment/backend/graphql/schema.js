const { buildSchema } = require("graphql");

module.exports = buildSchema(`
type Booking{
    _id: ID!
    movieName: String
    noOfTickets: Int
    date: String
}
type BookingData{
    bookings: [Booking!]!
}
input BookingInputData{
    _id: ID
    movieName: String
    noOfTickets: Int
    date: String
}
type RootQuery{
    bookings: BookingData!
    getBooking: BookingData!
}

type RootMutation{
    addBooking(bookingInput: BookingInputData): Booking!
    updateBooking(_id: ID!, bookingInput: BookingInputData): Booking!
    deleteBooking(_id: ID!): Booking!
}
schema {
    query: RootQuery
    mutation: RootMutation
}
`);
