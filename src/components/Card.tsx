import * as React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface ICardProps {
  image: string;
  date: Date;
  country: string;
  cities: Array<string>;
}

export interface ICardState {}

export default class ICard extends React.Component<ICardProps, ICardState> {
  public static defaultProps: Partial<ICardProps> = {
    date: new Date(),
    country: 'Greece',
    cities: ['Athens', 'Santorini']
  };

  constructor(props: ICardProps) {
    super(props);

    this.state = {};
  }

  public render() {
    const Container = styled.div`
      background-image: linear-gradient(
          to bottom,
          transparent 50%,
          rgba(0, 0, 0, 0.5)
        ),
        url(${this.props.image});
      background-repeat: no-repeat;
      background-size: cover;
      min-height: 10rem;
      min-width: 20rem;
      border-radius: 0.5rem;
      position: relative;
    `;

    const Info = styled.div`
      color: white;
      position: absolute;
      height: 30%;
      width: calc(100% - 2rem);
      bottom: 0;
      padding: 1rem;
    `;

    const cities = this.props.cities.join(', ');

    return (
      <Container>
        <Info>
          <div>
            <FontAwesomeIcon icon="calendar-alt" />
            &nbsp;
            {this.props.date.getFullYear()}
          </div>
          <div>
            <FontAwesomeIcon icon="map-marked-alt" />
            &nbsp;
            {this.props.country}, {cities}
          </div>
        </Info>
      </Container>
    );
  }
}
