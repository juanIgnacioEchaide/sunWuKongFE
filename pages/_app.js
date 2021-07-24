import '../styles/globals.css'
import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import useMedia from '../utils/useMedia'
import Layout from '../UI/organisms/Layout'
import {ApolloProvider, ApolloClient, HttpLink, ApolloLink, InMemoryCache, concat, from } from '@apollo/client'
import { onError } from "@apollo/client/link/error"
import { CookiesProvider, Cookies, } from 'react-cookie'
import { wrapper } from '../store'
import  useRefreshToken from '../apollo/useRefreshToken'

const httpLink = new HttpLink({ uri:'http://localhost:4000/' })

const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {  
  if (graphQLErrors)
    graphQLErrors.map(({ type, message, locations, path }) => {
      console.log(`[GraphQL error]: Type: ${type} Message: ${message}, Location: ${locations}, Path: ${path}`)
      }
  );
    if (networkError) 
      switch(networkError.name){
        case 'ServerParseError':        
          console.log('case ServerParseError')
          const newToken = useRefreshToken()   
          const newAuthHeader = newToken ? `bearer ${newToken}` : ''
          operation.setContext(({ headers = {} }) => ({
            headers: {
              ...headers,
              'authorization': newAuthHeader,
            }
        }))
  }
  return forward(operation) 
})    

const authMiddleware = new ApolloLink((operation, forward) => {
  const cookies = new Cookies();
  const token = cookies.get('id_token');
  const authHeader = token ? `bearer ${token}` : ''
  console.log('token cookie', authHeader)
  // add the authorization to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      'authorization': authHeader,
    }
  }))

  return forward(operation);
})

const client = new ApolloClient({
  link: from([authMiddleware, errorLink, httpLink]),
  cache: new InMemoryCache()
});

function MyApp({ Component, pageProps }) {

  const size = useMedia();

  return (<ApolloProvider client={client}>
            <CookiesProvider>
              <Layout size={size}>
                <Component {...pageProps} />
              </Layout>
            </CookiesProvider>
          </ApolloProvider>)
}

export default wrapper.withRedux(MyApp);
