import * as React from 'react';
import ReactMapGL from 'react-map-gl';
import defaultMapStyle, { journalLayer } from '../map/mapStyle';

import { FeatureCollection } from 'geojson';
import { GeoJSONSourceRaw } from 'mapbox-gl';
import InteractiveMap, { MapEvent } from 'react-map-gl';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;
const initialState = {
  mapStyle: defaultMapStyle,
  viewport: {
    height: 200,
    latitude: 0,
    longitude: 0,
    width: 320,
    zoom: 1,
  },
};
type State = typeof initialState;
type Viewport = typeof initialState.viewport;

interface IFeatures {
  [name: string]: any,
};
export interface IJournalMapProps {
  countries?: FeatureCollection,
}

export default class IJournalMap extends React.Component<IJournalMapProps, State> {
  public state: State = initialState;
  private reactMap: InteractiveMap;

  public onClickMap = (e: MapEvent) => {
    const features: IFeatures[] = e.features;
    const journalFeature = features[0];

    if (journalFeature 
      && journalFeature.source === 'journalCountry'
      && journalFeature.properties
    ) {
      alert(journalFeature.properties.name);
    }
  }

  public onMapLoad = () => {
    const { countries } = this.props;
    const map = this.reactMap.getMap();
    const source: GeoJSONSourceRaw = {
      data: countries,
      type: 'geojson',
    }

    map.addSource('journalCountry', source);
    map.addLayer(journalLayer);
  }

  public updateViewport = (viewport: Viewport) => {
    this.setState(prevState => ({
      viewport: { ...prevState.viewport, ...viewport },
    }));
  };

  public render() {
    const { viewport, mapStyle } = this.state;

    return (
      <ReactMapGL
        ref={(reactMap) => { this.reactMap = reactMap!; }}
        {...viewport}
        mapStyle={mapStyle}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        onViewportChange={this.updateViewport}
        onLoad={this.onMapLoad}
        onClick={this.onClickMap}
      />
    );
  }
}
