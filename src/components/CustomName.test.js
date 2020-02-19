import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CustomName from './CustomName';

afterEach(() => {
  cleanup();
  console.error.mockClear();
})


console.error= jest.fn();

test('<CustomName>', () => {
  const { debug, getByTestId } = render(<CustomName />);
  debug(); 
  const submit = getByTestId('submit')
  fireEvent.click(submit);
  expect(console.error).toBeCalled();
});

const joke = {
  joke: 'Chuck Norris is funny',
}

test('<CustomName> with joke', () => {
  const { getByTestId } = render(<CustomName joke = {joke}/>
    );
    const customizedJoke = getByTestId('customName-content');
    const submit = getByTestId('submit');
    fireEvent.click(submit);
    expect(customizedJoke.textContent).toBe('Chuck Norris is funny');
});

// const input = {
//   input: 'Mati Kos',
// }

// test('<CustomName> with valid input', () => {
//   const { debug, queryByTestId, getByTestId } = render(
//     <MemoryRouter>
//       <CustomName input = {input}/>
//     </MemoryRouter>,
//     );
//     debug();
//   const customizedJoke = queryByTestId('customName-content');
//   const submit = getByTestId('submit');
//   fireEvent.click(submit);
//   expect(customizedJoke).toBeTruthy();
// });

const onSubmit = jest.fn();

test('<CustomName> with searchJoke onClick', () => {
  const { getByTestId, getByPlaceholderText } = render (
    <CustomName searchJoke = {onSubmit} />,
  );
  // getByPlaceholderText('Full Name').value = 'Mati Kos';

  fireEvent.change(getByPlaceholderText('Full Name'), {
    target: { value: 'Mati Kos'}
  });
  const submit = getByTestId('submit');
  fireEvent.click(submit);
  expect(onSubmit).toHaveBeenCalledTimes(1);
  expect(onSubmit).toHaveBeenCalledWith({
    input: 'Mati Kos',
  });
})




