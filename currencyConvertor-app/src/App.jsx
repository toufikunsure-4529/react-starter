import { useEffect, useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo"; //our custom hooks import

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from); //custome hooks method argument pass input from value seacch by API url
  const options = Object.keys(currencyInfo); //droupdown shoing API object keys to object key destructing

  const swap = () => {
    setFrom(to); //swap input select element value onclick
    setTo(from);
    setConvertedAmount(amount); //converted amount valur actual amount valur
    setAmount(convertedAmount); //and setAmount value converted amount
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  useEffect(()=>{convert()},[convert,swap,amount,setFrom,setTo])

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/1629172/pexels-photo-1629172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency)=>{
                  setFrom(currency)
                  
                }}
                selectCurrency={from}
                onAmountChange={(amount)=>{
                  setAmount(amount)
                }}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox label="To"
              amount={convertedAmount}
              currencyOptions={options}
                onCurrencyChange={(currency)=>{
                  setTo(currency)
                }}
                selectCurrency={to}
                amountDisable={true}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
