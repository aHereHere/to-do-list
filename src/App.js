
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
    setTasks((prev)=>{var newArr=[...prev,value];
    setValue("");
  return newArr;});
  console.log(tasks);
    
    
  }
  function handleDelete(itemNo)
  {
    
    setTasks((prev)=>prev.filter((p,index)=>index!==itemNo));
   
  }
  return (
  <div >
    <input type='text' value={value} onChange={handleChange}>

    </input>
    <button  onClick={handleClick}>Add the task(Click on task to delete)</button>
     {
      
      tasks.map((t,index)=>
     <Item itemName={t} itemNo={index} onClick={handleDelete}/>)
     }
    </div>
  );
}

export default App;
