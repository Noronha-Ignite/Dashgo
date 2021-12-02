import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { SidebarDrawerContextWrapper } from '../hooks/useSidebarDrawer';

import { makeServer } from '../services/mirage';

import { theme } from '../styles/theme';

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerContextWrapper>
        <Component {...pageProps} />  
      </SidebarDrawerContextWrapper>
    </ChakraProvider>
  );
}

export default MyApp;
