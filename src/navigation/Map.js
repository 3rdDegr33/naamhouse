import * as React from 'react';
import { useState , useRef} from 'react';
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import mapboxgl from "mapbox-gl";
import Geocoder from "react-map-gl-geocoder";
import ReactMapGL , { Marker  , NavigationControl , Layer , GeolocateControl} from 'react-map-gl';
// import { BoxIconElement } from 'boxicons';
function Map({center , reveal , selected}) {
  const map_key =   process.env.REACT_APP_MAP_KEY
  const [viewport, setViewport] = useState({
    width :695,
    height :786,
    longitude: -74.00318494933525,
    latitude: 40.71432627313285,
    zoom: 10,
    bearing: 0,
    pitch: 0
  });
  const navControlStyle= {
    right: 10,
    top: 10,
    height: 20,
    width: 30
  };
  const mapRef = useRef();
  return (
      <>
    <ReactMapGL
      {...viewport}
      mapStyle={'mapbox://styles/azizx/ckx9tq76j2ple14p5avro28at'}
      mapboxApiAccessToken={ map_key}
      onViewportChange={nextViewport => setViewport(nextViewport)}
      maxZoom={18}
      >
          <GeolocateControl 
          enableHighAccuracy={true}
          showUserHeading={true}
          trackUserLocation={true}
          />   
      <NavigationControl style={navControlStyle} />
      {/* <Geocoder
         mapRef={mapRef}
         onViewportChange={nextViewport => setViewport(nextViewport)}
         mapboxApiAccessToken={ map_key}
         position="top-left"
      /> */}
           <Marker
              longitude = {-73.96892359984999}
              latitude = {40.778856033719066}
           >
           <span id='pin' className='i-pin-card-map mapboxgl-marker mapboxgl-marker-anchor-center location' >
               <span className='popup'>You are Here!!</span>
                   </span>
           </Marker>
             {center.map((e , i) =>(
               <Marker key={i}
                latitude={e.attributes.lat}
                longitude={e.attributes.long}
                offsetTop={-22} 
               >

                   <span onClick={()=>reveal(`${e.id}`)} className={`i-pin-card-map mapboxgl-marker mapboxgl-marker-anchor-center ${selected === e.id?'pin-sel':''}`}>
                     {`${String.fromCharCode(65+i)}`}
                   </span>
               </Marker>
             ))}
      
    
       </ReactMapGL>
      </>
  )
}
export default Map;  
