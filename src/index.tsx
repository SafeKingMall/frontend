import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/common/ScrollToTop';
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <ScrollToTop />
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </BrowserRouter>,
  // {/* </React.StrictMode>, */}
);
