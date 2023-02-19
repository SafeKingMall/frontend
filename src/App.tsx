import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/globalStyles';
import theme from './styles/theme';
import Router from './routes/Router';
import { Refresh } from './components/common/hooks/Refresh';
import { Footer } from './components/common/Footer';

function App() {
  // document.body.classList.remove('swal2-height-auto');
  Refresh();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <div className='App'>
        <Router />
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
