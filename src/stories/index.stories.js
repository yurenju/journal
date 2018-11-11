import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import styled from 'styled-components';
import { loadFontAwesome } from '../utils';

import { Button, Welcome } from '@storybook/react/demo';
import Card from '../components/Card';
import JournalMap from '../components/JournalMap';
import santorini from './santorini.jpg';

loadFontAwesome();

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Card', module).add('Regular', () => {
  const StyledBlock = styled.div`
    width: 10rem;
  `;

  return (
    <StyledBlock>
      <Card image={santorini} />
    </StyledBlock>
  );
});

storiesOf('JournalMap', module).add('default', () => {
  const geoCountries = {
    features: [
      {
        geometry: {
          coordinates:[[[61.21,35.65],[62.23,35.27],[62.984,35.404],[63.193,35.857],[64.546,36.312],[64.746,37.111],[66.518,37.362],[67.83,37.144],[68.135,37.023],[69.518,37.608],[70.116,37.588],[70.806,38.486],[71.541,37.905],[71.448,37.065],[71.844,36.738],[73.26,37.495],[74.98,37.419],[75.158,37.133],[74.067,36.836],[71.846,36.509],[71.262,36.074],[71.613,35.153],[71.115,34.733],[70.881,33.988],[70.323,33.358],[69.687,33.105],[68.926,31.62],[67.792,31.582],[66.938,31.304],[66.381,30.738],[66.346,29.887],[65.046,29.472],[64.35,29.56],[62.549,29.318],[60.874,29.829],[61.781,30.735],[61.699,31.379],[60.941,31.548],[60.536,32.981],[60.528,33.676],[61.21,35.65]]],
          type: 'Polygon'
        },
        id: 'AFG',
        properties: { name: 'Afghanistan' },
        type: 'Feature'
      },
      {
        geometry: {
          coordinates:[[[[23.912,-10.926],[24.016,-12.911],[21.933,-12.898],[21.887,-16.08],[23.215,-17.523],[21.377,-17.93],[18.956,-17.789],[18.263,-17.309],[14.209,-17.353],[13.462,-16.971],[12.814,-16.941],[11.734,-17.301],[11.778,-15.793],[12.175,-14.449],[12.738,-13.137],[13.633,-12.038],[13.686,-10.731],[12.875,-9.166],[13.236,-8.562],[12.728,-6.927],[12.322,-6.1],[13.375,-5.864],[16.326,-5.877],[16.86,-7.222],[17.472,-8.068],[18.464,-7.847],[19.016,-7.988],[19.417,-7.155],[21.728,-7.29],[21.949,-8.305],[21.875,-9.523],[22.208,-9.894],[22.155,-11.084],[23.912,-10.926]]],[[[12.182,-5.789],[11.914,-5.037],[12.62,-4.438],[12.995,-4.781],[12.182,-5.789]]]],
          type: 'MultiPolygon'
        },
        id: 'AGO',
        properties: { name: 'Angola' },
        type: 'Feature'
      },
    ],
    type: 'FeatureCollection'
  };

  return (
    <JournalMap countries={geoCountries} />
  );
});

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
