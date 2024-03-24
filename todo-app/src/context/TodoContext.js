import { createContext, useContext } from "react";

//create context hooks and also default value pass
export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo Massege",
      completed: false,
    }
  ],
  addTodo: (todo) => { },
  updateTodo: (id, todo) => { },
  deleteTodo: (id) => { },
  toggleComplete: (id) => { },
})


//context provider
export const TodoProvider = TodoContext.Provider


//use context to wrap a method when want to useTodo call to context value access
export const useTodo = () => {
  return useContext(TodoContext) //TodoContext is a context
}