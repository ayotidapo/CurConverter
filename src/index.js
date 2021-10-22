import { StrictMode } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { ToastContainer, Zoom } from 'react-toastify';
import AppProvider from 'context/Providers/AppProvider';
import 'react-toastify/dist/ReactToastify.min.css';
import './index.scss';

import App from './App';
import reportWebVitals from './reportWebVitals';

axios.defaults.baseURL = `https://api.fastforex.io/`;

ReactDOM.render(
  <StrictMode>
    <ToastContainer
      autoClose={5000}
      transition={Zoom}
      position="top-center"
      className="toast-container"
      toastClassName="dark-toast"
    />
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
