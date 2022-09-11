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

describe('Dropdown component at different screen widths', () => {
  it('renders advertisements in the dropdown menu at 925px and above', () => {
    window.resizeTo(925, 768);
    render(<Dropdown menu="Components" />);

    expect(screen.getAllByRole('img')).toHaveLength(3);
  });

  it('does not render advertisements at 924px and below', () => {
    window.resizeTo(924, 768);
    render(<Dropdown menu="Components" />);

    expect(screen.queryByRole('img')).toBeNull();
  });
});
