import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Cutom App</h1>
    </div>
  )
}



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    <App />
    <h2>Hello This is Creating a React Fragment syntax</h2>
    <MyApp />
    </>
  </React.StrictMode>
)
/* react fragment syntax <> </> */
