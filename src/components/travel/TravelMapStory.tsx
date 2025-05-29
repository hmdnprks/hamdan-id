'use client';

import { useRef } from 'react';
import MapboxMap, { MapboxMapRef } from './MapboxMap';
import ScrollStory from './ScrollStory';

export default function TravelMapStory() {
  const mapRef = useRef<MapboxMapRef>(null);

  return (
    <section className="w-full h-[2000px] grid grid-cols-1 md:grid-cols-2">
      <div className="sticky top-0 h-screen">
        <MapboxMap ref={mapRef} />
      </div>

      <div className="overflow-y-auto max-h-[2000px] px-6 py-12">
        <ScrollStory onFlyTo={(id) => mapRef.current?.flyToLocation(id)} />
      </div>
    </section>
  );
}
