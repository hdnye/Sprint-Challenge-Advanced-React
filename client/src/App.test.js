import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import ReactDOM from 'react-dom';
import App from './App';
import SearchForm from './SearchForm';




test('renders without crashing', () => {
  render(<App />)
});

test('Players are listed', () => {
  const players = render(<App />);
  expect(players).getByText(/players/i);
});

describe('Search Form accepts input', () => {
  it('accepts input', () => {
    const component = render(<SearchForm />)
    const search = component.getByRole('search')
    const button = component.getByText('submit')
    expect(search).fireEvent.click(button)
  })
});

