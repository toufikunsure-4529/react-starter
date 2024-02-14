import React from 'react';
import { Outlet } from 'react-router-dom'; //This layout component under Outlet import from react-router-dom beacouse layout component under Header & Footer As it is same not changes to Outlet used we used when need when outlit write like Two element between Outlet used to First and Last element not changes middle component changes only same as other order
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
