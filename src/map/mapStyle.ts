import { Layer } from 'mapbox-gl';

const MAPBOX_STYLE: string = 'mapbox://styles/mapbox/streets-v9';
const journalLayer: Layer = {
  id: 'journalLayer',
  layout: {},
  paint: {
      'fill-color': '#080',
      'fill-opacity': 0.8
  },
  source: 'journalCountry',
  type: 'fill',
};

export { journalLayer };

export default MAPBOX_STYLE;
