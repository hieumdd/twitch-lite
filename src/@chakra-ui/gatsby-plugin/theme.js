import { extendTheme } from '@chakra-ui/react';

export default extendTheme({
  styles: {
    global: {
      '*:not(.container)': {
        borderStyle: 'solid',
        borderRadius: 'lg',
      },
      '.shadow': {
        boxShadow: 'base',
      },
      '.hover-shadow': {
        _hover: {
          boxShadow: 'lg',
        },
      },
    },
  },
  components: {
    Container: {
      baseStyle: {
        maxW: 'container.lg',
      },
    },
    Link: {
      baseStyle: {
        textDecor: 'underline',
      },
    },
  },
});
