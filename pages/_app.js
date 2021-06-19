import '../styles/globals.css'
import { Provider as ReduxProvider } from 'react-redux'
import useMedia from '../utils/useMedia'
import Layout from '../UI/organisms/Layout'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { CookiesProvider } from 'react-cookie'
import { wrapper } from '../store'

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
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
