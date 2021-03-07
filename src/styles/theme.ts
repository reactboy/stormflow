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

const fonts = {
  heading:
    'IBM Plex Mono, -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Yu Gothic", YuGothic, Verdana, Meiryo, "M+ 1p", sans-serif',
  body:
    'IBM Plex Mono, -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Yu Gothic", YuGothic, Verdana, Meiryo, "M+ 1p", sans-serif',
};

const theme = extendTheme({ config, styles, fonts });

export default theme;
