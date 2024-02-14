import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'; //RouterProvider props pass this provider means router props pass and when router create to import createBrowserRouter
import Layout from './Layout';
import About from './components/About/About';
import Home from './components/Home/Home';
import './index.css';

const router=createBrowserRouter([ //createBrowserRouter method pass array under pass router object 
  {
    path:'/', //which path to view index path normally view
    element:<Layout />, //element Layout view means Header Oultlet Footer
    children:[  //Layout to another link children add path wise
      {
        path:'',
        element:<Home /> //Home Path of router
      },{
        path:"about", //this is /about path
        element:<About/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
