import * as React from 'react';
import { useState } from 'react';
import mapboxgl from "mapbox-gl";
import ReactMapGL , { Marker  , NavigationControl , Layer} from 'react-map-gl';
// import { BoxIconElement } from 'boxicons';
function Map({center}) {
  const map_key =   process.env.REACT_APP_MAP_KEY
  const [viewport, setViewport] = useState({
    width :695,
    height :694,
    longitude: -74.00318494933525,
    latitude: 40.71432627313285,
    zoom: 10,
    bearing: 0,
    pitch: 0
  });
  const navControlStyle= {
    right: 10,
    top: 10
  };

  return (
      <>
    <ReactMapGL
      {...viewport}
      mapStyle={'mapbox://styles/azizx/ckx9tq76j2ple14p5avro28at'}
      mapboxApiAccessToken={ map_key}
      onViewportChange={nextViewport => setViewport(nextViewport)}
      maxZoom={18}
      >   <NavigationControl style={navControlStyle} />
         
             {center.map((e , i) =>(
               <Marker key={i}
                latitude={e.attributes.lat}
                longitude={e.attributes.long}
                offsetTop={-22}
               >
                   <span className='i-pin-card-map mapboxgl-marker mapboxgl-marker-anchor-center'>
                     A
                   </span>
               </Marker>
             ))}
      
    
       </ReactMapGL>
      </>
  )
}
export default Map;  
