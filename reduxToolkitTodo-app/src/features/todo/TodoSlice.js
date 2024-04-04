import { createSlice, nanoid } from "@reduxjs/toolkit"; //nanoid generate a unique id 

const initialState = { //intial State value default state
  todos: [
    {
      id: 1,
      text: 'Hello World'
    }
  ]
}


export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {  //reducer under object create property and function full defination write not declaraation only
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),//redux-toolkit to generate unique id
        text: action.payload //action under payload under todo text value access payload is a object
      }
      state.todos.push(todo) //state under initialstate value push todos under 
    },  //function access state & action ==> state access intialState value & action under access state pass data  value access id when deleteTodo method call to id value access
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)  //todos under filter mthod to todo id and action under payload pass unique id not same to remove todo
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) => todo.id === action.payload ? { ...todo, text: action.payload.text } : todo)
    }
  }
})

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions //export all functality this functiolity thorogh todo update to be work for components

export default todoSlice.reducer  //store awarness to all reducer register value pass to be update