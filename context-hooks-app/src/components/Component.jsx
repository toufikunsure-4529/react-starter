import React, { useContext } from 'react'; //useContext Hooks used to context value will be used display for component
import { countContext } from '../context/Context'; //it is createContext variable store the context


function Component() {
  const value=useContext(countContext)  //useContext hooks thorough value access
  return (
    <div>
      {value.count}
    </div>
  )
}

export default Component
