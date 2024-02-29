import React, { useContext } from 'react';
import { countContext } from '../context/Context';
import Component from './Component';

function Button() {
  const value=useContext(countContext)
  return (
    <div>
    <Component />
     <button onClick={()=>value.setCount(value.count+1)}>Count is</button>
    </div>
  )
}

export default Button
