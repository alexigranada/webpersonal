import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './map.css';

export default function Mapa () {
    
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lon] = useState(0);
    const [lat] = useState(45);
    const [zoom] = useState(2);
    const [API_KEY] = useState('W5lV2tLMxZAza9GGxomX');

    useEffect( ()=>{
        if (map.current) return; //Para el mapa para no iniciar más de una vez

        map.current = new maplibregl.Map({
            container: mapContainer.current,
            style:`https://api.maptiler.com/maps/satellite/style.json?key=${API_KEY}`,
            center: [lon, lat],
            zoom: zoom,
            bearing: 10,
            scaleControl: true,
            geolocateControl: true,
            attributionControl: false,
            minimap: {
                containerStyle: {
                  width: '200px',
                  height: '150px'
                }
            }
            
        });
        map.current.addControl(new maplibregl.NavigationControl(), 'bottom-left');
        //map.current.addControl(new maplibregl.ScaleControl());
        map.current.addControl(new maplibregl.FullscreenControl(), 'bottom-right');
        
        const marker = new maplibregl.Marker({color: "#FF0000"})
            .setLngLat([-76.552,3.379])
            .addTo(map.current);

        /**Mapas Base */
        const baseMaps = {
            "STREETS": {
              img: "https://cloud.maptiler.com/static/img/maps/streets.png"
            },
            "WINTER": {
              img: "https://cloud.maptiler.com/static/img/maps/winter.png"
            },
            "HYBRID": {
              img: "https://cloud.maptiler.com/static/img/maps/hybrid.png"
            }
        }

    }, [API_KEY, lon, lat, zoom]);

    return (
        <div className='map-wrap'>
            <div ref={mapContainer} className='mapa'/>
        </div>
    );
}