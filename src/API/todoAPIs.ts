import axios from "axios";

// const BASE_URL = "http://localhost:5000"
const BASE_URL = "https://fullstack-todo-app-backend-avk6.onrender.com"

export const fetchTodoData = async ()=>{
    const {data} = await axios.get(BASE_URL)
    return data;
}

export const addTodo = async (item:string)=>{
    await axios.post(`${BASE_URL}/save`,{item})
        .then(()=>console.log("Added successfully"))
        .catch((err)=>console.log(err))
}

export const updateTodo = async (_id:string,item:string)=>{
    await axios.post(`${BASE_URL}/update`,{_id,item})
        .then(()=>console.log("Updated successfully"))
        .catch((err)=>console.log(err))
}

export const deleteTodo = async (_id:string)=>{
    await axios.post(`${BASE_URL}/delete`,{_id})
        .then(()=>console.log("Deleted successfully"))
        .catch((err)=>console.log(err))
}