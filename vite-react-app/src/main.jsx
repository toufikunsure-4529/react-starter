import React from 'react';
import ReactDOM from 'react-dom/client';
import { Carousel, Navbar, ProdCard } from './Chai';

function MyApp(){
  return(
    <div>
      <h1>Cutom App</h1>
    </div>
  )
}

// React core librery under some method create element in this avobe
// const globalVariable='Hello World !'
// const reactElement=React.createElement(
//   "a",
//   {href:'https://google.com',target:'_blank'},
//   'Click to visit Google',
//   globalVariable
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <>
  <Navbar />
  <Carousel />
  <ProdCard />
  {/* <App /> */}
  {/* <MyApp /> */}
  {/* <Gallery /> */}
  </>
  </React.StrictMode>
)
/* react fragment syntax <> </> */


