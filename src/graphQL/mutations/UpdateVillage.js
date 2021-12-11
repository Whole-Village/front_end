import { gql } from '@apollo/client';

export const createVillage = gql`
mutation createVillage($name: String!, $description: String){
    createVillage(
     name: $name,
     description: $description,
    ) {
     village {
       id
       name
       description
     }
     errors
   }
  }
`
