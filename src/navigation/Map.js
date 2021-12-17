import * as React from 'react';
import { useState } from 'react';
import ReactMapGL , { Marker  , NavigationControl} from 'react-map-gl';
// import { BoxIconElement } from 'boxicons';
function Map() {
  const map_key =   process.env.REACT_APP_MAP_KEY
  const [viewport, setViewport] = useState({
    width :400,
    height :400,
    longitude: -77.03631965305111,
    latitude: 38.898013005557324,
    zoom: 14,
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
      mapStyle={'mapbox://styles/mapbox/streets-v9'}
      mapboxApiAccessToken={ map_key}
      onViewportChange={nextViewport => setViewport(nextViewport)}
      >   <NavigationControl style={navControlStyle} />
          <Marker
           latitude={38.898013005557324}
           longitude={-77.03631965305111}
           offsetLeft={-20}
           offsetTop={-10}
         
           >  
           <i className='bx bxs-map'style={{fontSize: `${viewport.zoom * 0.2}rem`}}></i>
            
        </Marker>
       </ReactMapGL>
      </>
  )
}
export default Map;  
