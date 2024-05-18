import { useState,useEffect } from "react";


export default function Timer()
{
    const [isRunning,setRun]=useState(false);
const [remaining,setRem]=useState(0);
    useEffect(()=>{
        var intervalId;
        if(isRunning)
            {
                 intervalId=setInterval(()=>{
                    if(remaining<1000)
                        {setRem(0);
                            trigger();
                        }
                        else
                setRem(remaining-1000);

                },1000);
            }
            return ()=>clearInterval(intervalId);
    },[isRunning,remaining]);
    function trigger()
    {
        
            setRun(!isRunning);
    }
    function handleChange(e)
    {
        setRem(e.target.value*1000);
    }
    return(
    <div>
    <input type='number' onChange={handleChange}></input>
     <button onClick={trigger}>{isRunning?"Pause":"Play"}</button>
     <h3>{Math.floor(remaining/3600000)}:{Math.floor((remaining%3600000)/60000)}:{Math.floor((remaining%60000)/1000)}</h3>
     </div>); 
}