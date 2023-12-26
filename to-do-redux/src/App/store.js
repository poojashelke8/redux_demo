// import {configureStore} from "@reduxjs/toolkit"
// import todoReducer from "../Features/todo/todoslice"



// export const store = configureStore({
//     reducer:todoReducer,

// })

import { configureStore } from "@reduxjs/toolkit"
import todoReducer from "../Features/todo/todoslice"

const store = configureStore({
 reducer: {
 todos: todoReducer,
 },
});

export default store;