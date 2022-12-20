import userEvent from '@testing-library/user-event';
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '../../../../../../test-utils';
import Delivery from '../index';

function setup(component) {
  return {
    user: userEvent.setup(),
    ...render(component),
  };
}

describe('Delivery', () => {
  it('should correctly record user input', async () => {
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

  it('should start with the order tab open by default', async () => {
    setup(<Delivery />);

    expect(screen.getByLabelText(/postcode/i)).toBeInTheDocument();
  });

  it('should change to the system tab on clicking the button', async () => {
    const { user } = setup(<Delivery />);
    const button = screen.getByRole('button', { name: /system/i });

    expect(screen.queryByLabelText(/build number/i)).not.toBeInTheDocument();

    await user.click(button);

    expect(screen.getByLabelText(/build number/i)).toBeInTheDocument();
  });

  it('should change to the return tab on clicking the button', async () => {
    const { user } = setup(<Delivery />);
    const button = screen.getByRole('button', { name: /return/i });

    expect(screen.queryByLabelText(/rma number/i)).not.toBeInTheDocument();

    await user.click(button);

    expect(screen.getByLabelText(/rma number/i)).toBeInTheDocument();
  });

  it('should open and close the delivery dropdown on clicking the button', async () => {
    window.resizeTo(500, 768);
    const { user } = setup(<Delivery />);
    const button = screen.getByRole('button');

    expect(screen.queryByRole('textbox')).not.toBeInTheDocument();

    await user.click(button);

    expect(screen.getAllByRole('textbox')).toHaveLength(2);

    // Delays the second click to prevent the menu improperly closing.
    setTimeout(() => user.click(button), 1000);

    await waitForElementToBeRemoved(screen.queryAllByRole('textbox'), {
      timeout: 3000,
    });
  });
});
