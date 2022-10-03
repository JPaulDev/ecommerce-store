import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Delivery from '../index';

describe('Delivery component', () => {
  it('renders an order tab where order tracking can be checked', () => {
    const { asFragment } = render(<Delivery />);
    const button = screen.getByRole('button', {
      name: /order/i,
    });

    userEvent.click(button);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders a return tab where returns status can be checked', () => {
    const { asFragment } = render(<Delivery />);
    const button = screen.getByRole('button', {
      name: /return/i,
    });

    userEvent.click(button);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders a system build tab where build progress can be checked', () => {
    const { asFragment } = render(<Delivery />);
    const button = screen.getByRole('button', {
      name: /system/i,
    });

    userEvent.click(button);

    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Delivery component text inputs', () => {
  it('correctly records user input', () => {
    render(<Delivery />);
    const invoice = screen.getByLabelText(/invoice number/i);
    const postcode = screen.getByLabelText(/postcode/i);

    expect(invoice).toHaveValue('');
    expect(postcode).toHaveValue('');

    userEvent.type(invoice, '12345');
    userEvent.type(postcode, 'abcde');

    expect(invoice).toHaveValue('12345');
    expect(postcode).toHaveValue('abcde');
  });
});
