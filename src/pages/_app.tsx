import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider as AuthProvider } from 'next-auth/client';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { Layout } from '@components/common';
import store from '@redux/store';
import theme from '@styles/theme';
import Font from '@styles/font';

//NOTE setup for react-query
const queryClient = new QueryClient();

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Stormflow</title>
      </Head>
      <AuthProvider session={pageProps.session}>
        <QueryClientProvider client={queryClient}>
          <ChakraProvider resetCSS theme={theme}>
            <Font />
            <Provider store={store}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </Provider>
          </ChakraProvider>
        </QueryClientProvider>
      </AuthProvider>
    </>
  );
};

export default App;
