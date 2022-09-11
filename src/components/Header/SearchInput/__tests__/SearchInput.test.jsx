import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchInput from '../index';

describe('SearchInput component text input', () => {
  it('correctly records user input', () => {
    render(<SearchInput />);
    const input = screen.getByRole('searchbox');

    expect(input).toHaveValue('');
    userEvent.type(input, 'processors');

    expect(input).toHaveValue('processors');
  });
});
