import { mount, shallow } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Info, PhotoItem } from './Card';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card />, div);
});

it('renders year', () => {
  const year = '2017';
  const date = new Date(Number.parseInt(year, 10), 1);
  const wrapper = shallow(<Card date={date} />);
  expect(wrapper.find('.year').text()).toEqual(year);
});

it('renders multiple cities', () => {
  const cities = ['city A', 'city B'];
  const wrapper = shallow(<Card cities={cities} />);
  expect(wrapper.find('.cities').text()).toEqual(cities.join(', '));
});

it('renders image', () => {
  const images = [
    'https://fakeimg.pl/350x200/',
    'https://fakeimg.pl/350x200/',
    'https://fakeimg.pl/350x200/',
    'https://fakeimg.pl/350x200/'
  ];
  const wrapper = mount(<Card images={images} />);
  expect(wrapper.find(PhotoItem)).toHaveLength(images.length);
});

it('renders text with black color in outer mode', () => {
  const inner = mount(<Card inner={true} />);
  expect(inner.find(Info)).toHaveStyleRule('color', 'white');

  const outer = mount(<Card inner={false} />);
  expect(outer.find(Info)).toHaveStyleRule('color', 'black');
});
