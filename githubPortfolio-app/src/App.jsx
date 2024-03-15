import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Banner from "./components/Banner";
import Card from "./components/Card";
import SearchInputBox from "./components/SearchInputBox";
import GithubHooks from "./hooks/GithubHooks";
function App() {
  const [inputValue, setInputValue] = useState(`toufikunsure-4529`);
  const gitHubInfo = GithubHooks(inputValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) {
      toast.error("Please enter a GitHub username");
      return;
    } else {
      return toast.success("Data Fetched Successfully");
    }
  };

  return (
    <div className="container">
      <Banner />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-700">
        Search Github Profile
      </h2>
      <SearchInputBox
        inputValue={inputValue}
        onChangeInputValue={(inputValue) => setInputValue(inputValue)}
        handleSubmit={handleSubmit}
      />
      <div className="card">
        <Card gitHubInfo={gitHubInfo} />
      </div>
      <p className="read-the-docs">
        Search on the Github Username to explore more
      </p>
      <ToastContainer />
    </div>
  );
}

export default App;
