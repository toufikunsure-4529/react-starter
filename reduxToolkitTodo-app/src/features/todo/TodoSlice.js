import { createSlice, nanoid } from "@reduxjs/toolkit"; //nanoid generate a unique id 

//intial State value default state we create array/object as my choice
const initialState = {
  todos: [
    {
      id: 1,
      text: 'Hello World'
    }
  ]
}


//Slice is the reducer funcalaty big version createSlice method under obejct pass and all property add
export const todoSlice = createSlice({
  name: 'todo', //name property is slice reseved property and pass value slices name so it's not important only devtools show this slices name
  initialState: initialState,//pass intial state value property & value

  reducers: {  //reducer under object create property and function full defination write not declaraation only

    addTodo: (state, action) => {//function access [state is a intialState property and value access] || [action can receved value pass from state means id/todoMsg can access value this access property] 

      const todo = {
        id: nanoid(),//redux-toolkit to generate unique id
        text: action.payload //action under payload as a object and access todo text value one todo
      }
      state.todos.push(todo) //state under initialstate under todos array object pushed todo addTodo object 
    },


    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)  //todos under filter mthod to todo id and action under payload pass unique id not same to remove todo
    },


    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) => todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo)
    }


  }
})

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions //export all functality this functiolity thorogh todo update state to be work for components Note: todoSlice.actions  to  destructure value

export default todoSlice.reducer  //store awarness to all reducer register value pass to be update