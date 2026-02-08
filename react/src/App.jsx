import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Timer, Input } from './component/Tools'; 

function App(){
const [todos, setTodos] = useState([]);
const list = (addTodo) => {
    setTodos([...todos, {id: Date.now(), content: addTodo }]);
  };

  function remove(id){
    const renewTodo= todos.filter(item => item.id !== id);
    setTodos(renewTodo)
  }



  
  return (
    <div>
      <h1>My Todos</h1>
      <Input add={list}/>
      <div className='inputTodos'>
        <ul>
          {todos.map((item) => (
            <span key={item.id}>
              {item.content}
              <button onClick={() => remove(item.id)}>Remove</button> 
              <br/>
            </span>
          ))}
        </ul>
      </div>

      <Timer time={0} />
    </div>
  );
}


export default App;