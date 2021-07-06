import '../styles/globals.css'
import { Provider as ReduxProvider } from 'react-redux'
import useMedia from '../utils/useMedia'
import Layout from '../UI/organisms/Layout'
import {ApolloProvider, ApolloClient, HttpLink, ApolloLink, InMemoryCache, concat } from '@apollo/client'
import { CookiesProvider, Cookies, } from 'react-cookie'
import { wrapper } from '../store'

const httpLink = new HttpLink({ uri:'http://localhost:4000/' })

const authMiddleware = new ApolloLink((operation, forward) => {
  const cookies = new Cookies();
  const token = cookies.get('id_token');
  const authHeader = token ? `bearer ${token}` : ''
  console.log('cookie del toor', cookies.get('id_token'))
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
  link: concat(authMiddleware, httpLink),
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
