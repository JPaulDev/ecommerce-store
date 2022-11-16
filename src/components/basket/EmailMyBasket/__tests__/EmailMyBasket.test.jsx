import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EmailMyBasket from '../index';

function setup(component) {
  return {
    user: userEvent.setup(),
    ...render(component),
  };
}

describe('EmailMyBasket component', () => {
  it('renders a widget that allows users to enter their email address', () => {
    const tree = renderer.create(<EmailMyBasket />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('EmailMyBasket component text input', () => {
  it('correctly records user input', async () => {
    const { user } = setup(<EmailMyBasket />);
    const input = screen.getByRole('textbox');

    expect(input).toHaveValue('');

    await user.type(input, 'test@test.com');

    expect(input).toHaveValue('test@test.com');
  });
});

describe('EmailMyBasket checkbox', () => {
  it('should be checked', async () => {
    const { user } = setup(<EmailMyBasket />);
    const checkbox = screen.getByRole('checkbox', {
      name: /also send me the latest offers/i,
    });

    expect(checkbox).not.toBeChecked();

    await user.click(checkbox);

    expect(checkbox).toBeChecked();
  });
});
