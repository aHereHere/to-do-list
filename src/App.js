
import './App.css';
import { useState,useReducer } from 'react';
import Timer from './Timer';
import Item from './item';
var nextId=1;
function App() {
  var [value,setValue]=useState("");

  const initialTasks=[{id:0,task_text:"study"},{id:1,task_text:"play"}];
 
  const [tasks,dispatch]=useReducer(taskReducer,initialTasks);

  
 
  function handleChange(Event)
  {
    setValue(Event.target.value);
  }
  function handleAdd()
  {
    nextId+=1;
    if(value)
    dispatch(
  {
    id:nextId,
    task_text:value,
    value:'add'


  }
  );
  
    
    
  }
  function handleDelete(itemNo)
  {
    nextId--;
    
    dispatch(
      {
        id:itemNo,
        
        value:'delete'
    
    
      }
      );
   
  }

  function taskReducer(tasks,action)
  { var newArr=[];
    console.log(action.id);
    switch(action.value)
    {
      case 'add':{
        setValue("");
         newArr=[...tasks,{id:action.id,  task_text:action.task_text}];
        console.log(newArr);
      return newArr;}
      case 'delete':{  newArr=[];
      for(var i=0;i<tasks.length;i++)
        {
          if(i<action.id)
            newArr.push(tasks[i]);
          else if(i>action.id)
            {
              newArr.push({id:i-1,task_text:tasks[i].task_text});
            }
        }
        return newArr;}
        default:return tasks;


    }

  }
  
  return (
  <div >
  <div className="middle">
  <h3>Focus timer for your tasks:</h3>
  <Timer/>
  </div>
    <input type='text' value={value} onChange={handleChange}>

    </input>
    <button  onClick={handleAdd} class="btn btn-outline-dark add">Add the task</button>
     {
      
      tasks.map(
        (t,index)=>
     <Item itemName={t.task_text} itemNo={t.id} onClick={()=>handleDelete(t.id)}/>)
     }
    </div>
  );
}

export default App;
