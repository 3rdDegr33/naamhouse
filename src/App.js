import React , {useEffect, useState} from "react"
import './App.css';
import axios from 'axios';
import Map from "./navigation/Map";
function App() { 
  const [center , setCenter ] = useState([])
  const TOKEN = process.env.REACT_APP_BEARER_TOKEN;
  const VS_KEY = process.env.REACT_APP_VS_KEY
  useEffect(()=>{
    axios.get(`https://sandbox-api.va.gov/services/va_facilities/v0/facilities`, {  
      headers: {
       'apikey': `${VS_KEY}`,
     'Accept': 'application/json',
     'Content-Type': 'application/json'
   } ,
   params:{
     page:1,
     per_page:10,
     state:'NY'
   }
 } ).then(({data: {data}}) => setCenter(data)) 
  },[])
  
  return (
    <>
       <Map center = {center}/>
       {center.map((e,i)=>(
         <p key={i}>{e.attributes.name}</p>
       ))}
       
    </>

  );
}

export default App;
