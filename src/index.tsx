import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/common/ScrollToTop';
import { HelmetProvider } from 'react-helmet-async';
// import { hydrate, render } from 'react-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <ScrollToTop />
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </BrowserRouter>,
);
// const rootElement = document.getElementById('root') as HTMLElement;
// if (rootElement.hasChildNodes()) {
//   hydrate(
//     <BrowserRouter>
//       <ScrollToTop />
//       <HelmetProvider>
//         <App />
//       </HelmetProvider>
//     </BrowserRouter>,
//     rootElement,
//   );
// } else {
//   render(
//     <BrowserRouter>
//       <ScrollToTop />
//       <HelmetProvider>
//         <App />
//       </HelmetProvider>
//     </BrowserRouter>,
//     rootElement,
//   );
// }
