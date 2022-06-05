import React,{useContext,useReducer} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TodosContext from './Context';
import reducer from './Reducer';
import TodoForm from './Components/TodoForm';
import TodosList from './Components/TodoList';

import reportWebVitals from './reportWebVitals';

 const App = () => {
  const initialState =useContext(TodosContext);
  const[state,dispatch]=useReducer(reducer,initialState)


   return (
     < >
     <TodosContext.Provider value={{state,dispatch}}>
       <TodoForm />
       <TodosList />

     </TodosContext.Provider>
     </>
   )
 }
 
 export default App

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
if(module.hot){
  module.hot.accept();
}


reportWebVitals();
