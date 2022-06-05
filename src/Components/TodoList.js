import React ,{useContext}from "react";
import TodosContext from "../Context";
import { MdModeEditOutline ,MdDelete} from "react-icons/md";

const TodoList = () => {

    const{state,dispatch}=useContext(TodosContext);

    const title=state.todos.length>0? `${state.todos.length} Todos` : "Nothing to DO";

  return (
    
    <div  className="container mx-auto max-w-md max-w-xl text-center font-mono py-4 ">

    
        <h1 className="text-bold text-5xl m-2" > {title}</h1>

        <br />

        <ul className="list-reset p-0">
            
    {state.todos.map((todo)=>(

     <li 
      key={todo.id}
      className=" max-w-xl items-center text-3xl bg-red-400 border-black  border-dashed  border-2 my-2 py-4 flex"
      >
          
    <span 
    onDoubleClick={(()=>dispatch({type:"TOGGLE_TODO",payload:todo}))}
     className={ `${ todo.complete ? "bg-cyan-600 line-through cursor-pointer flex-1 ml-12":"cursor-pointer flex-1 ml-12"}`}>
        {todo.text}
    </span>

    <button 
    style={{color:"blue"}}
    onClick={()=>dispatch({type:"SET_CURRENT_TODO",payload:todo})}>
        < MdModeEditOutline  className="mx-auto m-2"/>
    </button>

    <button 
    onClick={()=>dispatch({type:"REMOVE_TODO",payload:todo})}
    style={{color:"brown"}}
    >
    <MdDelete  className="mx-auto m-2"/>
    </button>

    </li>
                 ))}
    </ul>
    </div>
    
    
  )
}

export default TodoList
