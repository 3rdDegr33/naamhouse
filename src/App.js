import React , {useEffect} from "react"
import './App.css';
import axios from 'axios';
import Map from "./navigation/Map";
function App() { 
  const TOKEN = process.env.REACT_APP_BEARER_TOKEN;

  useEffect(()=>{
    axios.get("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search" , {  
      headers: {
            Authorization: `Bearer ${TOKEN}`,
            withCredentials: true,
            "Access-Control-Allow-Origin": "*",
            'Content-Type':  'application/json'
          }, params: {
                term: 'food',
                location: 'NYC'
               
            }

    })
    
    .then(({data})=>console.log(data) )
  },[])
  
  return (
       <Map/>
  );
}

export default App;
