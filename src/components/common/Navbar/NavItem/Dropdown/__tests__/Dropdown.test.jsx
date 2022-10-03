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
