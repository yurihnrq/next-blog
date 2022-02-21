export interface Theme {
  id: 'light' | 'dark';
  colors: {
    primary: string;
    secondary: string;
    complementary: string;
    text: string;
    background: string;
  };
}

export const LightTheme: Theme = {
  id: 'light',
  colors: {
    primary: '#216BEB',
    secondary: '#3D84FF',
    complementary: '#EBAA21',
    text: '#444444',
    background: '#EEEEEE'
  }
};

export const DarkTheme: Theme = {
  id: 'dark',
  colors: {
    primary: '#0B419E',
    secondary: '#216BEB',
    complementary: '#9E6B00',
    text: '#EEEEEE',
    background: '#475569'
  }
};
