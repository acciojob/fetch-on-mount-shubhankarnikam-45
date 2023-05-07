
import React from "react";
import './../styles/App.css';
import { useEffect,useState } from "react";
const App = () => {

  let[info,setInfo]=useState([]);
  console.log("info",info)
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>response.json()) 
    .then((data)=>{
      console.log("data",data)
      setInfo(data)
    })
    .catch((err)=>console.log(err))
   },[])
  return (
    <div>
        {
            info.map((value,index)=>(
              <div key={index}>
              
                <h1>{value.id}. {value.title}</h1>
                <p>{value.body}</p>
              </div>
            ))
        }
    </div>
  )
}

export default App
