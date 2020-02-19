import React from 'react';
import { render, cleanup, fireEvent, getByTestId } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CustomName from './CustomName';

afterEach(() => {
  cleanup();
  console.error.mockClear();
})

console.error = jest.fn();

test('<CustomName />', () => {
  const { debug } = render('<CustomName />');
  debug();
})




