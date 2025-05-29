'use client';

import { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import mapboxgl, { Map } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { locations } from './locations';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!;

export type MapboxMapRef = {
  flyToLocation: (id: string) => void;
};

const MapboxMap = forwardRef<MapboxMapRef>((_, ref) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<Map | null>(null);

  useImperativeHandle(ref, () => ({
    flyToLocation(id: string) {
      const loc = locations.find((l) => l.id === id);
      if (map.current && loc) {
        map.current.flyTo({
          center: loc.coordinates,
          zoom: 9,
          essential: true,
        });
      }
    },
  }));

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [113.9213, -0.7893],
      zoom: 4,
      pitch: 30,
      bearing: 0,
    });

    map.current.addControl(new mapboxgl.NavigationControl());

    locations.forEach((loc) => {
      const popup = new mapboxgl.Popup({ offset: 25 }).setText(loc.description);
      new mapboxgl.Marker({ color: '#FF5722' })
        .setLngLat(loc.coordinates)
        .setPopup(popup)
        .addTo(map.current!);
    });

    return () => {
      map.current?.remove();
    };
  }, []);

  return <div ref={mapContainer} className="w-full h-full min-h-[500px] rounded-lg" />;
});

MapboxMap.displayName = 'MapboxMap';
export default MapboxMap;
