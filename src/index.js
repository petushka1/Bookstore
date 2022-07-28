import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import bookStore from './redux/configureStore';
import './index.css';
import App from './App';
import getAppId from './helpers/newApp'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={bookStore}>
      <App />
    </Provider>
  </React.StrictMode>,
);

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';

const getID = async (URL) => {
  return await getAppId(URL)
}