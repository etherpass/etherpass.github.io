import React from 'react';
import {ThemeProvider, createGlobalStyle} from 'styled-components';
import {normalize} from 'polished';
import theme from '../theme';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans|Lato');  
  
  ${normalize()};

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    color: ${theme.colors.text};
    font-family: 'Open Sans', 'Lato', -apple-system, BlinkMacSystemFont, Helvetica, sans-serif;
    -webkit-overflow-scrolling: touch;
    line-height: 1.6;
  }

  div > h2> a::after {
    content: '';
    display: block;
    height: 120px;
    margin-top: -120px;
  }
`;

export default props => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      {props.children}
    </>
  </ThemeProvider>
);