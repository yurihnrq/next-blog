import React, { useCallback, useEffect, useState } from 'react';
import GlobalStyle from '../styles/global';
import { ThemeProvider, ThemeConsumer as Consumer } from 'styled-components';
import { DarkTheme, LightTheme, Theme } from '../styles/themes';
import usePersistentState from '../hooks/usePersistentState';

interface IProvider {
  children: React.ReactNode;
}

const Provider: React.FC<IProvider> = ({ children }) => {
  const [themeId, setThemeId] = usePersistentState<typeof LightTheme.id>(
    'theme',
    LightTheme.id
  );
  const [theme, setTheme] = useState<Theme>(() => {
    if (themeId === LightTheme.id) {
      return LightTheme;
    }

    return DarkTheme;
  });

  const toggleTheme = useCallback(() => {
    setThemeId(prevThemeId => (prevThemeId === 'light' ? 'dark' : 'light'));
  }, [setThemeId]);

  useEffect(() => {
    setTheme(() => (themeId === 'light' ? LightTheme : DarkTheme));
  }, [themeId]);

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
