import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { TodoProvider } from "./context";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const [todos, setTodos] = useState([]); //all todo are store in this todos state array under

  const addTodo = (todo) => {
    //todo parametors pass todo are a object pass when we create TodoFrom component and pass obj
    // setTodos(todo) >>>***** this code write to previus all todo are deleted and new todo added todos state
    setTodos((prevTodoArray) => [...prevTodoArray, { ...todo }]);
    //When addTodo it's time previus alrady exits todo are exit to pass call back and  prevTodo array to new array create and prevArry as its store and add another todo as it is store spread syntax
    toast.success("Todo Added Successfully");
  };

  const updateTodo = (id, todo) => {
    setTodos((prevTodoArray) =>
      prevTodoArray.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    ); //prevTodoArray we loop pass .map method to all todo access todo are a object and obj to one id pass to match id (id is a update todo id) match check weather true to return new todo value else prevTodo value return
    toast.success("Todo Update Successfully");
  };

  const deleteTodo = (id) => {
    setTodos((prevTodoArray) =>
      prevTodoArray.filter((prevTodo) => prevTodo.id !== id)
    ); //To todo array under filter method to check array undre obj id not equal pass the is each type todo are creted new array to delete
    toast.warn("Todo Deleted!");
  };

  const toggleComplete = (id) => {
    setTodos((prevTodoArray) =>
      prevTodoArray.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    ); //all todo under mathod used map method and check prevTodo are match passed id if match to prevTodo value  as it is set and  prevtodo under obj completed value overwrite  value will be toggle !completed and other wise false prevTodo return
  };

  //get localstorege data
  useEffect(() => {
    const localStorageTodos = JSON.parse(localStorage.getItem("todos")); //aplication when frist time loaded todo are get localstorege every time to object form to used JSON.parse because localstorege data will be retrive string format

    if (localStorageTodos && localStorageTodos.length > 0) {
      //check localstorage data are exit or not also length because todo array
      setTodos(localStorageTodos);
    }
  }, []);

  //set data localstorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8 rounded-lg">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo from goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/* Loop and add todoItem */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                {/*Every todo item loop to div repeted every div are unique are not to pass key because same todo element same to react not updated dom to pass keys unique id also not best but add also index pass array*/}
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
        <ToastContainer />
      </div>
    </TodoProvider>
  );
}

export default App;
