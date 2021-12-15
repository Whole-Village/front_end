import { gql } from '@apollo/client';

export const childrenQuery = gql`
  query children($userId: ID!) {
    children(userId: $userId) {
          firstName
          lastName
          birthdate
    }
  }
`
