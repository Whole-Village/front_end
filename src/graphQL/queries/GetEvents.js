import { gql } from '@apollo/client';

export const eventsQuery = gql`
query events($villageId: ID!) {
 events(villageId: $villageId) {
   name
   description
   date
   time
   adultRequired
   villageName
 }
}
`
