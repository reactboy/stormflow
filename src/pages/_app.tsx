import { QueryClient, QueryClientProvider } from 'react-query';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { Layout } from '@components/common';
import store from '@redux/store';

//NOTE setup for react-query
const queryClient = new QueryClient();

const App = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider resetCSS>
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </ChakraProvider>
    </QueryClientProvider>
  );
};

export default App;
