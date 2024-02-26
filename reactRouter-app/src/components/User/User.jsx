import React from 'react';
import { useParams } from 'react-router-dom'; //when router link to any id pass to manuplulate UI to use this


function User() {
  const {userid}=useParams() //react router dom to paramiter receve for url
  return (
    <div className='text-center bg-gray-500 text-white text-2xl p-4'>
      User : {userid}
    </div>
  )
}

export default User
