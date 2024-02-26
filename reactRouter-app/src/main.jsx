import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Github from './components/Github/Github.jsx';
import Home from './components/Home/Home.jsx';
import User from './components/User/User.jsx';
import './index.css';

//<><<<<<<React router create 1st way>>>>

// //Create router
// const router=createBrowserRouter([
//   {
//     path:'/', //path / menad it is top level element in this under nesting all page about contact home so on <Header> Footer load 
//     element:<Layout />,  //which component layout base render this component element define Header/footer/outlen-method
//     children:[
//       {
//         path:'',
//         element: <Home />
//       },{
//         path:'about',
//         element:<About />
//       },
//       {
//         path:"contact",
//         element:<Contact />
//       }
//     ] //children add for Home about contact  page nesting routing
//   }
// ])  //createBrowserRouter it is method refer react router import it work browrser router cretae responsbitliy

//<><<<<<<React router create 2nd way>>>>
const router=createBrowserRouter(
  createRoutesFromElements( //impport from react-router-dom and same create Route element
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home />}></Route>
      <Route path='about' element={<About />}></Route>
      <Route path='contact' element={<Contact />}></Route>
      <Route path='user/:userid' element={<User />}></Route>
      <Route path='github' element={<Github />}></Route>
    </Route> //for top most elemenet layout and under nesting rout
    //path='user/:userid' user/in this url unique of id pass to this url value access for UI
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} /> {/* this provider create a router pass by router as props and this provider react router dom concept */}
  </React.StrictMode>,
)
