import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bgGradient:
          'linear(to-r, rgba(65,129,173,1) 47%, rgba(221,75,75,1) 100%)',
      },
    },
  },
});

export default theme;
