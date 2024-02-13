import { useEffect, useState } from 'react'

function useCurrencyInfo(currency){
  const [data,setData]=useState({}) //incase fetch API data not fecth in this emty object genarate loop not crashed app
  useEffect(()=>{
    let urlResponse=fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
    urlResponse.then((response)=>{
        return response.json()
    }).then((response)=>{
      setData(response[currency]) //API fetch response data store hooks data var under and API object response we access squre bracket response under key we have store data var under currency is a key inr/usd
      // console.log(data)
    })
  },[currency]) //dependecies currency url change method re run,
  // console.log(data)
  return data; //return data means currency url object key store of a data variable
}

export default useCurrencyInfo; //userCurrencyInfo hooks we have return when want need to import this custom hooks