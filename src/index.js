import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  // useQuery,
  gql
} from '@apollo/client';


// const client = new ApolloClient({
//   //will replace the uri below with the whole village backend uri
//   uri: 'https://48p1r2roz4.sse.codesandbox.io',
//   cache: new InMemoryCache()
// });
const client = new ApolloClient({
  //will replace the uri below with the whole village backend uri
  uri: 'https://whole-village-be.herokuapp.com/graphql',
  cache: new InMemoryCache()
});

// client.query({
//   query: gql`
//      query GetRates {
//        rates(currency: "USD") {
//          currency
//        }
//      }
//    `
//  })
//  .then(result => console.log(result));

// client.query({
//   query: gql`
//     query {
//       users {
//         firstName
//         lastName
//         email
//       }
//     }
//   `
//  })
//  .then(result => console.log('users',result));
//
//  client.query({
//    query: gql
//    `
//    query {
//      village(id: 3) {
//       name
//       description
//      }
//    }
//   `
//  })
//  .then(result => console.log('village',result));

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
