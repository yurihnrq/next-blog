import { render, screen } from '@testing-library/react';
import Home from '../../pages';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import { LightTheme } from '../../styles/themes';

describe('Index page', () => {
  it('Render layout', async () => {
    render(
      <ThemeProvider theme={{ ...LightTheme, toggleTheme: () => {} }}>
        <Home />
      </ThemeProvider>
    );

    expect(screen.getByText('Página incial')).toBeInTheDocument();
  });
});
