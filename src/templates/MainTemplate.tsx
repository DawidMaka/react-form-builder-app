import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';
import GlobalStyle from 'theme/GlobalStyle';

const MainTemplate = ({ children }: { children: React.ReactNode }) => (
  <main>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </main>
);
MainTemplate.displayName = 'MainTemplate';

export default MainTemplate;
