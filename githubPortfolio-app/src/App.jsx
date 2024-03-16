import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Banner from "./components/Banner";
import Card from "./components/Card";
import Repository from "./components/Repository";
import SearchInputBox from "./components/SearchInputBox";
function App() {
  const [inputValue, setInputValue] = useState(`toufikunsure-4529`);
  const [gitHubInfo, setGitHubInfo] = useState({});
  const [gitRepoInfo,setGitRepoInfo]=useState({})

  const fetchData = async (inputValue) => {
    if (!inputValue) {
      toast.error("Please enter a GitHub username");
      return;
    } else {
      try {
        let githubApiResponse = await fetch(
          `https://api.github.com/users/${inputValue}`
        );
        let gitRepoResponse= await fetch(`https://api.github.com/users/${inputValue}/repos`)
        if (!githubApiResponse.ok || !gitRepoResponse.ok) {
          throw new Error(`HTTP error! Status: ${urlResponse.status}`);
        }
        const userData = await githubApiResponse.json();
        const repoData=await gitRepoResponse.json()
        setGitHubInfo(userData);
        setGitRepoInfo(repoData)
        toast.success("Data Fetched Successfully");
      } catch (error) {
        if (error.message === "HTTP error! Status: 403") {
          toast.error(`Error: Daily Search Limit Exceeded`);
        }
        else if(error.message==="HTTP error! Status: 404"){
          toast.error(`Error: User Not Found`);
        } else {
          toast.error(`Error: ${error.message}`);
        }
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(inputValue); // Call fetchData function here
  };

  useEffect(() => {
    fetchData(inputValue);
  }, []);

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
      <Repository gitRepoInfo={gitRepoInfo} />
      <p className="read-the-docs">
        Search on the Github Username to explore more
      </p>
      <ToastContainer />
    </div>
  );
}

export default App;
