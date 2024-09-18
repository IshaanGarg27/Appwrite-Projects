import { createSlice } from "@reduxjs/toolkit";
import { ID } from "appwrite";

const initialState = {
    todos : [{id: "" , text: ""}]
}
// console.log(initialState)

const todoSlice = createSlice({
    name: "todoItems",
    initialState,
    reducers: {
        addTodo: (state , action) => {
            const todo = {
                id: ID,
                text: action.payload
            }
            state.todos.push(todo)
        },
        deleteTodo: (state , action) => {
            state.todos = state.todos.filter((item) => item.id != action.payload) 
        }
    }
})


export const {addTodo , deleteTodo} = todoSlice.actions
export default todoSlice.reducer