export interface Theme {
  name: 'light' | 'dark';
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
  name: 'light',
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
  name: 'light',
  colors: {
    primary: '#216BEB',
    secondary: '#3D84FF',
    darkPrimary: '#0B419E',
    complementary: '#EBAA21',
    darkComplementary: '#9E6B00',
    text: '#EEEEEE',
    background: '#444444'
  }
};
