import React from 'react';
import { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

export function MyMap() {
  const apiKey = "pk.eyJ1IjoieWF5b2I1NDM0NiIsImEiOiJjbGZjYzluZXEwbmV6M3duMTIxNmdibGZxIn0.RxETwDK4UjmHPJkXQSF3Ow"
  
//   const satellite_view = "mapbox://styles/mapbox/satellite-v9";
  const initialCoords = new mapboxgl.LngLat(73.105589, 33.704615);
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = apiKey;

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
    // style: satellite_view,
      center: initialCoords,
      zoom: 12
    });

    return () => {
      mapRef.current.remove();
    };
  }, [apiKey, initialCoords]);

  return <div ref={mapContainerRef} style={{ height: '400px' }} />;
}
