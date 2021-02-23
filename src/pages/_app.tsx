import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { Layout } from '@components/common';
import store from '@redux/store';

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider resetCSS>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ChakraProvider>
  );
};

export default App;
