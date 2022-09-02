import { render, screen } from '@testing-library/react';
import Header from '../index';

beforeEach(() => {
  render(<Header />);
});

describe('Header component', () => {
  it('renders an image of the company logo', () => {
    const image = getImage();
    expect(image).toBeInTheDocument();
  });

  it('has the correct alt text', () => {
    const image = getImage();
    expect(image.alt).toMatch(/^pc-connect.co.uk$/i);
  });
});

function getImage() {
  return screen.getByRole('img', { name: /pc-connect.co.uk/i });
}
