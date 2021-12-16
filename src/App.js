import React , {useEffect} from "react"
import './App.css';
import axios from 'axios';

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
    
    .then((resp)=>console.log(resp) )
  },[])
  
  return (
    <div className="App">

    </div>
  );
}

export default App;
