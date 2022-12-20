import userEvent from '@testing-library/user-event';
import { render, screen } from '../../../../../test-utils';
import EmailMyBasket from '../index';

function setup(component) {
  return {
    user: userEvent.setup(),
    ...render(component),
  };
}

describe('EmailMyBasket', () => {
  it('should correctly record user input', async () => {
    const { user } = setup(<EmailMyBasket />);
    const input = screen.getByRole('textbox');

    expect(input).toHaveValue('');

    await user.type(input, 'test@test.com');

    expect(input).toHaveValue('test@test.com');
  });

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
