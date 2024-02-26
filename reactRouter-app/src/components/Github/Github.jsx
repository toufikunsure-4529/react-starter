import React from 'react';
import { Link, useLoaderData } from "react-router-dom";

function Github() {
  // const [data,setData]=useState({})
  // //useEffect hooks refer to when component loads instantly fetch Github Data
  // useEffect(()=>{
  //   fetch('https://api.github.com/users/toufikunsure-4529')
  //   .then((response)=>{
  //     return response.json()
  //   }).then((data)=>{
  //     setData(data) //userState UI propogate changes peropose Add  Data store under variable
  //   })
  // },[])

    const data=useLoaderData() //use loader data in responsibility route under loader fetch the data will be store and display

  return (
    <div className='text-center m-4 bg-red-700 text-xl p-4 text-white'>
      <p>Github Name: {data.name}</p>
      <p>Github followers: {data.followers}</p>
      <p>Location : {data.location}</p>
      <p>User Portfolio : <Link to={data.blog} target='_blank' className='text-black'>Go to Portfolio</Link></p>
      <p>{data.bio}</p>
      <img src={data.avatar_url} alt="Git avatar" className='rounded-lg' width={300} />
      <p>Last Update at {data.updated_at}</p>
    </div>
  )
}

export default Github

//this is function fetch the data and route under loadr pass this function refference
export const githubInfoLoader=async ()=>{
  const response=await fetch('https://api.github.com/users/toufikunsure-4529')
  return response.json()
}
