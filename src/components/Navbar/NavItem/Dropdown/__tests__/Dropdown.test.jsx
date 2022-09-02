import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Dropdown from '../index';

describe('Dropdown component', () => {
  it('renders the components menu with all links/advertisements present', () => {
    const tree = renderer.create(<Dropdown menu="Components" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the accessories menu with all links/advertisements present', () => {
    const tree = renderer.create(<Dropdown menu="Accessories" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Dropdown component at a screen width of 925px and above', () => {
  it('shows advertisements in the dropdown menu', () => {
    window.resizeTo(925, 768);
    render(<Dropdown menu="Components" />);

    expect(screen.getAllByRole('img')).toHaveLength(3);
  });
});

describe('Dropdown component at a screen width of 924px and below', () => {
  it('hides advertisements in the dropdown menu', () => {
    window.resizeTo(924, 768);
    render(<Dropdown menu="Components" />);

    expect(screen.queryByRole('img')).toBeNull();
  });
});
