import {ApolloProvider, ApolloClient, HttpLink, ApolloLink, InMemoryCache, concat, from } from '@apollo/client'
import { onError } from "@apollo/client/link/error"
import { CookiesProvider, Cookies, } from 'react-cookie'

const httpLink = new HttpLink({ uri:'http://localhost:4000/' })

const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {  
  if (graphQLErrors)
    graphQLErrors.map(({ code, message, locations, path }) => {
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

export const apolloClient = new ApolloClient({
  link: from([authMiddleware, errorLink, httpLink]),
  cache: new InMemoryCache()
});
