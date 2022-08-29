import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Dropdown from '../index';

describe('components dropdown menu', () => {
  it('It renders correctly and all links/advertisements are present', () => {
    const tree = renderer.create(<Dropdown menu="Components" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('accessories dropdown menu', () => {
  it('It renders correctly and all links/advertisements are present', () => {
    const tree = renderer.create(<Dropdown menu="Accessories" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Dropdown component at a screen width of 925px and above', () => {
  it('shows advertisements in the dropdown', () => {
    window.resizeTo(925, 768);
    render(<Dropdown menu="Components" />);

    expect(screen.getAllByRole('img')).toHaveLength(3);
  });
});

describe('Dropdown component at a screen width of 924px and below', () => {
  it('hides advertisements in the dropdown', () => {
    window.resizeTo(924, 768);
    render(<Dropdown menu="Components" />);

    expect(screen.queryByRole('img')).toBeNull();
  });
});
