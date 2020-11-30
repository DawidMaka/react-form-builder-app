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

  .form-control {
    width: 80%;
    height: 34px;
    padding: 6px 12px;
    font-size: 13px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid black;
    border-radius: 4px;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  }

  select[name='conditionType'] {
    width: 45%;
    margin-right: 2%;
  }

  input[name='conditionValue'], select[name='conditionValue'] {
    width: 33%;
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
