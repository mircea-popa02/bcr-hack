import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useState, useCallback } from "react";
import React from "react";

const containerStyle = {
  width: "800px",
  height: "400px",
};

const defaultMapOptions = {
  fullscreenControl: false,
};
const demoFancyMapStyles = require("../components/demoFancyMapStyles.json");
const MyMap = (props) => {
  console.log(props)
  const center = {
    lat: 0,
    lng: 0,
  };

  center.lat = props.latitude;
  center.lng = props.longitude;

  console.log(center)

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDtMSRiyaavuMQA_DFwYglfSGCDKSd6zbc",
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}

      center={center}
      zoom={11}
      fullscreenControl={false}
      defaultMapOptions={defaultMapOptions}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <Marker
      position={center}
      ></Marker>
      {/* <Marker position={center2}></Marker> */}

      
    </GoogleMap>
  ) : (
    <></>
  );
};

export default React.memo(MyMap);
