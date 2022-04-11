import React from 'react';
import type { AppProps } from 'next/app';
import ThemeContext from '../context/ThemeContext';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeContext.Provider>
      <Component {...pageProps} />
    </ThemeContext.Provider>
  );
};

export default App;
