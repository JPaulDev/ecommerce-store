import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EmailMyBasket from '../index';

describe('EmailMyBasket component', () => {
  it('renders a widget that allows users to enter their email address', () => {
    const tree = renderer.create(<EmailMyBasket />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('EmailMyBasket component text input', () => {
  it('correctly records user input', () => {
    render(<EmailMyBasket />);
    const input = screen.getByRole('textbox');

    expect(input).toHaveValue('');

    userEvent.type(input, 'test@test.com');

    expect(input).toHaveValue('test@test.com');
  });
});

describe('EmailMyBasket checkbox', () => {
  it('should be checked', () => {
    render(<EmailMyBasket />);
    const checkbox = screen.getByRole('checkbox', {
      name: /also send me the latest offers/i,
    });

    expect(checkbox).not.toBeChecked();

    userEvent.click(checkbox);

    expect(checkbox).toBeChecked();
  });
});
