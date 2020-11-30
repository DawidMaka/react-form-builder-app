import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    remove: string;
    add: string;
  }
}
