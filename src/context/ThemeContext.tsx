import React, { useCallback } from 'react';
import GlobalStyle from '../styles/global';
import { ThemeProvider, ThemeConsumer as Consumer } from 'styled-components';
import { DarkTheme, LightTheme, Theme } from '../styles/themes';
import usePersistentState from '../hooks/usePersistentState';

const Provider: React.FC = ({ children }) => {
  const [theme, setTheme] = usePersistentState<Theme>('theme', LightTheme);

  const toggleTheme = useCallback(() => {
    setTheme(previousTheme =>
      previousTheme.id === 'light' ? DarkTheme : LightTheme
    );
  }, [setTheme]);

  return (
    <ThemeProvider theme={{ ...theme, toggleTheme }}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

const ThemeContext = {
  Provider,
  Consumer
};

export default ThemeContext;
