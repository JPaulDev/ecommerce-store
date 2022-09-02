import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';
import SearchInput from '../index';

describe('SearchInput component', () => {
  it('correctly registers user input', () => {
    render(<SearchInput />);
    const input = screen.getByRole('searchbox');
    userEvent.type(input, 'processors');

    expect(input.value).toBe('processors');
  });

  it('renders a search input with a button and a search icon', () => {
    const tree = renderer.create(<SearchInput />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
