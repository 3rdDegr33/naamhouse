import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import React, { useState, useRef, useCallback } from "react";
import ReactMapGL , { Marker  , NavigationControl , Layer , GeolocateControl} from 'react-map-gl';

import MapGL from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";
const MAPBOX_TOKEN = process.env.REACT_APP_MAP_KEY

const Map2 = ({center , reveal , selected}) => {
  const [viewport, setViewport] = useState({
    width :695,
    height :786,  
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });
  const navControlStyle= {
    right: 10,
    top: 10,
    height: 20,
    width: 30
  };
  const goeLocationStyle = {
    right: 10,
    top: 100,
    height: 20,
    width: 30
  }
  const mapRef = useRef();
  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );

  // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
  const handleGeocoderViewportChange = useCallback(
    (newViewport) => {
      const geocoderDefaultOverrides = { transitionDuration: 1000 };

      return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides
      });
    },
    [handleViewportChange]
  );
  return (
    <>
      <MapGL
        ref={mapRef}
        {...viewport}
        maxZoom={18}
        mapStyle={'mapbox://styles/azizx/ckx9tq76j2ple14p5avro28at'}
        onViewportChange={handleViewportChange}
        mapboxApiAccessToken={MAPBOX_TOKEN}

      > 
       <NavigationControl style={navControlStyle} />
        <GeolocateControl 
          style={goeLocationStyle}
          enableHighAccuracy={true}
          showUserHeading={true}
          trackUserLocation={true}
          /> 
        <Geocoder
          mapRef={mapRef}
          // onResult={({result:{center}})=>(<Marker 
          //     longitude = {center[0]}
          //     latitude = {center[1]}
          //   />)}
          onViewportChange={handleGeocoderViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          position="top-left"
          reverseGeocode = {true}
          
        />
        <Marker
              longitude = {-73.96892359984999}
              latitude = {40.778856033719066}
              draggable= {true}
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
      </MapGL>
    </>
  );
};
export default Map2;