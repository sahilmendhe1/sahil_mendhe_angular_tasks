import { Injectable } from "@angular/core"
import { createEffect, ofType } from "@ngrx/effects"
import { gql } from "../service/graphql.service"

const Booking = gql`
query getBookings{
    bookings{
        _id
        movieName
        noOfTickets
        date
    }
}
`

@Injectable()

export class BookingEffects {
    constructor() { }

}
