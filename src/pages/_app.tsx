import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { Layout } from '@components/common';
import store from '@redux/store';
import theme from '@styles/theme';

//NOTE setup for react-query
const queryClient = new QueryClient();

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Stormflow</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider resetCSS theme={theme}>
          <Provider store={store}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Provider>
        </ChakraProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
