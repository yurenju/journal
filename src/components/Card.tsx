import * as React from 'react';
import styled from 'styled-components';

export interface ICardProps {
  image: string;
  date: Date;
  country: string;
  cities: Array<string>;
}

export interface ICardState {}

export default class ICard extends React.Component<ICardProps, ICardState> {
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

    return (
      <Container>
        <Info>Hi</Info>
      </Container>
    );
  }
}
