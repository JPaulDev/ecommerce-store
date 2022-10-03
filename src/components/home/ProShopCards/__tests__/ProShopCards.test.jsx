import renderer from 'react-test-renderer';
import ProShopCards from '../index';

describe('ProShopCards component', () => {
  it('renders 6 pro shop cards with links and shop descriptions', () => {
    const tree = renderer.create(<ProShopCards />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
