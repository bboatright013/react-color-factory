import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import App from './App';

it('Smoke Test', () => {
  
  render(
  <MemoryRouter>
    <App />
  </MemoryRouter>
    );
});

it('Snapshot:', () => {
  const {asFragment} = 
  render(
    <MemoryRouter>
    <App />
  </MemoryRouter>  
  );
  expect(asFragment).toMatchSnapshot();

});

it('add a color', function() {
  const { getByText, container } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  const addColorButton = getByText("Add a Color");
  expect(addColorButton).toBeInTheDocument();

  fireEvent.click(addColorButton);

  const submitButton = getByText("Submit");
  const input = container.querySelector(".NewColor input");

  fireEvent.change(input, { target: { value: 'black' } });

  expect(submitButton).toBeInTheDocument();

  fireEvent.click(submitButton);

  const addedColor = getByText("black");
  expect(addedColor).toBeInTheDocument();


});