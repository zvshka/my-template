import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { AuthProvider } from '../components/Auth/AuthProvider';
import { ReactQueryProvider } from '../components/QueryProvider/QueryProvider';
import { Notifications } from '@mantine/notifications';

function MyApp({ Component, pageProps }: AppProps) {
  return <MantineProvider>
    <ModalsProvider>
      <ReactQueryProvider>
        <AuthProvider>
          <Notifications />
          <Component {...pageProps} />
        </AuthProvider>
      </ReactQueryProvider>
    </ModalsProvider>
  </MantineProvider>;
}

export default MyApp;
