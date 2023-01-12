import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/globalStyles';
import theme from './styles/theme';
import Router from './routes/Router';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <div className='App'>
        <Router />
      </div>
    </ThemeProvider>
  );
}

export default App;
