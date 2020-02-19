import React from 'react';
import { render, cleanup, fireEvent, getByTestId } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Joke from './Joke';

afterEach(() => {
  cleanup();
  console.error.mockClear();
})

console.error = jest.fn();

test('<Joke />', () =>{
  render(<Joke />);
  expect(console.error).toHaveBeenCalled();
})

const joke = {
  joke: 'Chuck Norris is funny',
}

test('<Joke /> with joke', () => {
  const { debug } = render(
  <MemoryRouter>
    <Joke joke = {joke}/>
  </MemoryRouter>,
  );
  debug();
})



