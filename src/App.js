import React from 'react';
import { useSelector } from 'react-redux';
import Routes from './routes';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import GlobalStyle from './GlobalStyle';

import bg from './assets/background.jpg';

const BlackFridayTog = createGlobalStyle`
  body {
    background: ${props => props.theme.mode === 'dark' ? 'black': `url(${bg})`};
    color: ${props => props.theme.mode === 'dark' ? 'red': 'black'};
  }
`;

const App = () => {
  const theme = useSelector(state => state.toggleTheme)
  return(
    <ThemeProvider theme={theme}>
      <BlackFridayTog/>
      <Routes/>
      <GlobalStyle/>
    </ThemeProvider>
  );
};

export default App;
