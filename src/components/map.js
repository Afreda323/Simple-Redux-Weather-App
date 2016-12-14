import React from 'react';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';

const Map = (props) => {
  return(
    <GoogleMapLoader
      containerElement= { <div className="map" /> }
      googleMapElement={
        <GoogleMap
            defaultZoom={12}
            defaultCenter={{lat: props.lat, lng: props.lon}}
            options={{ scrollwheel: false}}
            />
      }
     />
  )
}
export default Map;
