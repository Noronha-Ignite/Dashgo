import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { SidebarDrawerContextWrapper } from '../hooks/useSidebarDrawer';

import { theme } from '../styles/theme';

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
