import { extendTheme } from '@chakra-ui/react';
//import '@fontsource/poppins';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};
const theme = extendTheme({
  config,
  colors: {
    lavage: {
      1: '#ffffff',
      2: '#f7c202',
      3: '#929292',
      4: '#C7EDE4',
      5: '#000000',
    },
  },
  fonts: {
    body: 'Poppins',
  },
  styles: {
    global: {
      'html, body': {
        // fontFamily: 'sans',
        background: '#3d3d3f',
        color: '#3d3d3f',
      },
    },
  },
});

export default theme;
