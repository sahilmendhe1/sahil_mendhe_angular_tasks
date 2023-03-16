import { gql } from "apollo-angular";

export const SUBSCRIBE_BOOKING = gql`
subscription booking{
    booking{
        mutation
        data{
        _id
        movieName
        noOfTickets
        date
        }
    }
}
`;