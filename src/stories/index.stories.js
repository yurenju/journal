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
import afghanistan from './assets/afghanistan.json';
import angola from './assets/angola.json';

loadFontAwesome();

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

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

    const cards = new Array(6).fill(0).map((_, index) => {
      const num = index + 1;
      const images = new Array(num)
        .fill(0)
        .map((_, index) => `https://fakeimg.pl/350x200/?text=${index}`);

      return (
        <StyledBlock key={index}>
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
