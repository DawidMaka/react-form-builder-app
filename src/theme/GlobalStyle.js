import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	*, *::before, *::after {
		box-sizing: border-box;
		-webkit-font-smoothing: antialiased;
  	-moz-osx-font-smoothing: grayscale;
	}

	html {
		font-size: 62.5%;
	}

	body {
		font-size: 1.4rem;
		font-family: "Montserrat", monospace;
	}	

  main {
    margin: 8px;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;

export default GlobalStyle;
