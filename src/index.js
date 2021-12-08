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
  gql
} from "@apollo/client";


const client = new ApolloClient({
  uri: 'https://whole-village-be.herokuapp.com/graphql',
  cache: new InMemoryCache()
});

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

 // client.query({
 //   query: gql
 //   `
 //   query {
 //     village(id: 3) {
 //      name
 //      description
 //     }
 //   }
 //  `
 // })
 // .then(result => console.log('village',result));

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


reportWebVitals();
