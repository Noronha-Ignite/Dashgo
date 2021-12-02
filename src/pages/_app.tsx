import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SidebarDrawerContextWrapper } from '../hooks/useSidebarDrawer';

import { makeServer } from '../services/mirage';

import { theme } from '../styles/theme';

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SidebarDrawerContextWrapper>
          <Component {...pageProps} />  
        </SidebarDrawerContextWrapper>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
