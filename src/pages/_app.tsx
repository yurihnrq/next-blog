import React from 'react';
import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/global';

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default App;
