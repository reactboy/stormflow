import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import store from '@redux/store';

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider resetCSS>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  );
};

export default App;
