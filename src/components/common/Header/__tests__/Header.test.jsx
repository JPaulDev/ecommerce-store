import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from '../../../../../test-utils';
import SearchInput from '../index';

function setup(component) {
  return {
    user: userEvent.setup(),
    ...render(component),
  };
}

describe('SearchInput', () => {
  it('should correctly record user input', async () => {
    const { user } = setup(<SearchInput />);
    const input = screen.getByRole('searchbox');

    expect(input).toHaveValue('');

    await user.type(input, 'processors');

    expect(input).toHaveValue('processors');
  });
});
