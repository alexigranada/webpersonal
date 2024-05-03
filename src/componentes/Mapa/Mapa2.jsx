import React, { useState, useEffect, useRef } from 'react';
import { Feature, Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import 'ol/ol.css';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import XYZ from 'ol/source/XYZ';
import Style from 'ol/style/Style';
import Point from 'ol/geom/Point';
import {fromLonLat} from 'ol/proj';

function Mapa2() {
    const [map, setMap] = useState();
    const mapElement = useRef();

    const key = 'W5lV2tLMxZAza9GGxomX#2.0/52.99805/-113.51074';
    const attributionsTiles = '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> ';

    /**Satelital*/
    const satelital = new TileLayer({
      title: 'Satelital',
      type: 'base',
      visible: true,
      source: new XYZ({
        attributions: attributionsTiles,
        url: `https://api.maptiler.com/tiles/satellite-v2/{z}/{x}/{y}.jpg?key=${key}`,
        tilePixelRatio: 2, // THIS IS IMPORTANT
      })
    });

    const osmLayer = new TileLayer({
        preload: Infinity,
        source: new OSM(),
    });
    
    const iconFeature = new Feature({
        geometry: new Point([0, 0]),
        name: 'Null Island',
        population: 4000,
        rainfall: 500,
    });
    
    const vectorSource = new VectorSource({
        features: [iconFeature],
    });
    
    const vectorLayer = new VectorLayer({
        source: vectorSource,
    })

    useEffect(() => {
        if (!mapElement.current) return;

        const initialMap = new Map({
            target: mapElement.current, //mapElement.current
            layers: [satelital, vectorLayer],
            view: new View({
                center: [-5000000, 3500000],
                zoom: 4,
                rotation: 0.5,
              }),
          });

        setMap(initialMap);
        return () => {initialMap.setTarget(null)}
    }, []);


    return (
      <div style={{height:'100vh',width:'100%', position: 'absolute'}} ref={mapElement} className="map-container" />
    );
}

export default Mapa2;