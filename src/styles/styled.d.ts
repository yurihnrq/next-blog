import 'styled-components';
import { Theme } from './themes';

// Interface created to enable code auto-complete and proper usage of
// TextProvider (from styled-components) with Typescript.
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    toggleTheme: () => void;
  }
}
