import * as React from 'react';
import { useState } from 'react';
import ReactMapGL , { Marker } from 'react-map-gl';

function Map() {
  const map_key =   process.env.REACT_APP_MAP_KEY
  const [viewport, setViewport] = useState({
    width :400,
    height :400,
    longitude: -74.1,
    latitude: 40.7,
    zoom: 14,
    bearing: 0,
    pitch: 0
  });

  return (
      <>
    <ReactMapGL
      {...viewport}
      mapStyle={'mapbox://styles/mapbox/streets-v9'}
      mapboxApiAccessToken={ map_key}
      onViewportChange={nextViewport => setViewport(nextViewport)}
      >
          <Marker
           latitude={38.898013005557324}
           longitude={-77.03631965305111}
           offsetLeft={-20}
           offsetTop={-10}
        
          />
       </ReactMapGL>
      </>
  )
}
export default Map;  
