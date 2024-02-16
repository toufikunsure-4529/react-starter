import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import About from './components/About/About.jsx';
import Home from './components/Home/Home.jsx';
import './index.css';

//Create router
const router=createBrowserRouter([
  {
    path:'/', //path / menad it is top level element in this under nesting all page about contact home so on <Header> Footer load 
    element:<Layout />,  //which component layout base render this component element define Header/footer/outlen-method
    children:[
      {
        path:'',
        element: <Home />
      },{
        path:'about',
        element:<About />
      }
    ] //children add for Home about contact  page nesting routing
  }
])  //createBrowserRouter it is method refer react router import it work browrser router cretae responsbitliy

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} /> {/* this provider create a router pass by router as props and this provider react router dom concept */}
  </React.StrictMode>,
)
