export interface Theme {
  id: 'light' | 'dark';
  colors: {
    primary: string;
    secondary: string;
    darkPrimary: string;
    complementary: string;
    darkComplementary: string;
    text: string;
    background: string;
  };
}

export const LightTheme: Theme = {
  id: 'light',
  colors: {
    primary: '#216BEB',
    secondary: '#3D84FF',
    darkPrimary: '#0B419E',
    complementary: '#EBAA21',
    darkComplementary: '#9E6B00',
    text: '#444444',
    background: '#EEEEEE'
  }
};

export const DarkTheme: Theme = {
  id: 'dark',
  colors: {
    primary: '#216BEB',
    secondary: '#3D84FF',
    darkPrimary: '#0B419E',
    complementary: '#EBAA21',
    darkComplementary: '#9E6B00',
    text: '#EEEEEE',
    background: '#475569'
  }
};
