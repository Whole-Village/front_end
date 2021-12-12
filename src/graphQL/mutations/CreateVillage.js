import { gql } from '@apollo/client';

export const createVillage = gql`
    mutation createVillage($name: String!, $description: String, $userEmails: [String!]){
      createVillage(
      name: $name,
      description: $description,
      userEmails: $userEmails
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
