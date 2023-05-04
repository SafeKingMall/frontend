import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/globalStyles';
import theme from './styles/theme';
import Router from './routes/Router';
import { Refresh } from './components/common/hooks/Refresh';
import { Footer } from './components/common/Footer';
import CategoryStore from './store/categoryStore';
import { Helmet } from 'react-helmet-async';

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
    <>
      <Helmet>
        <title>안전왕</title>
        <meta name='description' content='안전왕, 안전관리 솔루션을 제공하는 쇼핑몰입니다.' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='안전왕' />
        <meta
          property='og:description'
          content='안전왕, 안전관리 솔루션을 제공하는 쇼핑몰입니다.'
        />
        <meta property='og:image' content='https://safekingmall.com/img/HeaderLogo.png' />
        <meta property='og:url' content='https://safekingmall.com/' />
        <meta name='keywords' content='안전왕, 안전, 안전관리, 안전사고, 사고예방' />
      </Helmet>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div className='App'>
          <CategoryStore>
            <Router />
          </CategoryStore>
        </div>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
