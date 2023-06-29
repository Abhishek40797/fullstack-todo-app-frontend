import { todoProps } from '../interfaces';

interface IProps {
    todolist : todoProps,
    deleteTodoItem : (id:string)=>  void,
    updateTodoItem : (id:string,item:string)=>void
}

const TodoLists = (props:IProps) => {
    const {todolist,deleteTodoItem,updateTodoItem} = props
    return (
        <>
            <li>
                {todolist.item}
                <i className="bi bi-pencil-square" onClick={()=>updateTodoItem(todolist._id,todolist.item)}></i>
                <i className="bi bi-trash-fill" onClick={()=>deleteTodoItem(todolist._id)}></i>
            </li>
        </>
    )
}

export default TodoLists;