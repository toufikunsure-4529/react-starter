import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: 'light',
  darkTheme: () => { }, //this method only decler functility component under same name function create to autometic inject this context method value
  
  lightTheme: () => { },
}); //intial state context value set Dafault value set when context call to default value set initial

export const ThemeProvider=ThemeContext.Provider //not required <Theme.provider> This syntax so wi just store same variabe 

export default function useTheme(){
  return useContext(ThemeContext) //custom hooks to useContext repetedly write not required we used this useTheme Method it advantage used component not requred useContext+context import only this use Theme method import access Themecontext
} 