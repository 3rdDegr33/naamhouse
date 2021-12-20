import React , {useEffect, useState} from "react"
// import './App.css';
import axios from 'axios';
import Map from "../components/Map/Map";
import Doc from "../components/Map/Doc";
import Scanner from "../components/Scanner/Scanner";
function Main() { 
  const [center , setCenter ] = useState([])
  const [info  , setInfo ] = useState({})
  const [selected , setSelected] = useState('')
  const [value , setValue] = useState('')
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
     per_page:14,
     state:'NY'
   }
 } ).then(({data: {data}}) => setCenter(data)) 
  },[])
  const reveal = (target)=>{
        setSelected(target)
  }
  const handleFetch = ()=>{
        //
        for (const val of center){
          const {attributes:{name , phone:{fax , main}}} = val 
          for (const {zip , address_1 , address_2 , city , state} of [val.attributes.address.physical]){
                  console.log(` name: ${name} | main: ${main} | fax: ${fax} address1: ${address_1} | address2 : ${address_2} | city:${city} | state:${state} | ${zip}`)
          }
        }
      }
  const handleCenter = (cord)=>{
       setValue(cord)
  } 
  return (
    <div id='main'>
       <Doc center={center} selected={selected}/>
       <Map center = {center} reveal={reveal} selected={selected} handleCenter ={handleCenter}/>
        <Scanner value={value}/>
    </div>
  );
}

export default Main;
