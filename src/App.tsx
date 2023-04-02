import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/globalStyles';
import theme from './styles/theme';
import Router from './routes/Router';
import { Refresh } from './components/common/hooks/Refresh';
import { Footer } from './components/common/Footer';
import CategoryStore from './store/categoryStore';

function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    document.body.style.cssText = '';
  }
  useEffect(() => {
    window.addEventListener('resize', setScreenSize);
  });
  useEffect(() => {
    setScreenSize();
  }, []);
  Refresh();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className='App'>
        <CategoryStore>
          <Router />
        </CategoryStore>
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
