import React, {useEffect} from 'react';
import 'ol/ol.css'
import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';
import XYZ from 'ol/source/XYZ';

function Mapa() {
    
    const key = 'W5lV2tLMxZAza9GGxomX#2.0/52.99805/-113.51074';
    const attributionsTiles = '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> ';

    /**Satelital*/
    const satelital = new TileLayer({
      title: 'Satelital',
      type: 'base',
      visible: true,
      source: new XYZ({
        attributions: attributionsTiles,
        url:
          'https://api.maptiler.com/tiles/satellite-v2/{z}/{x}/{y}.jpg?key=' +
          key,
        tilePixelRatio: 2, // THIS IS IMPORTANT
      })
    });

    useEffect(() => {
      //Crear el mapa
      const map = new Map({
        target: 'map',
        layers: [
          satelital
        ],
        view: new View({
          center: [-5000000, 3500000],
          zoom: 4,
          rotation: 0.5,
        }),
      });
      return () => map.setTarget(null)
    }, []);

    return (
      <div style={{height:'100vh',width:'100%', position: 'absolute'}} id="map" className="map-container" />
    );
}

export default Mapa;