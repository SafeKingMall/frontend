import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/common/ScrollToTop';
import { HelmetProvider } from 'react-helmet-async';
// import { hydrate, render } from 'react-dom';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(container);
if (container.hasChildNodes()) {
  ReactDOM.hydrateRoot(
    container,
    <BrowserRouter>
      <ScrollToTop />
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>,
  );
} else {
  root.render(
    <BrowserRouter>
      <ScrollToTop />
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>,
  );
}

// React17버전
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
