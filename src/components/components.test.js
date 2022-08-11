import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

import Home from './Home';
import Calculator from './Calculator';
import Navbar from './Navbar';
import Quote from './Quote';

it('renders correctly react-test-renderer', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly react-test-renderer', () => {
  const tree = renderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly react-test-renderer', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  <Router>
    const tree = renderer.create(
    <Navbar />
    ).toJSON(); expect(tree).toMatchSnapshot();
  </Router>;
});
