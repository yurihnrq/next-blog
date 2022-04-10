import { render, screen } from '@testing-library/react';
import Header from '../../../components/layout/Header';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import { LightTheme } from '../../../styles/themes';

describe('Header component', () => {
  it('Render all links', async () => {
    render(
      <ThemeProvider theme={{ ...LightTheme, toggleTheme: () => {} }}>
        <Header />
      </ThemeProvider>
    );
    expect(screen.queryAllByRole('link')).toHaveLength(9);
  });
});
