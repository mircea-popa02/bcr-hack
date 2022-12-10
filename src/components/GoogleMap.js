import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useState, useCallback } from "react";
import React from "react";

const containerStyle = {
  width: "800px",
  height: "400px",
};

const center2 = {
  lat: -3.756,
  lng: -44.534,
};

const MyMap = (props) => {
  const center = {
    lat: 45.26667,
    lng: 27.95333,
  };

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
      zoom={13}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <Marker position={center}></Marker>
      {/* <Marker position={center2}></Marker> */}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default React.memo(MyMap);
