"use client";

import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";

const office = {
  address: "Gombe, Kinshasa, Democratic Republic of the Congo",
  longitude: 15.3139,
  latitude: -4.3276,
};

export default function AdressMap() {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const [mapStatus, setMapStatus] = useState<"loading" | "ready" | "missing" | "error">(
    "loading",
  );

  useEffect(() => {
    const mapContainer = mapContainerRef.current;

    if (!mapContainer) return;
    if (mapRef.current) return;

    let isMounted = true;

    async function loadMapboxToken() {
      if (process.env.NEXT_PUBLIC_MAPBOX_TOKEN) {
        return process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
      }

      if (process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN) {
        return process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
      }

      const response = await fetch("/api/mapbox-token", { cache: "no-store" });
      if (!response.ok) {
        return "";
      }

      const data = (await response.json()) as { token?: string };
      return data.token ?? "";
    }

    async function initializeMap() {
      const token = await loadMapboxToken();

      if (!isMounted) return;

      if (!token) {
        setMapStatus("missing");
        return;
      }

      mapboxgl.accessToken = token;

      mapRef.current = new mapboxgl.Map({
        container: mapContainer as HTMLElement,
        style: "mapbox://styles/mapbox/light-v11",
        center: [office.longitude, office.latitude],
        zoom: 14,
      });

      mapRef.current.on("load", () => {
        if (isMounted) {
          setMapStatus("ready");
        }
      });

      mapRef.current.on("error", () => {
        if (isMounted) {
          setMapStatus("error");
        }
      });

      mapRef.current.addControl(new mapboxgl.NavigationControl(), "top-right");

      const markerElement = document.createElement("div");
      markerElement.className = "adress-map__marker";

      new mapboxgl.Marker({ element: markerElement })
        .setLngLat([office.longitude, office.latitude])
        .setPopup(
          new mapboxgl.Popup({
            offset: 18,
            className: "adress-map__popup",
          }).setHTML(
            `<div class="adress-map__popup-inner">
              <p class="adress-map__eyebrow">Cabinet Nyamugabo</p>
              <h3 class="adress-map__title">Office Location</h3>
              <p class="adress-map__text">${office.address}</p>
            </div>`,
          ),
        )
        .addTo(mapRef.current);
    }

    initializeMap().catch(() => {
      if (isMounted) {
        setMapStatus("error");
      }
    });

    return () => {
      isMounted = false;
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div className="adress-map relative h-[420px] w-full overflow-hidden bg-[#eef2f6]">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-[linear-gradient(180deg,rgba(15,23,42,0.10),rgba(15,23,42,0))]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-[linear-gradient(0deg,rgba(255,255,255,0.18),rgba(255,255,255,0))]" />
      <div ref={mapContainerRef} className="h-full w-full" />
      {mapStatus === "missing" ? (
        <div className="absolute inset-0 flex items-center justify-center bg-[#eef2f6] p-8 text-center text-sm leading-7 text-slate-600">
          Add your Mapbox public token to
          {" "}
          <code className="mx-1 rounded bg-white px-2 py-1 text-slate-950">
            NEXT_PUBLIC_MAPBOX_TOKEN
          </code>
          to display the office map here.
        </div>
      ) : null}
      {mapStatus === "error" ? (
        <div className="absolute inset-0 flex items-center justify-center bg-[#eef2f6] p-8 text-center text-sm leading-7 text-slate-600">
          The office map could not be loaded. Please check the Mapbox token
          restrictions for this domain.
        </div>
      ) : null}
    </div>
  );
}
