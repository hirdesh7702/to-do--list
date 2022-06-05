import React,{useState,useContext,useEffect} from "react";
import TodosContext from "../Context";
import { FaSearchLocation} from "react-icons/fa";


const TodoForm = () => {

const[todo,setTodo]=useState("");
const{  state:{currentTodo={}},dispatch}=useContext(TodosContext);  

useEffect(()=>{
    if(currentTodo.text){
        setTodo(currentTodo.text)
    }
    else{
        setTodo("")
    }
},[currentTodo.id]);

const handleSubmit=(event)=>{
    event.preventDefault();
    if(currentTodo.text){
        dispatch({type:"UPDATE_TODO",payload:todo})
    }else
    {
        dispatch({type:"ADD_TODO",payload:todo})
    }

setTodo("");
}
return (
   < >
   <form onSubmit={handleSubmit} className= "text-center p-10">
       <input
       type="text"
       className="border-black border-solid border-2 w-2/5 min-w-max h-12"
       onChange={(event)=>setTodo(event.target.value)}
       value={todo}
       ></input>
       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2 h-12"
       onClick={(event)=>handleSubmit(event)}
       
       
       > 
           search
           {/* <FaSearchLocation /> */}
       </button>

   </form>
   </>
  )
}

export default TodoForm