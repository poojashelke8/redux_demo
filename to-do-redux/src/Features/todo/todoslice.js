// import {createSlice,nanoid} from "@reduxjs/toolkit"


// const initialstate = {
//     todos:[],
// }

// export const todoSlice = createSlice({
//     name:'todo',
//     initialstate,
//     reducers:{
//         addTodo: (state,action)=>{
//            const  todo ={
//             id:nanoid(),
//             text:action.payload,
//            }
//            state.todos.push(todo)
//         },
//         removeTodo:(state,action)=>{
//             state.todos.filter((todo)=>
//             todo.id !== action.payload)
//         }
//     }
// })

// export const {addTodo,removeTodo} = todoSlice.actions

// export default todoSlice.reducer

import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      state.push(newTodo);
    },
    toggleComplete: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});
export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;