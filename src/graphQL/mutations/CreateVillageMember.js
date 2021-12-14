import { gql } from '@apollo/client';

export const createVillageMember = gql`
    mutation createVillageMember($userEmail: String!, $villageId: ID!){
      createVillageMember(
      userEmail: $userEmail,
      villageId: $villageId
      ) {
      village {
        id
        name
        description
        users {
          firstName
          lastName
          email
        }
      }
      errors
      }
    }
`
