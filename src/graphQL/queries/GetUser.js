import { gql } from '@apollo/client';

export const userQuery = gql`
  query user($email: String!) {
    user(email: $email) {
          firstName
          lastName
          id
          villages {
            id
            name
          }
    }
  }
`

