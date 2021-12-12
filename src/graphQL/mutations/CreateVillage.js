import { gql } from '@apollo/client';

export const createVillage = gql`
mutation createVillage($name: String!, $description: String, $members: [String!]){
    createVillage(
     name: $name,
     description: $description,
     userEmails: $members
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
     }
     errors
  }
`
