import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/globalStyles';
import theme from './styles/theme';
import Router from './routes/Router';
import { Refresh } from './components/common/hooks/Refresh';

function App() {
  Refresh();
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
