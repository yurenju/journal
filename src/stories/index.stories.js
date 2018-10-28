import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import styled from 'styled-components';
import { loadFontAwesome } from '../utils';

import { Button, Welcome } from '@storybook/react/demo';
import Card from '../components/Card';
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
