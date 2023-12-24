import {createSlice,nanoid} from "@reduxjs/toolkit"


const initialstate = {
    todos:[],
}

export const todoSlice = createSlice({
    name:'todo',
    initialstate,
    reducers:{
        addTodo: (state,action)=>{
           const  todo ={
            id:nanoid(),
            text:action.payload,
           }
           state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos.filter((todo)=>
            todo.id !== action.payload)
        }
    }
})

export const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer