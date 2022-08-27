import { render, screen } from '@testing-library/react';
import Header from '../index';

beforeEach(() => {
  render(<Header />);
});

it('renders an image of the company logo', () => {
  const image = screen.getByRole('img', {
    name: /pc-connect.co.uk/i,
  });

  expect(image).toBeInTheDocument();
});

it('has the correct alt text', () => {
  const image = screen.getByRole('img', {
    name: /pc-connect.co.uk/i,
  });

  expect(image.alt).toMatch(/^pc-connect.co.uk$/i);
});
