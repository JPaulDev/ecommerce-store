import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';
import SearchInput from '../index';

it('search input correctly registers user input', () => {
  render(<SearchInput />);
  const input = screen.getByRole('searchbox');
  userEvent.type(input, 'processors');

  expect(input.value).toBe('processors');
});

it('search input renders correctly', () => {
  const tree = renderer.create(<SearchInput />).toJSON();
  expect(tree).toMatchSnapshot();
});
