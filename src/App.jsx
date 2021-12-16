import React, {useEffect} from 'react';
import { findRenderedComponentWithType } from 'react-dom/cjs/react-dom-test-utils.production.min';
import './App.css';
import Navbar from './components/Navbar';
import axios from 'axios';
// import { Route, Switch } from 'react-router';

function App() {
  const TOKEN = process.env.REACT_APP_BEARER_TOKEN;
  const URL = 'https://cors-anywhere.herokuapp.com/';

  useEffect(()=>{
    axios.get(`${URL}https://api.yelp.com/v3/businesses/search` , {  
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
    .then((resp)=>console.log(resp))
  },[]);

  return (
    <>
    
    </>
  );
}

export default App;
