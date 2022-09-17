import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { setupStore } from './app/store';
import App from './app/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={setupStore()}>
      <App />
    </Provider>
  </React.StrictMode>
);
