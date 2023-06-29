import React, { useCallback, useEffect, useState } from 'react';
import { addTodo, deleteTodo, fetchTodoData, updateTodo } from '../API/todoAPIs';
import TodoLists from '../Components/TodoLists';
import { todoProps } from '../interfaces';

const Todo = () => {
    const [item,setItem] = useState<string>("");
    const [todo,setTodo] = useState<todoProps[]>([])
    const [isUpdate,setIsUpdate] = useState(false)
    const [itemId,setItemId] = useState("")

    const getTodoData = async ()=>{
        const res = await fetchTodoData()
        setTodo(res)
    }

    const handleToggleButton = useCallback( ()=>{
        if(!item.length) {
            return
        }
        else if(isUpdate) {
            updateTodo(itemId,item)
            setIsUpdate(false)
            setItem("")
            getTodoData()
        }
        else {
            addTodo(item)
            setItem("")
            getTodoData()
        }
    },[item,itemId])

    const deleteTodoItem = useCallback((id:string)=>{
        deleteTodo(id)
        getTodoData()
    },[])

    const updateTodoItem = (id:string,item:string)=> {
        setIsUpdate(true)
        setItem(item)
        setItemId(id)
    }

    useEffect(()=>{
        getTodoData()
    },[handleToggleButton,deleteTodoItem])

    return (
        <>
            <h2>Full Stack Todo-app</h2>
            <div className="todo-container">
                <input
                    type="text"
                    placeholder="write task here"
                    spellCheck={false}
                    value={item}
                    onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setItem(e.target.value)}
                />
                <button 
                    onClick={handleToggleButton} >
                    {isUpdate?"Update":"Add"}
                </button>

                {
                    todo.map((item)=>{
                        return (
                            <TodoLists 
                                key={item._id} 
                                todolist={item} 
                                deleteTodoItem={deleteTodoItem}
                                updateTodoItem={updateTodoItem}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}
export default Todo;