import React , {useEffect} from "react"
import './App.css';
import axios from 'axios';
import Map from "./navigation/Map";
function App() { 
  const TOKEN = process.env.REACT_APP_BEARER_TOKEN;
  const VS_KEY = process.env.REACT_APP_VS_KEY
  useEffect(()=>{
    axios.get(`https://sandbox-api.va.gov/services/va_facilities/v0/facilities?page=1&per_page=1&state=NY`, {  
      headers: {
       'apikey': `${VS_KEY}`,
     'Accept': 'application/json',
     'Content-Type': 'application/json'
   }
 } ).then(({data: {data}}) => console.log(data)) 
  },[])
  
  return (
    <>
       <Map/>
    </>

  );
}

export default App;
