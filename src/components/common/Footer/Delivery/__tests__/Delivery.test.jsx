import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Delivery from '../index';

function setup(component) {
  return {
    user: userEvent.setup(),
    ...render(component),
  };
}

describe('Delivery component', () => {
  it('renders an order tab where order tracking can be checked', async () => {
    const { user, asFragment } = setup(<Delivery />);

    await user.click(screen.getByRole('button', { name: /order/i }));

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders a return tab where returns status can be checked', async () => {
    const { user, asFragment } = setup(<Delivery />);

    await user.click(screen.getByRole('button', { name: /return/i }));

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders a system build tab where build progress can be checked', async () => {
    const { user, asFragment } = setup(<Delivery />);

    await user.click(screen.getByRole('button', { name: /system/i }));

    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Delivery component text inputs', () => {
  it('correctly records user input', async () => {
    const { user } = setup(<Delivery />);
    const invoice = screen.getByLabelText(/invoice number/i);
    const postcode = screen.getByLabelText(/postcode/i);

    expect(invoice).toHaveValue('');
    expect(postcode).toHaveValue('');

    await user.type(invoice, '12345');
    await user.type(postcode, 'abcde');

    expect(invoice).toHaveValue('12345');
    expect(postcode).toHaveValue('abcde');
  });
});
