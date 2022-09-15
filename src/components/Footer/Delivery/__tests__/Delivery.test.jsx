import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import Delivery from '../index';

describe('Delivery component', () => {
  it('renders an order tab where order tracking can be checked', () => {
    const tree = renderer.create(<Delivery />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders a return tab where returns status can be tracked', () => {
    const component = renderer.create(<Delivery />);

    act(() => {
      component.root.findAllByType('button')[1].props.onClick();
    });

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders a system build tab where build progress can be tracked', () => {
    const component = renderer.create(<Delivery />);

    act(() => {
      component.root.findAllByType('button')[2].props.onClick();
    });

    expect(component.toJSON()).toMatchSnapshot();
  });
});

describe('Delivery component text inputs', () => {
  it('correctly records user input', () => {
    render(<Delivery />);
    const invoice = screen.getByLabelText(/invoice number/i);
    const postcode = screen.getByLabelText(/postcode/i);

    userEvent.type(invoice, '12345');
    userEvent.type(postcode, 'ABCDE');

    expect(invoice).toHaveValue('12345');
    expect(postcode).toHaveValue('ABCDE');
  });
});
