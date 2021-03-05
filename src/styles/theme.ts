import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const styles = {
  global: {
    body: {
      bg: 'gray.50',
    },
  },
};

const theme = extendTheme({ config, styles });

export default theme;
