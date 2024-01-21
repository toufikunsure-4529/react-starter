import React from 'react'; //react-core-libray reference recived
import ReactDOM from 'react-dom/client'; //react-dom-libray react implementation of web
import App from './App';
import Second from './custom';

const root = ReactDOM.createRoot(document.getElementById('root')); //react own create DOM (React Vertual DOM) & HTML documents root id reference to create React vartuial DOM root
//Then Javascript render process root div under render all js code
root.render(
  <React.StrictMode> 
    <>
    <App /> 
    <Second />
    </>
  </React.StrictMode>
);
 /*js thorogh html element directly render <App />  This is Power of Jsx (App is app.js under function return html) */
/* <React.StrictMode> it is React safe mode devlopment side optimized advanced */