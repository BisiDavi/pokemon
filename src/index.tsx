import React from 'react';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/react-hooks';
import ReactDOM from 'react-dom';
import App from './App';

const client = new ApolloClient({
    uri: 'https://graphql-pokemon2.vercel.app',
    cache: new InMemoryCache(),
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root'),
);
