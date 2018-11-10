import * as React from 'react';
import styled, { css } from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DEFAULT_RADIUS: string = '0.7rem';

interface IInner {
  inner: boolean;
}

interface IRadius {
  radius: string;
}

interface IHeight {
  height: string;
}

interface IInfo extends IInner, IRadius {}

interface IImageItem extends IHeight {
  image: string;
}

interface IContainer extends IRadius, IHeight, IInner {}

export interface ICardProps extends IInner, IRadius, IHeight {
  cities: string[];
  country: string;
  date: Date;
  images: string[];
}

const Info = styled.div<IInfo>`
  height: 30%;
  padding: 0 1rem 0 1rem;
  color: ${props => (props.inner ? 'white' : 'black')};
  ${props =>
    props.inner &&
    css`
      position: absolute;
      width: calc(100% - 2rem);
      border-bottom-left-radius: ${props.radius};
      border-bottom-right-radius: ${props.radius};
      bottom: 0;
      background-image: linear-gradient(
        to bottom,
        transparent,
        rgba(0, 0, 0, 0.5)
      );
    `};
`;

Info.defaultProps = {
  radius: DEFAULT_RADIUS,
  inner: true
};

const Container = styled.div<IContainer>`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: ${props => props.height};
  border-radius: ${props => props.radius};
  overflow: hidden;
  position: relative;
`;

const PhotoItem = styled.div<IImageItem>`
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  flex: 1 1 ${props => props.height};
  margin: 1px;
`;

export default class ICard extends React.Component<ICardProps> {
  public static defaultProps: Partial<ICardProps> = {
    cities: ['Athens', 'Santorini'],
    country: 'Greece',
    date: new Date(),
    inner: true,
    height: '10rem',
    radius: DEFAULT_RADIUS
  };

  constructor(props: ICardProps) {
    super(props);

    this.state = {};
  }

  private renderImages() {
    return this.props.images.map((image, index, arr) => {
      let height = this.props.height;
      if (arr.length >= 4) {
        height = `calc(${this.props.height} / ${index === 3 ? 5 : 2} - 2px)`;
      }
      return (
        <PhotoItem key={index} height={height} image={image}>
          {' '}
        </PhotoItem>
      );
    });
  }

  public render() {
    const Outer = styled.div`
      position: relative;
      min-width: 20rem;
      min-height: 10rem;
    `;

    const cities = this.props.cities.join(', ');

    return (
      <Outer>
        <Container
          radius={this.props.radius}
          height={this.props.height}
          inner={this.props.inner}
        >
          {this.renderImages()}
        </Container>
        <Info radius={this.props.radius} inner={this.props.inner}>
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
      </Outer>
    );
  }
}
