import React,{createContext, useContext,useReducer} from 'react';

const TodosContext=React.createContext({
todos:
    [{id:1,text:"Playing Football is great",complete:false},
    {id:2,text:"Cricket is also good",complete:false},
    {id:3,text:"Breakfast",complete:true}]
    ,
    currentTodo:{}

});
export default TodosContext;