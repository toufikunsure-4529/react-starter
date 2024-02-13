import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId=useId() //unique value store this hooks used

  //as a props value pass component label and also className
  return (
    //when need to pass className as a props to used className{} this synatx other wise className"" Note: backtick under default few css write but when need to also add props
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">{label}</label> 
        <input
          id={amountInputId} //useId hooks use to unique id generate
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable} //if user not interst input to desable input box default false
          value={amount} //value will pass by props user thorogh input
          onChange={(e) => {
            onAmountChange && onAmountChange(Number(e.target.value)); //when input box value change onChnage method under pass onAmountChnage function pass by props and && person syntax used becaouse basically when onAmountChnange=true at this time onAmountChange function run and we input number so js basicaly e.taget string return wrap Number value recive
          }} //
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e)=>{
            onCurrencyChange&&onCurrencyChange(e.target.value) //select doup douwn on changes to method run oncurrnecy changes && check props value pass or not 
          }}
          disabled={currencyDisable}
        >
         {currencyOptions.map((currency)=>{
          return <option value={currency} key={currency}>{currency.toUpperCase()}</option> //jsx syntax under loop used like this prps pass array of the option value aftre we .map method used but jsx under loop react performance vary slower prefer to used special attribute key means like array to key we paass unique value beacouse react not understand same element repedatly create so pass key unique of value 
         })}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
