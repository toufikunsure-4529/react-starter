import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeButton";
import { ThemeProvider } from "./context/Theme";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  //lightTheme && darkTheme mode will be context create time default value set and same name mathod create to context under method functionlity autometic injected
  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };

  //actual theme change
  useEffect(() => {
    let htmlElem = document.querySelector("html");
    htmlElem.classList.remove("light", "dark");
    htmlElem.classList.add(themeMode);
  }, [themeMode]);

  
  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}> {/* Wrap the theme provider and pass context value*/}
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
