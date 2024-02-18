import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
// !importante: los estilos propios deben ir debajo del bootstrap para que no los pise
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppRoutingOne from './AppRoutingOne';
import AppRoutingFinal from './AppRoutingFinal';
import { createAppStore } from './store/config/storeConfig';
import { Provider } from 'react-redux';


let appStore = createAppStore()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={appStore}>
    <React.StrictMode>
      {/* <AppRoutingOne/> */}
      <App />
      {/* <AppRoutingFinal/> */}
    </React.StrictMode>
</Provider>,
document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
