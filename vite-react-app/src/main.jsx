import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* react fragment syntax <> </> */}
    <>
    <App />
    <h2>Hello This is Creating a React Fragment syntax</h2>
    </>
  </React.StrictMode>,
)
