import React, { useCallback } from 'react';
import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/global';
import { ThemeProvider } from 'styled-components';
import { DarkTheme, LightTheme, Theme } from '../styles/themes';
import usePersistentState from '../hooks/usePersistentState';

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const [theme, setTheme] = usePersistentState<Theme>('theme', LightTheme);

  const toggleTheme = useCallback(() => {
    setTheme(previousTheme =>
      previousTheme.id === 'light' ? DarkTheme : LightTheme
    );
  }, [setTheme]);

  return (
    <ThemeProvider theme={{ ...theme, toggleTheme }}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
