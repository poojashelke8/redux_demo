// import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { addTodo } from '../Features/todo/todoslice'

// const Addtodo = () => {

//     const [input,setInput] = useState('')
//     const dispatch = useDispatch()

//     const addHandler = (e) =>{
//         e.preventDefault()
//         dispatch(addTodo(input))
//         setInput('')

//     }
//   return (
//     <form onSubmit={addHandler}>
//         <input type='text'
//         placeholder='"Enter todo'
//         value={input}
//         onChange={(e)=> setInput(e.target.value)}/>
//         <button type='submit'>Add</button>
//     </form>
//   )
// }

// export default Addtodo