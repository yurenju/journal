import React from 'react';

import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import { loadFontAwesome } from '../utils';
import { Card } from '../components/Card';
import JournalMap from '../components/JournalMap';
import santorini from './santorini.jpg';
import afghanistan from './assets/afghanistan.json';
import angola from './assets/angola.json';

loadFontAwesome();

storiesOf('Card', module)
  .add('Regular', () => {
    const StyledBlock = styled.div`
      width: 10rem;
      margin-bottom: 1rem;
    `;

    return (
      <div>
        <StyledBlock>
          <Card inner={false} images={[santorini]} />
        </StyledBlock>
        <StyledBlock>
          <Card images={[santorini]} />
        </StyledBlock>
      </div>
    );
  })
  .add('Multiple Images', () => {
    const StyledBlock = styled.div`
      width: 10rem;
      margin-bottom: 1rem;
    `;

    const cards = new Array(6).fill(0).map((_, i) => {
      const num = i + 1;
      const images = new Array(num).fill(0).map((__, j) => `https://fakeimg.pl/350x200/?text=${j}`);

      return (
        <StyledBlock key={i}>
          <Card inner={false} images={images} />
        </StyledBlock>
      );
    });

    return <div>{cards}</div>;
  });

storiesOf('JournalMap', module).add('default', () => {
  const geoCountries = {
    features: [afghanistan, angola],
    type: 'FeatureCollection'
  };

  return <JournalMap countries={geoCountries} />;
});
