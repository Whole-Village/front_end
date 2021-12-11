import { gql, useMutation } from '@apollo/client';

export const createEvent = gql`
mutation CreateEvent($villageId: ID, $name: String!, $description: String!, $date: String!, $time: String!, $adultRequired: Boolean!){
    createEvent(input: {
     villageId: $villageId,
     name: $name,
     description: $description,
     date: $date,
     time: $time,
     adultRequired: $adultRequired
   }) {
     event {
       id
       name
       description
       date
       time
       adultRequired
       villageName
     }
     errors
   }
  }
`
