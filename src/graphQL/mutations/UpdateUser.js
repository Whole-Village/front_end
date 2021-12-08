import { gql } from '@apollo/client';

export const updateUser = gql`
mutation UpdateUser($email: String!, $address: String, $name: String){
  updateUser(input: {
    email: $email,
    address: $address,
    firstName: $name
  }) {
    user {
      id
      firstName
      lastName
      email
      password
      phoneNumber
      address
      covidVaccinated
      volunteerCredits
    }
  }
}
`
