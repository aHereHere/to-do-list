
import './App.css';
import { useState } from 'react';
import Item from './item';

function App() {
  var [tasks,setTasks]=useState([]);
  var [value,setValue]=useState("");

  function handleChange(Event)
  {
    setValue(Event.target.value);
  }
  function handleClick()
  {
    if(value)
    setTasks((prev)=>{var newArr=[...prev,value];
    setValue("");
  return newArr;});
  
    
    
  }
  function handleDelete(itemNo)
  {
    
    setTasks((prev)=>prev.filter((p,index)=>index!==itemNo));
   
  }
  return (
  <div >
    <input type='text' value={value} onChange={handleChange}>

    </input>
    <button  onClick={handleClick} class="btn btn-outline-dark add">Add the task</button>
     {
      
      tasks.map((t,index)=>
     <Item itemName={t} itemNo={index} onClick={handleDelete}/>)
     }
    </div>
  );
}

export default App;
