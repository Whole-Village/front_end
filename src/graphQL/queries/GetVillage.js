import { gql } from '@apollo/client';

export const villagesQuery = gql`
  query village($id: ID!) {
    village(id: $id) {
     name
     description
     users {
       firstName
       lastName
       email
     }
    }
  }
 `
//line 4 you can name the query (aka query variable) anything you want "Village here", params = $id: ID is type!
